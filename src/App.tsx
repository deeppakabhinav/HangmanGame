import { useCallback, useEffect, useState } from 'react';
import words from './wordlist.json';
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { HangmanKeyboard } from './HangmanKeyboard';

function getWord(){
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordsToGuess, setWordsToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordsToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 9
  const isWinner = wordsToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter)||isLoser||isWinner) return 

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])


  useEffect(() => {
    const handler = (e:KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return
      
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetters])

  useEffect(()=>{
    const handler = (e:KeyboardEvent) => {
      const key = e.key
      if(key !== "Enter") return
      
      e.preventDefault()
      setGuessedLetters([])
      setWordsToGuess(getWord())
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])
  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>
        {isWinner && "Congrats you won!, refresh to try again."}
        {isLoser && "You lost :(  refresh to try again."}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal = {isLoser} guessedLetters={guessedLetters} wordsToGuess={wordsToGuess}/>
      <div style={{ alignSelf: 'stretch' }}>
        <HangmanKeyboard 
        disabled={isWinner||isLoser}
        activeLetters={guessedLetters.filter(letter => wordsToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
         />
      </div>
    </div>
  );
}

export default App;
