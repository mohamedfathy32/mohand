import { useState } from "react";

function AverageCalculator() {
  const [numbers, setNumbers] = useState(["", "", "", "", ""]);
  const [average, setAverage] = useState(null);
  const [error, setError] = useState("");
  const [isNightMode, setIsNightMode] = useState(false);

  const handleInputChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const calculateAverage = () => {
    const validNumbers = numbers.map((num) => parseFloat(num)).filter((num) => !isNaN(num));

    if (validNumbers.length !== 5) {
      setError("يا مهند، لازم تدخل 5 أرقام صحيحة!");
      setAverage(null);
      return;
    }

    const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
    setAverage(sum / validNumbers.length);
    setError("");
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: isNightMode ? "#121212" : "#f0f8ff",
        color: isNightMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <button
        onClick={toggleNightMode}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px 20px",
          backgroundColor: isNightMode ? "#f0f8ff" : "#121212",
          color: isNightMode ? "#121212" : "#f0f8ff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {isNightMode ? "Light Mode" : "Night Mode"}
      </button>
      <h1 style={{ color: isNightMode ? "#80D8FF" : "#007BFF", marginBottom: "20px" }}>
        {isNightMode ? "مساء الخير يا مهند 🌙" : "صباح الخير يا مهند 👋"}
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        احسب متوسط 5 أرقام بكل سهولة!
      </p>
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
            border: isNightMode ? "1px solid #444" : "1px solid #ccc",
            backgroundColor: isNightMode ? "#333" : "#fff",
            color: isNightMode ? "#fff" : "#000",
            transition: "all 0.3s ease-in-out",
          }}
        />
      ))}
      <button
        onClick={calculateAverage}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: isNightMode ? "#003750" : "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "all 0.3s ease-in-out",
        }}
      >
        احسب المتوسط يا مهند
      </button>
      {error && (
        <p style={{ color: "red", marginTop: "20px", fontWeight: "bold" }}>{error}</p>
      )}
      {average !== null && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: isNightMode ? "#A5D6A7" : "#28a745",
            fontWeight: "bold",
          }}
        >
          المتوسط هو: {average} يا مهند
        </p>
      )}
    </div>
  );
}

export default AverageCalculator;
