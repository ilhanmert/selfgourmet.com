import styled from "styled-components";

export const SaleStyle = styled.div`
    /* display: flex; */
    /* background-color: ${({theme}) => theme.comment}; */
    flex: 0 0 400px;
    white-space: nowrap;
    
    background-color: ${({theme}) => theme.sale_card_test_bg};
    border-radius: 5px;
    margin-left: 3px;
    margin-right: 3px;
    height: calc(100% - 10px);
    margin-top: 5px;
    color: black;
    position: relative;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45);

    }

    @media (max-width: 930px) {
        height: ${props => props.Response ? "217.4px" : "121.5px" };
        /* height: ${props => props.Response ? "222.8px" : "126.9px" }; */
        /* height: 126.9px; */
    }


`;