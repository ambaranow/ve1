/// <reference lib="webworker" />

importScripts('/assets/worker.min.js');

// addEventListener('message', ({ data }) => {
//   const response = `worker response to ${data}`;
//   postMessage(response);
// });