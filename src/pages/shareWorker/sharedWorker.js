// sharedWorker.js

// self.onconnect = (e) => {
//   console.log("Worker connected:", e);
//   const port = e.ports[0];
//   port.onmessage = (e) => {
//     console.log("Message received:", e.data);
//     const workerResult = `Result: ${e.data}`;
//     port.postMessage(workerResult);
//     console.log(workerResult);
//   };
// };

const pages = [];
const ports = [];

self.onconnect = (e) => {
  const port = e.ports[0];
  ports.push(port);

  // 获取页面标识
  const page = Math.random().toString(36).substr(2);
  port.postMessage(page);
  pages.push(page);

  console.log(pages);
  // 监听消息
  port.onmessage = (e) => {
    const index = ports.indexOf(port);
    const page = pages[index];
    port.postMessage(page);
  };
};

// const uids = [];
// const ports = [];

// onconnect = (e) => {
//   const port = e.ports[0];
//   ports.push(port);

//   // 获取页面标识
//   const uuid = Math.random().toString(36).substr(2);
//   uids.push(uuid);
//   port.postMessage({
//     type: "connect",
//     uuid: uuid,
//   });

//   // 监听消息
//   port.onmessage = (e) => {
//     const index = ports.indexOf(port);
//     const uid = uids[index];
//     // 群发消息
//     broadcast({
//       type: "message",
//       sender: uid,
//       message: e.data.message,
//     });
//   };

//   //   //销毁
//   //   if (e.data.type === "close") {
//   //     const index = ports.indexOf(port);
//   //     ports.splice(index, 1);
//   //     return;
//   //   }
// };

// // 群发消息
// const broadcast = (data) => {
//   ports.forEach((port) => {
//     port.postMessage(data);
//   });
// };
