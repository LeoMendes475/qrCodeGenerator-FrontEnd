import React from 'react';
import QRCode from 'qrcode.react';

function MyQRCode({ text }) {
  return <QRCode value={text} />;
}

export default MyQRCode;
