import { Button } from "antd";
import React, { useState, useEffect, useRef, useCallback } from "react";
import debounce from "lodash/debounce";

const scrollDemo = [
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
  { name: "last" },
  { name: "test" },
];

function AutoScroll() {
  const [list, setList] = useState(scrollDemo);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const loadMoreData = useCallback(() => {
    if (list.length >= 50) return;
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setList((prevList) => [
        ...prevList,
        { name: `Item ${prevList.length + 1}` },
        { name: `test ${prevList.length + 1}` },
      ]);
      setLoading(false);
    }, 1000);
  }, [loading]);

  const handleScroll = useCallback(
    debounce(() => {
      if (containerRef.current) {
        const { clientHeight, scrollTop, scrollHeight } = containerRef.current;
        if (clientHeight + scrollTop >= scrollHeight - 10) {
          loadMoreData();
        }
      }
    }, 200),
    [loadMoreData]
  );

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [list]);

  return (
    <>
      <div
        ref={containerRef}
        style={{ maxHeight: "500px", overflowY: "scroll" }}
        onScroll={handleScroll}
      >
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
      {loading ? "加载中..." : "加载完毕"}
    </>
  );
}

export default AutoScroll;
