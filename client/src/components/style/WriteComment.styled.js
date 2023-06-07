import styled from "styled-components";

export const WriteCommentStyle = styled.div`
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

export const WriteCommentArea = styled.div`
    background-color: ${({theme}) => theme.comment};
    z-index: 1;
    width: 90%;
    max-width: 500px;
    height: 540px;
    box-shadow: ${({theme}) => theme.shadow};
    /* display: flex; */
    /* flex-direction: column; */
    align-items: center;
    /* justify-content: space-around; */
    border-radius: 5px;
    min-width: 400px;
`;

export const CommentTextArea = styled.textarea`
    width: 90%;
    /* max-width: 400px; */
    margin-left: 5%;
    margin-top: 10px;
    /* margin-block: auto; */
    height: 50%;
    outline: 0;
    border: 0;
    padding: 1rem 2rem;
    border-radius: 5px;
    resize: none;
    box-sizing: border-box;
    font-size: 1.4rem;
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
    font-size: 30px;
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
    color: white;
    text-align: center;
    width: 150px;
    margin-left: calc(calc(100% - 150px) / 2);

`;

export const ChoserArea = styled.div`
    display: flex;
    margin-left: 5%;
    width: 90%;
    height: 35px;
    margin-top: 10px;
    /* background-color: aqua; */
`;

export const PlatformChoserShell = styled.div`
    position: relative;
    margin-left: 5%;
    margin-top: 40px;
    width: 90%;
    height: 40px;
    background-color: ${({theme}) => theme.comment_response};

    display: flex;

    border-radius: 7px;

    font-size: 20px;

    overflow: hidden;



`;

export const SelfError = styled.div`
    color: red;
    width: 90%;
    margin-left: 5%;
    height: 22px;
    text-align: center;
    margin-top: 10px;
    visibility: ${props => props.VSB ? "" : "hidden"};
`;



export const PlatformChoserSelectBox = styled.select`
    position: relative;
    margin: 0;
    padding: 0;
    width: 60%;
    height: 50px;
    /* background-color: ${({theme}) => theme.comment_response}; */
    background: none;

    border-radius: 7px;

    color: white;

    font-size: 20px;
    text-align: center;
    border: none;
    outline: none;
    padding-bottom: 10px;

    &:hover{
        cursor: pointer;
    }



`;



export const PlatformChoserText = styled.div`
    user-select: none;
    width: 40%;
    height: 50px;
    font-size: 20px;
    border-right: 0.1px solid #FAFFFC;
    /* background-color: ${({theme}) => theme.filter_item_text}; */
    padding-top: 6px;
    color: white;
    text-align: center;
`;


export const PlatformChoserItem = styled.option.attrs(props => ({value: props.v}) )`
    background-color: ${({theme}) => theme.comment_response};
`;


export const PointItemShell = styled.div`
    position: relative;
    margin-left: .5%;
    /* margin-top: 10px; */
    /* width: 250px; */
    width: 200px;
    height: 35px;
    background-color: ${({theme}) => theme.comment_response};
    background-color: ${props => {
        if(props.CLR == 3) {
           return ({theme}) => theme.average_point;
        }
        if (props.CLR > 3) {
           return ({theme}) => theme.good_point;
        }
        if (props.CLR < 3 && props.CLR > 0) {
           return ({theme}) => theme.bad_point;
        }
    }};
    display: flex;
    border-radius: 7px;
    font-size: 18px;
    overflow: hidden;
`;
export const PointItemText = styled.div`
    user-select: none;
    width: 40%;
    height: 35px;
    font-size: 20px;
    padding-top: 5px;
    color: #FAFFFC;
    /* color: ${props => {
        if(props.CLR < 1) {
           return "black";
        } else {
            return "#FAFFFC";
        }
    }}; */
    text-align: center;
    border-right: 0.1px solid #FAFFFC;
    /* border-right: 0.1px solid ${props => {
        if(props.CLR < 1) {
           return "black";
        } else {
            return "#FAFFFC";
        }
    }}; */

    
`;

export const PointItemSelectBox = styled.select`
    position: relative;
    margin: 0;
    padding: 0;
    width: 60%;
    height: 35px;
    background: none;
    border-radius: 7px;

    color: #FAFFFC;
    /* color: ${props => {
        if(props.CLR < 1) {
           return "black";
        } else {
            return "#FAFFFC";
        }
    }}; */

    font-size: 20px;
    font-weight: bolder;
    text-align: center;
    border: none;
    outline: none;

    &:hover{
        cursor: pointer;
    }

`;

export const PointBoxItem = styled.option.attrs(props => ({value: props.v}) )`
    background-color: ${({theme}) => theme.comment_response};
    background-color: ${props => {
        if(props.v == 3) {
           return ({theme}) => theme.average_point;
        }
        if (props.v > 3) {
           return ({theme}) => theme.good_point;
        }
        if (props.v < 3 && props.value > 0) {
           return ({theme}) => theme.bad_point;
        }
    }};


`;