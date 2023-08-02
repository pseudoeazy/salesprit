//@ts-nocheck
import { Html5QrcodeScanner,Html5QrcodeScanType } from "html5-qrcode";
import { useEffect,useState } from "react";
import ResultContainerPlugin from "./result-container-plugin";


export default function QrCodeScanner() {
  const [decodedResults, setDecodedResults] = useState([]);

  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    setDecodedResults((prev) => [...prev, decodedResult]);
  };

  useEffect(() => {
    // when component mounts
    
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader", 
      { 
          fps: 10,
          qrbox: {width: 250, height: 250},
          experimentalFeatures: {
              useBarCodeDetectorIfSupported: true
          },
          rememberLastUsedCamera: true,
          supportedScanTypes: [
              Html5QrcodeScanType.SCAN_TYPE_CAMERA
          ],
          aspectRatio: 1.7777778
      });
      html5QrcodeScanner.render(onNewScanResult);

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);
  return <div className="w-1/2 h-1/2 border border-black flex items-center justify-center">
    <div id="reader" />
    <ResultContainerPlugin results={decodedResults} />
  </div>;
}
