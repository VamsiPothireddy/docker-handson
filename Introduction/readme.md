# Introduction

**Difference between VM and Containers**

1) VM used hypoervisors to create isolation on host machine and sharing dedicated resources and have complete isolation. Conctainer (lets say docker) can be installed as same package irrespective of host machine , where as in VM we need compatable Hypervisor , Mac needs one supervisor and may not be supported for windows

2) Containers are lieght weight as they don't use complete OS , They have isolation with needed resources from OS and system librarires.
 Image = Application (helloword)+Software(Nodejs)+App dependencies (fs module , express module etc)+ light weight OS (alphine version of linux)
