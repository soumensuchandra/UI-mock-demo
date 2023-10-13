import React from 'react'
import Headline from './Components/Headline';
import Image from './Components/Image';

function Order() {
  return (
    <>
      <div className="container text-left mt-5">
        <div className='row'>
          <div className="row align-items-center">
            <div className="card">
              <div className="card-body">
                <div id="orderHeading">
                  <Headline variant='h1' className="card-title">Order</Headline>
                </div>
                <div id="orderImg">
                  <Image size='thumbnail' />
                </div>
                <div id="orderImageText" style={{ margin: 10 }}>Order Image text</div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
