import styles from "@/styles/Header.module.css";
import Image from "next/image";

export default function PriceCard({
  karat,
  price,
}: {
  karat: string;
  price: number;
}) {
  return (
    <div className={styles.card}>
      <h3>{karat} Gold / 10 gm</h3>
      <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Image
          src="/goldcoin.png" // Path to the image in the public folder
          alt="Gold Icon"
          width={20} // Adjust width as needed
          height={20} // Adjust height as needed
        />
        ₹ {(price * 10).toLocaleString()}
      </p>
    </div>
  );
}
