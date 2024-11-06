const { ipcRenderer } = require("electron");

// 初始化应用
function initializeApp() {
  const outputArea = document.getElementById("outputArea");

  if (!outputArea) {
    console.error('Element with id "outputArea" not found.');
    return;
  }

  // 绑定运行按钮点击事件
  const runCurrentButton = document.getElementById("runCurrentButton");
  if (runCurrentButton) {
    runCurrentButton.addEventListener("click", handleRunButtonClick);
  } else {
    console.error('Element with id "runCurrentButton" not found.');
  }

  // 绑定清空按钮点击事件
  const clearCurrentButton = document.getElementById("clearCurrentButton");
  if (clearCurrentButton) {
    clearCurrentButton.addEventListener("click", handleClearButtonClick);
  } else {
    console.error('Element with id "clearCurrentButton" not found.');
  }

  // 监听主进程发送的输出和错误信息
  ipcRenderer.on("bat-output", (event, data) => {
    console.log(`Received bat-output: ${data}`);
    appendOutput(data);
  });

  // 监听主进程发送的任务完成消息
  ipcRenderer.on("task-completed", () => {
    console.log("Task completed.");
  });
}

// 处理运行按钮点击事件
function handleRunButtonClick() {
  console.log("Run button clicked.");
  ipcRenderer.send("run-current-bat-file");
}

// 处理清空按钮点击事件
function handleClearButtonClick() {
  console.log("Clear button clicked.");
  clearOutputArea(); // 清空文本框内容
}

// 添加输出到文本区域
function appendOutput(data) {
  console.log(`Appending output: ${data}`);
  outputArea.innerHTML += data.replace(/\n/g, "<br>");
  scrollToBottom();
}

// 清空文本区域
function clearOutputArea() {
  console.log("Clearing output area.");
  outputArea.innerHTML = "";
}

// 自动滚动到文本区域底部
function scrollToBottom() {
  outputArea.scrollTop = outputArea.scrollHeight;
}
