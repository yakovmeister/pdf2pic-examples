const { fromBuffer } = require("pdf2pic");
const { mkdirsSync, writeFileSync, readFileSync } = require("fs-extra");
const rimraf = require("rimraf");

module.exports = () => {
  const specimen1 = "./files/specimen1.pdf";
  const buffer = readFileSync(specimen1);

  const outputDirectory = "./output/from-buffer-to-base64";

  rimraf.sync(outputDirectory);

  mkdirsSync(outputDirectory);

  const baseOptions = {
    width: 2550,
    height: 3300,
    density: 330,
    savePath: outputDirectory
  };

  const convert = fromBuffer(buffer, baseOptions);

  return convert(1, true).then((output) => {
    writeFileSync(outputDirectory + "/base64-output.txt", output.base64);
  
    writeFileSync(outputDirectory + "/base64-output.png", output.base64, "base64");
  });
}
