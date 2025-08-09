import styles from "./clip.module.css";

interface ClipPropType {
  value: string
  skill?: boolean  
}

const Clip: React.FC<ClipPropType> = (props) => {
  const { value, skill } = props;

  return (
    <div className={`hover_size ${skill && styles.skills_hover}`}>
      <div className={`${styles.clip}`}>
        <p className={`${styles.clip_text}`}>{value}</p>
      </div>
    </div>
  );
};

export default Clip;
