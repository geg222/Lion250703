import React from "react";
import styles from "./FeatureCard.module.scss";

interface FeatureCardProps {
  number: number;
  title: string;
  descriptions: string[];
  buttonText: string;
  imagePosition?: "left" | "right";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  descriptions,
  buttonText,
  imagePosition = "right",
}) => {
  return (
    <div
      className={`${styles.card} ${
        imagePosition === "left" ? styles.reverse : ""
      }`}
    >
      <div className={styles.imagePlaceholder}></div>
      <div
        className={`${styles.content}  ${imagePosition === "right" && styles.imagePosition}`}
      >
        <div className={styles.number}>{number}</div>
        <h2 className={styles.title}>{title}</h2>
        {descriptions.map((desc, index) => (
          <p key={index} className={styles.description}>
            {desc}
          </p>
        ))}
        <button className={styles.button}>
          <span>{buttonText}</span>
          <span aria-hidden="true">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
