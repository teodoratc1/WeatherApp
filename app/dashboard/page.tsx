import ButonInima from "@/components/inima";
import { fetchWeatherDataFile } from "@/utils/fetchWeather";
import { CaruselCasuta } from "./cardcarusel";
import Cards from "@/components/card";

export const revalidate = 600;

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query?.trim().toLocaleLowerCase() || "";
  let data = await fetchWeatherDataFile();

  if (query) {
    data = data.filter((current) =>
      current?.city.toLocaleLowerCase().includes(query)
    );
  }

  return (
    <div className="lg:pt-10 lg:max-w-[90%] mx-auto max-w-[85%]">
      {/* <h2 className="mt-5 md:text-[26px] text-[22px] lg:text-[36px] font-900 mb-10 font-semibold items-center justify-center flex">
        <img src="/cloudyday.svg" />
        Meteo Romania
        <img src="/cloudynight.svg" />
      </h2> */}

      <CaruselCasuta />

      <Cards data={data} />
    </div>
  );
};

export default Page;
