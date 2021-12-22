import React, { useEffect } from 'react';
import './ContextMenu.css';

export const ContextMenu = ({
  item,
  yPos,
  xPos,
  setContextMenuOpen,
}) => {

  const handleClickContextMenuButton = (e) => {
    console.log(e.target.textContent)
    setContextMenuOpen(false);
  }

  const clickOutsideEventListener = (e) => {
    if (e.target.closest('.context-menu')) return;
    setContextMenuOpen(false);
  }

  useEffect(() => {
    document.addEventListener('click', clickOutsideEventListener);

    return () => document.removeEventListener('click', clickOutsideEventListener);
  }, [])

  return (
    <div className="context-menu" style={{
      top: yPos,
      left: xPos,
    }}>
      {item}
      <button onClick={handleClickContextMenuButton}>Edit</button>
      <button onClick={handleClickContextMenuButton}>Remove</button>
    </div>
  )
}