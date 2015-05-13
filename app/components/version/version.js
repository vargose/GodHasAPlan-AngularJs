'use strict';

angular.module('GodHasAPlan.version', [
  'GodHasAPlan.version.interpolate-filter',
  'GodHasAPlan.version.version-directive'
])

.value('version', '0.1');
