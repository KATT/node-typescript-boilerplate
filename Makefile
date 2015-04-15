default: setup run

.PHONY: clean build build-test run test setup


clean:
	find . -name "*.js" -type f -not \( -path "./node_modules/*" \) -not -name "Gruntfile.js" -delete
	find . -name "*.js.map" -type f -not \( -path "./node_modules/*" \) -delete


build:
	./node_modules/grunt-cli/bin/grunt ts:buildApp


build-test:
	./node_modules/grunt-cli/bin/grunt ts:buildTest


run: clean build build-test
	./node_modules/foreman/nf.js start --procfile Procfile.dev


test: clean build build-test
	./node_modules/mocha/bin/mocha --recursive


setup:
	npm install
