"use client";
import { CityData, useFavoriteCities } from "./favcities";
import ButonInima from "./inima";

export default function Cards({ data }: { data: Omit<CityData, "id">[] }) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const favoriteCities =  useFavoriteCities()
  const favoriteCitiesSet = new Set(
    favoriteCities.map((city) => city.city)
  );
  return (
    <div className="grid md:grid-cols-2 gap-7 ">
      {data?.map((current) => {
        const isAdded = favoriteCitiesSet.has(current.city);
        const favoriteCityId = favoriteCities.find(city => city.city === current.city)
        const formattedDate = formatter.format(current.time.getTime());
        return (
          <div
            key={current.city}
            className="bg-[#1f8ecc] border text-white px-4 py-3 rounded grid grid-cols-2 shadow-lg relative"
          >
            <ButonInima city={current} isAdded={isAdded} favoriteCityId={favoriteCityId?.id}/>
            <div className="flex flex-col p-2">
              <h2 className="text-[22px] font-semibold"> {current.city}</h2>
              <div className="ml-3 text-[20px]">{current.temperature}°C</div>
              <div className="mb-2 ">
                Umiditate: {current.relativeHumidity}%
              </div>
              <div className="text-[14px]">Data: {formattedDate}</div>
            </div>
            <div className="flex items-baseline justify-end ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                className="w-fit"
              >
                <path
                  fill="#fafafa"
                  d="m89.738 17.398 3.898.84-2.67 12.39-3.897-.84zM69.905 18.72l3.86 12.066L69.968 32l-3.86-12.066zM49.597 31.053l9.345 8.512-2.685 2.948L46.912 34zM109.043 83.388l9.344 8.516-2.686 2.948-9.344-8.516zM115.669 67.396l12.33 2.684-.847 3.896-12.331-2.685zM125.461 46.352l1.222 3.795-12.018 3.868-1.221-3.795zM111.463 27.07l2.959 2.672-8.477 9.39-2.959-2.671z"
                />
                <g>
                  <path
                    fill="#fafafa"
                    d="m94.486 89.054-1.66-3.625c8.743-4.007 14.393-12.83 14.393-22.479 0-13.613-11.025-24.689-24.576-24.689-7.85 0-15.042 3.637-19.736 9.977l-3.204-2.372c5.373-7.259 13.948-11.592 22.94-11.592 15.75 0 28.563 12.864 28.563 28.675-.001 11.202-6.562 21.45-16.72 26.105z"
                  />
                </g>
                <g>
                  <path
                    fill="#fafafa"
                    d="M94.466 110.599H18.497C8.297 110.599 0 102.268 0 92.026c0-8.853 6.187-16.372 14.651-18.163.79-15.372 13.498-27.636 29.005-27.636 13.713 0 25.557 9.76 28.391 23.031a20.04 20.04 0 0 1 3.376-.292c11.263 0 20.426 9.2 20.426 20.508 0 .154-.002.309-.006.466 4.646 1.07 8.047 5.207 8.049 10.187 0 5.433-4.141 9.911-9.42 10.424l-.006.048zm-3.214-4.161 1.667.145c.181.016.36.03.542.03 3.554 0 6.445-2.909 6.445-6.485-.002-3.522-2.745-6.363-6.246-6.468l-2.174-.064.254-2.159c.082-.705.122-1.347.122-1.962 0-9.109-7.374-16.521-16.438-16.521-1.462 0-2.955.211-4.439.628l-2.205.618-.31-2.269C66.78 59.55 56.112 50.214 43.657 50.214c-13.817 0-25.058 11.29-25.058 25.167l.005 1.961-1.767.202c-7.326.838-12.85 7.064-12.85 14.482 0 8.042 6.509 14.586 14.51 14.586h72.709l.046-.174z"
                  />
                </g>
                <g>
                  <path
                    fill="#fafafa"
                    d="m27.898 76.656-3.987-.014c.042-11.621 9.494-21.077 21.071-21.077v3.987c-9.386.001-17.05 7.674-17.084 17.104z"
                  />
                </g>
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
