import styled from "styled-components";

export const FilterItemShell = styled.div`
    position: relative;
    margin-left: .5%;
    margin-top: 10px;
    width: 250px;
    left: 10px;
    height: 50px;
    background-color: ${({theme}) => theme.filter_item_select_box};

    display: flex;

    border-radius: 7px;

    font-size: 20px;

    overflow: hidden;



`;

export const FilterItemSelectBox = styled.select`
    position: relative;
    /* margin-left: .5%;
    margin-top: 10px; */
    margin: 0;
    padding: 0;
    width: 125px;
    /* left: 125px; */
    /* left: 10px; */
    height: 50px;
    background-color: ${({theme}) => theme.filter_item_select_box};

    border-radius: 7px;

    color: ${({theme}) => theme.filter_item_select_box_font};

    font-size: 20px;
    text-align: center;
    border: none;
    outline: none;

    &:hover{
        cursor: pointer;
    }



`;

export const FilterItemText = styled.div`
    user-select: none;
    width: 125px;
    height: 50px;
    font-size: 20px;
    background-color: ${({theme}) => theme.filter_item_text};
    padding-top: 10px;
    color: ${({theme}) => theme.filter_item_text_font};
    text-align: center;

`;

export const SelectBoxItem = styled.option.attrs(props => ({value: props.v}) )`

    


`;