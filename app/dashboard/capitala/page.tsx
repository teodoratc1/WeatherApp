import { fetchWeatherDataLocation1 } from "@/utils/fetchWeather";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carusel";

export default async function Capitala() {
  const weatherData = await fetchWeatherDataLocation1();
  console.log("WeatherData", weatherData.daily);
  return (
    <div className="lg:pt-10 w-full max-w-7xl mx-auto">
      <h2 className="md:text-[26px] text-[22px] mb-4 font-semibold">
        Capitala Romaniei
      </h2>
      <div className="border px-4 py-3 rounded mb-7">
        <h2>Iata care este vremea in urmatoarele 7 zile</h2>
      </div>
      <Carousel
        className="max-w-lg sm:mx-auto mx-12"
        opts={{ loop: true, align: "start" }}
      >
        <CarouselContent className="-ml-4">
          {weatherData.daily.day.map((day, index) => {
            const formatter = new Intl.DateTimeFormat("en-US", {
              weekday: "long",
            });
            const formattedDate = formatter.format(day);
            return (
              <CarouselItem
                key={index}
                className="flex  md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className=" text-white rounded bg-[#1f8ecc] w-full p-2">
                  <div>{formattedDate}</div>
                  <div className="text-[22px] font-semibold">
                    {weatherData.daily.temperature2mMax[index].toFixed(1)}
                  </div>
                  <div>
                    Temperatura min:{" "}
                    {weatherData.daily.temperature2mMin[index].toFixed(0)}
                  </div>
                  <div>
                    Puterea vantului:{" "}
                    {weatherData.daily.windSpeed10mMax[index].toFixed(0)}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <div className="grid grid-cols-2">
        {data.map((current) => {
          const formatter = new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          });
          const formattedTime = formatter.format(current.time.getTime());
          return (
            <div key={current.city} className="bg-[#1f8ecc] border text-white">
              <h2>
                Weather in: {current.city}
                <div className="text-[20px]">{current.temperature}</div>
                <div>{current.relativeHumidity}</div>
                <div>Updated last:{formattedTime}</div>
              </h2>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
