import { createContext, useState } from "react";
export const ChallengesContext=createContext({
    challenges:[],
    addChallenge:()=>{},
    deleteChallenge:()=>{},
    updateChallenge:()=>{}
} )
export default function ChallengesContextProvider({children}){
    const [challenges,setChallenge]=useState([])

    function addChallenge(challenge){
        setChallenge((prevState)=>[
            {
                ...challenge,id:Math.random().toString(),status:'active'
            }
            ,...prevState
        ])

    }
    function deleteChallenge(challengeId){
        setChallenge((prevState)=>
        prevState.filter((challenge)=>challenge.id!==challengeId))

    }
    function updateChallenge(challengeId, newStatus){
        setChallenge((prevState)=>
        prevState.map((challenge)=>{
            if(challenge.id===challengeId){
                return{...challenge,status:newStatus}
            }
            return challenge;
        })
        )

    }
const challengesContext={
    challenges,addChallenge,deleteChallenge,updateChallenge
}

    return(
        <ChallengesContext.Provider value={challengesContext}>
            {children}
        </ChallengesContext.Provider>
        
    )
}