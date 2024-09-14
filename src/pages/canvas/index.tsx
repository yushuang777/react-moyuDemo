import React, { useEffect } from "react";

function Canvas() {
  useEffect(() => {
    const cnv = document.getElementById("c") as HTMLCanvasElement;
    const cxt = cnv?.getContext("2d") as CanvasRenderingContext2D;
    cxt.fillStyle = "pink";
    cxt.fillRect(50, 50, 200, 100);
  }, []);
  return (
    <div>
      <canvas id="c" width="300" height="200"></canvas>
    </div>
  );
}

export default Canvas;
