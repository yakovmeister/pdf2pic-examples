const { fromBuffer } = require("pdf2pic");
const { mkdirsSync, readFileSync } = require("fs-extra");
const rimraf = require("rimraf");

module.exports = () => {
  const specimen1 = "./files/specimen1.pdf";
  const buffer = readFileSync(specimen1);

  const outputDirectory = "./output/from-buffer-to-image";
  
  rimraf.sync(outputDirectory);
  
  mkdirsSync(outputDirectory);
  
  const baseOptions = {
    width: 2550,
    height: 3300,
    density: 330,
    savePath: outputDirectory
  };
  
  const convert = fromBuffer(buffer, baseOptions);
  
  return convert(1);
}
