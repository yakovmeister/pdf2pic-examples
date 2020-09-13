const rimraf = require("rimraf");
const fromFileToImage = require("./from-file-to-image");
const fromFileToImages = require("./from-file-to-images");
const fromFileToImagesSelected = require("./from-file-to-images-selected");
const fromFileToBase64 = require("./from-file-to-base64");
const fromFileToBase64bulk = require("./from-file-to-base64-bulk");
const fromFileToBase64bulkSelected = require("./from-file-to-base64-bulk-selected");

rimraf.sync("./output");

Promise.all([
  fromFileToImage(),
  fromFileToImages(),
  fromFileToImagesSelected(),
  fromFileToBase64(),
  fromFileToBase64bulk(),
  fromFileToBase64bulkSelected()
]);
