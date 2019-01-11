FROM node:boron

# Create app directory
RUN mkdir -p /home/audrey/Cloud-Project-1/CloudAssmt3-master/CloudAssmt3-master

WORKDIR /home/audrey/Cloud-Project-1/CloudAssmt3-master/CloudAssmt3-master

# Install app dependencies
COPY package.json /home/audrey/Cloud-Project-1/CloudAssmt3-master/CloudAssmt3-master
RUN npm install

# Bundle app source
COPY . /home/audrey/Cloud-Project-1/CloudAssmt3-master/CloudAssmt3-master

EXPOSE 1337
CMD [ "npm", "install" ]
CMD [ "npm", "start" ]
RUN ["chmod", "a+x", "/home/audrey/Cloud-Project-1/CloudAssmt3-master/CloudAssmt3-master"]
