import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants.js";
import Menu from "./Menu/Menu.jsx";
import styles from "./styles.module.scss";
import Logo from "@icons/images/logo.png";
import { TfiReload } from "react-icons/tfi";
import { BsHeart } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";
import useScrollHandling from "@/hooks/useScrollHandling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";
function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerBox,
    containerHeader,
    constainer,
    fixedHeader,
    topHeader,
  } = styles;

  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);
  const { setIsOpen, setType } = useContext(SideBarContext);
  const handleOpenSiderBar = (type) => {
    setIsOpen(true);
    setType(type);
  };
  useEffect(() => {
    setFixedPosition(scrollPosition > 80 ? true : false);
  }, [scrollPosition]);
  return (
    <div
      className={classNames(constainer, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => {
              return (
                <BoxIcon key={item.type} type={item.type} href={item.href} />
              );
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return (
                <Menu
                  key={item.content}
                  content={item.content}
                  href={item.href}
                />
              );
            })}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "75px", height: "75px", cursor: "pointer" }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return (
                <Menu
                  key={item.content}
                  content={item.content}
                  href={item.href}
                />
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              style={{ fontSize: "20px" }}
              onClick={() => handleOpenSiderBar("compare")}
            />
            <BsHeart
              style={{ fontSize: "20px" }}
              onClick={() => handleOpenSiderBar("wishlist")}
            />
            <PiShoppingCart
              style={{ fontSize: "26px" }}
              onClick={() => handleOpenSiderBar("cart")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
