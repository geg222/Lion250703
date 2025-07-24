import React from "react";
import FeatureCard from "../components/FeatureCard";
import styles from "./Main.module.scss";

const featureData = [
  {
    title: "내 계약서 검토",
    descriptions: [
      "우선 나의 근로계약서가 제대로 된 계약서인지 검토해야 해요",
      "근로 계약서에 유의깊게 봐야할 항목 확인!",
    ],
  },
  {
    title: "내 근로 정리",
    descriptions: [
      "지피지기 백전백승!",
      "우선 나의 근로계약서가 제대로 된 계약서인지 검토해야 해요.",
    ],
  },
  {
    title: "네편 현답",
    descriptions: [
      "지피지기 백전백승!",
      "우선 나의 근로계약서가 제대로 된 계약서인지 검토해야 해요.",
    ],
  },
];

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <p className={styles.p}>이렇게</p>
        <p className={styles.p}>이용해보세요</p>
      </div>
      {featureData.map((feature, index) => (
        <FeatureCard
          key={index}
          number={index + 1}
          title={feature.title}
          descriptions={feature.descriptions}
          buttonText="바로가기"
          imagePosition={index % 2 === 0 ? "right" : "left"}
        />
      ))}
    </div>
  );
};

export default Main;
