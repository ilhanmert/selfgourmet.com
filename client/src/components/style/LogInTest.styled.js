import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LogIn = styled.div`
    margin: 0; /** from Budy */
    padding: 0; /**from Budy */
    height: 100vh;
    width: 100%;

    overflow: hidden; /**from Budy */

    background: linear-gradient(120deg, #3D4148, #282c34);;

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


export const Slider = styled.div`
    width: 90%;
    height: 100%;
    background-color: brown;
    border-radius: 57px;
    display: flex;

    @media(max-width: 600px){
        display: none;

    }

`;

export const SubmitBut = styled.input.attrs(props => ({ type: "submit", value: `${props.v}` }))`
    width: 100%;
    height: calc(1.5vh + 2vw);
    border: 1px solid;
    background: #2691d9;
    border-radius: calc(1vh + 1.25vw);
    /* font-size: 18px; */
    font-size: calc(1vh + 1.25vw);
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;

    &:hover{
        border-color: #2691d9;
        transition: .5s;
    }
`;

export const TestBut = styled.input.attrs({ type: "submit" })`
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #2691d9;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;

    &:hover{
        border-color: #2691d9;
        transition: .5s;
    }
`;

export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: white;
    border-radius: 10px;


`;



export const LoginH1Z = styled.h1`
    text-align: center;
    padding: 0 0 15px 0;
    border-bottom: 1px solid silver;
    width: 100%;
    font-size: calc(1.5vh + 2vw); /*h1 fontsize */


`;

export const LoginH1 = styled.h1`
    text-align: center;
    padding: 0 0 20px 0;
    border-bottom: 1px solid silver;


`;

export const Furm = styled.form`
    padding: 0 40px;
    box-sizing: border-box;

`;

export const FormZ = styled.form.attrs({method: "post"})`
    padding: 0 40px;
    box-sizing: border-box;
`;

export const TxtField = styled.div`
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
`;

export const LogInTextBox = styled.div`
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: calc(1.5vh + 2vw) 0;
`;

export const ForgotPass = styled.div`
    margin: calc(-1vh - 1.5vw) 0 calc(1vh + 1.5vw) 5px;
    color: #a6a6a6;
    cursor: pointer;
    font-size: calc(0.5vh + 0.75vw);
    &:hover {
        text-decoration: underline;
    }
`;

export const Pass = styled.div`
    margin: -5px 0 20px 5px;
    color: #a6a6a6;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const SignUpLink = styled.div`
    margin: 1vh 0;
    text-align: center;
    font-size: calc(0.5vh + 0.75vw);
    color: #666666;
    & a {
        color: #2691d9;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;

export const SignLink = styled.div`
    margin: 30px 0;
    text-align: center;
    font-size: 16px;
    color: #666666;
    & a {
        color: #2691d9;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }

    /* & a:hover{
        text-decoration: underline;
    } */
`;

export const PlaceHolder = styled.label`
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: calc(0.75vh + 1vw);
    pointer-events: none;


`;


export const Label = styled.label`
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
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
        background: #2691d9; /**#2691d9 */
        transition: .5s;
    }

`;


export const Sapan = styled.span`
    &::before{
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        width: 0%;
        height: 2px;
        background: #2691d9; /**#2691d9 */
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
    &:focus ~ ${PlaceHolder}{
        transition: 0.5s;
    }
    &:focus ~ ${PlaceHolder}, &:valid ~${PlaceHolder}{
        /* top: 5px; */
        top: calc(42% - calc(0.75vh + 1vw));
        color: #2691d9;
    }
    &:focus ~ ${UnderLine}::before, &:valid ~${UnderLine}::before{
        width: 100%;
    }

`;

export const Imput = styled.input`
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;

    &:focus ~ ${Label}, &:valid ~${Label}{
        top: 5px;
        color: #2691d9;
    }
    &:focus ~ ${Sapan}::before, &:valid ~${Sapan}::before{
        width: 100%;
    }
`;

/* color: white;
    font-size: 1.5rem;
    cursor: pointer; */
export const FaceLogo = styled(FontAwesomeIcon)`
    padding-right: 12px;
    padding-left: 20px;
    font-size: 20px;
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
`;

export const Option = styled.div`
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
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
        color: #fff;
        /* border-radius: 5px; */
        transition: all 0.3s ease;
        margin: 1.5vh 0 1.5vh 0;

        
    }
    

`;


export const FacebookTest = styled.div`
    /* width: 98%; */
    & a {
        display: block;
        height: 45px;
        width: 100%;
        font-size: 15px;
        text-decoration: none;
        /* padding-left: 20px; */
        /* padding-left: 2%; */
        line-height: 45px;
        color: #fff;
        border-radius: 5px;
        transition: all 0.3s ease;
        margin: 10px 0 10px 0;

        
    }
    

`;

export const WithFacebookButton = styled(WithOtherButton)`
    background: linear-gradient(to right, #3b5998 0%, #476bb8 100%);
    &:hover {
            background: linear-gradient(to left, #3b5998 0%, #476bb8 100%);
            /* margin: 200px 0 500px 0; */
        }
`;

export const FaceBut = styled(FacebookTest)`
    background: linear-gradient(to right, #3b5998 0%, #476bb8 100%);
    &:hover {
            background: linear-gradient(to left, #3b5998 0%, #476bb8 100%);
            /* margin: 20px 0 50px 0; */
        }
`;

export const WithTwitterButton = styled(WithOtherButton)`
    background: linear-gradient(to right, #00acee 0%, #1abeff 100%);
    &:hover {
            background: linear-gradient(to left, #00acee 0%, #1abeff 100%);
            /* margin: 20px 0 50px 0; */
        }
`;

export const TwitterBut = styled(FacebookTest)`
    background: linear-gradient(to right, #00acee 0%, #1abeff 100%);
    &:hover {
            background: linear-gradient(to left, #00acee 0%, #1abeff 100%);
            /* margin: 20px 0 50px 0; */
        }
`;

export const WithGoogleButton = styled(WithOtherButton)`
    background: linear-gradient(to right, #DB4437 0%, #de564b 100%);
    &:hover {
            background: linear-gradient(to left, #DB4437 0%, #de564b 100%);
            /* margin: 20px 0 50px 0; */
        }
`;

export const GoogleBut = styled(FacebookTest)`
    background: linear-gradient(to right, #DB4437 0%, #de564b 100%);
    &:hover {
            background: linear-gradient(to left, #DB4437 0%, #de564b 100%);
            /* margin: 20px 0 50px 0; */
        }
`;



export const Budy = styled.div`
    margin: 0;
    padding: 0;
    font-family: montserrat;
    background: linear-gradient(120deg, #2980b9, #8e44ad);
    height: 100vh;
    overflow: hidden;
    width: 100%;

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

export const SliderArea = styled.div`
    position: absolute;
    top: 1%;
    left: 1%;
    /* transform: translate(-3%, -3%); */
    width: 49%;
    height: 98%;
    
    background-color: aqua;
    border-radius: 28px;
    @media(max-width: 600px){
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
    
    background-color: bisque;
    /* border-radius: 28px; */
    
    @media(max-width: 600px){
        left: 1%;
        width: 98%;

    }

`;

export const Container = styled.div` /**normalde formdu ama Centerdan çektim div yaptım */
    /**center-s */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* width: 400px; */
        /* background: white; */
        /* border-radius: 10px; */
    /**center- f */

    width: 65%;
    background-color: #484848;
    border-radius: 30px;
    height: 85%;


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
        @media (max-width: 600px), (max-height: 415px) {
        width: 85%;
    }

    @media (orientation: portrait) { /** yada landscape */
        width: 85%;
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