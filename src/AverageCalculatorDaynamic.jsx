import { useState } from "react";
import { useNightMode } from "./NightModeContext.jsx"; // استيراد السياق

export default function AverageCalculatorDaynamic() {
  const [numbers, setNumbers] = useState([]);
  const [numCount, setNumCount] = useState(5); // Default to 5 numbers
  const [average, setAverage] = useState(null);
  const [error, setError] = useState("");
  
  const { isNightMode } = useNightMode(); // استخدام السياق هنا

  const handleInputChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const handleNumCountChange = (value) => {
    const count = parseInt(value, 10);
    if (!isNaN(count) && count > 0) {
      setNumCount(count);
      setNumbers(Array(count).fill("")); // Reset the numbers array
    }
  };

  const calculateAverage = () => {
    const validNumbers = numbers.map((num) => parseFloat(num)).filter((num) => !isNaN(num));

    if (validNumbers.length !== numCount) {
      setError(`انا اسف يحبيب اخوك بس لازم تدخل ${numCount} رقم`);
      setAverage(null);
      return;
    }

    const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
    setAverage(sum / validNumbers.length);
    setError("");
    setNumbers(Array(numCount).fill(""));
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: isNightMode ? "#121212" : "#f0f8ff",
        color: isNightMode ? "#FFF" : "#000",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        احسب متوسط عدد مخصص من الأرقام
      </p>

      <input
        type="number"
        value={numCount}
        placeholder="عدد الأرقام"
        onChange={(e) => handleNumCountChange(e.target.value)}
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

      {/* حاوية Flex لعرض المدخلات بشكل أفقي */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px", // المسافة بين المدخلات
          marginTop: "10px",
        }}
      >
        {numbers.map((num, index) => (
          <input
            key={index}
            type="number"
            value={num}
            placeholder={`الرقم ${index + 1}`}
            onChange={(e) => handleInputChange(index, e.target.value)}
            style={{
              width: "40%", // عرض المدخلات ليظهروا جنب بعض
              paddingBlock: "10px",
              paddingInline: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: isNightMode ? "#333" : "#FFF",
              color: isNightMode ? "#FFF" : "#000",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          />
        ))}
      </div>

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
