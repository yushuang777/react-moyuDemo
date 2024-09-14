import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./components/input.tsx";
import React from "react";
import "./index.css";
function Framer() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="example">
      <div>
        <motion.div
          className="box"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div className="inputs">
        <Input value={x} set={setX} />
        <Input value={y} set={setY} />
        <Input value={rotate} set={setRotate} min={-180} max={180} />
      </div>
    </div>
  );
}

export default Framer;
