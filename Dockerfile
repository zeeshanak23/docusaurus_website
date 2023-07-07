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
RUN git clone https://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@github.com/zeeshanak23/docusaurus_website.git

RUN cd docusaurus_website/

RUN npm install --global docusaurus-init
RUN npm update docusaurus

CMD ["npm","run","start","-- --host","0.0.0.0"]