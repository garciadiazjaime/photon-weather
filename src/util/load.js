const request = require('request-promise-native')

const load = (props, weather) => {
  console.log('apiUrl', props.apiUrl)
  const options = {
    method: 'POST',
    uri: `${props.apiUrl}weather`,
    body: {
      weather
    },
    json: true // Automatically stringifies the body to JSON
  };
  return request(options)
};

module.exports = load
