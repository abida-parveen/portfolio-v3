import Image from 'next/image'
import React from 'react'
import Clip from '../../../common/Clip'
import styles from './card.module.css'

const Card = (props) => {
  const {data} = props
  return (
    <div className={`${styles.testimonial_card}`}>
      <div className={`${styles.testimonial_card_image_container}`}>
        <Image
          src={data.profile}
          alt="user pic"
          className={`${styles.testimonial_card_image}`}
        />
      </div>
      <div className={`${styles.testimonial_card_content}`}>
      <div>
        <p>{data.description}</p>
      </div>
      <div>
        <p>{data.name}</p>
        <Clip value={data.designation} />
      </div>
      </div>
    </div>
  );
}

export default Card