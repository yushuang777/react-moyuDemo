import { Button, Progress } from "antd";
import React, { useState } from "react";

function ProgressDemo(props) {
  const [percent, setPercent] = useState(0);

  const upload = () => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        return prev + 1;
      });
    }, 100);
  };

  return (
    <>
      <Progress type="circle" percent={percent} />
      <Button onClick={upload}>上传</Button>
    </>
  );
}

export default ProgressDemo;
