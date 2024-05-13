// index.js

const qr = require('qrcode');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the data you want to encode into a QR code: ', (data) => {
  generateQRCode(data);
  rl.close();
});

function generateQRCode(data) {
  qr.toFile('./qrcode.png', data, (err) => {
    if (err) throw err;
    console.log('QR code generated successfully!');
    console.log('Check the "qrcode.png" file in the current directory.');
  });
}
