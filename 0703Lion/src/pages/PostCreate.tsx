import React, { useState, useRef } from "react";
import styles from "./PostCreate.module.scss";
import axios from "axios";

type FormData = {};

const PostCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    boardType: {
      answer: false,
      info: false,
    },
    content: "",
    file: null as File | null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      boardType: {
        ...prev.boardType,
        [name]: checked,
      },
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const data = {
        user_id: 1,
        worksheet_id: 1,
        title: formData.title,
        content: formData.content,
        type: 1,
      };

      const response = await axios.post(
        "http://43.202.217.156:8080/api/posting",
        data
      );

      console.log("Response:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>게시글 작성</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <h2 className={styles.sectionTitle}>게시글 제목</h2>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="질문 제목을 입력해주세요"
            />
          </div>

          <div className={styles.formGroup}>
            <h2 className={styles.sectionTitle}>게시판 선택</h2>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  name="answer"
                  checked={formData.boardType.answer}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxLabel}>네편 답변</span>
              </label>
              <label className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  name="info"
                  checked={formData.boardType.info}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxLabel}>네편 정보</span>
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <h2 className={styles.sectionTitle}>게시글 내용</h2>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="질문 내용을 입력해주세요"
            />
          </div>

          <div className={styles.formGroup}>
            <h2 className={styles.sectionTitle}>내 결과지 가져오기(선택)</h2>
            <div
              className={styles.fileUploadArea}
              onClick={handleFileUploadClick}
            >
              <span className={styles.uploadIcon}>+</span>
              <p className={styles.uploadText}>
                {formData.file
                  ? formData.file.name
                  : "파일을 선택하거나 여기에 드래그하세요"}
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
            />
          </div>
        </form>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={handleSubmit} className={styles.submitButton}>
          등록하기
        </button>
      </div>
    </>
  );
};

export default PostCreate;
