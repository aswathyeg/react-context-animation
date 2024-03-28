import { useContext, useState } from 'react';
import ChallengeItem from "./ChallengeItems";
import ChallengeTabs from "./ChallengeTabs";
import { ChallengesContext } from '../store/challenges-context.jsx';
export default function Challenges(){
    const [selectedType, setSelectedType] = useState('active');
    const { challenges } = useContext(ChallengesContext);
    const [expanded, setExpanded] = useState(null);
    function handleSelect(newType){
        setSelectedType(newType)
    }

    const filteredChallenges={
        active:challenges.filter((challenge)=>challenge.status==='active'),
        completed:challenges.filter((challenge)=>challenge.status==='completed'),
        failed:challenges.filter((challenge)=>challenge.status==='failed')

    }
    const displayedChallenges = filteredChallenges[selectedType];

    return(
    <ChallengeTabs
    onSelect={handleSelect}
    selectedType={selectedType}
    challenge={filteredChallenges}
    >
    
    
    

        <ChallengeItem>

        </ChallengeItem>
    </ChallengeTabs>
    )
}