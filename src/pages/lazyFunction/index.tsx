import { Button, Form, Input, Select } from 'antd';
import React, { useState } from 'react';
function LazyFunciton(props: any) {
  const [inputValue, setInputValue] = useState('');

  function lazyEvaluate(fn: { (a: any, b: any): number; (arg0: any): any }) {
    let result: any;
    let isEvaluated = false;
    return function(...args: any) {
      if (!isEvaluated) {
        result = fn(...args);
        isEvaluated = true;
      }
      return result;
    };
  }

  function dynamicsEvaluate(
    fn: { (a: any, b: any): number; (arg0: any): any },
    maxCacheSize = 100
  ) {
    const cache = {};
    return function(...args: any[]) {
      const key = args.join(',');
      if (cache[key]) {
        console.log('Returning from cache:', key);
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;

      // 如果缓存超过最大容量，则删除最旧的缓存项
      const keys = Object.keys(cache);
      if (keys.length > maxCacheSize) {
        delete cache[keys[0]]; // 删除最早的缓存项
      }
      return result;
    };
  }

  // 模拟需要大量计算的任务
  function slowMultiplyAndSum(a: any, b: any) {
    let total = 0;
    const iterations = 100000000;
    for (let i = 0; i < iterations; i++) {
      total += a * b * Math.random();
    }
    return total;
  }

  const count = () => {
    const lazyAdd = lazyEvaluate(slowMultiplyAndSum);

    console.log('开始计算...');
    console.log(lazyAdd(99999, 99999)); // 第一次计算，应该会有明显的延迟
    console.log('再次调用...');
    console.log(lazyAdd(99999, 99999)); // 第二次调用，应该直接返回缓存结果
    // console.log('再次调用...');
    // console.log(lazyAdd(6666, 6666));
  };

  const count2 = () => {
    const lazyAdd = dynamicsEvaluate(slowMultiplyAndSum);
    console.log('开始计算...');
    console.log(lazyAdd(99999, 99999)); // 第一次计算，应该会有明显的延迟
    console.log('再次调用...');
    console.log(lazyAdd(99999, 99999)); // 第二次调用，应该直接返回缓存结果
    console.log('再次调用...');
    console.log(lazyAdd(6666, 6666));
    console.log('再次调用...');
    console.log(lazyAdd(6666, 6666));
  };

  // const copy = () => {
  //   if (navigator.clipboard) {
  //     navigator.clipboard.writeText(inputValue);
  //   } else {
  //     const input = document.createElement('input');
  //     input.setAttribute('value', inputValue);
  //     document.body.appendChild(input);
  //     input.select();
  //     document.execCommand('copy');
  //     document.body.removeChild(input);
  //   }
  // };

  const copy = () => {
    let clipboardCopy: (value: any) => void; // 用来存储复制函数
    return (value: any) => {
      if (!clipboardCopy) {
        // 第一次调用时进行初始化
        if (navigator.clipboard) {
          clipboardCopy = function(value: string) {
            navigator.clipboard.writeText(value);
          };
        } else {
          clipboardCopy = function(value: string) {
            const input = document.createElement('input');
            input.setAttribute('value', value);
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
          };
        }
      }
      clipboardCopy(value); // 执行复制操作
    };
  };

  // 创建复制函数的实例
  const handleCopy = copy();

  return (
    <>
      <Button onClick={() => count()}>延迟计算</Button>
      {/* <Button onClick={() => count2()}>动态计算</Button> */}
      <div>
        <Button onClick={() => handleCopy(inputValue)}>复制</Button>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
}

export default LazyFunciton;
