import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { collection, getDocs } from "firebase/firestore";
import { Timestamp } from "firebase/firestore/lite";
import { db } from "@/config/firebase/firebase";

export type CityData = {
  id: string;
  city: string;
  time: Date;
  temperature: number;
  relativeHumidity: number | undefined;
};

export const useFavoriteCities = () => {
  const [cities, setCities] = useState<any[]>([]);
  const { currentUser } = useAuth();

  const getFavouriteCities = useCallback(async () => {
    if (!currentUser?.uid) return;

    try {
      const collectionRef = collection(
        db,
        "users",
        currentUser.uid,
        "favouriteCities"
      );
      const collectionSnap = await getDocs(collectionRef);

      // Extract the detailed city information from the documents
      const citiesArray = collectionSnap.docs.map((doc) => {
        const { current } = doc.data();
        return {
          id: doc.id,
          city: current.city,
          time: new Timestamp(
            current.time.seconds,
            current.time.nanoseconds
          ).toDate(),
          temperature: current.temperature,
          relativeHumidity: current.relativeHumidity,
        } as CityData;
      });
      setCities(citiesArray);
      console.log(citiesArray);
    } catch (error) {
      console.error("Error fetching favourite cities:", error);
      // Optionally handle the error by setting an error state or displaying a message
    }
  }, [currentUser?.uid]);

  useEffect(() => {
    getFavouriteCities();
  }, [getFavouriteCities]);

  return cities as CityData[];
};
