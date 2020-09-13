const { fromPath } = require("pdf2pic");
const { mkdirsSync } = require("fs-extra");
const rimraf = require("rimraf");

module.exports = () => {
  const specimen1 = "./files/specimen1.pdf";

  const outputDirectory = "./output/from-file-to-images";
  
  rimraf.sync(outputDirectory);
  
  mkdirsSync(outputDirectory);
  
  const baseOptions = {
    width: 2550,
    height: 3300,
    density: 330,
    savePath: outputDirectory
  };
  
  const convert = fromPath(specimen1, baseOptions);
  
  return convert.bulk(-1);
}
