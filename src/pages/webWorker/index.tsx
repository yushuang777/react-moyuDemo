import { Button } from "antd";
import React from "react";
// import Worker from "./worker.js?worker";
interface DataItem {
  id: number;
  value: number;
}
function WebWorker(props) {
  // 模拟生成大数据
  const generateData = () => {
    const data: DataItem[] = [];
    for (let i = 0; i < 10000000; i++) {
      const item: DataItem = {
        id: i,
        value: Math.random() * 100,
      };
      data.push(item);
    }
    return data;
  };

  // 检测函数执行的时间
  const getTime = () => {
    const startTime = Date.now();
    generateData();
    const endTime = Date.now();
    // 输出执行时间
    console.log(endTime - startTime);
  };

  const getWorkerTime = () => {
    // const worker = new Worker();
    var worker = new Worker(new URL("./worker.js", import.meta.url));
    worker.postMessage(Date.now());
    worker.onmessage = function (event) {
      console.log(event.data);
      worker.terminate();
    };
  };
  return (
    <div>
      <Button onClick={() => getTime()}>Start</Button>
      <Button onClick={() => getWorkerTime()}>使用webWorker</Button>
    </div>
  );
}

export default WebWorker;
