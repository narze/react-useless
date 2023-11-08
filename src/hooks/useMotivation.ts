import { DefinitelyNotAny } from "./types"

type Motivation = () => void

export const useMotivation = (): Motivation => {
  const body: DefinitelyNotAny = document.body

  const startMotivation = () => {
    body.innerHTML += `
      <style>
        .useMotivation_vid,.useMotivation_vid-box{width:100vw;height:100vh;top:50%;left:50%;transform:translate(-50%,-50%)}
        .useMotivation_vid{position:absolute;opacity:0}.useMotivation_vid-box{z-index:9999;overflow:hidden;position:fixed}
      </style>

      <video class="useMotivation_vid" playsinline>
        <source src="https://github.com/richeyphu/GetMotivated/raw/fc6d1bc4f1729fd2e0c4344817347117a02e7548/docs/assets/video/vergil.mp4" type="video/mp4" />
        <source src="https://github.com/richeyphu/GetMotivated/raw/fc6d1bc4f1729fd2e0c4344817347117a02e7548/docs/assets/video/vergil.webm" type="video/webm" />
      </video>

      <div class="useMotivation_box">
        <canvas class="useMotivation_vid-box"></canvas>
      </div>
    `

    const video: DefinitelyNotAny = document.querySelector(".useMotivation_vid")
    let width: DefinitelyNotAny = video.clientWidth
    let height: DefinitelyNotAny = video.clientHeight

    const c: DefinitelyNotAny = document.querySelector(
      ".useMotivation_vid-box"
    )!
    c.setAttribute("width", width)
    c.setAttribute("height", height)
    const ctx: DefinitelyNotAny = c.getContext("2d", {
      willReadFrequently: true,
    })

    video.addEventListener("play", drawVid)
    video.addEventListener("ended", () => {
      location.href = "/"
    })
    video.addEventListener("loadedmetadata", () => {
      video.play()
    })

    function drawVid() {
      ctx.drawImage(video, 0, 0, width, height)
      requestAnimationFrame(drawVid)
    }
  }

  const onClick = () => {
    startMotivation()
  }

  return onClick
}
