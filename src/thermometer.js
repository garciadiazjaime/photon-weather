const Particle = require('particle-io')
const five = require('johnny-five')
const Weather = require('j5-sparkfun-weather-shield')(five)

const config = require('./config')
const load = require('./util/load')

const props = {
  apiUrl: config.get('api.url'),
  token: config.get('token'),
  deviceId: config.get('deviceId'),
  freq: config.get('photon.freq'),
  elevation: config.get('photon.elevation')
}

const board = new five.Board({
  io: new Particle({
    token: props.token,
    deviceId: props.deviceId
  })
})

const transform = data => ({
  celsius: data.celsius,
  fahrenheit: data.fahrenheit,
  pressure: data.pressure,
  relativeHumidity: data.relativeHumidity,
  lightLevel: data.lightLevel
})

const startSensor = () => {
  console.log('Connected')

  var weather = new Weather({
    variant: 'PHOTON',
    freq: props.freq,
    elevation: props.elevation
  })

  weather.on('data', function() {
    const data = transform(this)
    load(props, data)
      .then(console.log)
  })
}

board.on('ready', startSensor)
