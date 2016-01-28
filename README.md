# [Clippings.com](https://clippings.com) [Algolia](https://www.algolia.com) challenge

Clippings' challenge to developers to create a Node.js CLI search client for Algolia

This is a small task sent to potential hires for evaluation.

## What is Algolia?

Algolia is a hosted search solution. It allows you send your data in a structured way to be indexed and then queried with blazing speed. You could read their documentation at https://www.algolia.com/doc.

## The Task

There are a lot of integrations for Algolia, including their awesome dashboard which allows you to search and preview your indices in the browser. However there is no command-line search client which would present the results properly to the user (usually a developer).

The task is to build a Node.js npm package which could be installed globally as a CLI client.  
It would be great to have:

- simple configuration (e.g. environment variables) for API key and application ID;
- simple help in the CLI describing the possible commands;
- a CLI interface to perform queries and present them in a readable manner to the user;
- speed;
- a cool effect - whether it would be colours, interactive search, piping ability, filtering the results using Algolia facets or anything you can come up with.

## Some pointers

- A good design is never easy to achieve, but try to separate the CLI code for input and output from the logic which performs the search and processes the results.
- A full-blown documentation is unnecessary for this kind of package, but try to have a README stating what the package is for, how to install it, how to use it, license and author information.

## Useful resources

- You could use [the official Algolia JavaScript client](https://github.com/algolia/algoliasearch-client-js) which could run in both Node.js and the browser.
- There is an [offical Algolia CLI client](https://github.com/algolia/algoliasearch-client-cmd) already, but it is written in Bash, it is useful mainly for uploading content, instead of receiving it. It returns the results in plain-text JSON instead of something useful to the user on the console.
- If you [sign up for Algolia](https://www.algolia.com/users/sign_up) there is a forever-free plan with a tutorial which could fill up your indices with test data. You could use it to test your client without taking the time to import data yourself.


## Evaluation

The most important thing is the client to be working and usable. It is optional, but recommended to be tested and linted in an automatic manner.

---

The resulting work should have a license compatible with BSD-3-Clause or MIT, and will remain under your own copyright to do as you wish, present elsewere or promote as your own open-source project.

Good luck!
