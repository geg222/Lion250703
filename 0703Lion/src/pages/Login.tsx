import SignupInputComponents from "../components/Signup/SignupInputComponents";

const Login = () => {
  return (
    <div className="LoginScreen">
      <div className="LoginInputField">
        <SignupInputComponents
          label="아이디"
          placeholder={"아이디를 입력하세요"}
        />
        <SignupInputComponents
          label="비밀번호"
          placeholder={"비밀번호를 입력하세요"}
        />
      </div>
      <div className="SignupButton">
        <p className="SugnupButtonText">로그인</p>
      </div>
    </div>
  );
};

export default Login;
