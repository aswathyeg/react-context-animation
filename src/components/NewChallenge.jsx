import { useRef,useState,useContext } from "react"
import { ChallengesContext } from "../store/challenges-context";
import Modal from './Modal.jsx';
import images from '../assets/images.js';
export default function NewChallenge ({onDone}){
    const title=useRef();
    const description=useRef();
    const deadline=useRef();
const[selectedImage,setSelectedImage]=useState(null)
const{addChallenge}=useContext(ChallengesContext)
function handleSubmit(event){
    event.preventDefault()
    const challenge={
        title:title.current.value,
        description:description.current.value,
        deadline:deadline.current.value
    }
    if (
        !challenge.title.trim() || //removes white space
        !challenge.description.trim() ||
        !challenge.deadline.trim() ||
        !challenge.image
      ) {
        return;
      }
      onDone();
      addChallenge(challenge);

}
   
    return(
        <Modal title="New Challenge" onClose={onDone}>
        <form id="new-challenge" onSubmit={handleSubmit}>
          <p>
            <label htmlFor="title">Title</label>
            <input ref={title} type="text" name="title" id="title" />
          </p>
  
          <p>
            <label htmlFor="description">Description</label>
            <textarea ref={description} name="description" id="description" />
          </p>
  
          <p>
            <label htmlFor="deadline">Deadline</label>
            <input ref={deadline} type="date" name="deadline" id="deadline" />
          </p>
  
          <ul id="new-challenge-images">
            {images.map((image) => (
              <li
                key={image.alt}
                onClick={() => handleSelectImage(image)}
                className={selectedImage === image ? 'selected' : undefined}
              >
                <img {...image} />
              </li>
            ))}
          </ul>
  
          <p className="new-challenge-actions">
            <button type="button" onClick={onDone}>
              Cancel
            </button>
            <button onClick={addChallenge} >Add Challenge</button>
          </p>
        </form>
      </Modal>
    )
}