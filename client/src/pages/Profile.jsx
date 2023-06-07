import React from 'react'
import ProfileStyled, { DoublePoint, InfoArea, InfoBody, InfoHeader, ProfilNavigateArea, ProfilNavigateButton, ProfileArea, ProfileAreaWithoutImage, ProfileHeader, ProfilePhotoArea, ProfilePhotoImg } from './style/Profile.styled'
import defAvatar from "../components/avatar.png";


const Profile = ({token}) => {
    const dateLastSign = new Date(token?.userNow?.last_sign_at);
    const dateLastSignFormated = `${dateLastSign.getDate() < 10 ? "0" : ""}${dateLastSign.getDate()}.` +
                                `${(dateLastSign.getMonth()+1) < 10 ? "0" : ""}${dateLastSign.getMonth()+1}.` +
                                `${dateLastSign.getFullYear()}` +
                                ` - ` +
                                `${dateLastSign.getHours() < 10 ? "0" : ""}${dateLastSign.getHours()}:` +
                                `${dateLastSign.getMinutes() < 10 ? "0" : ""}${dateLastSign.getMinutes()}:` +
                                `${dateLastSign.getSeconds() < 10 ? "0" : ""}${dateLastSign.getSeconds()}`;
    const dateCreated = new Date(token?.userNow?.created_at);
    const dateCreatedFormated = `${dateCreated.getDate() < 10 ? "0" : ""}${dateCreated.getDate()}.` +
                                `${(dateCreated.getMonth()+1) < 10 ? "0" : ""}${dateCreated.getMonth()+1}.` +
                                `${dateCreated.getFullYear()}` +
                                ` - ` +
                                `${dateCreated.getHours() < 10 ? "0" : ""}${dateCreated.getHours()}:` +
                                `${dateCreated.getMinutes() < 10 ? "0" : ""}${dateCreated.getMinutes()}:` +
                                `${dateCreated.getSeconds() < 10 ? "0" : ""}${dateCreated.getSeconds()}`;
  return (
    <ProfileStyled>
        <ProfileArea>
            <ProfilePhotoArea>
                <ProfilePhotoImg src={token?.userNow?.photo_url !== null ? token?.userNow?.photo_url : defAvatar} />
            </ProfilePhotoArea>
            <ProfileAreaWithoutImage>
                <ProfileHeader>Profile</ProfileHeader>
                <InfoArea>
                    <InfoHeader>Username</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{token?.userNow?.user_name}</InfoBody>
                </InfoArea>
                <InfoArea>
                    <InfoHeader>First Name</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{token?.userNow?.first_name}</InfoBody>
                </InfoArea>
                <InfoArea>
                    <InfoHeader>Last Name</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{token?.userNow?.last_name}</InfoBody>
                </InfoArea>
                <ProfileHeader>Contact</ProfileHeader>
                <InfoArea>
                    <InfoHeader>Phone Number</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{token?.userNow?.phone_number}</InfoBody>
                </InfoArea>
                <InfoArea>
                    <InfoHeader>E-Mail</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{token?.userNow?.email}</InfoBody>
                </InfoArea>
                <InfoArea>
                    <InfoHeader>State</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{token?.userNow?.country}</InfoBody>
                </InfoArea>
                <ProfileHeader>Info</ProfileHeader>
                <InfoArea>
                    <InfoHeader>Total Like</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{token?.userNow?.total_like}</InfoBody>
                </InfoArea>
                <InfoArea>
                    <InfoHeader>Total Shared Comment</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{token?.userNow?.total_shared_comment}</InfoBody>
                </InfoArea>
                <InfoArea>
                    <InfoHeader>Account Creat At</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{dateCreatedFormated}</InfoBody>
                </InfoArea>
                <InfoArea>
                    <InfoHeader>Last Sign At</InfoHeader><DoublePoint>:</DoublePoint><InfoBody>{dateLastSignFormated}</InfoBody>
                </InfoArea>
            </ProfileAreaWithoutImage>   
        </ProfileArea>

        <ProfilNavigateArea>
            <ProfilNavigateButton>Partner Başvurusu Yap</ProfilNavigateButton>
            <ProfilNavigateButton>Platform Başvurusu Yap</ProfilNavigateButton>
            <ProfilNavigateButton>Şifre değiştir</ProfilNavigateButton>
            <ProfilNavigateButton>Bilgileri Güncelle</ProfilNavigateButton>
        </ProfilNavigateArea>
    </ProfileStyled>
  )
}

export default Profile