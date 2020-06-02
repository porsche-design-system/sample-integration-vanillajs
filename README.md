# VanillaJS - Sample integration with Porsche Design System

This is project shows the example usage of the Porsche Design System Components in VanillaJS.
See also the [deployed project](https://porscheui.github.io/sample-integration-vanillajs).

For further documentation regarding designing websites and the correct usage of the components, 
you can visit our website https://designsystem.porsche.com/.


# Introduction

This is project shows the example usage of the Porsche Design System Components in VanillaJS.
Documentation about the project and information about Porsche Design System you can find [here](https://designsystem.porsche.com)

## Available Scripts

In the project directory, you can run:

### `yarn serve`

Runs the app in static mode.
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

---

## Setup

### Requirements
* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Docker](https://www.docker.com) ([see below](#docker-installation-steps))

### Getting started
1. Clone [`sample-integration-vanillajs` repository](https://github.com/porscheui/sample-integration-vanillajs)
1. Switch to __project root directory__
1. Execute command `npm login --registry=https://porscheui.jfrog.io/porscheui/api/npm/npm/`
1. Enter username, password (Artifactory API Key, __not__ Artifactory password!) and e-mail address when asked in terminal
1. Execute `cat ~/.npmrc`, find following line `//porscheui.jfrog.io/porscheui/api/npm/npm/:_authToken=` and copy the generated _npm registry token_ from the file to your clipboard
1. Create an `.env` file within __project root directory__ (never push this file to Git because it will contain secrets – by default it's ignored by `.gitignore`)
1. Add _npm registry token_ in following format `PORSCHE_NPM_REGISTRY_TOKEN=YOUR_TOKEN_GOES_HERE`
1. Make sure that Docker app is running
1. Run `./docker.sh run-install` - this may take up to several minutes at first start depending on your internet connection

*Note: `./docker.sh run-install` should be executed after every pull.*

### Docker installation steps
1. Register your Docker account on [Hub-Docker](https://hub.docker.com)
1. Download Docker app locally on your machine and login
1. Start Docker

### Start
1. Switch to __project root directory__
1. Run `./docker.sh run-start` (starts test server for sample-integration-vanillajs itself)

### Build
1. Switch to __project root directory__
1. Run `./docker.sh run-build` (builds releasable sample-integration-vanillajs npm package)
