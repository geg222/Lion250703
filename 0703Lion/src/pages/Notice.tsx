import React from "react";
import styles from "./Notice.module.scss";

const notices = [
  {
    id: 1,
    title: "시스템 점검 및 업데이트 안내",
    date: "2024.07.25",
  },
  {
    id: 2,
    title: "개인정보처리방침 개정 안내",
    date: "2024.07.20",
  },
  {
    id: 3,
    title: "새로운 기능 '네편 현답' 출시!",
    date: "2024.07.15",
  },
  {
    id: 4,
    title: "서비스 이용약관 변경 안내",
    date: "2024.07.10",
  },
  {
    id: 5,
    title: "사이트 오픈을 축하합니다!",
    date: "2024.07.01",
  },
];

const Notice = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>공지사항</h1>
      <ul className={styles.noticeList}>
        {notices.map((notice) => (
          <li key={notice.id} className={styles.noticeItem}>
            <span className={styles.noticeTitle}>{notice.title}</span>
            <span className={styles.noticeDate}>{notice.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notice;
