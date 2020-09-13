const rimraf = require("rimraf");
const fromB64ToBase64BulkSelected = require("./from-b64-to-base64-bulk-selected");
const fromB64ToBase64Bulk = require("./from-b64-to-base64-bulk");
const fromB64ToBase64 = require("./from-b64-to-base64");
const fromB64ToImage = require("./from-b64-to-image");
const fromB64ToImagesSelected = require("./from-b64-to-images-selected");
const fromB64ToImages = require("./from-b64-to-images");
const fromBufferToBase64BulkSelected = require("./from-buffer-to-base64-bulk-selected");
const fromBufferToBase64Bulk = require("./from-buffer-to-base64-bulk");
const fromBufferToBase64 = require("./from-buffer-to-base64");
const fromBufferToImage = require("./from-buffer-to-image");
const fromBufferToImagesSelected = require("./from-buffer-to-images-selected");
const fromBufferToImages = require("./from-buffer-to-images");
const fromFileToImage = require("./from-file-to-image");
const fromFileToImages = require("./from-file-to-images");
const fromFileToImagesSelected = require("./from-file-to-images-selected");
const fromFileToBase64 = require("./from-file-to-base64");
const fromFileToBase64Bulk = require("./from-file-to-base64-bulk");
const fromFileToBase64BulkSelected = require("./from-file-to-base64-bulk-selected");

rimraf.sync("./output");

Promise.all([
  fromB64ToBase64BulkSelected(),
  fromB64ToBase64Bulk(),
  fromB64ToBase64(),
  fromB64ToImage(),
  fromB64ToImagesSelected(),
  fromB64ToImages(),
  fromBufferToBase64BulkSelected(),
  fromBufferToBase64Bulk(),
  fromBufferToBase64(),
  fromBufferToImage(),
  fromBufferToImagesSelected(),
  fromBufferToImages(),
  fromFileToImage(),
  fromFileToImages(),
  fromFileToImagesSelected(),
  fromFileToBase64(),
  fromFileToBase64Bulk(),
  fromFileToBase64BulkSelected()
]);
