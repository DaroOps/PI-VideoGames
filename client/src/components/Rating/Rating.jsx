import './Rating.modules.css';

const Rating = ({ value }) => {
  return (
    <div className='rating-margin'>
        <div className='rating'>
          <i data-star={value}/>
        </div>
    </div>
   
  );
};

export default Rating;
