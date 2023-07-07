FROM ubuntu:22.04

RUN mkdir -p /website 

RUN cd website/

COPY . .

RUN apt update

RUN apt-get install curl -y 

RUN curl -s https://deb.nodesource.com/setup_18.x | bash

RUN apt-get install -y nodejs

RUN apt-get install git -y  

# RUN git clone $GITHUB_PROJECT_URL
RUN git clone https://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@github.com/zeeshanak23/dazko.git

RUN cd dazko/fitness-dazko

RUN rm -r node_modules
RUN npm install
RUN npm cache clean --force
RUN npm install -g npm
RUN npm install


CMD ["npm","run","start","-- --host","0.0.0.0"]