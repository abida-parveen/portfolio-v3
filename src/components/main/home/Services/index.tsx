import React from "react";
import styles from "./services.module.css";
import Card from "./Card";
import type { ServiceDataType } from "../../../../types/service.type";

interface ServicesPropType {
  services?: ServiceDataType[]
}

const Services: React.FC<ServicesPropType> = (props) => {
  return (
    <section id="services">
      <div className={`container ${styles.service_section_container}`}>
        <div>
          <h5>services</h5>
          <h2>Specialized in</h2>
        </div>

        <div className={styles.service_card_container}>
          {props?.services?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
