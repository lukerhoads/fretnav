import styles from "./card.module.css";

type Props = {
  img?: string;
  title: string;
  subtitle: string;
};

const Card = ({ img, title, subtitle }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={img ? img : ""} alt={title} />
      </div>
      <div className={styles.card_text}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
