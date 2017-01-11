import angular from 'angular';
import videoStream from './videoStream/videoStream.component';

angular
    .module('ng-test', [])
    .component('videoStream', videoStream);