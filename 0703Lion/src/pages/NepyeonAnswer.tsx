import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NepyeonAnswer.module.scss";

const NepyeonAnswer = () => {
  const [activeTab, setActiveTab] = useState("answer");
  const navigate = useNavigate();

  const popularPosts = [
    {
      id: 1,
      question: "해당 사안에도 주휴수당이 발생하는지 궁금합니다",
      content: "물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일 대체 공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다 쉽니다 법정공휴일도 어떻게 되는지 궁금 합니다."
    },
    {
      id: 2,
      question: "공휴일 알바 대타해도 휴일근로수당 발생하나요?",
      content: "이번 15일 부처님 오신 날에 알바 대타 해주기로 했는데 이럴 경우 휴일근로수당이 발생할까요?"
    },
    {
      id: 3,
      question: "퇴사시 문제가 생길까요? (매장관리)",
      content: "저는 지금 현재 1년 계약직으로 일하고 있습니다. 일한 지 몇 개월 안 돼서 일하다가 다쳤고 산재 인정받고 한 달은 쉬고 한 달은 무급 병가로 쉬었습니다. 근데 그 당시 관리자가 휴직계 써야 한다고 이야기도 안 했고..."
    }
  ];

  const posts = [
    {
      id: 1,
      question: "계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.",
      content: "물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일 대체 공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다 쉽니다 법정공휴일도 어떻게 되는지 궁금 합니다.",
      date: "2024.04.11"
    },
    {
      id: 2,
      question: "고금인 아드레드 금인구글 새글",
      content: "새로운 게시글 내용입니다.",
      date: "2024.04.10"
    },
    {
      id: 3,
      question: "근로계약서 관련 질문",
      content: "근로계약서 작성 시 주의사항이 궁금합니다.",
      date: "2024.04.09"
    }
  ];

  const handleWritePost = () => {
    navigate("/write-post");
  };

  return (
    <div className={styles.container}>
      {/* 탭 네비게이션 */}
      <div className={styles.tabNavigation}>
        <button 
          className={`${styles.tab} ${activeTab === "answer" ? styles.active : ""}`}
          onClick={() => setActiveTab("answer")}
        >
          네편 답변
        </button>
        <button 
          className={`${styles.tab} ${activeTab === "info" ? styles.active : ""}`}
          onClick={() => setActiveTab("info")}
        >
          네편 정보
        </button>
      </div>

      {/* 인기게시글 섹션 */}
      <section className={styles.popularSection}>
        <h2 className={styles.sectionTitle}>인기게시글</h2>
        <div className={styles.popularPosts}>
          {popularPosts.map((post) => (
            <div key={post.id} className={styles.popularCard}>
              <h3 className={styles.question}>
                <span className={styles.questionPrefix}>Q.</span> {post.question}
              </h3>
              <p className={styles.content}>{post.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 게시글 섹션 */}
      <section className={styles.postsSection}>
        <div className={styles.postsHeader}>
          <h2 className={styles.sectionTitle}>게시글</h2>
          <button className={styles.writeButton} onClick={handleWritePost}>
            게시글 작성
          </button>
        </div>
        <div className={styles.postsList}>
          {posts.map((post) => (
            <div key={post.id} className={styles.postItem}>
              <span className={styles.date}>{post.date}</span>
              <div className={styles.postContent}>
                <h3 className={styles.question}>
                  <span className={styles.questionPrefix}>Q.</span> {post.question}
                </h3>
                <p className={styles.content}>{post.content}</p>
              </div>
              <div className={styles.postMeta}>
                <button 
                  className={styles.detailButton}
                  onClick={() => navigate(`/post/${post.id}`)}
                >
                  자세히 보기 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NepyeonAnswer; 