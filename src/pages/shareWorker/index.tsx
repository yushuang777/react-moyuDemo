import React, { useEffect, useState } from "react";

// function Index() {
//   const click = () => {
//     const sharedWorker = new SharedWorker(
//       new URL("./sharedWorker.js", import.meta.url)
//     );
//     sharedWorker.port.postMessage("getData");
//     // //线程监听消息
//     sharedWorker.port.onmessage = (e) => {
//       console.log("接收信息", e.data);
//     };
//   };
//   return (
//     <div>
//       <button onClick={click}>触发</button>
//     </div>
//   );
// }

// export default Index;

const Index: React.FC = (props) => {
  const [sharedWorker, setSharedWorker] = useState<SharedWorker | null>(null);

  useEffect(() => {
    const worker = new SharedWorker(
      new URL("./sharedWorker.js", import.meta.url),
      "sharedWorker"
    );
    setSharedWorker(worker);
  }, []);

  const click = () => {
    if (sharedWorker) {
      // 线程监听消息
      sharedWorker.port.postMessage("hello");
      sharedWorker.port.onmessage = (e: MessageEvent) => {
        console.log("接收信息", e.data);
      };
    } else {
      console.error("Shared Worker 尚未初始化");
    }
  };

  return (
    <div>
      <button onClick={click}>触发</button>
    </div>
  );
};

export default Index;
