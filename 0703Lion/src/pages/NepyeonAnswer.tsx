import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NepyeonAnswer.module.scss";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  content: string;
  date?: string;
};

const NepyeonAnswer = () => {
  const [activeTab, setActiveTab] = useState("answer");
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);

  const handleWritePost = () => {
    navigate("/write-post");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // await 될 때까지 뒤 코드 절대 실행시키지마라라
        const response = await axios.get(
          "http://43.202.217.156:8080/api/posting/list/1"
        );

        console.log(response.data.data);

        setPosts(response.data.data);
        console.log(posts);
      } catch (error) {}
    };
    fetchPosts();
  }, []);

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
          {posts.map((post) => (
            <div key={post.id} className={styles.popularCard}>
              <h3 className={styles.question}>
                <span className={styles.questionPrefix}>Q.</span> {post.title}
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
                <h3 className={styles.title}>
                  <span className={styles.questionPrefix}>Q.</span> {post.title}
                </h3>
                <p className={styles.content}>{post.content}</p>
              </div>
              <div className={styles.postMeta}>
                <button
                  className={styles.detailButton}
                  onClick={() => {
                    localStorage.setItem("postId", post.id.toString());
                    navigate(`/post/${post.id}`);
                  }}
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
