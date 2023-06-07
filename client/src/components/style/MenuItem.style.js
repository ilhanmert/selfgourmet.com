import styled from "styled-components";

export const MenuStyle = styled.div`
    /* display: flex; */
    /* background-color: ${({theme}) => theme.comment}; */
    background-color: ${({theme}) => theme.menu_item_bg};
    border-radius: 5px;
    margin-left: 5px;
    width: calc(100% - 10px);
    height: ${props => props.Open ? `calc(${props.Hmuch}*75px + 100px + 5px)` : "100px" };
    /* height: 100px; */
    margin-top: 5px;
    color: ${({theme}) => theme.menu_color};
    position: relative;
    overflow: hidden;
    transition: height 1s;

    &:hover {
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45);

    }

    @media (max-width: 930px) {
    }


`;

export const Delete = styled.div`
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: white;
    left: 87.5px;
    top: 2.5px;
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

export const Flexer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    /* background-color: yellow; */
    border-bottom: 1px solid black;
    &:hover{
        cursor: pointer;
    }
`;

export const MenuImageArea = styled.div`
    /* background-color: bisque; */
    height: 100px;
    width: 100px;


`;

export const MenuImage = styled.img`
    width: 90px;
    height: 90px;
    margin-left: 5px;
    margin-top: 5px;
    border: 0.2px solid ${({theme}) => theme.menu_item_img_border};
    border-radius: 10px;
    background-color: ${({theme}) => theme.menu_img_bg};

`;

export const MenuItemSideArea = styled.div`
    display: table-column;
    /* background-color: brown; */
    width: calc(100% - 100px);
    border-radius: 5px;
    height: 100px;

`;

export const MenuHeader = styled.div`
    margin-left: 5px;
    margin-top: 5px;
    width: 600px;
    height: 40px;
    /* background-color: blue; */
    color: ${({theme}) => theme.menu_color};
    font-size: 30px;
    padding-left: 3px;
`;

export const MenuContent = styled.div`
    margin-left: 5px;
    padding-left: 3px;
    margin-top: -5px;
    width: 600px;
    height: 30px;
    /* background-color: purple; */
    font-size: 18px;


`;

