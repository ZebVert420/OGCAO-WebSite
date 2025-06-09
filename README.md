# OGCAO WebSite

This repository contains a simple static website. A Jest-based test suite is provided to verify the behaviour of the loader animation.

## Setup

```bash
npm install
```

## Running tests

```bash
npm test
```

This will execute the test located in `tests/loader.test.js` which ensures that the `#loader` element receives the `hidden` class after one second when the page loads.
