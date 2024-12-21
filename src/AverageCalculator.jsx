import { useState } from "react";
import { useNightMode } from "./NightModeContext.jsx"; // استيراد السياق

function AverageCalculator() {
  const [numbers, setNumbers] = useState(["", "", "", "", ""]);
  const [average, setAverage] = useState(null);
  const [error, setError] = useState("");
  
  const { isNightMode, toggleNightMode } = useNightMode(); // استخدام السياق هنا

  const handleInputChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const calculateAverage = () => {
    const validNumbers = numbers.map((num) => parseFloat(num)).filter((num) => !isNaN(num));

    if (validNumbers.length !== 5) {
      setError("انا اسف يحبيب اخوك بس لازم تدخل الخمس ارقام");
      setAverage(null);
      return;
    }

    const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
    setAverage(sum / validNumbers.length);
    setError("");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: isNightMode ? "#121212" : "#f0f8ff",
        color: isNightMode ? "#FFF" : "#000",
        paddingInline: "20px",
        textAlign: "center",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <label style={{ display: "inline-block", position: "relative", width: "50px", height: "25px" }}>
          <input
            type="checkbox"
            checked={isNightMode}
            onChange={toggleNightMode}
            style={{ display: "none" }}
          />
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: isNightMode ? "#4CAF50" : "#ccc",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          ></span>
          <span
            style={{
              position: "absolute",
              top: "3px",
              left: isNightMode ? "28px" : "3px",
              width: "19px",
              height: "19px",
              backgroundColor: "#FFF",
              borderRadius: "50%",
              transition: "left 0.3s ease",
              boxShadow: "0 0 5px rgba(0,0,0,0.2)",
            }}
          ></span>
        </label>
      </div>

      <h1 style={{ color: isNightMode ? "#4CAF50" : "#007BFF" }}>Hello Mohand 👋</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>احسب متوسط 5 أرقام</p>
      {numbers.map((num, index) => (
        <input
          key={index}
          type="number"
          value={num}
          placeholder={`الرقم ${index + 1}`}
          onChange={(e) => handleInputChange(index, e.target.value)}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: isNightMode ? "#333" : "#FFF",
            color: isNightMode ? "#FFF" : "#000",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        />
      ))}
      <button
        onClick={calculateAverage}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: isNightMode ? "#4CAF50" : "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s ease",
        }}
      >
        👮‍♂️احسب المتوسط يا مهند بيه
      </button>
      {error && (
        <p style={{ color: "red", marginTop: "20px", fontWeight: "bold" }}>{error}</p>
      )}
      {average !== null && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: isNightMode ? "#FFEB3B" : "#28a745",
            fontWeight: "bold",
          }}
        >
          🫡المتوسط هو: {average} يا باشا
        </p>
      )}
    </div>
  );
}

export default AverageCalculator;
