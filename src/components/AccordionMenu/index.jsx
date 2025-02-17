import { useState } from "react";
import styles from "./styles.module.scss";
import cls from "classnames";

import { TfiLayoutLineSolid } from "react-icons/tfi";
import { RiArrowDownWideLine } from "react-icons/ri";

function AccordionMenu({
  titleAccordion,
  contentAccordion,
  onClick,
  isSelected,
}) {
  const {
    container,
    title,
    activeTitle,
    contentMenu,
    isVisibility,
    borderBottom,
  } = styles;

  const handleToggle = () => {
    onClick();
  };
  return (
    <div className={container}>
      <div
        className={cls(title, {
          [activeTitle]: isSelected,
        })}
        onClick={handleToggle}
      >
        {isSelected ? (
          <TfiLayoutLineSolid style={{ fontSize: "20px" }} />
        ) : (
          <RiArrowDownWideLine style={{ fontSize: "20px" }} />
        )}
        {titleAccordion}
      </div>
      <div
        className={cls(contentMenu, borderBottom, {
          [isVisibility]: isSelected,
        })}
      >
        {contentAccordion}
      </div>
    </div>
  );
}

export default AccordionMenu;
