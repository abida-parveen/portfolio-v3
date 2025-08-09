import type React from "react";
import type { DropdownItem } from "../../../types/navbar.type";
import styles from "./drop-down.module.css";
import DropdownItems from "./DropdownItems";

interface DropdownPropsType {
  items: DropdownItem[];
  onClick: () => void;
  onMouseLeave?: () => void;
}

const Dropdown: React.FC<DropdownPropsType> = (props) => {
  const { items, onClick, onMouseLeave } = props;
  return (
    <div className={styles.dropdown} onMouseLeave={onMouseLeave}>
      {items.map((item) => (
        <DropdownItems key={item.id} data={item} onClick={onClick} />
      ))}
    </div>
  );
};

export default Dropdown;
