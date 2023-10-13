import React from 'react'
import Headline from './Components/Headline';
import Image from './Components/Image';

function About() {
  return (
    <>
      <div className="container text-left mt-5">
        <div className='row'>
          <div className="row align-items-center">
            <div className="card">
              <div className="card-body">
                <div id="aboutHeading">
                  <Headline variant='h1' className="card-title">About</Headline>
                </div>
                <div id="aboutImg">
                  <Image size='thumbnail' />
                </div>
                <div id="aboutImageText">About Image text</div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
