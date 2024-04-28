# Multistage build and Distroless images


1) In general if i have to run simple node JS app in debain  , i can take node node:20 images which comes with deebian OS and Node js installed and I can simple run using [Dockerfile](https://github.com/VamsiPothireddy/docker-handson/blob/main/multistage-buildAndDistroless/examples/without-multistagebuild/Dockerfile)

This will come with rich os many debian binaries 

Below is screen shot when i get in to conatiner created using this docker file without multi stage 

<img width="950" alt="Screen Shot 2024-04-28 at 7 37 41 AM" src="https://github.com/VamsiPothireddy/docker-handson/assets/47288461/254e77de-50aa-41ea-81b3-9e9616877534">





2) There is another conttainer created using multi stage build using Distroless images . In multi stage building we take rich image and do build , here debain with node js has been taken but take another very limited os image (called Distoless) with node js and copy the build . So in distroless image only application and node js software will be there and very very limted OS realted binaries . We can't even bash ,list commands in this image .Infact once container creaated we cant even do exec it mode as bash or sh is not installed , just to show structure inside conatainer  , we copied whole container to local and i compared etc folder of container created using without multistage and conatiner created with mutlistage 

<img width="1422" alt="Screen Shot 2024-04-28 at 8 01 52 AM" src="https://github.com/VamsiPothireddy/docker-handson/assets/47288461/720457c4-a4c0-4c9e-aee5-36b8c072846c">

