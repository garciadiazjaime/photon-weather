var convict = require('convict');
 
// Define a schema
var config = convict({
  token: {
    doc: "Device token",
    format: String,
    default: "8eef14cdce17508281f1b63dc45e6b5ec4fce750",
    env: "TOKEN",
  },
  deviceId: {
    doc: "Device ID",
    format: String,
    default: "300023001047353138383138",
    env: "DEVICE_ID"
  },
  photon: {
    freq: {
      doc: "Photon frequency",
      format: "int",
      default: 10000,
      env: "PHOTHON_FREQUENCY"
    },
    elevation: {
      doc: "Photon elevation",
      format: "int",
      default: 10,
      env: "PHOTHON_ELEVATION"
    }
  },
  api: {
    url: {
      doc: "API URL",
      format: String,
      default: "http://0.0.0.0:3030/",
      env: "API_URL"
    }
  }
});
 
// Perform validation
config.validate({allowed: 'strict'});
 
module.exports = config;
