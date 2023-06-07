import styled from "styled-components";

const ListStyled = styled.div`
    /* position: relative; */
    padding: 0;
    margin: 0;
    height: calc(100vh - 80px);
    width: 100%;
    /* background: linear-gradient(0deg, #181a1f, #0c0613); */
    color: white;
    overflow: auto;

    display: flex;


`;
export default ListStyled;

export const FilterItemBasket = styled.form`
    background-color: ${({theme}) => theme.filter_bg};
    width: 100%;
    height: calc(100% - 70px);
    overflow: auto;

`;

export const FilterButton = styled.div`
    user-select: none; 
    background: ${({theme}) => theme.filter_submit};
    color: ${({theme}) => theme.filter_submit_font}; 
    text-align: center; 
    font-size: 35px; 
    margin-top: 10px; 
    height: 50px; 
    padding-top: 0px; 
    margin-left: 40px; 
    width: 190px; 
    border-radius: 10px; 
    
    &:hover {
        cursor: pointer;
        transform : scale(0.98);
    }

`;

export const FilterArea = styled.div`
    position: relative;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 10px;
    width: 270px;
    height: calc(100% - 20px);
    background: ${({theme}) => theme.filter_bg};

    border-radius: 1vh;
    overflow: hidden;

    @media (max-width: 1311px) {
        width: 21vw;
        margin-right: 2px;

       
    }

    @media (max-width: 770px) {
        width: 180px;
        margin-right: 2px;

       
    }

    @media (max-width: 450px) {
        display: none;
       
    }


`;


export const ListedArea = styled.div`
    /* position: relative; */
    width: calc(100% - 294px);
    margin-top: 10px;
    height: calc(100% - 20px);
    border-radius: 1vh;
    overflow: auto;
    padding-right: 6px;

    @media (max-width: 1311px) {
        padding-right: 2px;
        width: calc(100% - 14px - 21vw);

       
    }

    @media (max-width: 770px) {
        padding-right: 2px;
        width: calc(100% - 194px);

       
    }

    @media (max-width: 450px) {
        margin-left: 2px;
        padding-right: 2px;
        width: 100%;
        margin-top: 2px;
        height: calc(100% - 4px);
        
       
    }

    /* background-color: blueviolet; */

`;



