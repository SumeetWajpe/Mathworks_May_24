onmessage = function (msgFromMainThread) {
  // No access to window, document object
  // But access to XMLHttpRequest | fetch API
  console.log(msgFromMainThread.data);
  let arr = [];
  for (let index = 0; index < 15000; index++) {
    arr[index] = [];
    for (let j = 0; j < 15000; j++) {
      arr[index][j] = Math.random();
    }
  }
  console.log(this);
  this.postMessage(arr[3000][3000]);
};
