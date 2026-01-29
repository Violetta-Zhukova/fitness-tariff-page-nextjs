export const totalTimeTimer = 120;

export const warningTimeTimer = 30;

export function calculateDiscount(price: number, fullPrice: number): number {
  const percent = ((fullPrice - price) / fullPrice) * 100;
  return Math.round(percent / 10) * 10;
}

export function formatTime(seconds: number): string {
  if (seconds <= 0) return "00:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes.toString().padStart(2, "0")} : ${remainingSeconds.toString().padStart(2, "0")}`;
}
