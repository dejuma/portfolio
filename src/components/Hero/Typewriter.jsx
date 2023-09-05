import { useState, useEffect } from "react";

const Typewriter = ({ text, initialDelay, loopDelay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, initialDelay);
    } else if (currentIndex === text.length) {
      timeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
      }, loopDelay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, initialDelay, loopDelay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
