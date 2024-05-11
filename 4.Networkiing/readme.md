### Check existing networks

docker network ls

By default it uses out of the box existing network bridge whcih brings up all conatainers cretaed in same prvite subnect (network ), so they can communicated each other via host network . 

If we want to make complete isolation , we can create custom network bridge - by doing this , conatiner gets created in differnt network

**Craete new network**:

docker network create -d bridge my_custom_bridgeNetwork  


Below is command to attach newly created custom network

docker run -d --name my-nginx-container_with_custom_network_bridge -p 81:80  --net=my_custom_bridgeNetwork nginx:alpine

Below screenshot refers , first two conatainers created uisng defaylt network fallows one subnect and nginx cinatiner has differnet subnet

docker inspect -f '{{json .NetworkSettings.Networks}}' node-service-logger2 | jq .

docker inspect -f '{{json .NetworkSettings.Networks}}' node-service-logger1 | jq .

docker inspect -f '{{json .NetworkSettings.Networks}}' my-nginx-container_with_custom_network_bridge | jq .

