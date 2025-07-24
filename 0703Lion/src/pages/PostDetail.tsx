import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./PostDetail.module.scss";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeConditions, setActiveConditions] = useState({
    premium: true,
    weekly: true,
    night: false,
    overtime: false,
    holiday: false
  });
  const [comment, setComment] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  // 실제로는 API에서 데이터를 가져와야 하지만, 예시 데이터 사용
  const postData = {
    id: id,
    question: "계약직도 연장여부 미리 말해줘야하나요?",
    author: "코카콜라",
    date: "2024.05.11",
    content: "정규직일때는 해고하기 한달전에 말해줘야 한다는 법이 있다던데요. 계약직도 그런가요? 예를들어 1개월 계약직이면 1개월만 계약할거고 더 연장의사 없다.라고 말해줘야 하는건가요? 아니면 그냥 계약기간 끝나면 끝나는거고 그런건가요?",
    workResults: {
      workplace: "근무지 이름 근로 결과지",
      premium: "상시 5인 이상 사업장에서 근무하시므로 추가적인 가산 수당이 발생합니다.",
      weekly: "주 근로 시간이 14시간이므로 주휴수당이 발생하지 않습니다.",
      night: "한 주 동안 야간 근로시간이 0시간이므로 야간근로수당 0원이 발생합니다.",
      overtime: "한 주 동안 연장 근로시간이 0시간이므로 연장근로수당 0원이 발생합니다.",
      holiday: "취업 규칙 등에서 정한 약정 휴일에 0시간 근무하므로 휴일근로수당 0원이 발생합니다.",
      tax: "소득세 3.3%가 적용됩니다.",
      salary: "따라서, 코카콜라 님의 월급은 800,000원 입니다."
    }
  };

  const handleConditionToggle = (condition: string) => {
    setActiveConditions(prev => ({
      ...prev,
      [condition]: !prev[condition as keyof typeof prev]
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmitComment = () => {
    if (comment.trim()) {
      console.log("댓글 제출:", comment);
      setComment("");
      // 실제로는 API 호출
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleBack}>
        ← 뒤로가기
      </button>
      
      <div className={styles.postContainer}>
        {/* 질문 섹션 */}
        <div className={styles.questionSection}>
          <h1 className={styles.question}>
            <span className={styles.questionPrefix}>Q.</span> {postData.question}
          </h1>
          <div className={styles.postMeta}>
            <span className={styles.author}>{postData.author}</span>
            <span className={styles.date}>{postData.date}</span>
          </div>
          <p className={styles.content}>{postData.content}</p>
        </div>

        {/* 근로 결과지 섹션 */}
        <div className={styles.workResultsSection}>
          <h2 className={styles.sectionTitle}>{postData.workResults.workplace}</h2>
          <div className={styles.resultsList}>
            <p className={styles.resultItem}>{postData.workResults.premium}</p>
            <p className={styles.resultItem}>{postData.workResults.weekly}</p>
            <p className={styles.resultItem}>{postData.workResults.night}</p>
            <p className={styles.resultItem}>{postData.workResults.overtime}</p>
            <p className={styles.resultItem}>{postData.workResults.holiday}</p>
            <p className={styles.resultItem}>{postData.workResults.tax}</p>
            <p className={styles.resultItem}>{postData.workResults.salary}</p>
          </div>
        </div>

        {/* 발생 요건들 섹션 */}
        <div className={styles.conditionsSection}>
          <h2 className={styles.sectionTitle}>발생 요건들</h2>
          <div className={styles.conditionButtons}>
            <button 
              className={`${styles.conditionButton} ${activeConditions.premium ? styles.active : ''}`}
              onClick={() => handleConditionToggle('premium')}
            >
              가산수당
            </button>
            <button 
              className={`${styles.conditionButton} ${activeConditions.weekly ? styles.active : ''}`}
              onClick={() => handleConditionToggle('weekly')}
            >
              주휴수당
            </button>
            <button 
              className={`${styles.conditionButton} ${activeConditions.night ? styles.active : ''}`}
              onClick={() => handleConditionToggle('night')}
            >
              야간근로수당
            </button>
            <button 
              className={`${styles.conditionButton} ${activeConditions.overtime ? styles.active : ''}`}
              onClick={() => handleConditionToggle('overtime')}
            >
              연장근로수당
            </button>
            <button 
              className={`${styles.conditionButton} ${activeConditions.holiday ? styles.active : ''}`}
              onClick={() => handleConditionToggle('holiday')}
            >
              휴일근로수당
            </button>
          </div>
        </div>

        {/* 댓글 섹션 */}
        <div className={styles.commentSection}>
          <div className={styles.commentInputBox}>
            <div className={styles.commentHeader}>
              <span className={styles.commentAuthor}>코카콜라</span>
              <span className={styles.commentPrompt}>답변을 남겨주세요</span>
            </div>
            <textarea
              className={styles.commentTextarea}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="답변을 입력하세요..."
            />
            <button 
              className={styles.submitCommentButton}
              onClick={handleSubmitComment}
            >
              답변 달기
            </button>
          </div>

          <div className={styles.commentSortSection}>
            <div className={styles.sortOptions}>
              <button 
                className={`${styles.sortButton} ${sortBy === 'likes' ? styles.active : ''}`}
                onClick={() => setSortBy('likes')}
              >
                좋아요순
              </button>
              <button 
                className={`${styles.sortButton} ${sortBy === 'latest' ? styles.active : ''}`}
                onClick={() => setSortBy('latest')}
              >
                최신순
              </button>
            </div>
            <div className={styles.noComments}>
              작성된 댓글이 없습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail; 