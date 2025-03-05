// components/TranslateButton.js
'use client';

import { useEffect, useState } from "react";

const TranslateButton = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load Google Translate script when the component mounts
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    // Define the callback function for when the script loads
    window.googleTranslateElementInit = () => {
      setIsScriptLoaded(true); // Set the script as loaded
    };

    // Append the script to the document
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit; // Clean up the global callback
    };
  }, []);

  const handleTranslateClick = () => {
    if (isScriptLoaded && window.google && window.google.translate) {
      // Initialize the Google Translate Element
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // Default language of your webpage
          autoDisplay: false, // To prevent auto displaying of the translate widget
        },
        "google_translate_element"
      );

      // Manually trigger translation to Urdu ('ur')
      const selectElement = document.querySelector(".goog-te-combo");
      if (selectElement) {
        selectElement.value = "ur"; // Set the language to Urdu
        selectElement.dispatchEvent(new Event("change"));
      } else {
        console.log("Google Translate select element not found");
      }
    } else {
      console.log("Google Translate is not available");
    }
  };

  return (
    <div>
      {/* The button that will trigger translation */}
      <button onClick={handleTranslateClick}>Translate Page to Urdu</button>

      {/* The Google Translate widget container (hidden) */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default TranslateButton;