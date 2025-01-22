/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from "fs";
import path from "path";
import PriceCard from "@/components/PriceCard";
import styles from "./page.module.css";
import GoldPriceTable from "@/components/GoldPriceTable";
import GoldPrice10days from "@/components/GoldPrice10days";

// Define the structure of the goldPrices data
type GoldRates = {
  "18k": number;
  "22k": number;
  "24k": number;
};

type GoldPrices = {
  india: {
    title: string;
    description: string;
    date: string;
    rates: GoldRates;
    ratesYesterday: GoldRates;
  };
};

export default async function CityPage() {
  // Fetch JSON data for gold prices
  const filePath = path.join(process.cwd(), "src", "data", "goldPrices.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const goldPrices: GoldPrices = JSON.parse(fileContents);

  // Fetch only the data for India
  const indiaData = goldPrices.india;

  if (!indiaData) {
    throw new Error("India data is missing or undefined");
  }

  // Sample gold price table data
  const goldPriceData = (karat: "18k" | "22k" | "24k") => [
    { gram: 1, today: indiaData.rates[karat], yesterday: indiaData.ratesYesterday[karat] },
    { gram: 8, today: indiaData.rates[karat] * 8, yesterday: indiaData.ratesYesterday[karat] * 8 },
    { gram: 10, today: indiaData.rates[karat] * 10, yesterday: indiaData.ratesYesterday[karat] * 10 },
    { gram: 100, today: indiaData.rates[karat] * 100, yesterday: indiaData.ratesYesterday[karat] * 100 },
  ];


  return (
    <>
      <div className={styles.container}>
        {/* Page Title */}
        <h1><span style={{ color: "#e0b963" }}>Gold Prices </span><span> </span> 
            in  India    </h1>
        <h2 className={styles.dates}>{indiaData.date}</h2>

        {/* Price Cards */}
        <div className={styles.grid}>
          {Object.entries(indiaData.rates).map(([karat, price]) => (
            <PriceCard key={karat} karat={karat} price={price} />
          ))}
        </div>

        {/* Description */}
        <p className={styles.description}>
          <br></br>
          {indiaData.description} The price of gold in India today is ₹ {indiaData.rates["22k"]} per gram for 22 karat gold and ₹ {indiaData.rates["24k"]} per gram for 24 karat gold (also called 999 gold). Updated on {indiaData.date}.
        </p>
      </div>

      {/* Gold Price Tables */}
      <GoldPriceTable data={goldPriceData("18k")} karat="18k" city="India" />
      <GoldPriceTable data={goldPriceData("22k")} karat="22k" city="India" />
      <GoldPriceTable data={goldPriceData("24k")} karat="24k" city="India" />
      <GoldPrice10days />
    </>
  );
}
