## Node.js CLI search client for [Algolia](https://www.algolia.com)
This is a simple command line tool for sending search queries to Algolia.

## What is Algolia?

Algolia is a hosted search solution. It allows you send your data in a structured way to be indexed and then queried with blazing speed. You could read their documentation at https://www.algolia.com/doc.

## Installation

Execute these commands to install the tool as global CLI application:
```bash
cp .env.dist .env
npm install -g .
```
Set all variables in the .env file.

## Usage
The tool is accessible by executing "algolia" in the command line. This action will show all supported parameters.

Examples (assuming you use the sample index GEO):
```bash
# Show search results count for term "bulgaria"
algolia -q bulgaria -c

# Limit the results displayed on the terminal. Useful to review the available results.
algolia -q bulgaria -l 1

# List only field "airport_id" from the resultset (default limit: 20)
algolia -q bulgaria -f airport_id

# List only field "airport_id" from the resultset for up to 50 results
algolia -q bulgaria -f airport_id -l 50

# Show search results for term "bulgaria" (default limit: 20) 
algolia -q bulgaria
```


## Useful resources

- You could use [the official Algolia JavaScript client](https://github.com/algolia/algoliasearch-client-js) which could run in both Node.js and the browser.
- There is an [offical Algolia CLI client](https://github.com/algolia/algoliasearch-client-cmd) already, but it is written in Bash, it is useful mainly for uploading content, instead of receiving it. It returns the results in plain-text JSON instead of something useful to the user on the console.
- If you [sign up for Algolia](https://www.algolia.com/users/sign_up) there is a forever-free plan with a tutorial which could fill up your indices with test data. You could use it to test your client without taking the time to import data yourself.


## License
MIT

## Author
Stefan Eroteev