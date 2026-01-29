import { TTariffProps } from "../types/tariff";
import { TariffPageClient } from "./components/tariffPageClient";

async function getTariffs(): Promise<TTariffProps[]> {
  const response = await fetch("https://t-core.fit-hub.pro/Test/GetTariffs");

  if (!response.ok) {
    throw new Error("Failed to fetch tariffs");
  }

  return await response.json();
}

export default async function TariffPage() {
  const tariffs = await getTariffs();

  return <TariffPageClient tariffs={tariffs} />;
}
