import styled from "styled-components";

const ProfileStyled = styled.div`
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
    background: linear-gradient(135deg, rgba(36,0,34,1) 4%, rgba(68,9,121,1) 41%, rgba(97,7,144,1) 54%, rgba(136,61,174,1) 80%);


    display: flex;


`;
export default ProfileStyled;


export const ProfilePhotoArea = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 250px;
    background-color: brown;
    /* overflow: hidden; */
    margin: 50px 50px 15px 50px;


`;



export const ProfilePhotoImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 250px;


`;

export const ProfileArea = styled.div`
    /* background-color: red; */
    width: 350px;

`;

export const ProfileAreaWithoutImage = styled.div`
    width: 350px;
    overflow-y: auto;
    height: calc(100% - 300px - 20px);
    padding-left: 5px;
    border-radius: 5px;
    overflow-x: hidden;
    /* overflow: hidden; */
`;

export const InfoHeader = styled.div`
    background-color: #1118;
    width: 170px;
    padding-top: 5px;
    height: 25px;
    padding-left: 15px;

`;
export const InfoBody = styled.div`
    background-color: #1118;
    width: 153px;
    padding-top: 5px;
    padding-right: 5px;
    height: 25px;
    overflow-y: hidden;
    overflow-x: auto;

    &::-webkit-scrollbar{
        display: none;
    }

`;

export const InfoArea = styled.div`
    display: flex;
`;

export const ProfileHeader = styled.h1`
    background-color: #1118;
    padding-left: 5px;
    border-bottom: 1px solid ${({theme}) => theme.active_tab};
    margin: 0;
    width: 345px; //-4 scroll

`;

export const DoublePoint = styled.div`
    background-color: #1118;
    padding-top: 5px;
    height: 25px;
    width: 7px;
    user-select: none;

`;

export const ProfilNavigateArea = styled.div`
    /* background-color: yellow; */
    position: absolute;
    width: 240px;
    height: 192px;
    display: table-column;
    right: 5px;
    bottom: 0px;

`;

export const ProfilNavigateButton = styled.div`
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