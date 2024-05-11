**Check existing networks**


docker network ls

<img width="439" alt="Screen Shot 2024-05-10 at 5 18 02 PM" src="https://github.com/VamsiPothireddy/docker-handson/assets/47288461/a3ddd9a9-4a09-4f69-b917-e9876bcb5116">


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

<img width="1440" alt="Screen Shot 2024-05-11 at 7 48 26 AM" src="https://github.com/VamsiPothireddy/docker-handson/assets/47288461/41b44ef4-6ea5-4cb1-8ad2-9739e596ac8c">


