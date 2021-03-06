'use strict';

// Import dependencies
const { series, parallel } = require("gulp");

// Import tasks
const { clean } = require("./tasks/clean");
const { lint } = require("./tasks/lint");
const { babel } = require("./tasks/babel");

global.projectRoot = __dirname;

// (Re-)export tasks that should be  available from cli
module.exports.clean = clean;
module.exports.lint = lint;

// Basic compile workflow
const compile = parallel(babel);
module.exports.compile = compile;
// Build task that cleans output and compiles
module.exports.build = series(clean, lint, compile);
// Build, but with coverage
module.exports.buildCoverage = series(clean, lint, compile);

// Set build task as default task
module.exports.default = module.exports.build;
