
class ScreenshotService {

// Method to capture screenshot for the URL using API 
static async captureScreenshot(url) {
  console.log(`Capturing screenshot for URL: ${url}`);
  const response = await fetch(
    `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURIComponent(url)}&width=1920&height=1080&fullscreen=true`,
    {
      headers: {
        "X-RapidAPI-Key": "a6f8f0a88amsh3523cd167e4a76ep120679jsndd3ceb1d2a54",
        "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
      },
    }
  );

  console.log('API Response:', response);

  if (!response.ok) {
    const errText = await response.text();
    console.error("API Error:", errText);
    throw new Error("Screenshot failed");
  }

  const image = await response.json();
  console.log('Screenshot API Image Object:', image);

  const imageURL = image.screenshotUrl;
  console.log('Extracted Image URL:', imageURL);

  return imageURL;

}

}

export default ScreenshotService;