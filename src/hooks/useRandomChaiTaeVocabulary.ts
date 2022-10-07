import { useState } from "react"

const CHAITAE_VOCABURARY_MASTER_DATA = [
  {
    type: "ชายแท้",
    vocabulary: "โห อย่างเอาอ่ะจารย์!",
  },
  {
    type: "จะเทย",
    vocabulary: "เยี่ยวมากแม่",
  },
  {
    type: "จะเทย",
    vocabulary: "อีดอก ปังมากแม่",
  },
  {
    type: "จะเทย",
    vocabulary: "เริ่ดดดดดดเวอร์",
  },
  {
    type: "จะเทย",
    vocabulary: "หล่อนมันตัวแม่!",
  },
  {
    type: "ชายแท้",
    vocabulary: "เข้มจัดเลยพี่",
  },
  {
    type: "จะเทย",
    vocabulary: "💎👀💎🔪นะคะ",
  },
  {
    type: "จะเทย",
    vocabulary: "ช็อตฟีล",
  },
  {
    type: "ชายแท้",
    vocabulary: "เหลี่ยมจัด",
  },
  {
    type: "จะเทย",
    vocabulary: "นกอยู่ข้างพี่ตานะคะ 🥹",
  },
  {
    type: "ชายแท้",
    vacabulary: "ขอยืมเงินหน่อย",
  },
  {
    type: "จะเทย",
    vocabulary: "อ๋อจร้า ขอบคุณนะคะที่แจ้งให้ทราบ",
  },
  {
    type: "ชายแท้",
    vocabulary: "ไปเที่ยวกัน",
  },
  {
    type: "จะเทย",
    vocabulary: "ไปตอแหลกันค่าาาาา",
  },
  {
    type: "ชายแท้",
    vocabulary: "เอาเลยจารย์",
  },
  {
    type: "จะเทย",
    vocabulary: "เริ่มเลอออออ",
  },
]

type Vocabulary = {
  type: string
  vocabulary?: string
}

interface IUseRandomChaiTaeVocabulary {
  randomWord: Vocabulary
  handleRandomChaiTaeVocabulary(): void
}

export function useRandomChaiTaeVocabulary(): IUseRandomChaiTaeVocabulary {
  const chaiTaeVocabLength = CHAITAE_VOCABURARY_MASTER_DATA.length - 1
  const [chaiTaeVocabulary, setRandomChaiTaeVocabulary] = useState(
    CHAITAE_VOCABURARY_MASTER_DATA[0]
  )
  const handleRandomChaiTaeVocabulary = () => {
    setRandomChaiTaeVocabulary(
      CHAITAE_VOCABURARY_MASTER_DATA[
        Math.round(Math.random() * chaiTaeVocabLength)
      ]
    )
  }
  return {
    randomWord: chaiTaeVocabulary,
    handleRandomChaiTaeVocabulary,
  }
}
