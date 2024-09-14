import React, { useState } from "react";
import "./index.css";

const List = [
  { name: "推送", value: 1 },
  { name: "日程", value: 2 },
  { name: "绳网等级", value: 3 },
];
function Taber(props) {
  const [value, setValue] = useState(1);
  return (
    <div
      style={{
        margin: 20,
        background: "black",
        width: "500px",
        height: "500px",
      }}
    >
      <div className="wrap">
        {List.map((item, index) => {
          return (
            <div
              className={value === item.value ? "node-active" : "node"}
              onClick={() => setValue(item.value)}
              key={item.value}
            >
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Taber;
