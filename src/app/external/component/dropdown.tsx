import { useRef, useState } from "react";
import "./styles.css";

const items = [
  {
    name: "About",
    subItems: ["Description", "Folder", "Article"],
  },
  {
    name: "Timeline",
    subItems: ["Storage", "Mouse", "Keyboard", "Headphones"],
  },
  {
    name: "FAQ",
  },
  {
    name: "Rules",
  },
  {
    name: "Contact",
  },
];

type MenuButtonProps = {
  name: string;
  index?: number;
  hasSubItems?: boolean;
  onClick?: (index?: number) => void;
};

const MenuButton = ({
  name,
  index,
  hasSubItems,
  onClick,
}: MenuButtonProps) => {
  return (
    <button onClick={() => (onClick ? onClick(index) : null)}>
      {name}
      {hasSubItems && <span className="chevron material-symbols-outlined">chevron_right</span>}
    </button>
  );
};

type MenuItemProps = {
  name: string;
  index: number;
  activeSubMenu: number;
  subItems: string[];
  onClick: (index?: number) => void;
};

const MenuItem = ({
  name,
  index,
  activeSubMenu,
  subItems,
  onClick,
}: MenuItemProps) => {
  const subMenuRef = useRef<HTMLDivElement>(null);
  const isActive = activeSubMenu === index;
  return (
    <>
      <MenuButton
        onClick={subItems ? onClick : () => null}
        name={name}
        index={index}
        hasSubItems={Boolean(subItems)}
      />
      {subItems?.length && (
        <div ref={subMenuRef} className={`sub-menu ${isActive ? "open" : ""}`}>
          <>
            <MenuButton onClick={onClick} name="Back" />
            {subItems.map((subItem) => (
              <MenuButton key={subItem} name={subItem} />
            ))}
          </>
        </div>
      )}
    </>
  );
};

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number>();

  const handleClick = (index?: number) => {
    setActiveSubMenu(index);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined"> settings </span>
        Preferences
        <span className="chevron material-symbols-outlined"> expand_more </span>
      </button>
      <div className="menu">
        <div className={`menu-inner ${activeSubMenu !== undefined ? "open" : ""}`}>
          <div className="main-menu">
            {items.map((item, index) => (
              <MenuItem
                key={item.name}
                name={item.name}
                index={index}
                activeSubMenu={activeSubMenu!}
                onClick={handleClick}
                subItems={item.subItems!}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
