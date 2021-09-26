const _ = require("lodash");
const tv4 = require("tv4");

// add formats
tv4.addFormat(require("./tv4formats.js"));

/**
 * Validate data against schema.
 * Throws API error if data is invalid.
 *
 * @param {*} data data to validate.
 * @param {object} schema tv4 schema object.
 */
module.exports = function validate(data, schema,res) {
  // default options
  schema = _.defaults(schema, { additionalProperties: true });

  // validate
  const result = tv4.validateResult(data, schema, false, true);

  // proceed if valid
  if (result.valid) {
    return;
  }

  // extract error message
  let message;
  if (_.has(result.error, "dataPath") && result.error.dataPath.length) {
    message = `${result.error.message} at ${result.error.dataPath}`;
  } else {
    message = result.error.message;
  }

  res.status(400).json({ success: false, message: message });
  // send validation error with message
  throw new Error('Invalid Input');
  
};
