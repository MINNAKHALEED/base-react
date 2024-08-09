
import './TextWrapper.css'

import ImgMob from '../../assets/hero-mobile.jpg'

import arrow from '../../assets/icon-arrow.svg';
 import LogoImg from '../LogoComponent/LogoImg';





const TextWrapper = () => {
  return (
<div className="textwrapperdiv">

< LogoImg/> 


<img className='imgmob' src={ImgMob}/>

<main id='main'>

<h1><span>We are</span> <br />coming soon</h1>

<p>Hello fellow shoppers! We are currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>

<form className='form'>
<input type="email" placeholder='Email Address' required />
<button className='btn'>
<img src={arrow}/>
</button>
      

</form>


</main>

</div>
  );
}

export default TextWrapper;
