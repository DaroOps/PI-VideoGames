import './RatingCounter.modules.css'


const RatingCounter = ({value})=>{
   
    return(
        <div className='rating-counter-margin'>
            <p className='count-value'>  {value} ★  </p>    
        </div>
    )
}

export default RatingCounter