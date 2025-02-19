// import Glossary from "@/cryptoapis/glossary";
// import Glossary_Searh from "@/cryptoapis/coins_Search-glossary";
// import fs from 'fs';
// import path from 'path'; // Path module to handle file paths correctly

// export default async function sitemap() {
//   const allUrls = [];
//   const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//   // Fetch coin data for each letter sequentially
//   for (let i = 0; i < letters.length; i++) {
//     const letter = letters[i];

//     try {
//       // Fetch coin data for the current letter
//       const coinData = await Glossary(letter);

//       if (coinData && coinData.coins && Array.isArray(coinData.coins)) {
//         // Loop through each coin and send the symbol to Glossary_Searh
//         for (const coin of coinData.coins) {
//           // Send the coin symbol to Glossary_Searh function
//           const data1 = await Glossary_Searh(coin.Symbol);

//           if (data1 && Array.isArray(data1.coins)) {
//             // Now generate the URLs based on the coins fetched
//             data1.coins.forEach((coinInSearch) => {
//               const formattedTitle = coinInSearch.Symbol;
//               const coinUrl = `https://www.crptonews.com/market/cryptocoin/${formattedTitle}`;

//               allUrls.push({
//                 url: coinUrl,  // Using formatted URL for each coin
//                 lastModified: new Date().toISOString(),  // Actual modification date
//                 changeFreq: 'weekly',  // Change frequency for SEO
//                 priority: 0.8,  // Priority for search engines
//               });
//             });
//           } else {
//             console.error(`No coins array found in data1 for coin ${coin.Symbol}`);
//           }
//         }
//       } else {
//         console.error(`No valid coins found for letter ${letter}`);
//       }
//     } catch (error) {
//       console.error(`Error processing letter ${letter}:`, error);
//     }
//   }

//   // Generate homepage URL (highest priority)
//   const homepageUrl = {
//     url: `https://www.crptonews.com/market/cryptocoin`,
//     lastModified: new Date().toISOString(),
//     changeFreq: 'daily',
//     priority: 1.0, // Highest priority
//   };

//   // Add the homepage URL to the list
//   allUrls.push(homepageUrl);

//   // Create the sitemap XML content
//   const sitemapContent = generateSitemapContent(allUrls);

//   // Save the sitemap to a file (with directory creation)
//   try {
//     await saveSitemapToFile(sitemapContent);
//     console.log('Sitemap has been successfully generated and saved!');
//   } catch (err) {
//     console.error('Error saving the sitemap:', err);
//   }

//   return allUrls;
// }

// // Function to generate the sitemap XML content
// function generateSitemapContent(urls) {
//   let content = '<?xml version="1.0" encoding="UTF-8"?>\n';
//   content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

//   urls.forEach((url) => {
//     content += `  <url>\n    <loc>${url.url}</loc>\n    <lastmod>${url.lastModified}</lastmod>\n    <changefreq>${url.changeFreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>\n`;
//   });

//   content += '</urlset>';
//   return content;
// }

// // Function to save the generated sitemap content to a file
// async function saveSitemapToFile(content) {
//   const directoryPath = path.join(__dirname, 'market/cryptocoin'); // Construct the directory path

//   // Create the directory if it does not exist
//   if (!fs.existsSync(directoryPath)) {
//     fs.mkdirSync(directoryPath, { recursive: true });
//   }

//   // Write the sitemap to the file
//   return new Promise((resolve, reject) => {
//     const filePath = path.join(directoryPath, 'sitemap.xml');
//     fs.writeFile(filePath, content, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// }
