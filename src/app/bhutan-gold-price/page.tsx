/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import PriceCard from "@/components/PriceCard";
import styles from "../page.module.css";
import GoldPriceTable from "@/components/GoldPriceTable";
import GoldPrice10days from "@/components/GoldPrice10days";
import Head from "next/head";

export const metadata: Metadata = {
    title: "Bhutan Gold Price - Today's Rates",
    description: "Get the latest gold price in Bhutan for 18k, 22k, and 24k gold. Updated daily.",
  };
// Define the structure of the goldPrices data
type GoldRates = {
  "18k": number;
  "22k": number;
  "24k": number;
};

type GoldPrices = {
  bhutan: {
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
  const bhutanData = goldPrices.bhutan;

  if (!bhutanData) {
    throw new Error("India data is missing or undefined");
  }

  // Sample gold price table data
  const goldPriceData = (karat: "18k" | "22k" | "24k") => [
    { gram: 1, today: bhutanData.rates[karat], yesterday: bhutanData.ratesYesterday[karat] },
    { gram: 8, today: bhutanData.rates[karat] * 8, yesterday: bhutanData.ratesYesterday[karat] * 8 },
    { gram: 10, today: bhutanData.rates[karat] * 10, yesterday: bhutanData.ratesYesterday[karat] * 10 },
    { gram: 100, today: bhutanData.rates[karat] * 100, yesterday: bhutanData.ratesYesterday[karat] * 100 },
  ];


    const currentDate = new Date().toLocaleDateString();
  return (
    <>
     <Head>
        <title>Bhutan Gold Price - {bhutanData.title}</title>
        <meta name="description" content={bhutanData.description} />
        <meta property="og:title" content={`Gold Prices in Bhutan - ${bhutanData.title}`} />
        <meta property="og:description" content={bhutanData.description} />
        <meta property="og:url" content={`https://goldpricetoday.vercel.app/bhutan-gold-price`} />
        <meta property="og:image" content="" />
        {/* You can customize the Open Graph image URL */}
      </Head>
      <div className={styles.container}>
        {/* Page Title */}
        <h1><span style={{ color: "#e0b963" }}>Gold Prices </span><span> </span> 
            in  Bhutan    </h1>
        <h2 className={styles.dates}>{currentDate}</h2>

        {/* Price Cards */}
        <div className={styles.grid}>
          {Object.entries(bhutanData.rates).map(([karat, price]) => (
            <PriceCard key={karat} karat={karat} price={price} />
          ))}
        </div>

        {/* Description */}
        <p className={styles.description}>
          <br></br>
          {bhutanData.description} The price of gold in Bhutan today is ₹ {bhutanData.rates["22k"]} per gram for 22 karat gold and ₹ {bhutanData.rates["24k"]} per gram for 24 karat gold (also called 999 gold). Updated on {bhutanData.date}.
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
