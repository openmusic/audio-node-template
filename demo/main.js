// Loads the Web Components polyfill, so people using browsers without
// built-in Web Components support won't get errors
require('webcomponents-lite');

require('openmusic-oscilloscope').register('openmusic-oscilloscope');

var ac = new AudioContext();
var limiter = ac.createDynamicsCompressor();
limiter.connect(ac.destination);

var analyser = ac.createAnalyser();
analyser.connect(limiter);

var oscilloscope = document.querySelector('openmusic-oscilloscope');
oscilloscope.attachTo(analyser);

// Change below depending on what your audio node needs to do:
var TemplateNode = require('../');
var node = TemplateNode(ac);
node.connect(analyser);
node.start();
