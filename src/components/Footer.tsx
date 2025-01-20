import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#bdc5cd",
        textAlign: "center",
        padding: "20px 10px",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        color: "#333",
        borderTop: "1px solid #ddd",
      }}
    >
      {/* Links Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "10px",
        }}
      >
        <Link href="/aboutus" style={{ textDecoration: "none", color: "#333" }}>
          About Us
        </Link>
        <Link href="/contactus" style={{ textDecoration: "none", color: "#333" }}>
          Contact Us
        </Link>
        <Link href="/privacypolicy" style={{ textDecoration: "none", color: "#333" }}>
          Privacy Policy
        </Link>
        <Link href="/termsandconditions" style={{ textDecoration: "none", color: "#333" }}>
          Terms and Conditions
        </Link>
      </div>

      {/* Copyright Section */}
      <p style={{ margin: 0 }}>
        &copy; {currentYear}  Gold Price Today. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
