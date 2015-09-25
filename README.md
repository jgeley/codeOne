# Angular Template
Template for Angular apps used for hackathons

**Currently under development.**


## Install and Run local windows server
- Download and unzip the project
- Intall node.js https://nodejs.org/download/
- Intall mongodb and start it
  - Tutorial found here - http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/
- Run npm install
- Run "node server.js"


## Deploy to AWS

 - Sign up for AWS (Free Tier if possible)
 - Go to your EC2 dashboard and create an Instance
    - Search for node.js on the AWS Marketplace tab and click on the MEAN powered by Bitnami
 - Use the Micro instance t1.micro
 - On the configure security group tab add a Custom TCP Rule on port 8080 which is where the app will run
 - Launch the instance and make sure to download the .pem
 - ssh -i <location-of-pem> bitnami@<public-dns>
 - run "git clone https://github.com/jgeley/AngularTemplate"
 - go into AngularTemplate folder and run npm install
 - start mongodb
    - run "mkdir ~/data"
    - run "mongod --dbpath /home/bitnami/data"
 - run "node server.js" and you sould see the app start and say it is running on port 8080
 - Once the instance is up find the public DNS and go to: <public-dns>:8080
 