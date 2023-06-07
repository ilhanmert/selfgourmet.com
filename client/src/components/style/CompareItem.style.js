import styled from "styled-components";


export const ComparePartnerTitle = styled.div`
    color: ${({theme}) => theme.menu_compare_item_color};
    /* background-color: brown; */
    font-weight: 700;
    font-size: 29.98px;
    width: 90%;
    height: 40px;
    margin-top: 13px;
    margin-left: 10px;


`;

export const ComparePartnerPrice = styled.div`
    color: ${({theme}) => theme.menu_compare_item_color};
    /* background-color: black; */
    font-weight: 700;
    font-size: 29.98px;
    /* width: 80%; */
    width: 145px;
    height: 40px;
    margin-top: 13px;
    margin-left: 5px;
    padding-left: 3px;
    padding-right: 2px;
    text-align: center;

`;

export const CompareItemStyle = styled.div`
    position: relative;
    margin-left: 107.5px;
    background-color: ${props => props.CLR};
    border: 2px solid ${props => props.CLR};
    margin-top: 5px;
    width: calc(100% - 100px - 15px - 4px);
    border-radius: 10px;
    height: 66px;
    transition: 0.6s ease;
    display: flex;
    overflow: hidden;
    
    &:hover {
        cursor: ${props => props.ekleOpen ? "initial" : "pointer"};
        border: 2px solid ${({theme}) => theme.menu_compare_item_hover};
        & ${ComparePartnerTitle} {
            color: ${({theme}) => theme.menu_compare_item_hover};
        }
        & ${ComparePartnerPrice} {
            color: ${({theme}) => theme.menu_compare_item_hover};
        }
    }

`;

export const Delete = styled.div`
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: white;
    right: 0px;
    top: 0px;
    border-radius: 100px;
    padding: 3px 3px 3px 3px;
    color: red;
    text-align: center;
    font-size: 8px;

    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        background-color: red;
        color: white;

    }

    &:active{
        background-color: black;
        color: white;

    }
    
`;


