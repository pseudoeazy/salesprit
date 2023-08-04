import {  Slide, } from "@chakra-ui/react";
import QrCodeScanner from "components/qrcode-scanner";

interface Props{
  isOpen:boolean;
  onClose:()=> void;
}
function Slider({ isOpen, onClose }:Props) {
  return (
    <>
      <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
        <div className={`fixed left-0 top-0 z-50 ${isOpen ? "block" : "hidden"}`}>
          <QrCodeScanner onClose={onClose} />
        </div>
      </Slide>
    </>
  );
}

export default Slider;
