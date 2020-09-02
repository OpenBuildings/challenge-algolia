#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");
const dotenv = require('dotenv');
const chalk = require('chalk');

// config CLI options
const options = yargs
    .usage("Usage: -q <term>")
    .option("q", {alias: "query", describe: "Search term", type: "string", demandOption: true})
    .option("f", {alias: "field", describe: "List specific field from resultset", type: "string"})
    .option("l", {alias: "limit", describe: "Limit amount of results (default: 20)", type: "integer"})
    .option("c", {alias: "count", describe: "Show results count", type: "boolean"})
    .argv;

// config ENV variables
dotenv.config();
const appId = process.env.APPLICATION_ID;
const apiKey = process.env.API_KEY;
const index = process.env.INDEX;

if (appId === undefined || apiKey === undefined) {
    console.log(`Copy .env.dist to .env and specify APPLICATION_ID and API_KEY`);
    process.exit(1);
}

// config representation options
const boxenOptions = {
    borderStyle: "classic"
};

console.log(`Searching for ` + chalk.green(options.query) + `...`);
const url = `https://${appId}-3.algolianet.com/1/indexes/${index}/query`
axios.post(url, {
    query: options.query,
    hitsPerPage: options.limit ?? 20
}, {
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Algolia-Application-Id": appId,
        "X-Algolia-API-Key": apiKey
    }
}).then(res => {
    if (options.field) {
        console.log(`List field ` + chalk.green(options.field) + ` from resultset:`);
        for (record of res.data.hits) {
            console.log(record.name);
        }
    } else if (!options.count) {
        console.log(res.data.hits);
    }

    if (options.count) {
        console.log(`Results found: ` + chalk.green(res.data.nbHits));
    }

}).catch(function (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
});