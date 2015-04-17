var TemplateNode = require('../');

var ac = new AudioContext();
var limiter = ac.createGain();
limiter.gain.value = 0.25;
limiter.connect(ac.destination);

var node = TemplateNode(ac);
node.connect(limiter);


