const axios = require("axios");

class StatementsCrawler {
    domain = "https://www.easynvest.com.br";

    paths = {
        statements: "/api/gringott/statements/1",
        summary: "/api/gringott/tradingSummary/1",
    };

    constructor(token) {
        this.config = {
            headers: { Authorization: `${token}` },
        };
    }

    async statements(type, startDate, endDate) {
        try {
            const uri = `${this.domain}${this.paths[type]}?startDate=${startDate}&endDate=${endDate}`;
            const response = await axios.get(uri, this.config);
            if (response.status === 200) return response.data.value.statements;
        } catch (error) {
            console.log(error.message);
            return process.exit(0);
        }
        return [];
    }

    async statementsInRanges(type, ranges) {
        const statementChunks = [];
        for (const range of ranges) {
            console.log(`Retrieving ${type} in range ${range.join("~")}`);
            const statementsRequest = await this.statements(
                type,
                range[0],
                range[1]
            );
            console.log(
                `- ${statementsRequest.length || "No"} statements found`
            );
            statementChunks.push(statementsRequest);
        }
        return statementChunks.reduce((prev, curr) => [...prev, ...curr], []);
    }
}

module.exports = StatementsCrawler;
