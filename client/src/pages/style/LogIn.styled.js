import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LogIn = styled.div`
    margin: 0; /** from Budy */
    padding: 0; /**from Budy */
    height: 100vh;
    width: 100%;

    overflow: hidden; /**from Budy */

    background: ${({theme}) => theme.login_global_bg};

    display: flex;
    justify-content: center;
    align-items: center;


    /* background-color: #282c34; */
    

    /* & form {
        background-color: #484848;
        border-radius: 60px;
        height: 400px;
        height: 90%;
        width: 90%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        box-shadow: 0 2px 5px 1px #ffff;
        text-align: center;
        color: #ffff;
    } */

    /* & input {
        outline: none;
        background-color: #f2f2f2;
        width: 75%;
        border: 0;
        margin: 0px 0px 20px;
        padding: 20px;
        box-sizing: border-box;
        font-size: 30px;
        

    } */

`;

export default LogIn;

export const Container = styled.div` /**normalde formdu ama Centerdan çektim div yaptım */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 65%;
    background-color: ${({theme}) => theme.login_container_bg};
    border-radius: calc(1vh + 1.5vw);
    height: 85%;
    box-shadow: 0 2px 6px 2px #6c6c6c;

    @media (max-width: 600px), (max-height: 415px) {
        width: 85%;
    }

    @media (orientation: portrait) {
        width: 85%;
    }
    @media (max-height: 415px){
        height: 95%;
    };

    @media (min-width: 1800px) and (max-height: 700px){
        width: 50%;
    };
    @media (min-width: 1440px) and (max-height: 550px){
        width: 50%;
    };

        /* background-color: #484848; */
        /* border-radius: 60px; */
        /* height: 400px; */
        /* height: 85%; */
        /* width: 65%; */
        /* max-width: 500px; */
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: space-evenly; */
        /* align-items: center; */
        /* box-shadow: 0 2px 5px 1px brown; */
        /* text-align: center; */
        /* color: #ffff; */
        /* padding: 10px; */




`;

export const SliderArea = styled.div`
    position: absolute;
    top: 1%;
    left: 1%;
    /* transform: translate(-3%, -3%); */
    width: 49%;
    height: 98%;
    
    /* background-color: red; */
    /* border-radius: 28px; */
    border-radius: calc(0.9vh + 1.35vw);

    @media(max-width: 600px), (max-height: 315px){
        display: none;

    }

`;

export const LoginFormArea = styled.div`
    position: absolute;
    top: 1%;
    left: 50%;
    /* transform: translate(-3%, -3%); */
    width: 49%;
    height: 98%;
    /* background-color: bisque; */

    background: none;
    overflow: auto;
    
    @media(max-width: 600px), (max-height: 315px){
        left: 1%;
        width: 98%;

    }

`;


export const NoMatch = styled.div`
    width: 100%;
    margin-bottom: calc(0.25vh + 0.375vw);
    margin-top: calc(-0.75vh - 1.125vw);
    color: ${({theme}) => theme.no_match_line_color};
    font-size: calc(0.5vh + 0.75vw);
    text-align: center;
    display: ${props => props.Act ? "" : "none"};

`;


export const SubmitBut = styled.input.attrs(props => ({ type: "button", value: `${props.v}` }))`

    width: 100%;
    height: calc(1.5vh + 2vw);
    border: calc(0.03vh + 0.05vw) solid;

    border-color: ${({theme}) => theme.login_container_bg};

    background: ${({theme}) => theme.login_submit_but};
    border-radius: calc(1vh + 1.25vw);
    /* font-size: 18px; */
    font-size: calc(1vh + 1.25vw);
    color: ${({theme}) => theme.login_submit_but_color};
    font-weight: 700;
    cursor: pointer;
    outline: none;

    &:hover{
        border-color: ${({theme}) => theme.login_submit_but};
        transition: .5s;
    }
`;




export const LogInH1 = styled.h1`
    text-align: center;
    padding: 0 0 calc(0.5vh + 0.75vw) 0;
    border-bottom: calc(0.03vh + 0.07vw) solid silver;
    width: 99.23%;
    font-size: calc(1.5vh + 2vw); /*h1 fontsize */
    
    margin-left: 0.25vw;
    color: #fff;

`;



export const FormLogIn = styled.form.attrs({method: "post"})`
    padding: 0 40px;
    box-sizing: border-box;
`;


export const LogInTextBox = styled.div`
    position: relative;
    border-bottom: 2px solid ${({theme}) => theme.login_text_box_underline};
    margin: calc(1.5vh + 2vw) 0;
`;

export const ForgotPass = styled.div`
    margin: calc(-1vh - 1.5vw) 0 calc(1vh + 1.5vw) 5px;
    color: ${({theme}) => theme.forgot_pass_color};
    cursor: pointer;
    font-size: calc(0.5vh + 0.75vw);
    &:hover {
        text-decoration: underline;
    }
`;

export const SignUp = styled.span`
    color: ${({theme}) => theme.login_submit_but};
    cursor: pointer;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;


export const SignUpLink = styled.div`
    margin: 1vh 0;
    text-align: center;
    font-size: calc(0.5vh + 0.75vw);
    color: ${({theme}) => theme.forgot_pass_color};
    & a {
        color: ${({theme}) => theme.login_submit_but};
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;



export const PlaceHolder = styled.label`
    position: absolute;
    top: 50%;
    left: 5px;
    color: ${({theme}) => theme.login_text_box_underline};
    transform: translateY(-50%);
    font-size: calc(0.75vh + 1vw);
    pointer-events: none;


`;



export const UnderLine = styled.span`
    &::before{
        content: '';
        position: absolute;
        /* top: 40px; */
        top: 100%;
        left: 0;
        width: 0%;
        height: 2px;
        background: ${({theme}) => theme.login_submit_but}; /**#2691d9 */
        transition: .5s;
    }

`;


export const Girdi = styled.input.attrs(props => ({type : `${props.t}`}))`
    width: 100%;
    padding: 0 5px;
    /* height: 40px; */
    height: 5%;
    font-size: calc(0.75vh + 1vw);
    /* font-size: 16px; */
    border: none;
    background: none;
    outline: none;

    color: ${({theme}) => theme.girdi_color};

    &:focus ~ ${PlaceHolder}{
        transition: 0.5s;
    }
    &:focus ~ ${PlaceHolder}, &:valid ~${PlaceHolder}{
        /* top: 5px; */
        top: calc(42% - calc(0.75vh + 1vw));
        color: ${({theme}) => theme.login_submit_but};
    }
    &:focus ~ ${UnderLine}::before, &:valid ~${UnderLine}::before{
        width: 100%;
    }

`;



export const FABLogo = styled(FontAwesomeIcon)`
    padding-right: 1vw;
    padding-left: 1.5vw;
    padding-top: 0.3vh;
    font-size: calc(1vh + 1.5vw);
`;
export const FaceLogoSpecial = styled(FABLogo)`
    padding-right: 1.62vw;
`;


export const WithOther = styled.div`
    font-size: calc(0.75vh + 1vw);
    text-align: center;
    margin-top: 2vh;
    margin-bottom: 1vh;

    color: ${({theme}) => theme.girdi_color};
`;


export const WithOtherButton = styled.div`
    border-radius: calc(0.2vh + 0.3vw);
    & a {
        align-items: center;
        display: block;
        height: calc(1.5vh + 2vw);
        width: 100%;
        font-size: calc(0.75vh + 1vw);
        text-decoration: none;
        /* line-height: 45px; */
        /* line-height: 5vh; */
        color: ${({theme}) => theme.girdi_color};
        /* border-radius: 5px; */
        transition: all 0.3s ease;
        margin: 1.5vh 0 1.5vh 0;

        
    }
    

`;



export const WithFacebookButton = styled(WithOtherButton)`
    background: ${({theme}) => theme.facebook_before};
    &:hover {
            background: ${({theme}) => theme.facebook_after};
            /* margin: 200px 0 500px 0; */
        }
`;



export const WithTwitterButton = styled(WithOtherButton)`
    background: ${({theme}) => theme.twitter_before};
    &:hover {
            background: ${({theme}) => theme.twitter_after};
            /* margin: 20px 0 50px 0; */
        }
`;



export const WithGoogleButton = styled(WithOtherButton)`
    background: ${({theme}) => theme.google_before};
    &:hover {
            background: ${({theme}) => theme.google_after};
            /* margin: 20px 0 50px 0; */
        }
`;








export const UserForm = styled.form`
    
        
        /* background-color: rebeccapurple; */
        border-radius: 60px;
        /* height: 400px; */
        /* height: 100%; */
        width: 100%;
        /* max-width: 500px; */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        /* box-shadow: 0 2px 5px 1px #ffff; */
        text-align: center;
        color: #ffff;
        /* padding-left: 50%; */

        /* padding-right: 5px; */

        font-size: 50px;
        & input {
        outline: none;
        background-color: #f2f2f2;
        width: 75%;
        border: 0;
        margin: 0px 0px 10px;
        padding: 20px;
        box-sizing: border-box;
        font-size: 25px;
        
       

    }
`;





export const LogInWithBut = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.3rem;
    width: 90%;
    max-width: 250px;
    height: 10%;
    border-radius: 3px;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    border: 0;
    outline: none;
    background-color: blueviolet;
    color: white;
    &:focus, &:hover {
        appearance: none;
        --moz-appearance: none;
        --webkit-appearance: none;
        border: 0;
    }
    &:hover{
    background-color: red;
    }
    &:active{
        transform: scale(0.98);
    }

`;

export const SignupButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.3rem;
    width: 90%;
    max-width: 250px;
    height: 15%;
    border-radius: 3px;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    border: 0;
    outline: none;
    background-color: greenyellow;
    color: white;
    &:focus, &:hover {
        appearance: none;
        --moz-appearance: none;
        --webkit-appearance: none;
        border: 0;
    }
    &:hover{
    background-color: grey;
    }
    &:active{
        transform: scale(0.98);
    }
    
`;