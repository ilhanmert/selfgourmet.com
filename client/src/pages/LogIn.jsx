import StyledLogIn, { Container, FABLogo, FaceLogoSpecial, 
      ForgotPass, FormLogIn, Girdi, LoginFormArea, LogInH1, 
      LogInTextBox, NoMatch, PlaceHolder, SignUp, SignUpLink, SliderArea, SubmitBut, 
      UnderLine, WithFacebookButton, WithGoogleButton, WithOther, 
      WithTwitterButton} 
from "./style/LogIn.styled";

import SliderJsx from "../components/SliderJsx";
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from "react";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";


const LogIn = () => {
  const [errorMessage, setErrorMessage] =useState(false);
  const [msg, setMsg] = useState("");


  const [signUp, setSignUp] = useState(false);
  const [authData, setAuthData] = useState({user_name: "", email:"", password: "", phone_number: "", first_name: "", last_name: ""});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAuthData({...authData, [e.target.name] : e.target.value})
    setErrorMessage(false);
  };
  console.log("authData", authData);

  const authFunc = () => {
    if(authData.email === ""){
      setMsg("Lütfen mail adresi giriniz");
      setErrorMessage(true);
    } else if(authData.password === "") {
      setMsg("Lütfen şifre giriniz");
      setErrorMessage(true);
    } else {
      if(signUp) {
        dispatch(registerAction(authData));
      } else {
        dispatch(loginAction(authData));
      }
    }
    
  }

  function bindEnter (e) {
    if(e.key === 'Enter')
    authFunc();
  }

  


  return (
    <StyledLogIn>
        <Container>
          <SliderArea>
            <SliderJsx/>
          </SliderArea>
          <LoginFormArea>
            <LogInH1>{signUp ? "Register" : "Login"}</LogInH1>
            <FormLogIn>
              <LogInTextBox>
                <Girdi autoFocus t="text" required onChange={handleChange} name="email"></Girdi>
                <UnderLine/>
                <PlaceHolder>E-Mail</PlaceHolder>
              </LogInTextBox>
              <LogInTextBox>
                <Girdi focus t="password" onKeyDown={bindEnter} required onChange={handleChange} name="password"></Girdi>
                <UnderLine/>
                <PlaceHolder>Password</PlaceHolder>
              </LogInTextBox>

              {signUp && <div>
              <LogInTextBox>
              <Girdi t="text" required onChange={handleChange} name="user_name"></Girdi>
                <UnderLine/>
                <PlaceHolder>Username</PlaceHolder>
              </LogInTextBox>
              <LogInTextBox>
              <Girdi t="text" required onChange={handleChange} name="first_name"></Girdi>
                <UnderLine/>
                <PlaceHolder>First Name</PlaceHolder>
              </LogInTextBox>
              <LogInTextBox>
              <Girdi t="text" required onChange={handleChange} name="last_name"></Girdi>
                <UnderLine/>
                <PlaceHolder>Last Name</PlaceHolder>
              </LogInTextBox>
              <LogInTextBox>
              <Girdi t="text" required onChange={handleChange} name="phone_number"></Girdi>
                <UnderLine/>
                <PlaceHolder>Phone Number</PlaceHolder>
              </LogInTextBox>
              </div>
              }


              {!signUp && <ForgotPass>Forgot Password?</ForgotPass>}
              <NoMatch Act={errorMessage}>{msg}</NoMatch>
              <SubmitBut v={signUp ? "Signup" : "Login"} onClick={authFunc}/>
              <SignUpLink>
                {signUp ? "Already a member? " : "Not a member? "} 
                <SignUp onClick={() => {signUp ? setSignUp(false) : setSignUp(true)}}>
                {signUp ? "Login" : "Signup"}
                </SignUp>
              </SignUpLink>
              <WithOther>or {signUp ? "Signup" : "Connect"} With Social Media</WithOther>
              <WithGoogleButton>
                <a href="#">
                  <FABLogo icon={faGoogle}/>
                  Sign in With Google
                </a>
              </WithGoogleButton>
              <WithFacebookButton>
                <a href="#">
                  <FaceLogoSpecial icon={faFacebookF}/>
                  Sign in With Facebook
                </a>
              </WithFacebookButton>
              <WithTwitterButton>
                <a href="#">
                  <FABLogo icon={faTwitter}/>
                  Sign in With Twitter
                </a>
              </WithTwitterButton>

            </FormLogIn>
       
          </LoginFormArea>

        </Container>
    </StyledLogIn>
    
  )
}

export default LogIn;

