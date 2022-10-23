export const useSadSong = () => {
  const SadSongList = [
    "https://www.youtube.com/watch?v=ryyPJ8jdPbI",
    "https://www.youtube.com/watch?v=dJ9uVVNWClk",
    "https://www.youtube.com/watch?v=_ivYh1FakjE",
    "https://www.youtube.com/watch?v=1MQk_2_JBBY",
    "https://www.youtube.com/watch?v=gqsDDLvmH8s",
    "https://www.youtube.com/watch?v=vgxPafRApsU",
    "https://www.youtube.com/watch?v=JBAuRoIRAs8",
    "https://www.youtube.com/watch?v=33o-J005r9o",
    "https://www.youtube.com/watch?v=IS6Z61ht2P8",
    "https://www.youtube.com/watch?v=ENnGPkhVu2g",
    "https://www.youtube.com/watch?v=9pZ37Rsblyk",
  ]

  const randomSadSong = () => {
    const random = Math.round(Math.random() * SadSongList.length)
    const url = SadSongList[random]

    window.open(url, "_blank")?.focus()
  }

  return randomSadSong
}
