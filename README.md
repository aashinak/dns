# Simple DNS Server Using Node.js
- Simple DNS server implementation using Node.js and `dns-packet`.
## Run it on Docker
- ````docker run -d -p 53:53/udp aashinak/dns-server:latest````
- Use the `dig` command to query your DNS server
- ```dig @127.0.0.1 -p 53 example.com```
## Medium post
[How to Build a Simple DNS Server Using Node.js](https://medium.com/@aashin9605/how-to-build-a-simple-dns-server-using-node-js-05f9f899f011)
