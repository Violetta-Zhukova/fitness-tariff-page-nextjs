"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { TTariffProps } from "../../types/tariff";
import { BestTariff } from ".././components/bestTariff";
import { TariffCards } from ".././components/tariffCards";
import { Header } from ".././components/header";

type TTariffPageClientProps = {
  tariffs: TTariffProps[];
};

export const TariffPageClient: FC<TTariffPageClientProps> = ({ tariffs }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDiscount, setIsDiscount] = useState(true);
  const [currentTariff, setCurrentTariff] = useState("");
  const [showCheckboxError, setShowCheckboxError] = useState(false);

  const bestTariff = tariffs.find((tarif) => tarif.is_best);

  const otherTariffs = tariffs
    .filter((tarif) => !tarif.is_best)
    .sort((a, b) => b.full_price - a.full_price);

  function handleSelectTariff(tariffId: string) {
    setCurrentTariff(tariffId);
  }

  function handlePurchase() {
    if (!isChecked) {
      setShowCheckboxError(true);
      return;
    }
    console.log("Выбрали тариф:", currentTariff);
    setIsChecked(false);
    setCurrentTariff("");
    setIsDiscount(true);
  }

  function handleTimerEnd(isFinished: boolean) {
    if (isFinished) {
      setIsDiscount(false);
    }
  }

  return (
    <>
      <Header onTimerEnd={handleTimerEnd} />
      <main className="flex flex-col justify-center gap-5 3xl:gap-16.5 items-start px-4 py-5 xs:pb-7.5 3xl:px-88 3xl:pt-12.5 3xl:pb-37.5">
        <p className="font-bold text-[22px] leading-6 xs:text-2xl xs:leading-6.5 3xl:text-[40px] 3xl:leading-11">
          Выбери подходящий для&nbsp;себя{" "}
          <span className="text-[#FDB056]">тариф</span>
        </p>
        <div className="flex flex-col 3xl:flex-row 3xl:gap-21.75 3xl:mt-11 items-center justify-center ">
          <Image
            className="block w-[99.28px] h-50 mt-1 xs:mt-0 xs:w-31 xs:h-62.5 3xl:w-95.25 3xl:h-191.75 md:shrink-0"
            width={381}
            height={767}
            src="/man-image.png"
            alt={"Фото спортсмена"}
          />

          <div className="grid grid-cols-1 gap-1.5 xs:gap-2 3xl:gap-3.5 justify-center items-start 3xl:max-w-187">
            {bestTariff && (
              <BestTariff
                bestTariff={bestTariff}
                isDiscount={isDiscount}
                onClick={handleSelectTariff}
                selectedTariffId={currentTariff}
              />
            )}

            <TariffCards
              tariffs={otherTariffs}
              isDiscount={isDiscount}
              onClick={handleSelectTariff}
              selectedTariffId={currentTariff}
            />

            <div className="mt-1 3xl:mt-3 flex flex-row gap-1.5 3xl:gap-2 max-w-124.75 font-medium rounded-2xl  xs:rounded-[20px] bg-[#2D3233] ps-3 pe-7 py-3.5 3xl:px-5 3xl:py-4.5">
              <svg
                className="h-6.5 w-6 shrink-0"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8775 16.6437C10.8869 17.2578 11.3885 17.75 12.0025 17.75C12.6166 17.75 13.1181 17.2531 13.1275 16.6437L13.5025 6.5375C13.526 6.15313 13.3853 5.77813 13.1135 5.4875C12.8228 5.17813 12.4197 5 12.0025 5C11.5853 5 11.1822 5.17813 10.8916 5.4875C10.6197 5.77813 10.4791 6.15313 10.5025 6.5375L10.8775 16.6437Z"
                  fill="#FDB056"
                />
                <path
                  d="M12 23C12.8284 23 13.5 22.3284 13.5 21.5C13.5 20.6716 12.8284 20 12 20C11.1716 20 10.5 20.6716 10.5 21.5C10.5 22.3284 11.1716 23 12 23Z"
                  fill="#FDB056"
                />
              </svg>
              <p className="text-white font-normal text-xs 3xl:text-[16px] 3xl:leading-5">
                Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
                результат, чем за 1 месяц
              </p>
            </div>

            <form className="mt-2.5 xs:mt-4 3xl:mt-5 max-w-162.25 w-fit flex flex-row gap-2.5 justify-start items-start ">
              <div>
                <input
                  type="checkbox"
                  id="oferta"
                  checked={isChecked}
                  onChange={(e) => {
                    setIsChecked(e.target.checked);
                    setShowCheckboxError(false);
                  }}
                  className="cursor-pointer absolute w-7.5 h-7.5 opacity-0 z-10"
                />
                <div
                  className={`relative flex items-center justify-center shrink-0 w-7.5 h-7.5 bg-transparent  rounded-xs ${showCheckboxError ? "border-2 border-[#FD5656] " : "border-2 border-[#606566]"} `}
                >
                  {isChecked && (
                    <div className="w-5 h-3.5 bg-[url('/check.svg')] bg-center bg-contain bg-no-repeat" />
                  )}
                </div>
              </div>

              <label
                htmlFor="oferta"
                className="text-[#CDCDCD] text-xs leading-3.5 font-normal 3xl:text-base"
              >
                Я согласен с{" "}
                <Link href="/oferta" className="underline underline-offset-2">
                  офертой рекуррентных платежей
                </Link>{" "}
                и{" "}
                <Link href="/policy" className="underline underline-offset-2">
                  Политикой конфиденциальности
                </Link>
              </label>
            </form>

            <button
              onClick={handlePurchase}
              type="button"
              className="bg-[#FDB056] text-lg font-bold text-[#191E1F] rounded-[20px] py-3.5 xs:py-4.5 px-27.25 w-full max-w-88 mt-2.5 xs:mt-3 3xl:mt-1.5 cursor-pointer transition-all duration-300 animate-button-pulse"
            >
              Купить
            </button>

            <p className="w-full mt-1 xs:mt-3 3xl:mt-0 text-[#9B9B9B] text-[10px] leading-3 3xl:text-sm 3xl:leading-[16.8px]">
              Нажимая кнопку «Купить», Пользователь соглашается на разовое
              списание денежных средств для получения пожизненного доступа к
              приложению. Пользователь соглашается, что данные
              кредитной/дебетовой карты будут сохранены для осуществления
              покупок дополнительных услуг сервиса в случае желания
              пользователя.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-2.5 3xl:gap-7.5 p-3 3xl:p-5 border rounded-[20px] 3xl:rounded-[30px] border-[#484D4E] border-solid w-full max-w-304">
          <p className="text-[#81FE95] font-medium text-base xs:text-lg 3xl:text-[28px] 3xl:leading-8 border rounded-3xl border-[#81FE95] border-solid bg-[#2D3233] pt-2 pb-2 px-4 3xl:px-7.5 3xl:pt-4 3xl:pb-4.5">
            гарантия возврата 30 дней
          </p>
          <p className="text-[#DCDCDC] font-normal leading-4.25 text-[13px] xs:text-sm xs:leading-4.5 3xl:text-2xl 3xl:leading-8">
            Мы уверены, что наш план сработает для тебя и ты увидишь видимые
            результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
            деньги в течение 30 дней с момента покупки, если ты не получишь
            видимых результатов.
          </p>
        </div>
      </main>
    </>
  );
};
