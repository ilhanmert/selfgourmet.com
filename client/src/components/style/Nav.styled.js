import styled, { keyframes } from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`;

const grad = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;


const Nav = styled.div`
    /* background-color: #3c2659; */
    background: ${({theme}) => theme.navbar};
    /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
    background-size: 400% 400%;
    animation: ${grad} 20s ease infinite;

    width: 100%;
    height: 60px;

    display: flex;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    /* overflow: hidden; */ /** hidden kapandı sırf arama yeri için */
    /* z-index: 1; */
    //total 80 px alan
`;
export default Nav;

export const TTest = styled.div`
    position: absolute;
    background-color: bisque;
    width: 60px;
    height: 60px;
    border-radius: 100px;
    right: 15px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);

    }
`;

export const GirisYapBut = styled.div`
    position: absolute;
    user-select: none;
    background-color: ${({theme}) => theme.sale_card_test_bg};
    width: 100px;
    text-align: center;
    padding-top: 5px;
    font-size: large;
    font-weight: 700;
    color: white;
    top: 22.5px;
    height: 30px;
    border-radius: 10px;
    right: 15px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
    }
    &:active{
        transform: scale(0.95);
    }
`;

const animOpen = keyframes`
    0% { height: 0px; width: 0px; }
    /* 30% { height: 400px; width: 400px; opacity: 1 } */
    /* 40% { height: 405px; width: 405px; opacity: 0.3; } */
    100% { height: 200px; width: 200px;  } //opacity: 0.6;
`;

const animClose = keyframes`
    0% { height: 200px; width: 200px; }
    /* 30% { height: 400px; width: 400px; opacity: 1 } */
    /* 40% { height: 405px; width: 405px; opacity: 0.3; } */
    100% { height: 0px; width: 0px;  } //opacity: 0.6;
`;

export const popUpOpenBack = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0; // sekmede üstünlük galiba 0 sa en üstte arttıkça alta iniyor
    background-color: #1118;
    display: flex;
`;

export const PopupItem = styled.div`
    position: relative;
    background-color: #d6c9e8;
    /* margin-top: 10px; */
    margin-left: 8px;
    margin-right: 8px;
    padding: 2px 0px 3px 10px;
    border-radius: 10px;
    font-size: 18px;
    /* width: 174px; */
    /* height: 24px; */
    right: 0px;

    &:hover {
        cursor: pointer;
        background-color: #796692;


    }
    
    & span {
        color: black ;
    }

    
`;

const animItemOpen = keyframes`
    10% { height: 0px; width: 0px; }
    100% { height: 24px; width: 174px;  } 
`;
const animItemClose = keyframes`
    0% { height: 24px; width: 174px; }
    60% { height: 0px; width: 0px;  } 

`;

export const BackG = styled.div`
    position: absolute;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    width: 100%;
    height: 100vh;
    background-color: #118;
    z-index: 0;
    inset: 0;

`;

export const PopupCont = styled.div`
    position: absolute;
    background: linear-gradient(0deg, #181a1f, #0c0613);
    border-radius: 20px;
    right: 10px;
    /* animation-play-state: ${props => props.Act ? "running" : "paused"}; */
    animation-name: ${props => props.Open ? animOpen : animClose};
   
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    overflow: hidden;


    ${PopupItem}:first-child{
        margin-top: 15px;
    }
    ${PopupItem}{
        margin-top: 6px;
        
        animation-name: ${props => props.Open ? animItemOpen : animItemClose};
        animation-delay: 0s;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        & span {
            visibility: ${props => props.Open ? "visible" : "hidden"};
            opacity: ${props => props.Open ? "1" : "0"};;
            transition: visibility 0s, opacity 1.2s linear;
           
        }
        
    }
`; 



export const Logo = styled.img`
    /* position: absolute; */
    user-select: none;
    width: 69.2px; //calc(3.72vh + 5.62vw);           //562px
    height: 60px; //calc(5.62vh + 3.72vw);           //372px */
    /* padding-left: 12px; */
    margin-left: 12px;
    /* margin: 0; */
    /* padding-left: 0; */
    /* border-radius: calc(0.9vh + 1.35vw); */
    cursor: pointer;
`;

export const HamburherButton = styled.i`
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem;
    font-size: 2.1rem;
    z-index: 2;
    @media(min-width: 600px) {
        display: none;
    }
`;

export const InputArea = styled.div`
    position: relative;
    width: 35%;
    margin-left: 10px;
    display: table-column;
`;
export const SearchSuggestLabel = styled.label`
    width: calc(100% - 1px);
    height: 24px;
    display: block;
    font-size: 20px;
    overflow: hidden;
    border-bottom: 1px solid silver;
    padding-bottom: 2px;
    padding-left: 1px;

    &:hover {
        background-color: grey;
    }
`;
export const SearchSuggestArea = styled.div`
    width: 86%;
    height: 200px;
    background-color: #FDFDFD;
    z-index: 5;
    margin-left: 7%;
    margin-right: 10%;
    margin-top: -7px;
    overflow: auto;
    display: ${(props) => props.act ? "" : "none" };
`;


export const Girdi = styled.input.attrs(props => ({type : `${props.t}`}))`
    width: 82%;//35%;
    margin-left: 2%;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 5%;
    padding-right: 10%;
    /* min-width: 250px; */


    height: 80%;
    font-size: 19px;//calc(0.75vh + 1vw);
    font-weight: 520;
    border: none;
    background-color: #FDFDFD;
    border-radius: 25px;//calc(0.9vh + 1.35vw);
    outline: none;


    color: #000;


`;

export const MobileMenu = styled.nav`
    display: flex;
    background-color: ${({theme}) => theme.elevetion_2};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 35%;
    flex-direction: column;
    padding: 4rem 0.5rem;
    gap: 2rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    transform: ${({open}) => open? "tranlateX(0%);" : 
        "translateX(-700%);" //-100% dü ama bi kısmı gözüküyor
    };
    transition: transform 150ms ease-in;

    a:first-child{
        text-decoration: none;
    }

    a{
        color: white;
    }

    @media(min-width: 600px){
        display: none;

    }

`;

export const DesktopMenu = styled.nav`
    display: flex;
    background-color: ${({theme}) => theme.elevetion_2};
    align-items: center;
    text-align: center;
    padding: 1rem 2rem;


    max-width: 100%;
    height: 15%;
    gap: 3rem;
    font-size: 1.5rem;


    a:first-child{
        margin-right: auto;
        &:hover{
            text-decoration: none;
        }
    }

    a{
        text-decoration: none;
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
    @media(max-width: 600px){ //tam 600px de boşluk oluşuyor onu ele al
        display: none;

    }

`;
