import clsx from "clsx"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export type DialogProps = {
  show: boolean
  onClose: () => void
  title?: string
  titleClassName?: string
  body?: string
  bodyClassName?: string
}

const DialogDOM = ({
  show,
  onClose,
  title,
  titleClassName,
  body,
  bodyClassName,
}: DialogProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleOverlayClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleOverlayClick)
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick)
    }
  }, [])

  if (!show) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 h-screen w-screen bg-opacity-70 bg-black flex justify-center items-center p-8">
      <button className="fixed top-4 right-4 text-md" onClick={onClose}>
        X
      </button>
      <div
        className="rounded-md bg-white dark:bg-zinc-900 p-4 relative w-min"
        ref={containerRef}
      >
        {title && (
          <h1
            className={clsx(
              "text-md font-bold text-zinc-900 dark:text-white text-center mb-4 m-auto w-fit",
              titleClassName
            )}
          >
            {title}
          </h1>
        )}
        {body && (
          <p
            className={clsx(
              "text-sm text-zinc-900 dark:text-white w-fit",
              bodyClassName
            )}
          >
            {body}
          </p>
        )}
      </div>
    </div>
  )
}

const Dialog = (props: DialogProps) => {
  return createPortal(
    <DialogDOM {...props} />,
    document.getElementById("dialog")!
  )
}

export default Dialog
