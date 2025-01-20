import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";


interface GoldRate {
  date: string;
  gold24K: string;
  gold22K: string;
  gold18K: string;
}

const goldRates: GoldRate[] = [
    { date: "20 Jan 25", gold24K: "₹8,123", gold22K: "₹7,450", gold18K: "₹6,300" },
    { date: "19 Jan 25", gold24K: "₹8,111", gold22K: "₹7,435", gold18K: "₹6,280" },
    { date: "18 Jan 25", gold24K: "₹8,095", gold22K: "₹7,420", gold18K: "₹6,265" },
    { date: "17 Jan 25", gold24K: "₹8,127", gold22K: "₹7,450", gold18K: "₹6,310" },
    { date: "16 Jan 25", gold24K: "₹8,062", gold22K: "₹7,390", gold18K: "₹6,255" },
    { date: "15 Jan 25", gold24K: "₹8,007", gold22K: "₹7,340", gold18K: "₹6,220" },
    { date: "14 Jan 25", gold24K: "₹7,996", gold22K: "₹7,330", gold18K: "₹6,215" },
    { date: "13 Jan 25", gold24K: "₹8,007", gold22K: "₹7,340", gold18K: "₹6,225" },
    { date: "12 Jan 25", gold24K: "₹7,964", gold22K: "₹7,300", gold18K: "₹6,190" },
    { date: "11 Jan 25", gold24K: "₹7,964", gold22K: "₹7,300", gold18K: "₹6,175" },
  ];

const GoldPrice10days: React.FC = () => {
  return (
    <>
    <div style={{padding:"10px",margin:"10px",fontSize:"26px"}}>Gold Rate in India for Last 10 days</div>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontFamily: "Arial, sans-serif",
        margin:"20px"
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f5f5f5", textAlign: "left" }}>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Date</th>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>24K Gold</th>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>22K Gold</th>
         
        </tr>
      </thead>
      <tbody>
        {goldRates.map((rate, index) => (
          <tr key={index}>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <i
                className="fas fa-coins"
                style={{
                  color: "#FFD700",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              ></i>
              {rate.date}
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{rate.gold24K}</td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{rate.gold22K}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default GoldPrice10days;
