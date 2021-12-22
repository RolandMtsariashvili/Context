import React, { useEffect } from 'react';
import './Popup.css'

export const Popup = ({
  itemPopup,
  setItemPopup
}) => {

  const clickOutsideEventListener = (e) => {
    if (e.target.closest('#popup')) {
      return;
    }
    setItemPopup(false);
  }

  useEffect(() => {
    document.body.addEventListener('click', clickOutsideEventListener)

    return () => {
      document.body.removeEventListener('click', clickOutsideEventListener)
    };
  })

  return (
    <>
      <div className='background-overlay' />
      <div id="popup">
        {itemPopup}
        <button className='close' onClick={() => setItemPopup('')}>Close</button>
      </div>
   </> 
  )
}