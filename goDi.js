const { spawn } = require("child_process");
const map = require("./articleMap");
const totalTask = Object.keys(map).length;
let start = 0;
let end = 0;
let totalProcess = 0;
let processCount = 0;
const basic = 50;
for (let i = 0; i < totalTask; i++) {
  if (i % basic === 0) {
    end = i;
    genProcess(start, end);
    start = end + 1;
    if (totalTask - start < basic) {
      genProcess(start, totalTask);
    }
  }
}

function genProcess(start, end) {
  totalProcess++;
  const ls = spawn("node", ["./go6.js"], {
    env: {
      start,
      end,
    },
  });

  ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  ls.on("close", (code) => {
    console.log(`子进程完成退出 ${code}`);
    processCount++;
    console.log(
      "总进度：",
      Math.round((processCount / totalProcess) * 50) + "%"
    );
    if (processCount === totalProcess) {
      console.log("全部进程已完成");
    }
  });
}
