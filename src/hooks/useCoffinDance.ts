import { useRef } from "react"

type Window = typeof window & {
  webkitAudioContext: typeof AudioContext
}

const FREQ_NOTES = {
  G3: 196,
  A3: 220,
  B3: 246.94,
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.0,
  A4: 440.0,
  B4: 493.88,
  C5: 523.25,
}

// Credit note to https://www.youtube.com/watch?v=Zz_44JGiIuI
const NOTES: Array<[keyof typeof FREQ_NOTES, number, number]> = [
  ["C4", 4, 0.15],
  ["E4", 4, 0.15],
  ["D4", 4, 0.15],
  ["G4", 4, 0.15],
  ["A4", 11, 0.15],
  ["D4", 1, 0.15],
  ["C4", 1, 0.15],
  ["B3", 1, 0.15],
  ["G3", 1, 0.15],
  ["A3", 1, 0.35],
  ["A3", 1, 0.15],
  ["E4", 1, 0.15],
  ["D4", 1, 0.35],
  ["C4", 1, 0.35],
  ["B3", 1, 0.35],
  ["B3", 2, 0.15],
]

export function useCoffinDance() {
  const oscillatorRef = useRef<OscillatorNode>()

  const play = async () => {
    const _window = window as Window

    // https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
    const audioCtx = new (_window.AudioContext || _window.webkitAudioContext)()

    const oscillator = audioCtx.createOscillator()
    oscillatorRef.current = oscillator
    oscillator.type = "sine"
    oscillator.connect(audioCtx.destination)

    let offset = 0
    for (const [note, repeat, dur] of NOTES) {
      for (let i = 0; i < repeat; i++) {
        oscillator.frequency.setValueAtTime(
          FREQ_NOTES[note],
          audioCtx.currentTime + offset
        )
        offset += dur

        oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + offset) // value in hertz
        offset += 0.1
      }
    }
    oscillator.start()
    oscillator.stop(audioCtx.currentTime + offset)
  }

  const stop = () => {
    if (oscillatorRef.current) oscillatorRef.current.stop()
  }

  return [play, stop]
}
