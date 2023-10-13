import React from 'react'
import Headline from './Components/Headline';
import Image from './Components/Image';

function Product() {
  return (
    <>
      <div className="container text-left mt-5">
        <div className='row'>
          <div className="row align-items-center">
            <div className="card">
              <div className="card-body">
                <div id="productHeading">
                  <Headline variant='h1' className="card-title">Product</Headline>
                </div>
                <div id="productImg">
                  <Image size='thumbnail' />
                </div>
                <div id="productImageText">Product image text</div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
