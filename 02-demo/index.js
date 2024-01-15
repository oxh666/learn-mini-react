console.log(123123213123)

//任务序号
let task = 0
function workLoop(deeLine) {
  //打印查看闲置时间
  console.log('时间', )
  //默认不让步
  let shouldYield = false
  //每次执行 任务序号+1
  task++
  while (!shouldYield) {
    console.log(`taskId: ${task} run task`)
    shouldYield = deeLine.timeRemaining() < 1

  }
  requestIdleCallback(workLoop)
}

// requestIdleCallback(workLoop)
