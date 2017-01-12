import angular from 'angular';
import videoPlayer from './videoPlayer/videoPlayer.component';

angular
    .module('ng-test', [])
    .component('videoPlayer', videoPlayer);
