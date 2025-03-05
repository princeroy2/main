'use client';

import React, { useState, useEffect } from 'react';

const Lang_Btn_list = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Load the Google Translate script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    // Define the callback function for when the script loads
    window.googleTranslateElementInit = () => {
      setIsScriptLoaded(true); // Set the script as loaded
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Default language of your webpage
          autoDisplay: false, // Prevent auto-displaying the widget
        },
        'google_translate_element'
      );
    };

    // Append the script to the document
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit; // Clean up the global callback
    };
  }, []);

  // Function to toggle the list visibility
  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  // Function to change the language using Google Translate widget
  const handleLanguageChange = (languageCode) => {
    if (isScriptLoaded && window.google && window.google.translate) {
      const selectElement = document.querySelector('.goog-te-combo');
      if (selectElement) {
        selectElement.value = languageCode; // Set the language
        selectElement.dispatchEvent(new Event('change')); // Trigger translation
      } else {
        console.log('Google Translate select element not found');
      }
    } else {
      console.log('Google Translate is not available');
    }
  };

  return (
    <div className="px-3">
      {/* Button in the header with an arrow */}
      <div
        onClick={toggleList}
        className="text-white gap-3 flex-row px-5 absolute top-4 right-4 cursor-pointer flex items-center notranslate skiptranslate"
      >
        <span className="text-sm">EN</span>
        <span className="text-sm">{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* Display fields when the list is open */}
      {isOpen && (
        <div className="text-[#2f3c42] cursor-pointer mt-10 absolute top-[4px] p-1 right-6 bg-white rounded-md shadow-lg">
          <div
            className="py-1 px-3 text-sm hover:bg-gray-400"
            onClick={() => handleLanguageChange('ur')}
          >
            UR
          </div>
          <div
            className="py-1 hover:bg-gray-400 block px-3 text-sm"
            onClick={() => handleLanguageChange('ru')}
          >
            RU
          </div>
          <div
            className="py-1 hover:bg-gray-400 block px-3 text-sm"
            onClick={() => handleLanguageChange('es')}
          >
            ES
          </div>
          <div
            className="py-1 hover:bg-gray-400 block px-3 text-sm"
            onClick={() => handleLanguageChange('fr')}
          >
            FR
          </div>
          <div
            className="py-1 hover:bg-gray-400 block px-3 text-sm"
            onClick={() => handleLanguageChange('de')}
          >
            DE
          </div>
        </div>
      )}

      {/* Google Translate Widget will be inserted here */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </div>
  );
};

export default Lang_Btn_list;