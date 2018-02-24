# Docker commands
* docker build -t sreeram/ecmascrypt .
* docker run -p 5000:5000 -d sreeram/ecmascrypt
* docker logs <containerId>
* docker exec -it <containerId> /bin/bash
* docker images
* docker ps
* docker stop <containerId>
* docker ps -aq
* docker stop $(docker ps -aq)
* docker rm $(docker ps -aq)
* docker rmi <imageID>