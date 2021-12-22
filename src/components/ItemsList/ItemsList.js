import React from 'react';
import ListItem from '../ListItem';

import './ItemsList.css';

export const ItemsList = ({
  items,
  setItemPopup,
}) => {
  return (
    <ul className='ItemsList'>
      {items.map((item, index) => (
        <ListItem
          item={item}
          key={index}
          setItemPopup={setItemPopup}
        />
      ))}
    </ul>
  )
}