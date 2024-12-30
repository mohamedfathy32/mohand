import { useState } from 'react';
import { useNightMode } from './NightModeContext';

export default function Two100One50() {
    const [numbers, setNumbers] = useState(["", "", ""]);
    const [average, setAverage] = useState(null);
    const [error, setError] = useState("");

    const { isNightMode } = useNightMode();

    const handleInputChange = (index, value) => {
        const newNumbers = [...numbers];
        newNumbers[index] = value;
        setNumbers(newNumbers);
    };

    const calculateAverage = () => {
        const validNumbers = numbers.map((num) => parseFloat(num)).filter((num) => !isNaN(num));

        if (validNumbers.length !== 3) {
            setError("انا اسف يحبيب اخوك بس لازم تدخل التلت ارقام");
            setAverage(null);
            return;
        }

        // Check conditions for each number
        if (validNumbers[0] > 100 || validNumbers[0] < 0) {
            setError("الرقم الأول لازم يكون من 100%");
            setAverage(null);
            return;
        }

        if (validNumbers[1] > 100 || validNumbers[1] < 0) {
            setError("الرقم الثاني لازم يكون من 100%");
            setAverage(null);
            return;
        }

        if (validNumbers[2] > 50 || validNumbers[2] < 0) {
            setError("الرقم الثالث لازم يكون من 50%");
            setAverage(null);
            return;
        }

        const adjustedNumbers = [
            validNumbers[0],
            validNumbers[1],
            (validNumbers[2] * 100) / 50, // Normalize the third number to 100%
        ];

        const sum = adjustedNumbers.reduce((acc, curr) => acc + curr, 0);
        setAverage(sum / 3); // Calculate the average
        setError("");
        setNumbers(["", "", ""]);
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
            <p style={{ fontSize: "25px", marginBottom: "30px", marginTop: "0px", paddingTop: "20px" }}>
                ده متوسط 3 أرقام الرقم الاول والتانى من 100 والتالت من 50 
            </p>
            {numbers.map((num, index) => (
                <input
                    key={index}
                    type="number"
                    value={num}
                    placeholder={index==2? `الرقم ${index+1} من 50`:`الرقم ${index+1} من 100`}
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
                <p style={{ color: "red", marginTop: "20px", fontWeight: "bold", marginBottom: "0" }}>{error}</p>
            )}
            {average !== null && (
                <p
                    style={{
                        marginBottom: "0px",
                        marginTop: "20px",
                        fontSize: "20px",
                        color: isNightMode ? "#FFEB3B" : "#28a745",
                        fontWeight: "bold",
                    }}
                >
                    🫡المتوسط هو: {average.toFixed(2)} يا باشا
                </p>
            )}
        </div>
    );
}
