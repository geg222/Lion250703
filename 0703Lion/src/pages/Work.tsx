import React from "react";
import styles from "./work.module.scss";
const content = {
  title: "근로계약서 작성 가이드",
  description:
    "근로계약서를 작성할 때 주의해야 할 사항들을 단계별로 안내합니다. 각 단계를 클릭하여 자세한 내용을 확인하세요.",
  steps: [
    "근로계약서의 기본 정보 입력",
    "근로 조건 및 근무 시간 설정",
    "급여 및 보상 조건 명시",
    "휴가 및 휴일 정책 설정",
    "계약 해지 조건 명시",
  ],
};
const work = () => {
  const [clickedSteps, setClickedSteps] = React.useState<string[]>([]);
  const [clicked, setClicked] = React.useState<string>("");

  const onClicke = (step: string) => {
    setClicked(step);
    setClickedSteps([step]);
  };

  const onButtonClick = (step: string) => {
    setClickedSteps((prev) =>
      prev.includes(step) ? prev.filter((s) => s !== step) : [...prev, step]
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{content.title}</h1>
      </div>
      <div className={styles.description}>
        <p>{content.description}</p>
      </div>
      <h2>발생 요건들</h2>
      <div className={styles.steps}>
        {content.steps.map((step, index) => (
          <button
            onClick={() => onClicke(step)}
            key={index}
            className={`${styles.button} ${clickedSteps.includes(step) ? styles.clicked : ""}`}
          >
            {step}
          </button>
        ))}
      </div>
    </div>
  );
};

export default work;
