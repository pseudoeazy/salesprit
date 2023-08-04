//@ts-nocheck
import { useEffect, useState } from "react";
import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
import BackArrow from "assets/icons/back-arrow";

const containerStyle = {
  backgroundImage: `url(/images/qrcode.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const styles = {
  container: `relative h-screen w-screen flex items-center justify-center bg-black`,
  readerContainer: `relative w-[28rem] h-[28rem] border border-mygray border-t-2 border-t-secondary`,
  result: `absolute bottom-0 left-0  w-full min-h-20 p-1 bg-white text-black border-y-2 border-y-secondary-400`,
};

export default function QrCodeScanner({ onClose }) {
  const [decodedResults, setDecodedResults] = useState([]);

  useEffect(() => {
    // when component mounts
    const html5QrcodeScanner = new Html5QrcodeScanner("reader", {
      fps: 4, //10
      qrbox: 448,
      experimentalFeatures: {
        useBarCodeDetectorIfSupported: true,
      },
      rememberLastUsedCamera: true,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      aspectRatio: 1.7777778,
    });

    const onNewScanResult = (decodedText, decodedResult) => {
      if (decodedText) {
        // html5QrcodeScanner.clear();
        const stopButton = document.getElementById(
          "html5-qrcode-button-camera-stop"
        );

        if (stopButton) {
          stopButton.click();
        }
      }

      setDecodedResults((prev) => [...prev, decodedResult]);
    };

    html5QrcodeScanner.render(onNewScanResult);

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);

  return (
    <div className={styles.container} style={containerStyle}>
      <span
        role="button"
        className="absolute left-10 md:left-20 top-10 md:top-20"
        onClick={() => onClose()}
      >
        <BackArrow />
      </span>
      <div className={styles.readerContainer}>
        <div id="reader" className="w-full h-full text-blue-600 font-bold" />
        {!!decodedResults.length && (
          <div className={styles.result}>
            <span className="text-secondary">Data: </span>{" "}
            {decodedResults[decodedResults.length - 1]?.decodedText}
          </div>
        )}
      </div>
    </div>
  );
}
