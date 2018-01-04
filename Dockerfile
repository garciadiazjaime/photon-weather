FROM node:boron

ADD package.json /tmp/package.json

RUN cd /tmp && npm install

RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app

ADD . /usr/src/app

EXPOSE 3090

CMD [ "node", "./src/thermometer.js" ]
