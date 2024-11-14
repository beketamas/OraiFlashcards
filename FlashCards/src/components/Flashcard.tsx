import { useState } from "react"
import { FlashCardType } from "./type/type"

type flashcardProps={
    flashcard:FlashCardType
}

export const Flashcard = ({flashcard}:flashcardProps) => {

const [flip, setFlip] = useState(false)
  return (
    <div onClick={()=>setFlip(!flip)} className={`card ${flip ? "flip" : ""}`}>
        <div className="front">
            {flashcard.question}
        </div>
        <div className="back">
            {flashcard.correct_answer}
        </div>
    </div>
  )
}
