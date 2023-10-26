import { HTMLProps } from "react"

export function useJesus() {
  const id = "nPHJl2buOD8"

  return {
    link: "https://youtu.be/" + id,
    id,
    Component: (props: HTMLProps<HTMLIFrameElement>) => (
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        {...props}
      />
    ),
  }
}
