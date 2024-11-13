// DynamicText.js
import React, { useState, useEffect } from 'react';

const DynamicText = () => {
  const titles = ["Web Developer", "Frontend Developer"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const typingSpeed = 100;
  const delayBetweenTitles = 1500;

  useEffect(() => {
    if (letterIndex < titles[index].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + titles[index][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText(""); // Clear the text
        setLetterIndex(0);  // Reset the letter index
        setIndex((prev) => (prev + 1) % titles.length); // Cycle to the next title
      }, delayBetweenTitles);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, index, titles]);

  return (
    <>
    <h4 className="dynamic__text">
     {currentText}
    
        
    </h4>

    </>
  );
};

export default DynamicText;
