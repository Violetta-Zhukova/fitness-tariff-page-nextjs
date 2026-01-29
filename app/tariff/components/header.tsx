"use client";
import {
  formatTime,
  totalTimeTimer,
  warningTimeTimer,
} from "@/app/utils/tariffUtils";
import { FC, useEffect, useState } from "react";

type THeaderProps = {
  onTimerEnd?: (isFinished: boolean) => void;
};

export const Header: FC<THeaderProps> = ({ onTimerEnd }) => {
  const [timeLeft, setTimeLeft] = useState(totalTimeTimer);
  const [isBlinking, setIsBlinking] = useState(false);

  const isWarning = timeLeft <= warningTimeTimer && timeLeft > 0;
  const isFinished = timeLeft <= 0;

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimerEnd?.(true);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimerEnd]);

  useEffect(() => {
    if (!isWarning) return;

    const blinkId = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(blinkId);
      setIsBlinking(false);
    };
  }, [isWarning]);

  const timerColor = isFinished
    ? "text-white fill-white"
    : isWarning
      ? "text-[#FF4E4E] fill-[#FF4E4E]"
      : "text-[#FFBB00] fill-[#FFBB00]";

  const blinkClass = isBlinking ? "opacity-50" : "opacity-100";

  return (
    <header className="bg-[#1d5b43] w-full flex flex-col gap-1 justify-center items-center py-2 px-[29.5px] xs:px-[19.5px] 3xl:rounded-t-2xl ">
      <h2 className="text-sm xs:text-lg 3xl:text-2xl font-semibold">
        Успейте открыть пробную неделю
      </h2>
      <div className="flex justify-center items-center gap-2">
        <svg
          className={`h-3.5 w-3.5 shrink-0 ${blinkClass} `}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99781 0.463683C5.22659 -0.154582 6.10105 -0.15458 6.32983 0.463685L7.44113 3.46694C7.51306 3.66132 7.66632 3.81458 7.8607 3.8865L10.864 4.99781C11.4822 5.22659 11.4822 6.10105 10.864 6.32983L7.8607 7.44113C7.66632 7.51306 7.51306 7.66632 7.44113 7.8607L6.32983 10.864C6.10105 11.4822 5.22659 11.4822 4.99781 10.864L3.8865 7.8607C3.81458 7.66632 3.66132 7.51306 3.46694 7.44113L0.463683 6.32983C-0.154582 6.10105 -0.15458 5.22659 0.463685 4.99781L3.46694 3.8865C3.66132 3.81458 3.81458 3.66132 3.8865 3.46694L4.99781 0.463683Z"
            className={`${timerColor}`}
          />
        </svg>

        <p
          className={`font-bold font-raleway tabular-nums text-[28px] leading-8 xs:text-[32px] xs:leading-9 3xl:text-[40px] 3xl:leading-11  ${timerColor} ${blinkClass}`}
        >
          {formatTime(timeLeft)}
        </p>
        <svg
          className={`h-3.5 w-3.5 shrink-0 ${blinkClass}`}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99781 0.463683C5.22659 -0.154582 6.10105 -0.15458 6.32983 0.463685L7.44113 3.46694C7.51306 3.66132 7.66632 3.81458 7.8607 3.8865L10.864 4.99781C11.4822 5.22659 11.4822 6.10105 10.864 6.32983L7.8607 7.44113C7.66632 7.51306 7.51306 7.66632 7.44113 7.8607L6.32983 10.864C6.10105 11.4822 5.22659 11.4822 4.99781 10.864L3.8865 7.8607C3.81458 7.66632 3.66132 7.51306 3.46694 7.44113L0.463683 6.32983C-0.154582 6.10105 -0.15458 5.22659 0.463685 4.99781L3.46694 3.8865C3.66132 3.81458 3.81458 3.66132 3.8865 3.46694L4.99781 0.463683Z"
            className={`${timerColor}`}
          />
        </svg>
      </div>
    </header>
  );
};
