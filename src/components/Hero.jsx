import star from '../assets/star.svg';
import half_star from '../assets/half-star.svg';

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <div>
            <div className='rating'>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={half_star}/>
                <span>4.5</span>
            </div>
            <p className='rate-msg'>from 1,250+ reviews</p>
            <p className='heading-msg'>Join the largest freelance<br/>community for free.</p>
            <p className='support-msg'>Tap into the massive remote freelance scene where talent thrives across all fields.<br/>Dive into a world of opportunities, all without spending a dime.</p>
            </div>
        </div>
    </div>
  )}

export default Hero