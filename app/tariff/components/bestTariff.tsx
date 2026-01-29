import { TTariffProps } from "@/app/types/tariff";
import { calculateDiscount } from "@/app/utils/tariffUtils";
import { FC } from "react";

type TBestTariffProps = {
  bestTariff: TTariffProps;
  isDiscount: boolean;
  onClick: (tariffId: string) => void;
  selectedTariffId: string;
};

export const BestTariff: FC<TBestTariffProps> = ({
  bestTariff,
  isDiscount,
  onClick,
  selectedTariffId,
}) => {
  const discount = calculateDiscount(bestTariff.price, bestTariff.full_price);
  const isSelected = bestTariff.id === selectedTariffId;

  return (
    <div className="relative">
      <div
        className={`absolute flex items-center justify-center px-1.5 py-0.75 3xl:px-2 3xl:py-1.25 content-[''] top-0 left-49 xs:left-58.25 3xl:left-12.5 w-10.5 h-5.75 xs:w-12 xs:h-6.75 3xl:w-16.5 3xl:h-9.75 rounded-b-lg font-gilroy text-[13px] xs:text-base xs:leading-[20.8px] 3xl:text-[22px] 3xl:leading-[28.6px] leading-4 font-medium text-white bg-[#FD5656] z-10 transition-all duration-500 ease-in-out ${
          isSelected && "-translate-y-0.5"
        } ${isDiscount ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        -{discount}%
      </div>

      <div
        onClick={() => {
          onClick(bestTariff.id);
        }}
        className={`flex flex-row justify-center items-center gap-7.5 xs:gap-12.5 3xl:gap-10   rounded-[20px] 3xl:rounded-[34px] p-5 xs:py-5 xs:px-7.5 3xl:pb-7.5 3xl:pt-8.5 3xl:ps-30.5 3xl:pe-20 relative after:absolute after:content-['хит!'] after:text-[#FDB056] after:font-medium after:text-[13px] after:leading-4 after:xs:text-base after:3xl:text-[22px] after:3xl:leading-7 after:tracking-wide after:top-1.5 after:3xl:top-2.5 after:3xl:right-5 after:right-3.5 cursor-pointer hover:border-[#81FE95] transition-all duration-300 ease-in-out ${isSelected ? "bg-[#81FE95]/15 border-2 border-[#81FE95] scale-102 shadow-lg shadow-[#81FE95]/20" : "border-2 border-[#FDB056] bg-[#313637]"}`}
      >
        <div className="flex flex-col items-start 3xl:items-center gap-3 xs:gap-4">
          <h3 className="font-medium xs:text-lg 3xl:text-[26px]">
            {bestTariff.period}
          </h3>
          <div className="flex flex-col items-end">
            <p className="font-semibold text-[#FDB056] text-3xl xs:text-[34px] 3xl:text-[50px] transition-all duration-500 ease-in-out">
              {isDiscount ? bestTariff.price : bestTariff.full_price}&nbsp;₽
            </p>
            <p
              className={`text-[#919191] font-normal text-sm xs:text-base 3xl:text-2xl line-through transition-all duration-500 ease-in-out ${isDiscount ? "opacity-100 max-h-10" : "opacity-0 max-h-0 overflow-hidden"}`}
            >
              {bestTariff.full_price}&nbsp;₽
            </p>
          </div>
        </div>
        <p className="font-normal text-sm 3xl:text-base">{bestTariff.text}</p>
      </div>
    </div>
  );
};
