import { Button, Input } from "antd";
import React, { useState } from "react";
function WebWorker() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result1, setResult1] = useState<number | null>(null);
  const [result2, setResult2] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [threadTime, setThreadTime] = useState<number | null>(null);
  const [workerTime, setWorkerTime] = useState<number | null>(null);

  const calculateSumInMainThread1 = () => {
    const start = performance.now();
    let result = 0;
    for (let i = 0; i <= num1; i++) {
      result += i;
    }
    const end = performance.now();
    setResult1(result);
    setThreadTime(end - start);
  };

  const calculateSumWithWorker1 = () => {
    setLoading(true);
    const worker = new Worker(new URL("./worker.js", import.meta.url));
    const start = performance.now();
    worker.postMessage({ num1 });
    worker.onmessage = (e) => {
      const end = performance.now();
      setResult1(e.data);
      setWorkerTime(end - start);
      setLoading(false);
      worker.terminate();
    };
  };

  const calculateSumInMainThread2 = () => {
    let result = 0;
    for (let i = 0; i <= num2; i++) {
      result += i;
    }
    setResult2(result);
  };

  const calculateSumWithWorker2 = () => {
    setLoading(true);
    const worker = new Worker(new URL("./worker.js", import.meta.url));
    worker.postMessage({ num2 });
    worker.onmessage = (e) => {
      setResult2(e.data);
      setLoading(false);
      worker.terminate();
    };
  };

  return (
    <div>
      <Input
        style={{ width: "300px" }}
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <Button onClick={calculateSumInMainThread1} disabled={loading}>
        使用主线程计算
      </Button>
      <Button onClick={calculateSumWithWorker1} disabled={loading}>
        使用webWorker线程
      </Button>
      {result1 !== null && <h2>结果: {result1}</h2>}
      {/* {threadTime !== null && <p>主线程耗时: {threadTime.toFixed(2)} ms</p>}
      {workerTime !== null && (
        <p>webWorker线程耗时: {workerTime.toFixed(2)} ms</p>
      )} */}

      <Input
        style={{ width: "300px" }}
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <Button onClick={calculateSumInMainThread2}>使用主线程计算</Button>
      <Button onClick={calculateSumWithWorker2}>使用webWorker线程</Button>
      {result2 !== null && <h2>结果: {result2}</h2>}
    </div>
  );
}

export default WebWorker;
