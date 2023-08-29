import { ButtonStyle } from "./Button.styles";

function Button({ buttonText, signupstyle, isUserLoading }) {
  return (
    <ButtonStyle
      signupstyle={signupstyle}
      disabled={isUserLoading}
      btnLoading={isUserLoading}
      buttonText
    >
      {buttonText}
    </ButtonStyle>
  );
}

export default Button;
