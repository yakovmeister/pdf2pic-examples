const { fromBase64 } = require("pdf2pic");
const { mkdirsSync, readFileSync } = require("fs-extra");
const rimraf = require("rimraf");

module.exports = () => {
  const specimen1 = "./files/specimen1.pdf";
  const b64 = readFileSync(specimen1, "base64");

  const outputDirectory = "./output/from-b64-to-images-selected";
  
  rimraf.sync(outputDirectory);
  
  mkdirsSync(outputDirectory);
  
  const baseOptions = {
    width: 2550,
    height: 3300,
    density: 330,
    savePath: outputDirectory
  };
  
  const convert = fromBase64(b64, baseOptions);
  
  return convert.bulk([1,3,5]);
}
