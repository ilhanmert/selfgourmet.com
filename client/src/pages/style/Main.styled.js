import styled from "styled-components";

const MainJsx = styled.div`
    padding: 0;
    margin: 0;
    height: calc(100vh - 80px);
    width: 100%;
    /* background: linear-gradient(0deg, #181a1f, #0c0613); */
    color: white;
    overflow: auto;


`;
export default MainJsx;



export const Banner = styled.div`
    /* background-color: bisque; */
    margin-left: .5%;
    width: 99%;
    margin-top: 2vh;
    height: 36vh;
    border-radius: 10px;
    overflow: hidden;

`;


export const QuickSearch = styled.div`
    background-color: #38b9e0;
    text-align: center;
    align-items: center;
    font-size: 29px;
    /* padding-top: 1vh; */
    margin-left: 1%;
    margin-bottom: .5vh;
    width: 15.5%;
    margin-top: .5vh;
    border-radius: 5px;
    height: 5vh;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    transition: .1s;

    &:hover{
        background-color: #6bdcc2;
    }
    &:active{
        transform: scale(0.97);
    }

`;

