import { Button, Form, Input, Select } from 'antd';
import React from 'react';
function YsTest(props) {
  function memoize(fn) {
    const cache = {};
    return function (...args) {
      const key = args.join(',');
      if (cache[key]) {
        console.log('Returning from cache:', key);
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }

  // 示例：计算斐波那契数列
  function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }

  const count = () => {
    const memoizedFib = memoize(fib);

    console.log(memoizedFib(40)); // 计算并缓存结果
    console.log(memoizedFib(40)); // 从缓存中获取结果
  };

  return (
    <>
      {' '}
      <Button onClick={() => count()}>计算</Button>
    </>
  );
}

export default YsTest;
