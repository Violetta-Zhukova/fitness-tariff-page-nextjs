import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tariff | Fitness app",
  description: "Fitness app",
};

export default function TariffLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto  p-0 box-border bg-[#232829] rounded-[18px]">
      {children}
    </div>
  );
}
