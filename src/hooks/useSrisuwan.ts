import { useMemo } from "react"

const images = [
  "https://s.isanook.com/ca/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2NhLzAvdWQvMjgxLzE0MDYzMTYvMTY1Njg0MDM4XzQzNzg2NzM1NDU0ODAyODhfMzcuanBn.jpg",
  "https://www.khaosod.co.th/wpapp/uploads/2022/10/%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%8A%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B8%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93-11.jpg",
  "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5yHLC8qE0ITreFTPHY44DEkhNg7nyKS4BgDPdhPEpGCZ0AI3fJm.jpg",
  "https://gumlet.assettype.com/ejan%2F2022-10%2Fba004e18-a6a4-4ba1-96ca-cb684b4113e8%2F285856276_574608274026712_3636837166122388918_n.jpg?format=auto",
]

export function useSrisuwan() {
  const refetch = () => {
    return images[Math.floor(Math.random() * images.length)]
  }
  return refetch
}
