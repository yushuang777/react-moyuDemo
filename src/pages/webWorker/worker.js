// worker.js
onmessage = function (e) {
  console.log(e);
  const { num1, num2 } = e.data;
  let result = 0;

  if (num1) {
    for (let i = 0; i <= num1; i++) {
      result += i; // 简单的加法计算
    }
  } else {
    for (let i = 0; i <= num2; i++) {
      result += i; // 简单的加法计算
    }
  }

  postMessage(result);
};
