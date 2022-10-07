type BlueScreen = () => void

export const useBlueScreen = (): BlueScreen => {
  const body = document.body

  const startBluescreen = (percentageID: string) => {
    body.style.width = "100vw"
    body.style.height = "100vh"
    body.style.background = "#00adef"
    body.innerHTML = `
<style>h1,h2,h3,h4,h5{font-weight:400;padding:0;margin:20px 0;margin-top:0;font-weight:300}h1{font-size:8em;margin-bottom:10px}h2{font-size:1.5em}h4{font-size:1.4em}h5{line-height:1.3em;font-size:1.3em}#details{display:flex;flex-flow:row;flex-wrap:nowrap;padding-top:10px}</style>
<div>
  <div>
    <h1>:(</h1>
    <h2>
      Your PC ran into a problem and needs to restart. We're just
      collecting some error info, and then we'll restart for you.
    </h2>
    <h2><span id="${percentageID}">0</span>% complete</h2>
    <div id="details">
      <div style="background:white;padding:5px;">
        <img src="https://image.planxnx.dev/qr-code/linkedin.png" style="width:9.8em;height:9.8em;" />
      </div>
      <div style="padding-left:15px">
        <h4>
          For more information about this issue and possible fixes, visit<br/>
          - https://planxnx.dev <br/>
          - https://github.com/Planxnx
        </h4>
        <h5>
          If you call a support person, give them this info:<br/>
          Stop Code: CLEVERSE_IS_HIRING
        </h5>
      </div>
    </div>
  </div>
</div>
  `
  }

  const startPercentage = (percentageID: string) => {
    let percentageElement = document.getElementById(percentageID)

    let intervalID: number
    let percentage = 0

    intervalID = setInterval(() => {
      if (!percentageElement) return

      if (percentage >= 100) {
        clearInterval(intervalID)
        window.location.href = "/"
      }

      percentage += Math.random() * 10
      if (percentage > 100) {
        percentage = 100
      }

      percentageElement.innerText = percentage.toFixed(2)
    }, Math.random() * (1000 - 500) + 500)
  }

  const onClick = () => {
    const percentageID = "percentage"
    startBluescreen(percentageID)
    startPercentage(percentageID)
  }

  return onClick
}
