import React from "react";
import './Statistics.scss';
import Diagramm from '../Diagramm/Diagramm';

function Statistics() {
  return (
    <>
      <div className='Statistics'>
        <div className="container">
          <div className='Statistics-inner'>
            <h1 className='Statistics-heading'>Statistics</h1>

            <div className='users-page__hero'>
              <input className='users-page__hero-input' type="text" placeholder='Search' />
            </div>

            <div className='pharse-name'>
              <button className='pharse-name__btn pharse-name__btn-active'> #Phrase name </button>
              <button className='pharse-name__btn phrase'> #Phrase </button>
            </div>

            <div className='Weekly-inner'>
              <button className='Weekly-inner__btn Weekly-inner__btn-active'> Weekly </button>
              <button className='Weekly-inner__btn'> Monthly </button>
              <button className='Weekly-inner__btn'> Yearly </button>
            </div>

            <Diagramm />

            <ul className='total-phrases'>
              <li className='total-phrases__item'>
                <p className='total-phrases__text'> Total phrases - <span className='total-phrases__span'> 458 </span></p>
              </li>

              <li className='total-phrases__item'>
                <p className='total-phrases__text'> Added phrases - <span className='total-phrases__span'> 60 </span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;