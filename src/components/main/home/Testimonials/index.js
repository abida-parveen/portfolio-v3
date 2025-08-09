import React from "react";
import Card from "./Card";
import styles from "./testimonials.module.css";

const Testimonials = (props) => {
  return (
    <section>
      <div className="container">
        <h5>my clients</h5>
        <h2>Testimonials</h2>
        <div className={`${styles.testimonial_card_container}`}>
          {props?.testimonials?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
