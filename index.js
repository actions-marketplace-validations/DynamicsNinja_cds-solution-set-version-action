const core = require("@actions/core");
const xml2js = require("xml2js");
const fs = require("fs");

try {
  const solutionXmlFolder = core
    .getInput("solution-xml-path")
    .replace(/\/$/, "");

  const solutionVersion = core.getInput("solution-version");
  console.log(`Solution Version: ${solutionVersion}`);

  const solutionXmlPath = `${solutionXmlFolder}/Solution.xml`;
  console.log(`Solution XML Path: ${solutionXmlPath}`);

  const solutionXml = fs.readFileSync(solutionXmlPath, "utf8");

  var parser = new xml2js.Parser();
  parser.parseString(solutionXml, function (err, result) {
    result.ImportExportXml.SolutionManifest[0].Version[0] = solutionVersion;

    const builder = new xml2js.Builder();
    let parsedData = builder.buildObject(result);

    fs.writeFileSync(solutionXmlPath, parsedData);
  });

  core.setOutput("result", "success");
} catch (error) {
  core.setFailed(error.message);
}
