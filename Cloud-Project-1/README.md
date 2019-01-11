# Cloud-Project-1
Dockerized HW3
the output.tar.gz file should be submitted in canopy.

#The steps below are to build, run, save, and load a Docker image:

"docker build -t becker/app ."

"docker run -p 1337:1337 -d becker/app"

"docker save b3f712bc7e99 | gzip > output.tar.gz"

#Loading in the output.tar.gz file:

"docker load < output.tar.gz" 

"docker run -d -p 7001:3000 b3f712bc7e99 "


references: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ 
