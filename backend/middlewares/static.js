const express = require('express');
const path = require('path');
const rootDir = require('../utils/root-dir');

const static = express.static(path.join(rootDir, 'public'));

module.exports = static;
