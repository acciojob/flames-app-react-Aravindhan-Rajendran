import React, { useState } from "react";
import '../styles/App.css';

function App() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [result, setResult] = useState("");

    // Function to calculate the relationship
    const calculateRelationship = () => {
        if (name1.trim() === "" || name2.trim() === "") {
            setResult("Please Enter valid input");
            return;
        }

        let str1 = name1;
        let str2 = name2;

        // Remove common letters
        for (let char of str1) {
            if (str2.includes(char)) {
                str2 = str2.replace(char, "", 1);
                str1 = str1.replace(char, "", 1);
            }
        }

        // Calculate the sum of the lengths of remaining strings
        const totalLength = str1.length + str2.length;
        const modResult = totalLength % 6;

        // Determine the relationship status
        const relationship = [
            "Siblings",
            "Friends",
            "Love",
            "Affection",
            "Marriage",
            "Enemy"
        ];

        setResult(relationship[modResult]);
    };

    // Function to clear the inputs and result
    const clearFields = () => {
        setName1("");
        setName2("");
        setResult("");
    };

    return (
        <div id="main">
            <input
                type="text"
                placeholder="Enter first name"
                data-testid="input1"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter second name"
                data-testid="input2"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
            />
            <button
                type="button"
                data-testid="calculate_relationship"
                onClick={calculateRelationship}
            >
                Calculate Relationship Future
            </button>
            <button
                type="button"
                data-testid="clear"
                onClick={clearFields}
            >
                Clear
            </button>
            <h3 data-testid="answer">{result}</h3>
        </div>
    );
}

export default App;
