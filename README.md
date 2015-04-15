# node-typescript-boilerplate
===


## Languages

* TypeScript

## Dependencies / tools

* node.js
* redis


## Usage

### Installation

*Assuming you have or know how to install [npm](https://npmjs.org/).*

Install project dependencies

```
make setup
```

### Code

#### Run project:

Recommended using [Atom](https://atom.io/) with [atom-typescript](https://github.com/TypeStrong/atom-typescript).

```
make run
```


## Configuration

See [env.ts](app/env.ts) for environment variables.


#### Add npm module + TypesScript definition

Example:

```
npm install --save winston
tsd query winston -a install -r -o -b tsd
```

## Documentation

 -

## Team

* Developer: [Alex / Ajax / Gordo](https://github.com/KATT)
