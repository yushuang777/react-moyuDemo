import React from "react";
import routeList from "../../route";
import "./index.css";
function index(props) {
  return (
    <div>
      {
        //@ts-ignore
        routeList.map((item, index) => {
          return <div key={index}>{item.path}</div>;
        })
      }
    </div>
  );
}

export default index;
