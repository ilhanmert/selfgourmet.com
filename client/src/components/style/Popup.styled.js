import styled, { keyframes } from "styled-components";


const PostModal = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0; // sekmede üstünlük galiba 0 sa en üstte arttıkça alta iniyor
    /* background-color: #1118; */
    background: none;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
     


`;

export const PostModalForm = styled.form`
    width: 90%;
    max-width: 500px;
    height: 50%;
    box-shadow: ${({theme}) => theme.shadow};
    background-color: ${({theme}) => theme.elevetion_3};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    & > textarea {
        width: 90%;
        max-width: 400px;
        /* margin-block: auto; */
        height: 50%;
        outline: 0;
        border: 0;
        padding: 1rem 2rem;
        border-radius: 5px;
        resize: none;
        box-sizing: border-box;
        font-size: 1.4rem;


    }


    & > button {
        /* margin-top: auto;
        margin-bottom: auto; */
        color: white;
        background-color: ${({theme}) => theme.primary};
        outline: 0;
        border: 0;
        appearance: none;
        --webkit-appearance: none;
        --moz-appearance: none;
        text-decoration: none;
        padding: 0.7rem 1.5rem;
        font-size: 1.2rem;
        border-radius: 5px;
        :active{
            transform: scale(0.98);
        }

    }

`;

export const PostModalHeader = styled.div`

`;

// export const PostModalSubmit = styled.submit``;

export const PostModalButton = styled.i`
    z-index: 2;
    margin-top: auto;
    margin-inline: auto;
    padding: 0.7rem 1.7rem;
    font-size: 2.5rem;
    color: ${({theme}) => theme.primary};
    background-color: transparent;
    border-radius: 5px;
    border: 4px solid ${({theme}) => theme.primary};
    @media(min-width: 600px) {
        margin-top: 0;
        margin-inline: 0;
        padding: 0.2rem 0.7rem;
        font-size: 2rem;

        &:hover{
            color: ${({theme}) => theme.elevetion_2};
            background-color: ${({theme}) => theme.primary};
            /* border: 4px solid ${({theme}) => theme.elevetion_2}; */
            transition: all 150ms ease-in;
        }
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


export const PopupCont = styled.div`
    position: absolute;
    background: linear-gradient(0deg, #181a1f, #0c0613);
    border-radius: 20px;
    right: 10px;
    top: 10px;
    z-index: 2;
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



export default PostModal;