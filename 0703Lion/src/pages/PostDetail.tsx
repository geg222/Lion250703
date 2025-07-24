import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./PostDetail.module.scss";
import axios from "axios";

interface PostDataType {
  content: string;
  created_at: string;
  is_bookmarked: boolean;
  nickname: string;
  title: string;
  worksheet_id: number;
}

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeConditions, setActiveConditions] = useState({
    premium: false,
    weekly: false,
    night: false,
    overtime: false,
    holiday: false,
  });
  const [comment, setComment] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const [postData, setPostData] = useState<PostDataType | null>(null);

  useEffect(() => {
    const postId = localStorage.getItem("postId");
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://43.202.217.156:8080/api/posting/${postId}`
        );
        const data = response.data;
        setPostData(data.data);

        console.log("게시글 데이터:", data.data);
      } catch (error) {
        console.error("게시글 또는 조건 정보 불러오기 실패:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleConditionToggle = (condition: string) => {
    setActiveConditions((prev) => ({
      ...prev,
      [condition]: !prev[condition as keyof typeof prev],
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

  if (!postData) return <div>로딩중...</div>;

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleBack}>
        ← 뒤로가기
      </button>

      <div className={styles.postContainer}>
        {/* 질문 섹션 */}
        <div className={styles.questionSection}>
          <h1 className={styles.question}>
            <span className={styles.questionPrefix}>Q.</span> {postData.title}
          </h1>
          <div className={styles.postMeta}>
            <span className={styles.nickname}>{postData.nickname}</span>
            <span className={styles.date}>{postData.created_at}</span>
          </div>
          <p className={styles.content}>{postData.content}</p>
        </div>

        {/* 발생 요건들 섹션 */}
        <div className={styles.conditionsSection}>
          <h2 className={styles.sectionTitle}>발생 요건들</h2>
          <div className={styles.conditionButtons}>
            <button
              className={`${styles.conditionButton} ${activeConditions.premium ? styles.active : ""}`}
              onClick={() => handleConditionToggle("premium")}
            >
              가산수당
            </button>
            <button
              className={`${styles.conditionButton} ${activeConditions.weekly ? styles.active : ""}`}
              onClick={() => handleConditionToggle("weekly")}
            >
              주휴수당
            </button>
            <button
              className={`${styles.conditionButton} ${activeConditions.night ? styles.active : ""}`}
              onClick={() => handleConditionToggle("night")}
            >
              야간근로수당
            </button>
            <button
              className={`${styles.conditionButton} ${activeConditions.overtime ? styles.active : ""}`}
              onClick={() => handleConditionToggle("overtime")}
            >
              연장근로수당
            </button>
            <button
              className={`${styles.conditionButton} ${activeConditions.holiday ? styles.active : ""}`}
              onClick={() => handleConditionToggle("holiday")}
            >
              휴일근로수당
            </button>
          </div>
        </div>

        {/* 댓글 섹션 */}
        <div className={styles.commentSection}>
          <div className={styles.commentInputBox}>
            <div className={styles.commentHeader}>
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
                className={`${styles.sortButton} ${sortBy === "likes" ? styles.active : ""}`}
                onClick={() => setSortBy("likes")}
              >
                좋아요순
              </button>
              <button
                className={`${styles.sortButton} ${sortBy === "latest" ? styles.active : ""}`}
                onClick={() => setSortBy("latest")}
              >
                최신순
              </button>
            </div>
            <div className={styles.noComments}>작성된 댓글이 없습니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
