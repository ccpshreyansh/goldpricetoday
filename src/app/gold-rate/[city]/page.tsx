/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from "fs";
import path from "path";
import PriceCard from "@/components/PriceCard";
import styles from "../../page.module.css";
import GoldPriceTable from "@/components/GoldPriceTable";
import GoldPrice10days from "@/components/GoldPrice10days";

// Define the structure of the goldPrices data
type GoldRates = {
  "18k": number;
  "22k": number;
  "24k": number;
};

type GoldPrices = {
  [city: string]: {
    date: string;
    rates: GoldRates;
    ratesYesterday: GoldRates;
  };
};

interface PageProps {
  params: {
    city: string;
  };
}

export default async function CityPage({
  params,
}: PageProps) {
  const { city } = params;

  // Path to the JSON file
  const filePath = path.join(process.cwd(), "src", "data", "goldPrices.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const goldPrices: GoldPrices = JSON.parse(fileContents);

  // Normalize the city name to lowercase
  const normalizedCity = city.toLowerCase();

  // Default to India price if the city is not in the data
  const data = goldPrices[normalizedCity] || {
    date: "Default Date",
    rates: {
      "18k": 4700,
      "22k": 5200,
      "24k": 5800,
    },
    ratesYesterday: {
      "18k": 4600,
      "22k": 5100,
      "24k": 5700,
    },
  };

  // Prepare the gold price data for different karats
  const goldPriceData = (karat: "18k" | "22k" | "24k") => [
    { gram: 1, today: data.rates[karat], yesterday: data.ratesYesterday[karat] },
    { gram: 8, today: data.rates[karat] * 8, yesterday: data.ratesYesterday[karat] * 8 },
    { gram: 10, today: data.rates[karat] * 10, yesterday: data.ratesYesterday[karat] * 10 },
    { gram: 100, today: data.rates[karat] * 100, yesterday: data.ratesYesterday[karat] * 100 },
  ];

  return (
    <>
      <div className={styles.container}>
        <h1>
          <span style={{ color: "#e0b963" }}>Gold Prices in</span>
          <span> </span>
          {normalizedCity.charAt(0).toUpperCase() + normalizedCity.slice(1)}
        </h1>
        <h2 className={styles.dates}>{data.date}</h2>

        <div className={styles.grid}>
          {Object.entries(data.rates).map(([karat, price]) => (
            <PriceCard key={karat} karat={karat} price={price} />
          ))}
        </div>

        <p className={styles.description}>
          <br />
          The price of gold in {normalizedCity.charAt(0).toUpperCase() + normalizedCity.slice(1)} today is ₹
          {data.rates["22k"]} per gram for 22 karat gold and ₹{data.rates["24k"]} per gram for 24 karat gold. Updated on {data.date}.
        </p>
      </div>

      {/* Gold Price Tables for different karats */}
      <GoldPriceTable data={goldPriceData("18k")} karat="18k" city={normalizedCity} />
      <GoldPriceTable data={goldPriceData("22k")} karat="22k" city={normalizedCity} />
      <GoldPriceTable data={goldPriceData("24k")} karat="24k" city={normalizedCity} />

      <GoldPrice10days />
    </>
  );
}
