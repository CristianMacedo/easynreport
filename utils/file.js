const fs = require("fs");
const json2csv = require("json2csv");

function saveToCsv(filename, data) {
    const csv =
        `\uFEFF` +
        json2csv.parse(data, { encoding: "utf8" }).replace(/,/g, ";");
    fs.writeFileSync(filename, csv);
    console.log(`File saved to ${filename}`);
}

module.exports = {
    saveToCsv,
};
