// import {
//   fetchWeatherDataFile,
//   fetchWeatherDataLocation,
// } from "@/utils/fetchWeather";
import Link from "next/link";

export default async function Home() {
  // const data = await fetchWeatherDataLocation(44.4268, 26.1025);
  // await fetchWeatherDataFile();
  return (
    <div className="flex flex-col items-center justify-center mx-auto p-10 gap-5">
      <div className="text-[32px] lg:text-[48px] font-semibold items-center justify-start flex mb-5 ">
        <img src="/cloudyday.svg" />
        <Link href="/dashboard">MeteoRO</Link>
        <img src="/cloudynight.svg" />
      </div>
      <p className="text-[20px] font-semibold">Bine ai venit pe MeteoRomânia</p>
      <p className="text-[16px] max-w-[90%] mx-auto">
        Sursa ta pentru prognoze meteo precise în toate orașele din România.
        Află rapid cum va fi vremea în localitatea ta, cu actualizări în timp
        real. Personalizează-ți profilul salvând orașele favorite. Fii mereu
        pregătit, oriunde te-ai afla!
      </p>
      <a href="/auth">
        <button className="flex border border-b-4 px-6 py-4 mt-7 items-center justify-center rounded-lg hover:border-b-[#3768da] font-semibold mx-auto bg-gradient-to-r from-[#63b1c9] to-[#4676e6] text-white">
          Descoperă vremea
        </button>
      </a>
    </div>
  );
}
