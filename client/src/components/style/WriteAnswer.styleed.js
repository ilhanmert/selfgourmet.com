import styled from "styled-components";

export const WriteCommentStyle = styled.div`
    background-color: #1117;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 3;
    inset: 0;
    /* justify-content: center;
    align-items: center;
    display: flex; */



`;

export const WriteCommentArea = styled.div`
    background-color: ${({theme}) => theme.comment};
    z-index: 1;
    width: calc(100% - 22px - 10px - 20px - 5px - 5px);
    height: calc(66px + 21.9px + 5px + 3.2px);
    margin-left: 32px;
    margin-top: calc(66px + 23.5px + 5px + 3px);
    box-shadow: ${({theme}) => theme.shadow};
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: space-around; */
    border-radius: 5px;
`;

export const SideArea = styled.div`
    /* background-color: brown; */
    width: 110px;
    height: 100%;
`;

export const CommentTextArea = styled.textarea`
    width: calc(100% - 110px - 3px);
    /* max-width: 400px; */
    margin-left: 3px;
    margin-top: 3px;
    /* margin-block: auto; */
    height: calc(100% - 6px);
    outline: 0;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    resize: none;
    box-sizing: border-box;
    font-size: 1.4rem;
    background-color: #f3f3f3;
`;

export const SubmitBut = styled.div`
    user-select: none;
    width: 100px;
    margin-left: 5px;
    margin-top: 9px;
    height: 32px;
    padding-top: 5px;
    border: calc(0.03vh + 0.05vw) solid;
    text-align: center;

    border-color: ${({theme}) => theme.comment};

    background: ${({theme}) => theme.add_comment};
    border-radius: 20px;
    font-size: 18px;
    color: #FAFFFC;
    font-weight: 700;
    cursor: pointer;
    outline: none;

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

export const MaxTextValue = styled.div`
    color: ${props => props.ERR ? "red" : "white"};
    text-align: center;
    width: 104px;
    margin-left: 3px;
    font-size: 15px;

`;

