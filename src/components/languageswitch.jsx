import React, { useState, useEffect } from 'react';

const Lang_Btn_list4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default language

  // List of languages (language code and name for display)
  const languageList = [
    { code: 'en', name: 'EN' },
    { code: 'ur', name: 'UR' },
    { code: 'ru', name: 'RU' },
    { code: 'es', name: 'ES' },
    { code: 'fr', name: 'FR' },
    { code: 'de', name: 'DE' },
    { code: 'zh-CN', name: 'ZH' },  // Arabic

    // Add more languages here if needed
  ];

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
      const googleTranslateIcon = document.querySelector('.goog-logo-link');
      if (googleTranslateIcon) {
        googleTranslateIcon.style.display = 'none'; // Hide the icon
      }

      // Hide the Google Translate bar (or any specific element you want)
      const googleTranslateBar = document.querySelector('.goog-gt-vt');
      if (googleTranslateBar) {
        googleTranslateBar.style.display = 'none'; // Hide the translate bar
      }
    
      // After script is loaded, remove the style applied by Google Translate
      const body = document.body;
      if (body && body.style) {
        body.style.position = '';  // Remove the position style applied by Google Translate
        body.style.top = '';       // Remove the top style applied by Google Translate
      }
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

  // Function to change the language dynamically
  const handleLanguageChange = (languageCode, languageText) => {
    if (isScriptLoaded && window.google && window.google.translate) {
      const selectElement = document.querySelector('.goog-te-combo');

      if (selectElement) {
        selectElement.value = languageCode; // Set the language
        selectElement.dispatchEvent(new Event('change')); // Trigger translation
        // Update selected language text and close the list
        setSelectedLanguage(languageText);
        setIsOpen(false); // Close the dropdown after selection
      } else {
        console.log('Google Translate select element not found');
      }
    } else {
      console.log('Google Translate is not available');
    }
  };

  return (
    <div className="px-3 relative  max-md:hidden">
      {/* Button in the header with an arrow */}
      <div
        onClick={toggleList}
        className="text-white gap-3 flex-row px-5 absolute top-0 bottom-[40px] right-4 cursor-pointer flex items-center notranslate skiptranslate"
        style={{ zIndex: 100 }}
      >
        <span className="text-sm text-[#EEE40A]">{selectedLanguage}</span>
        <span className="text-sm text-[#EEE40A]">{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* Display fields when the list is open */}
      {isOpen && (
        <div
          className="text-[#2f3c42] cursor-pointer mt-5 absolute p-1 right-6 bg-white rounded-md shadow-lg notranslate skiptranslate"
          style={{ zIndex: 9999 }}
        >
          {/* Map through the languageList and render each language */}
          {languageList.map((lang) => (
            <div
              key={lang.code}
              className="py-1 px-3 text-sm hover:bg-gray-400"
              onClick={() => handleLanguageChange(lang.code, lang.name)}
            >
              {lang.name}
            </div>
          ))}
        </div>
      )}

      {/* Google Translate Widget will be inserted here */}
      <div
        id="google_translate_element"
        style={{
          display: 'none', // Ensure the Google Translate widget is hidden
        }}
      >
        <iframe className="skiptranslate hidden"></iframe>
      </div>
    </div>
  );
};

export default Lang_Btn_list4;
