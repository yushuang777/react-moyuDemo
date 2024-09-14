import React, { useEffect, useState } from "react";
import { createWorker } from "./workerHelper";

function WebWorkerBlob(props) {
  const [computeResult, setComputeResult] = useState(null);
  const [processResult, setProcessResult] = useState(null);
  useEffect(() => {
    const computeWorker = createWorker();
    const processWorker = createWorker();
    computeWorker.onmessage = (e) => {
      setComputeResult(e.data);
    };
    processWorker.onmessage = (e) => {
      setProcessResult(e.data);
    };
    computeWorker.postMessage({ task: "test1", data: 10 });
    processWorker.postMessage({ task: "test2", data: "测试" });
    return () => {
      computeWorker.terminate();
      processWorker.terminate();
    };
  }, []);
  return (
    <div>
      <h1>Compute Result: {computeResult}</h1>
      <h1>Process Result: {processResult}</h1>
    </div>
  );
}

export default WebWorkerBlob;
