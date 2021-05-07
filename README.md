# EasyReport

A Node.js app to Crawl Easynvest API and a gather more than the limit of 90 days, by combining multiple consults in a single file.

> **Disclaimer:** _This app is not created, maintained or related to **Easynvest - Título Corretora de Valores SA (CNPJ: 62.169.875/0001-79)** in any means. If you work at Easynvest and have any problems with this app, please reach me out (Contact info on my Github profile or [cristianmacedo.com](https://cristianmacedo.com))._

## Pre-requisites

-   Node.js (Version 10+)
-   NPM (Comes with Node.js by default) or Yarn

## How to use

1.  Clone or Download this repo
2.  Open terminal and navigate to the folder
3.  Install the dependencies with `npm install` or `yarn install`
4.  Rename the `example.env` file to `.env`
5.  On `.env` Replace `REPLACE_WITH_YOUR_TOKEN` with your token (duuh...) (See [How to find my Bearer token?](#how-to-find-my-bearer-token))
6.  On `index.js` replace value after `startDate` with the start date for the report on the following format YYYY-MM-DD, e.g. 2020-01-25.
7.  On `index.js` replace value after `endDate` with the end date for the report on the following format YYYY-MM-DD, e.g. 2020-01-25.
8.  On `index.js` replace value after `type` with the type of report
    1.  'statement' for 'Extrato'
    2.  'summary' for 'Resumo de negociação'
9.  Run `node index.js`
10. See the output inside the dist/ folder

## How to find my Bearer token?

_This Token is responsible of giving the application access to the data of your account, we do not store any personal info or token, the app runs 100% locally, only making requests to gather the necessary data to create reports._

_Please DO NOT share this token with anyone, as this can represent a security issue to your account._

1. Access your Easynvest account homepage through your browser of preference
2. Open developer tools
3. Access the 'Network' tab
4. Reload the page
5. Search for the request of name 'custody-position' and click it
6. On the right side go to Headers > Request Headers
7. Find the 'authorization' header
8. Right click and 'Copy value'
9. Got to Step 5 on [How to use](#how-to-use)

## About

I decided to create this app due to the fact that I had to create reports for periods longer than what the current Easynvest API allows. No financial profit intended (Feel free to donate, tho)

Feel free to create issues or pull requests, or reach me out for any suggestions, help or bug report.
