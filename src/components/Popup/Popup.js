import React, { useEffect } from 'react';

export default function Popup({ isPopupClosed, setIsPopupClosed, popupMessage, popupStatus}) {

  return (
    <div className={`popup ${popupStatus ? 'popup_success' : 'popup_fail'} ${isPopupClosed && 'popup__hidden'}`}>
      <p className="popup__text">{popupMessage}</p>
      {/* <p className='popup__text'>rf;tncz xnj nj gjikj yt nfr. jmhfnbntcm d cke,;e gjllth;rb</p> */}
    </div>
  );
}
