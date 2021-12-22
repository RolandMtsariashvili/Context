import React, { useState } from "react";
import ContextMenu from "../ContextMenu";

import './ListItem.css';

export const ListItem = ({
  item,
  setItemPopup,
}) => {
  const [isContextMenuOpen, setContextMenuOpen] = useState(false);
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");

  const handleOpenContextMenu = (e) => {
    e.preventDefault();
    setContextMenuOpen(true);
    setXPos(`${e.pageX}px`);
    setYPos(`${e.pageY}px`);
  }

  return(
    <li onContextMenu={handleOpenContextMenu} className="listItem">
      {item}
      <button
        onClick={() => setItemPopup(item)}
        className="openPopupButton"
      >
        Open Popup
      </button>

      {isContextMenuOpen && (
        <ContextMenu
          item={item}
          yPos={yPos}
          xPos={xPos}
          setContextMenuOpen={setContextMenuOpen}
        />
      )}
    </li>
  )
}