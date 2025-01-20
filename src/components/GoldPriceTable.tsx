import React from "react";
import styles from "@/styles/GoldPriceTable.module.css";

type GoldPriceTableProps = {
  data: {
    gram: number;
    today: number;
    yesterday: number;
  }[];
  karat: "18k" | "22k" | "24k"; // Adding karat type
  city: string; // Adding city name
};

const GoldPriceTable = ({ data, karat, city }: GoldPriceTableProps) => {
  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableHeading}>
        Today {karat} Gold Price Per Gram in {city.charAt(0).toUpperCase() + city.slice(1)} (INR)
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Gram</th>
            <th>Today</th>
            <th>Yesterday</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ gram, today, yesterday }) => {
            const change = today - yesterday;
            const isPositive = change > 0;

            return (
              <tr key={gram}>
                <td>{gram}</td>
                <td>₹{today.toLocaleString()}</td>
                <td>₹{yesterday.toLocaleString()}</td>
                <td className={isPositive ? styles.positive : styles.negative}>
                  {isPositive ? "▲" : "▼"} ₹{Math.abs(change).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GoldPriceTable;
