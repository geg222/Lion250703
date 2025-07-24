import styles from "./NoticeDetail.module.scss";

const NoticeDetail = () => {
  const notice = {
    id: 1,
    title: "시스템 점검 및 업데이트 안내",
    date: "2024.07.25",
    content:
      "시스템 점검이 예정되어 있습니다. 자세한 내용은 공지사항을 확인해주세요.",
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>{notice.title}</p>
          <p className={styles.date}>{notice.date}</p>
        </div>
        <div className="notice-content">
          <p>{notice.content}</p>
        </div>
        <button className={styles.button}>
          <p className={styles.buttonText}>목록으로 돌아가기</p>
        </button>
      </div>
    </>
  );
};

export default NoticeDetail;
