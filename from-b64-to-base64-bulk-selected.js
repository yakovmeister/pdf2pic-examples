const { fromBase64 } = require("pdf2pic");
const { mkdirsSync, writeFileSync, readFileSync } = require("fs-extra");
const rimraf = require("rimraf");

module.exports = () => {
  const specimen1 = "./files/specimen1.pdf";
  const b64 = readFileSync(specimen1, "base64");

  const outputDirectory = "./output/from-b64-to-base64-bulk-selected";

  rimraf.sync(outputDirectory);

  mkdirsSync(outputDirectory);

  const baseOptions = {
    width: 2550,
    height: 3300,
    density: 330,
    savePath: outputDirectory
  };

  const convert = fromBase64(b64, baseOptions);

  // fix this shit later in pdf2pic
  return convert.bulk([2,4], true).then((outputs) => {
    outputs.forEach((output) => {
      writeFileSync(outputDirectory + `/base64-output.${output.page}.txt`, output.base64);
    
      writeFileSync(outputDirectory + `/base64-output.${output.page}.png`, output.base64, "base64");
    });
  });
}
