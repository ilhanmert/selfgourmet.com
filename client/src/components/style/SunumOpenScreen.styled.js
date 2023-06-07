import styled from "styled-components";


export const SunumOpenScreenStyle = styled.div`
    background-color: #1117;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    inset: 0;
    justify-content: center;
    align-items: center;
    display: flex;

`;

export const SunumOpenScreenArea = styled.div`
    background: linear-gradient(315deg, rgba(255,255,255,1) 0%, rgba(246,245,246,1) 41%, rgba(214,208,214,1) 70%, rgba(36,0,34,1) 100%);
    z-index: 1;
    width: 65%;
    height: 70%;
    box-shadow: ${({theme}) => theme.shadow};
    align-items: center;
    border-radius: 5px;
    min-width: 400px;
    display: flex;
    overflow: hidden;
`;

export const ImgSunumDetail = styled.img`
    width: 20%;
    height: auto;
    padding-left: 1%;
    /* background-color: aqua; */
    /* margin-top: 0; */
`;

export const DetailSunumArea = styled.div`
    width: 75%;
    height: 60%;
    /* background-color: bisque; */
    padding-left: 4%;
    color: black;
    align-items: center;
    overflow-y: auto;
    padding-top: 20%;
    padding-bottom: 20%;
    font-size: 20px;

`;