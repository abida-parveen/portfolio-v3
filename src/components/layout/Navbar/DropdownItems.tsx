import type { DropdownItem } from "../../../types/navbar.type";
import styles from "./drop-down.module.css";

interface DropdownPropsType {
  data: DropdownItem;
  onClick: () => void;
}

const DropdownItems: React.FC<DropdownPropsType> = (props) => {
  const { data, onClick } = props;
  return (
    <div className={styles.dropdown_item}>
      <a href={data.link} onClick={onClick} className={styles.dropdown_link}>
        {data.title}
      </a>
    </div>
  );
};

export default DropdownItems;
