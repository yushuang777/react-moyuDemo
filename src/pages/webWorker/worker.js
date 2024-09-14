onmessage = function (event) {
  const startTime = event.data;
  const generateData = () => {
    const data = [];
    for (let i = 0; i < 10000000; i++) {
      const item = {
        id: i,
        value: Math.random() * 100,
      };
      data.push(item);
    }
    return data;
  };
  generateData();
  const endTime = Date.now();
  var result = endTime - startTime;
  postMessage(result);
};
