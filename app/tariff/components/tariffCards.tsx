import { TTariffProps } from "@/app/types/tariff";
import { calculateDiscount } from "@/app/utils/tariffUtils";
import { FC } from "react";

type TTariffCardsProps = {
  tariffs: TTariffProps[];
  isDiscount: boolean;
  onClick: (tariffId: string) => void;
  selectedTariffId: string;
};

export const TariffCards: FC<TTariffCardsProps> = ({
  tariffs,
  isDiscount,
  onClick,
  selectedTariffId,
}) => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 3xl:grid-cols-3 3xl:grid-rows-1 auto-rows-fr h-full gap-1.5 xs:gap-2 3xl:gap-3.5 justify-center items-start">
      {tariffs.map((tarif) => {
        const discount = calculateDiscount(tarif.price, tarif.full_price);
        const isSelected = tarif.id === selectedTariffId;

        return (
          <div
            onClick={() => onClick(tarif.id)}
            key={tarif.id}
            className={`relative grid grid-cols-2 grid-rows-1 3xl:grid-rows-[auto_auto] 3xl:grid-cols-1  h-full justify-center items-center gap-7 xs:gap-12.5 3xl:gap-11 rounded-[20px] 3xl:rounded-[40px] p-4.75 xs:py-4.5 xs:pe-5.5 xs:ps-7 3xl:pb-5.5 3xl:pt-17.5 3xl:px-4.5 cursor-pointer hover:border-[#81FE95] transition-all duration-300 ease-in-out ${isSelected ? "bg-[#81FE95]/15 border-2 border-[#81FE95] scale-102 shadow-lg shadow-[#81FE95]/20" : "bg-[#313637] border-2 border-[#484D4E]"}`}
          >
            <div
              className={`absolute flex items-center justify-center px-1.5 py-0.75 3xl:px-2 3xl:py-1.25 content-[''] -top-0.5 left-54 xs:left-65.5 3xl:left-12.75 w-10.5 h-5.75 xs:w-12 xs:h-6.75 3xl:w-16.5 3xl:h-9.75 rounded-b-lg font-gilroy text-[13px] xs:text-base xs:leading-[20.8px] 3xl:text-[22px] 3xl:leading-[28.6px] leading-4 font-medium text-white bg-[#FD5656] z-10 transition-all duration-500 ease-in-out ${isDiscount ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              -{discount}%
            </div>

            <div className="flex flex-col items-start 3xl:items-center gap-3 xs:gap-4 3xl:gap-7.5">
              <h3 className="font-medium leading-none xs:text-lg  3xl:text-[26px]">
                {tarif.period}
              </h3>
              <div className="flex flex-col justify-center items-end">
                <p className="font-semibold leading-none text-3xl xs:text-[34px]  3xl:text-[50px]">
                  {isDiscount ? tarif.price : tarif.full_price}&nbsp;₽
                </p>
                <p
                  className={`text-[#919191] font-normal  text-sm xs:text-base 3xl:text-2xl line-through transition-all duration-500 ease-in-out ${
                    isDiscount ? "opacity-100 " : "opacity-0 "
                  }`}
                >
                  {tarif.full_price}&nbsp;₽
                </p>
              </div>
            </div>
            <p className="font-normal text-sm 3xl:text-base ">{tarif.text}</p>
          </div>
        );
      })}
    </div>
  );
};
