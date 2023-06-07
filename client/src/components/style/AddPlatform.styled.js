import styled from "styled-components";

export const AddPlatformStlye = styled.div`
    background-color: ${({theme}) => theme.new_direction};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    inset: 0;
    display: flex;

`;

export const InputPriceArea = styled.div`
    color: ${({theme}) => theme.menu_compare_item_color};
    background-color: darkgreen;
    border-radius: 7px;
    font-weight: 700;
    font-size: 29.98px;
    width: 145px;
    height: 40px;
    margin-top: 13px;
    margin-left: 5px;
    padding-left: 3px;
    padding-right: 8px;
    text-align: right;

`;
export const InputPrice = styled.input`
    color: ${({theme}) => theme.menu_compare_item_color};
    width: 120px;
    text-align: right;
    font-weight: 700;
    font-size: 29.98px;
    border: none;
    outline: none;
    background: none;
`;

export const InputUrlArea = styled(InputPriceArea)`
    width: calc(100% - 415px - 160px - 20px);
    text-align: left;
    font-size: 20px;
    padding-top: 8px;
    height: 32px;

`;

export const InputUrl = styled(InputPrice)`
    text-align: left;
    padding-left: 3px;
    font-size: 20px;
    width: calc(100% - 50px);
`;


export const SelectPlatformArea = styled.div`
    color: ${({theme}) => theme.menu_compare_item_color};
    font-weight: 700;
    font-size: 29.98px;
    width: 400px;
    height: 50px;
    margin-top: 8px;
    margin-left: 10px;
    position: relative;
    overflow: hidden;



`;

export const PlatformOption = styled.option`
    background-color: ${
        props => {
            switch (props.CLR) {
                case 1: return ({theme}) => theme.restoran;
                case 2: return ({theme}) => theme.yemeksepeti;
                case 3: return ({theme}) => theme.getir;
                case 4: return ({theme}) => theme.trendyol;
                case 5: return ({theme}) => theme.migros;
                default: return ({theme}) => theme.default_platform;
            }
        }
    };

`;

export const SelectPlatform = styled.select`
    height: 50px;
    border: none;
    outline: none;
    background-color: ${
        props => {
            switch (props.CLR) {
                case 0: return "darkgreen";
                case 1: return ({theme}) => theme.restoran;
                case 2: return ({theme}) => theme.yemeksepeti;
                case 3: return ({theme}) => theme.getir;
                case 4: return ({theme}) => theme.trendyol;
                case 5: return ({theme}) => theme.migros;
                default: return ({theme}) => theme.default_platform;
            }
        }
    };
    text-align: center;
    width: 400px;
    font-size: 20px;
    color: white;
    margin: 0;
    padding: 0;

    border-radius: 7px;

    &:hover{
        cursor: pointer;
    }
`;

export const Close = styled.div`
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

export const Submit = styled(Close)`
    top: 49px;
    color: blue;

    &:hover{
        background-color: blue;
        color: white;
    }

    &:active{
        background-color: white;
        color: blue;
    }
`;