import "./Signup.scss";

interface SignupInputComponentsProps {
  label: string;
  placeholder: string;
}

const SignupInputComponents = ({
  label,
  placeholder,
}: SignupInputComponentsProps) => {
  return (
    <div className="signup-input-components">
      <p className="label">{label}</p>
      <div className="input-wrapper">
        <input className="input-field" placeholder={placeholder} />
        {label === "아이디" && (
          <div className="duplicate-check-button">
            <p>중복확인</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupInputComponents;
