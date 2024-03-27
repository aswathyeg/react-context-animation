import ChallengesContextProvider from "../store/challenges-context";
import Header from "../components/Header";
import Challenges from "../components/Challenges";
export default function ChallengePage (){
  return(
    <ChallengesContextProvider>
      <Header/>
      <main>
        <Challenges/>
      </main>
    </ChallengesContextProvider>
  )
}