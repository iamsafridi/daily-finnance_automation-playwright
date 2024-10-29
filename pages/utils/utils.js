const fs = require("fs");

const writeToJSONFile = (data, filePath = "./userData.json") => {
  let existingData = [];

  if (fs.existsSync(filePath)) {
    existingData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  existingData.push(data);
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
};

const readFromJSONFile = (filePath = "./userData.json") => {
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    return null;
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return data.length ? data[data.length - 1] : null; // Return the last user added
};

module.exports = { writeToJSONFile, readFromJSONFile };
