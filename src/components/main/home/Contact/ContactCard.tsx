import React from "react";
import styles from "./contact.module.css";
import Icon from "../../../general/Icon";
import type { ContactDataType } from "../../../../types/contact.type";

interface ContactCardPropType {
  data: ContactDataType;
}

const ContactCard: React.FC<ContactCardPropType> = (props) => {
  const { data } = props;
  return (
    <div className={`${styles.contact_card}`}>
      <a href={data.link} target="_blank">
        <Icon
          source={{
            iconLight: data.iconLight,
            iconDark: data.iconDark,
          }}
          text={"icons"}
        />
      </a>
      <div className={`${styles.contact_card_text}`}>
        {data.text.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
