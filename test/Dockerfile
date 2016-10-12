FROM jimexist/node-yarn:6

RUN mkdir -p /opt/app

ADD package.json yarn.lock /opt/app/

WORKDIR /opt/app

RUN yarn

ADD . /opt/app

EXPOSE 3000

CMD ["npm", "start"]
