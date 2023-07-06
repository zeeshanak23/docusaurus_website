FROM ubuntu:22.04

ARG TOKEN
ARG USERNAME

ENV GITHUB_TOKEN ${TOKEN}
ENV GITHUB_USERNAME ${USERNAME}
ENV GITHUB_PROJECT_URL https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/zeeshanak23/docusaurus_website.git
# COPY . .

RUN mkdir -p /website 

WORKDIR /website

RUN apt update

RUN apt-get install curl -y 

RUN curl -s https://deb.nodesource.com/setup_18.x | bash

RUN apt-get install -y nodejs

RUN apt-get install git -y  

RUN git clone $GITHUB_PROJECT_URL
# RUN git clone https://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@github.com/zeeshanak23/docusaurus_website.git

RUN cd docusaurus_website

RUN apt install npm


# WORKDIR /docusaurus_website
# EXPOSE 3000
# COPY ./entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
CMD ["npm","run","start"]