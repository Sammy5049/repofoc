import React from 'react'
import './Products.css'

import imagg1 from './imagg1.png';
import imagg2 from './imagg2.png';
import image3 from './image3.png';
import nashv from './nashv.jpg';
import fud from './fud.jpg';



function Products() {
  return (
    
   <div className='backgr'>
    <div className='product'>
      
     <div className='head'>
           
       <h2>Our Products</h2>
       
      
     <div className='Imag'>
       
     <img src={imagg1} className="one" alt="" />
     <img src={imagg2} className="two" alt="" />
     <img src={image3} className="three" alt="" />
     </div>
     <div className='menu'>
       <h3>Ensalada N1000 </h3>
       <h3>Coctel N1500</h3>
       <h3>Ceviche N2000 </h3>
     </div>
     <div className='word'>
       <div className='detail'>
       <p className='six'>​gem lettuce, avocado, radish,
​lime viniagrette</p>
<p className='sis'>shrimp, avocado, red onion, spicy
​burnt tomato-lime marinade
</p>
<p className='sixs'>ono, yam, onion, aji amarillo,
​cilantro, puffed corn</p>
</div>
<div>
<button className='button'>Order Now</button></div>
 <h6>At Starbelly, we pride ourselves on being a neighborhood restaurant for the Castro District
For parties of 8 guests or fewer, please click the link below to make a reservation on OpenTable. ​

For parties of 9 to 12 guests, please call the restaurant directly at (415) 252-7500

For parties of 13 or more guests, please submit a large group event form by clicking the "Book an Event" button.
     </h6>
     </div>
     <div className='dis'>
      <img src={nashv} className="nash" alt="" />
       <img src={fud} className="nash1" alt="" />
     </div>
     
     
     </div>
   
    </div>
    
    
    </div>
  )
}

export default Products