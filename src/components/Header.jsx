import NewChallenge from './NewChallenge';
import { useState } from "react"
export default function Header(){
    const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();
    function handleStartAddNewChallenge() {
        setIsCreatingNewChallenge(true);
      }
      function handleDone() {
        setIsCreatingNewChallenge(false);
      }
    return(
        <>
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
        <header id="main-header">
               <h1 > Your Challenges</h1>
        <button className="buttonAdd" 
        onClick={handleStartAddNewChallenge}
        >Add Challenge</button>
        
        </header>
        </>
    )

}