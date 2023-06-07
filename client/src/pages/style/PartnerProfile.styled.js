import styled from "styled-components";

const PartnerProfileStyled = styled.div`
    padding: 0;
    margin: 0;
    height: calc(100vh - 80px);
    width: 100%;
    color: white;
    overflow: auto;

    /* display: flex; */

`;
export default PartnerProfileStyled;

export const PartnerProfileCard = styled.div`
    position: relative;
    background: ${({theme}) => theme.partnerProfileCard};
    width: calc(100% - 12.4px);
    height: 250px;
    margin: 5px;
    border-radius: 5px;
    border: 1.2px solid silver;
    display: flex;
    overflow: hidden;
`;

export const PhotoArea = styled.div`
    position: absolute;
    margin: 5px;
    width: 240px;
    height: 240px;
`;


export const ResizedPhoto = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 15px;
`;

export const SideArea = styled.div`
    position: relative;
    border-radius: 5px;
    width: calc(100% - 250px);
    height: 250px;
    margin-left: 250px;
    /* background-color: bisque; */
    overflow: hidden;
`;

export const Title = styled.div`
    /* background-color: blue; */
    padding-left: 5px;
    padding-right: 5px;
    /* width: 365px; */
    max-width: 370px;
    height: 36px;
    font-size: 22px;
    overflow: hidden;
    /* @media (max-width: 1311px) {
        width: 20vw;
        font-size: 1.24vw;
        
    } */
`;

export const OnOff = styled.div`
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: ${props => props.open ? "green" : "grey"};
    right: 0px;
    top: 0px;
    border-radius: 100px;
    padding: 3px 3px 3px 3px;
    color: white;
    text-align: center;
    font-size: 8px;

    &:hover{
        cursor: pointer;
        transform: scale(1.6);
    }

    &:active{
        background-color: ${props => props.open ? "red" : "blue"};
    }
    
`;

export const AddComentBut = styled.div`
    user-select: none;
    background-color: ${({theme}) => theme.add_comment};
    position: absolute;
    right: 20px;
    width: 34px;
    height: 34px;
    text-align: center;
    font-size: 25px;
    color: ${({theme}) => theme.add_comment_color};
    border-radius: 100px;
    transition: transform 0.7s , width 0.5s, margin-right 0.9s;
    overflow: hidden;


    &:hover{
        font-size: 22px;
        transform: scale(1.05);
        width: 195px;
        margin-right: 10px;
        cursor: pointer;
    }

`;

export const AddMenuBut = styled(AddComentBut)`
    background-color: white;
    color: green;
    z-index: 3;
    transform: scale(0.7);
    right: 0px;
    bottom: 0px;
    &:hover{
        font-size: 22px;
        /* transform: scale(1.05); */
        width: 195px;
        margin-right: 10px;
        cursor: pointer;
    }
`;


export const TitleArea = styled.div`
    position: absolute;
    user-select: none;
    /* display: table-column; */
    margin-left: 5px;
    margin-top: 10px;
    height: 230px;
    /* background-color: aqua; */
    overflow: hidden;

    & ${Title}:first-child{
        font-size: 1.65vw;
        font-size: 26px;
        font-weight: bold;
        /* border: 1px solid #642cb0; */
        border-radius: 10px;
        /* background-color: #1119; */
        /* @media (max-width: 1311px) {
            font-size: 1.65vw;
        } */

    }
    & ${Title}:nth-child(2){
        font-size: 40px;
        margin-top: 0px;
        height: 48px;
    }
    & ${Title}:nth-child(3){
        margin-top: 90px;
        height: 24px;
    }
    & ${Title}:nth-child(4){
        height: 32px;
    }
`;

export const ProfilNavigateArea = styled.div`
    /* background-color: yellow; */
    position: absolute;
    width: 240px;
    height: 240px;
    display: table-column;
    right: 5px;
    top: 5px;
`;

export const ProfilNavigateButton = styled.div`
    position: relative;
    user-select: none;
    /* background-color: silver; */
    background: ${({theme}) => theme.partnerProfileNavigateButton};
    margin: 2px;
    width: 236px;
    height: 36.2px;
    font-size: 20px;
    text-align: center;
    padding-top: 8px;
    border-radius: 24px;
    border: 1px solid silver;
    &:hover {
        border: 1px solid blue;
        cursor: pointer;
        background: ${({theme}) => theme.partnerProfileNavigateButton_reverse};

        transition: 1.5s;
    }
`;

export const DegName = styled.div`
    /* background-color: blue; */
    width: 100%;
    height: 20px;
    font-size: 17px;
    text-align: center;
    color: white;
    /* @media (max-width: 1311px) {
        background-color: brown;
        font-size: 1.4vw;
       
    } */
`;
export const StarArea = styled(DegName)`
    /* margin-top: -12px; */
    font-size: 18px;
    /* @media (max-width: 1311px) {
        font-size: 1.1vw;
    } */

`;

export const FiveDegArea = styled.div`
    /* background-color: red; */
    /* display: flex; */
    position: absolute;
    /* background-color: aqua; */
    width: 150px;
    right: 245px;
    /* height: 500px; */


`;

export const DegArea = styled.div`
    /* background-color: yellow; */
    width: 100%;

`;

export const MultiArea = styled.div`
    border-radius: 5px;
    /* background-color: bisque; */
    background: ${({theme}) => theme.partnerMultiArea};
    width: calc(100% - 10px);
    height: calc(100% - 250px - 10px - 5px - 2.4px - 35px - 2px);
    margin: 0 5px 0 5px;
    border-top: 2px solid ${({theme}) => theme.active_tab};;
    overflow: auto;


`;

export const MenuArea = styled.div`
    border-radius: 5px;
    /* background-color: bisque; */
    background: ${({theme}) => theme.partnerMultiArea};
    width: calc(100% - 10px);
    height: calc(100% - 250px - 10px - 5px - 2.4px);
    margin: 0 5px 0 5px;
    overflow: auto;

`;

export const SalesArea = styled.div`
    border-radius: 5px;
    display: flex;
    /* background-color: bisque; */
    background: ${({theme}) => theme.partnerMultiArea};
    width: calc(100% - 10px);
    height: calc(100% - 250px - 10px - 5px - 2.4px);
    margin: 0 5px 0 5px;
    overflow-x: scroll;

`;

export const TabButton = styled.div`
    /* margin-left: 5.5px; */
    user-select: none;
    margin-top: 3px;
    color: whitesmoke;
    background-color: ${props => props.Act ? ({theme}) => theme.active_tab : ({theme}) => theme.passive_tab };
    border-radius: 20px;
    text-align: center;
    padding-top: 10px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;
    padding-bottom: 50px;
    transform: ${props => props.Act ? "scale(1.09)" : "none" };
    margin-right: ${props => props.Act ? "2.95px" : "0px" };

    &:hover {
        cursor: pointer;
    }



`;

export const TabArea = styled.div`
    overflow: hidden;
    width: calc(100% - 16px);
    height: 35px;
    /* background-color: whitesmoke; */
    /* border-bottom: 2px solid #e98f36; */
        display: flex;
        margin-left: 6px;

    ${TabButton}:first-child {
        margin-left: 7px
    }
`;

