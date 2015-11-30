require('angular/angular');
var angular = window.angular;

var bearStreamApp = angular.module('BearStreamApp', []);
require('./controllers/controllers')(bearStreamApp);
require('./bears/bears')(bearStreamApp);
