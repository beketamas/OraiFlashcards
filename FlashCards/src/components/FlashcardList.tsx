import { FlashCardType } from "./type/type"
import { Flashcard } from "./Flashcard"

type flashcardlistProps={
    flashcards:FlashCardType[]
}


const FlashcardList = ({flashcards}:flashcardlistProps) => {
  return (
    <div className="card-grid">
        {flashcards.map(x=>(
            <Flashcard flashcard={x}></Flashcard>
        ))}
    </div>
  )
}

export default FlashcardList