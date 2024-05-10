# Creating Docker Volumes and Need

By default containers are ephemeral . So if any data needs to persisted , that can be mounted to volume and same data can be retreived from volume

Create volume 

docker volume create nodejs-app-logger-volume 

We can't store directly data in to volume , need to mount to docker conatiner and mount , later even after containers gets deleted , we can read the content of volume by again mounting to different container .

In this example , we are mounting nodejs-app-logger-volume to two different conatiners called node-service-logger1 and node-service-logger2 . These node services writes data to /usr/src/app/logs/app.log file  if we hit this service using http://localhost:3001or 3002/log/<loggingstement>. 

Since same volume is attached and its two way synch (whatver data  in volume will be available in container ; wahtever we write in container mnount path reflects to volume) - and attached to two different conatiners logger1 serice logs will be available in logger2 and vice versa.
<img width="675" alt="Screen Shot 2024-05-10 at 4 12 00 PM" src="https://github.com/VamsiPothireddy/docker-handson/assets/47288461/29199a41-856c-4533-94c7-99d89a952fca">


### Create conatiners for logger services   

docker run -d --name node-service-logger1 -p 3001:3000 --mount source=nodejs-app-logger-volume,target=/usr/src/app/logs node-service-logger1 

http://localhost:3001/log/logfromservice1-incontainer-1


docker run -d --name node-service-logger2 -p 3002:3000 --mount source=nodejs-app-logger-volume,target=/usr/src/app/logs node-service-logger2 

http://localhost:3002/log/logfromservice2-incontainer-1

Above commands creates conatiners and mounts to nodejs-app-logger-volume , now if we read app.log file from any conatiner both logs will present.



Now lets delete both conatainers and create another new continers and attach volume and we should be able to see previous logs

docker stop node-service-logger1

docker rm node-service-logger1

docker stop node-service-logger2

docker rm node-service-logger2 

### create new nginx conatiner and attach existing volume
docker run -d --name my-nginx-container -p 80:80 -v nodejs-app-logger-volume:/usr/share/nginx/html nginx:alpine

