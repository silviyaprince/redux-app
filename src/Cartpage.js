import React from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';
import { TextField } from '@mui/material';


export  function Cartpage() {
  const [value, setValue] = useState('');
const price=599;
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [show,setShow]=useState(false)
  return (
    
        <div className='flex-container'>
            <div className='flex-top' >
            <div className='image'><img src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg" alt="book image" style={{height:"200px",widht:"100px"}}/></div>
            <div className='flex-top2'>
            <div className='text1'><h3>HARRY POTTER</h3></div>
            <div className="product-info">DETAILS AND CORE
          <IconButton color="primary" aria-label="toggle" onClick={() => setShow(!show)}> 
            {show?<ArrowDropUpIcon/>:<ArrowDropDownOutlinedIcon/>}</IconButton>
          {show ? (
            <p className="product-description">We provide great lokking book cover artwork that is eye catching and pulls your reader in.We can provide you with a full digital pdf of your book cover.</p>
          ) : null}
          </div>
          <div className="product-info">SUSTAINABILITY
          <IconButton color="primary" aria-label="toggle" > 
            {show?<ArrowDropUpIcon/>:<ArrowDropDownOutlinedIcon/>}</IconButton>
            </div>
            </div>
           <TextField
         className='numberinput'
      label="Number Input"
      type="number"
      value={value}
      onChange={handleChange}
      variant="outlined"
    />

   
    <div className='flextop-3'>
    <div>{price}</div>
    <div>REMOVE</div>
    </div>
            </div>
            <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)', paddingBottom: '10px' ,marginTop:'20px'}}></div>
            <div className='flex-bottom'>
              <div className='f1'><span>subtotal:</span><span>rupee</span></div>
              <div className='f2'> <span>shipping:</span><span>total</span></div>
            </div>
            <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)', paddingBottom: '10px' ,marginTop:'50px'}}></div>
            <div className='f3'><span>subtotal:</span><span>rupee</span></div>

        </div>
   
  )
}
