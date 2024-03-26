import React from "react";
import QRCode from "qrcode.react";

const QRcode = (props) => {
  const { urlLink } = props;
  let qrcodeStyle = {
    position: "absolute",
    bottom: "30px",
    zIndex: "3",
  };
  let box = {
    position: "absolute",
    bottom: "23px",
    background: "white",
    width: "66px",
    height: "62px",
    borderRadius:'3px',
    left: "40px",
  };
  return (
    <div>
    <div  style={box}></div>
      <QRCode value={urlLink} size={50} style={qrcodeStyle} />
    </div>
  );
};

export default QRcode;
