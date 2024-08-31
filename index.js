const dgram = require("node:dgram");
const dnsPacket = require("dns-packet");
const { type } = require("node:os");

const db = {
  "example.com": {
    type: "A",
    data: "74.72.22.29",
  },
};

const server = dgram.createSocket("udp4");
server.on("message", (msg, rinfo) => {
  const incomingReq = dnsPacket.decode(msg);
  const ipFromDb = db[incomingReq.questions[0].name];
  const ans = dnsPacket.encode({
    type: "response",
    id: incomingReq.id,
    flags: dnsPacket.AUTHORITATIVE_ANSWER,
    questions: incomingReq.questions,
    answers: [
      {
        type: ipFromDb.type,
        class: "IN",
        name: incomingReq.questions[0].name,
        data: ipFromDb.data,
      },
    ],
  });
  server.send(ans, rinfo.port, rinfo.address);
  console.log({
    questions: incomingReq.questions[0].name,
    rinfo,
  });
});

server.bind(53, () => {
  console.log("Server running on port 53");
});
