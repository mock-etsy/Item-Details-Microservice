import React from 'react';

const Details = props => {
  return (
    <div>
      <hr />
      <h1 className='itemDetails'>Item details</h1>
      <p className='description'>{props.description}</p>
      <hr />
      <h1 className='shipping'>Shipping & policies</h1>
      <p className='shippingInfo'>
        <p className='bolded'>
          Get it fast! Ready to ship in 1–2 business days.
          <br />
          From United States
        </p>
        <p className='bolded'>No returns or exchanges</p>
        <p>But please contact me if you have any problems with your order.</p>
        <a href='#'>Get shipping cost</a>
        <br />
        <a href='#'>View shop policies</a>
      </p>
      <hr />
    </div>
  );
};

export default Details;
