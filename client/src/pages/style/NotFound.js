import styled from "styled-components";

const NotFoundStyled = styled.div`
    /* background-color: black; */
    color: white;
    width: 100%;
    height: calc(100vh - 80px);

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-items: center;
    font-size: 200px;

`;
export default NotFoundStyled;

export const MessageBox = styled.div`
    background-color: ${({theme}) => theme.not_found_message_box_bg};
    color: ${({theme}) => theme.not_found_message_box_color};
    width: 500px;
    height: 350px;
    font-size: 50px;
    margin-top: -100px;
    border-radius: 20px;

`;

export const Head404 = styled.p`
    color: ${({theme}) => theme.not_found_message_box_color};
    font-size: 80px;
    font-weight: bolder;
    margin-bottom: -20px;
    margin-top: 70px;
`;