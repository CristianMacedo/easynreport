const date = require(`./utils/date`);
const file = require(`./utils/file`);

const StatementsCrawler = require("./lib/StatementsCrawler");

const dotenv = require("dotenv");

dotenv.config();

const startDate = "2020-01-01"; // Your start date here
const endDate = "2020-12-31"; // Your end date here
const type = "summary"; // Your report type here - 'summary' for 'Resumo de negociação' and 'statement' for 'Extrato'

async function init() {
    const token = process.env.BEARER_TOKEN;
    const ranges = date.splitRange(
        89,
        new Date(`${startDate} 00:00:00`),
        new Date(`${endDate} 00:00:00`)
    );
    const statementsCrawler = new StatementsCrawler(token);
    const statements = await statementsCrawler.statementsInRanges(type, ranges);
    const filename = `dist/easynvest-${type}-report-${
        ranges[0][0].split("-")[0]
    }.csv`;
    file.saveToCsv(filename, statements);
}

init();
