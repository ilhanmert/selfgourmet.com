import styled from "styled-components";

const SunumStyled = styled.div`
    position: relative;
    padding: 0;
    margin: 10px;
    height: calc(100vh - 80px - 20px - 2px);
    width: calc(100% - 20px - 2px);
    border-radius: 5px;
    border: 1px outset #240022;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
    /* background: linear-gradient(0deg, #181a1f, #0c0613); */
    color: white;
    overflow: auto;
    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,245,246,1) 41%, rgba(214,208,214,1) 70%, rgba(36,0,34,1) 100%);


    display: flex;


`;
export default SunumStyled;

export const MainContainer = styled.div`
    width: calc(100% - 165px);
    overflow: auto;
    /* background-color: bisque; */
    padding-left: 5px;
    padding-bottom: 5px;


`;

export const ButtonContainer = styled.div`
    width: 150px;
    height: calc(60px * 6);
    margin-top: 10px;
    margin-left: auto;
    margin-right: 5px;
    /* background-color: gray; */
`;

export const SunumButton = styled.div`
    user-select: none;
    margin-bottom: 5px;
    width: 150px;
    height: 45px;
    background-color: ${props => props.ACT ? "#4c4c00" : "#00004c" };
    color: white;
    border-radius: 10px;

    text-align: center;
    justify-content: center;
    font-size: 25px;
    padding-top: 10px;

    &:hover{
        transform: scale(1.02);
        cursor: pointer;
    }


`;

export const SunumContainer = styled.div`
    display: ${props => props.OPN ? "block" : "none" };

`;

export const SunumImage = styled.img`
    height: 300px;
    cursor: pointer;
`;