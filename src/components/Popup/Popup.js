import React from 'react'


export default function Popup({isPopupClosed, setIsPopupClosed, popupMessage}) {

  const handlePopupClose = () => {
    setIsPopupClosed(true)
  }

  return (
    <div className={`popup ${isPopupClosed && 'popup__hidden'}`}>
      <p className='popup__text'>{popupMessage}</p>
      {/* <p className='popup__text'>rf;tncz xnj nj gjikj yt nfr. jmhfnbntcm d cke,;e gjllth;rb</p> */}
      <button className='popup__button' onClick={handlePopupClose}></button>
    </div>
  )
}
