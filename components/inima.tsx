"use client";
import { db } from "@/config/firebase/firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { CityData } from "./favcities";

const ButonInima = ({
  city,
  isAdded,
  favoriteCityId,
}: {
  city: Omit<CityData, "id">;
  isAdded: boolean;
  favoriteCityId?: string;
}) => {
  const [inima, setInima] = useState(isAdded);
  useEffect(() => {
    setInima(isAdded);
  }, [isAdded]);
  const { currentUser } = useAuth();

  const handleAddFavouriteToDb = async () => {
    if (!currentUser?.uid) {
      throw new Error("User is not authenticated or UID is missing.");
    }
    if (inima && favoriteCityId) {
      const favouriteCityDocRef = doc(
        db,
        "users",
        currentUser.uid,
        "favouriteCities",
        favoriteCityId
      );

      await deleteDoc(favouriteCityDocRef);
    } else {
      const favouriteCitiesRef = collection(
        db,
        "users",
        currentUser.uid,
        "favouriteCities"
      );
      await addDoc(favouriteCitiesRef, {
        current: city,
      });
    }
  };

  return (
    <button
      onClick={handleAddFavouriteToDb}
      className="absolute items-center justify-center bottom-1 right-1 w-8 h-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className={inima ? "fill-red-600 text-red-600" : "fill-none text-white"}
        onClick={() => setInima(!inima)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  );
};

export default ButonInima;
