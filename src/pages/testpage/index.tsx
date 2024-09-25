import React, { useEffect, useState } from "react";
const Index: React.FC = (props) => {
  const [sharedWorker, setSharedWorker] = useState<SharedWorker | null>(null);

  useEffect(() => {
    const worker = new SharedWorker(
      new URL("../shareWorker/sharedWorker.js", import.meta.url)
    );
    setSharedWorker(worker);
  }, []);

  const click = () => {
    if (sharedWorker) {
      // 线程监听消息
      sharedWorker.port.postMessage("hi");
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
