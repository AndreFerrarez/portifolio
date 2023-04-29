import './main.css';
import React, {useState} from 'react';
import {images} from '../helpers/CarouselData'


export default function Main () {

  const [currImg, setCurrImag] = useState(2);

    return (
      <main className='main-center'>
        <div className='main-top'>
          <div className='titulo'>
            <div className='building-together'>
              <h1 className='building'>BUILDING TOGETHER....</h1>
            </div>
          </div>
        </div>
        <div className='main-direito' >
          <div className='carousel'>
            <p>Here will be displayed some personal information...</p>
          </div>
        </div>
      </main>
    );
}