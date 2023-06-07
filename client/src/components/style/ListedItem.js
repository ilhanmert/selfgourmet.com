import styled from "styled-components";
import {ImStarFull, ImStarHalf, ImStarEmpty} from "react-icons/im";


export const TamYildiz = styled(ImStarFull)`
    color: ${({theme}) => theme.yildiz};
    margin-left: 1px;
    margin-right: 1px;
    @media (max-width: 1311px) {
        margin: 0;
    }

`;
export const YarimYildiz = styled(ImStarHalf)`
    color: ${({theme}) => theme.yildiz};
    margin-left: 1px;
    margin-right: 1px;
    @media (max-width: 1311px) {
        margin: 0;
    }
`;
export const BosYildiz = styled(ImStarEmpty)`
    color: ${({theme}) => theme.yildiz};
    margin-left: 1px;
    margin-right: 1px;
    @media (max-width: 1311px) {
        margin: 0;
    }
`;

export const ListItem = styled.div`
    position: relative;
    background: ${({theme}) => theme.listitem};
    border: 1px solid silver;
    width: calc(100% - 2px); //border çıkardım
    height: 100px;
    margin-bottom: 10px;
    border-radius: 8px;
    display: flex;
    overflow: hidden;
    &:hover{
        /* cursor: pointer; */
    }

    @media (max-width: 450px) {
        margin-bottom: 4px;
    }
`;

export const ListedItemPhotoArea = styled.div`
    /* position: absolute; */
    user-select: none;
    position: relative;
    width: 90px;
    height: 100px;
    margin-left: 10px;
    /* background-color: aqua; */
    color: black;

`;

export const ListedItemPhoto = styled.div`
    position: absolute;
    /* background-color: bisque; */
    top: 5px;
    width: 90px;
    height: 90px;
    border-radius: 10px;

    & img {
        width: 90px;
        height: 90px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Title = styled.div`
    /* background-color: blue; */
    width: 300px;
    height: 32px;
    font-size: 16px;
    @media (max-width: 1311px) {
        width: 20vw;
        font-size: 1.24vw;
        
    }
`;
export const TitleArea = styled.div`
    user-select: none;
    display: table-column;
    margin-left: 5px;
    margin-top: 10px;
    height: 80px;
    /* background-color: aqua; */

    & ${Title}:first-child{
        /* font-size: 1.65vw; */
        font-size: 22px;
        font-weight: bold;
        &:hover {
            cursor: pointer;
        }
        @media (max-width: 1311px) {
            font-size: 1.65vw;
        }

    }
    & ${Title}:nth-child(2){
        margin-top: 8px;
        height: 18px;
    }
    & ${Title}:nth-child(3){
        height: 22px;
    }
`;
export const SideArea = styled.div`
    position: absolute;
    /* background-color: brown; */
    display: table-column;
    width: 600px;
    height: 80px;
    margin-top: 10px;
    /* margin-left: 20%; */
    right: 20px;

    @media (max-width: 1311px) {
        /* background-color: aqua; */
        right: 8px;
        /* width: calc(100% - 405px) */
        width: calc(100% - 129px - 20vw);
    }
`;
export const DegName = styled.div`
    /* background-color: blue; */
    user-select: none;
    width: 100%;
    height: 20px;
    font-size: 17px;
    text-align: center;
    color: white;
    @media (max-width: 1311px) {
        /* background-color: brown; */
        font-size: 1.4vw;
       
    }
`;
export const StarArea = styled(DegName)`
    /* margin-top: -12px; */
    font-size: 18px;
    @media (max-width: 1311px) {
        font-size: 1.1vw;
    }

`;

export const FiveDegArea = styled.div`
    /* background-color: red; */
    display: flex;
    width: 100%;
    /* height: 500px; */


`;

export const DegArea = styled.div`
    /* background-color: yellow; */
    width: 20%;

`;

export const PlatformBut = styled.div`
    user-select: none;
    background-color: ${props => props.color}; //test
    /* width: 80px; */
    width: 25%;
    font-size: 18px;
    border-radius: 20px;
    text-align: center;
    margin-left: 10px;
    color: white;
    font-weight: bold;
    padding-top: 2px;
    height: 28px;

    overflow: hidden;

    &:hover {
        cursor: pointer;
        transform: scale(0.98);
    }

    @media (max-width: 1311px) {
            font-size: 1.5vw;
            padding-top: calc(15px - 0.98vw);
            height: calc(28px - 15px + 0.98vw);
    }

`;

export const YemekSepetiPlatformBut = styled(PlatformBut)`
    background-color: ${({theme}) => theme.yemeksepeti};
    @media (max-width: 830px) {
            font-size: 1.2vw;
    }
`;
export const GetirPlatformBut = styled(PlatformBut)`
    background-color: ${({theme}) => theme.getir};
`;
export const TrendyolPlatformBut = styled(PlatformBut)`
    background-color: ${({theme}) => theme.trendyol};
`;
export const MigrosPlatformBut = styled(PlatformBut)`
    background-color: ${({theme}) => theme.migros};
`;

export const PlatformArea = styled.div`
    display: flex;
    margin-top: 5px;
    border-top: 1px solid silver;
    padding-top: 5px;
    & ${PlatformBut}:first-child{
        margin-left: 0;
    }
`;



