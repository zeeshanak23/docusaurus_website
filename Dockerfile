FROM ubuntu:22.04

RUN mkdir -p /website 

WORKDIR /app

COPY . .

RUN apt-get update

RUN apt-get install curl -y 

RUN curl -s https://deb.nodesource.com/setup_18.x | bash

RUN apt-get install -y nodejs

RUN apt-get install git -y  


RUN git clone https://zeeshanak23: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@github.com/zeeshanak23/docusaurus_website.git

RUN cd docusaurus_website/
RUN npm install -g npm@9.6.7
RUN npm install
EXPOSE 3000


CMD ["npm","run","start","--","--host","0.0.0.0"]