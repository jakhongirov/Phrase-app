import React from 'react'
import './Phrases.scss'
import Massage from '../../Assets/Image/massage-icon.svg'
import Bookmark from '../../Assets/Image/bookmark-icon.svg'
import Share from '../../Assets/Image/share-icon.svg'

function Phrases() {
	return (
    <>
      <div className="container">
        <h1 className="phrases-heading">Phrases</h1>
        <div className="phrases-heading__content">
          <input className="phrases-heading__input " type="search" name="" id="" placeholder="Search"/>
          <select className="phrases-heading__select" name="select" id="">
            <option value="eng" selected>Eng</option>
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
          </select>
        </div>
        <ul className="phrases-list">
          <li className="phrases-list__item">
            <button className="phrases-list__btn-first">#Phrase name</button>
          </li>
          <li className="phrases-list__item">
            <button className="phrases-list__btn second">Phrase</button>
          </li>
          <li className="phrases-list__item">
            <button className="phrases-list__btn">Phrase name</button>
          </li>
        </ul>
        <div className="phrases-social__btn">
          <button className="massage-btn" type="button"><img src={Massage} alt="Massage icon" /></button>
          <button className="bookmark-btn" type="button"><img src={Bookmark} alt="Bookmark icon" /></button>
          <button className="share-btn" type="button"><img src={Share} alt="Share icon" /></button>
        </div>
      </div>
    </>
  );
}

export default Phrases
