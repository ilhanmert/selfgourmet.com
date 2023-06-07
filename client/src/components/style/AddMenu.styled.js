import styled from "styled-components";

export const AddMenuStlye = styled.div`
    background-color: #1117;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 3;
    inset: 0;
    justify-content: center;
    align-items: center;
    display: flex;

`;

export const AddMenuArea = styled.div`
    background-color: ${({theme}) => theme.comment};
    z-index: 1;
    width: 90%;
    max-width: 500px;
    height: ${props => props.IMG ? 
    `calc(65px + 72px + 72px + 72px + 210px - 40px)` : 
    "calc(65px + 72px + 72px + 72px - 40px)"};
    box-shadow: ${({theme}) => theme.shadow};
    align-items: center;
    border-radius: 5px;
    min-width: 400px;
`;

export const TextBox = styled.div`
    background-color: ${({theme}) => theme.comment_response};
    position: relative;
    width: calc(100% - 40px);
    margin: 20px;
    font-size: 24px;
    height: 32px;
    border-radius: 10px;
`;

export const TextDescp = styled.label`
    width: 27%;
    height: 32px;
    background-color: ${({theme}) => theme.comment_writer};
    display: inline-block;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    padding-left: 8px;
`;

export const TextInput = styled.input`
    background: none;
    width: calc(73% - 18px);
    border: none;
    padding: 0 5px;
    color: white;
    height: 32px;
    font-size: 20px;
    outline: none;
`;

export const ImgArea = styled.div`
    width: 100%;
    height: 210px;
    text-align: center;
    border: none;

`;

export const MenuImg = styled.img`
    border: none;
    outline: none;
    margin-top: 5px;
    width: 200px;
    height: 200px;
    border-radius: 10px;
`;

export const SubmitBut = styled.div`
    user-select: none;
    width: 90%;
    margin-left: 5%;
    margin-top: 5px;
    height: 40px;
    border: calc(0.03vh + 0.05vw) solid;
    text-align: center;

    border-color: ${({theme}) => theme.comment};

    background: ${({theme}) => theme.add_comment};
    border-radius: 20px;
    font-size: ${props => props.ERR ? "25px" : "30px"};
    color: ${props => props.ERR ? "red" : "#FAFFFC"};
    font-weight: 700;
    cursor: pointer;
    outline: none;
    pointer-events: ${props => props.ERR ? "none" : "initial"};
    opacity: ${props => props.ERR ? 0.4 : 1};

    &:hover{
        border-color: ${({theme}) => theme.add_comment};
        transition: border-color .5s;
    }

    &:active{
        background-color: ${({theme}) => theme.comment_response};
        border-color: ${({theme}) => theme.comment};
        transition: background-color .1s;
    }

`;