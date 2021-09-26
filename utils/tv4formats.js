const _ = require("lodash");
const mongoose = require("mongoose");

/**
 * Extra formats for tv4 JSON schema validator. You can add your validators here as well.
 * @type {Object}
 */
module.exports = {
  // string with something to read. i.e not empy or blank
  nonEmptyOrBlank: (data) => {
    return data.length > 0 && !/^\s+$/.test(data)
      ? null
      : "Should not be empty or blank.";
  },


  positiveNumeric: function (data) {
    return data >= 0 ? null : "Should be positive number";
  },


};
