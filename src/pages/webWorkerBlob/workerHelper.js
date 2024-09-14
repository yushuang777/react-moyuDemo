const workerScript = `
self.onmessage = function(e) {
  const { task, data } = e.data;
  let result;
  switch (task) {
    case 'test1':
      result = data * 2;
      break;
    case 'test2':
      result = data.split('').reverse().join('');
      break;
    default:
      result = 'Unknown task';
  }
  self.postMessage(result);
};
`;

export function createWorker() {
  const blob = new Blob([workerScript], { type: "application/javascript" });
  const worker = new Worker(URL.createObjectURL(blob));
  return worker;
}
