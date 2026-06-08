import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (props) => {
  return (
     <div className="Card">
    
            <div className="top">
              <img src={props.logo} alt="random image" />
              <button>Save <Bookmark size={14} /> </button>
            </div>
    
            <div className="centre">
              <h3>{props.company} <span> {props.postedAt} </span></h3>
              <h2>{props.position}</h2>
              <div className='tag'>
                <h4>{props.jobType}</h4>
                <h4>{props.level}</h4>
              </div>
            </div>
    
            <div className="bottom">
              <div> 
                  <h3>{props.salary}</h3>
                  <p>{props.location}</p>
              </div>
                <button>Apply Now</button>
            </div>
            
          </div>
  )
}

export default Card
