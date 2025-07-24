import SignupInputComponents from "../components/Signup/SignupInputComponents";
import "../components/Signup/Signup.scss";

const Signup = () => {
  return (
    <div className="signup-screen">
      <p className="title">회원가입</p>
      <div className="signup-input-field">
        <SignupInputComponents
          label="아이디"
          placeholder={"아이디를 입력하세요 (최소 8자 이상)"}
        />
        <SignupInputComponents
          label="비밀번호"
          placeholder={"아이디를 입력하세요 (최소 8자 이상)"}
        />
        <SignupInputComponents
          label="이메일"
          placeholder={"아이디를 입력하세요 (최소 8자 이상)"}
        />
        <SignupInputComponents
          label="이름"
          placeholder={"아이디를 입력하세요 (최소 8자 이상)"}
        />
        <SignupInputComponents
          label="닉네임"
          placeholder={"아이디를 입력하세요 (최소 8자 이상)"}
        />
      </div>
      <div className="signup-button">
        <p className="signup-button-text">가입하기</p>
      </div>
    </div>
  );
};

export default Signup;
