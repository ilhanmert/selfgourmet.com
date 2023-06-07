import React from 'react'
import { ChoserArea, CommentTextArea, 
    MaxTextValue, 
    PlatformChoserItem, 
    PlatformChoserSelectBox, 
    PlatformChoserShell, 
    PlatformChoserText, 
    PointBoxItem, 
    PointItemSelectBox, 
    PointItemShell, 
    PointItemText, 
    SelfError, 
    SubmitBut, 
    WriteCommentArea, WriteCommentStyle } from './style/WriteComment.styled'
import { useRef } from 'react';
import { useState } from 'react';
import { faHandSparkles, faPerson, faBurger, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiDish } from 'react-icons/bi';
import { postNewCommentAction } from '../redux/actions/comment';
import { useDispatch } from 'react-redux';
import useToken from '../hooks/useToken';

const WriteComment = ({close, partner_id}) => {
    const dispatch = useDispatch();
    const bgRef = useRef(null);
    const [token] = useToken();
    const[errMsg, setErrMsg] = useState("ERROR - 403");
    const[errVsb, setErrVsb] = useState(false);

    const init = {
        platform_id: 0,
        user_id: 0,
        partner_id: partner_id,
        speed_point: 0,
        taste_point: 0,
        service_point: 0,
        hygiene_point: 0,
        staff_point: 0,
        comment: "",
    }

    const[commentS, setCommentS] = useState(init);

    // console.log("commentpartner-> ", commentS);

    function choserChange(e) {
        setErrMsg(false);
        if ([e.target.name] == "platform_id") {
            setCommentS({...commentS, platform_id: parseInt(e.target.value), speed_point: 0, taste_point: 0, service_point: 0, hygiene_point: 0, staff_point: 0});
            if(commentS.platform_id !== 0) {
                document.querySelector("select[name='taste_point']").value = 0;
                document.querySelector("select[name='service_point']").value = 0;
                if(commentS.platform_id > 1) {
                    document.querySelector("select[name='speed_point']").value = 0;
                } else {
                    document.querySelector("select[name='staff_point']").value = 0;
                    document.querySelector("select[name='hygiene_point']").value = 0;
                }
            }        
        } else {
            setCommentS({...commentS, [e.target.name]: parseInt(e.target.value)});
        }
    }

    function commetInputChange (e) {
        setCommentS({...commentS, [e.target.name]: e.target.value});
    }
    console.log("commentS -> ", commentS);

    function gonder() {
        if(commentS.platform_id === 0) {
            setErrVsb(true);
            return setErrMsg("Lütfen platform seçiniz...");
        }         
        if(commentS.platform_id === 1 && (commentS.taste_point === 0 || commentS.service_point === 0 
            || commentS.hygiene_point === 0 || commentS.staff_point === 0)) {
            setErrVsb(true);    
            return setErrMsg("Lütfen puanlama yapınız...");

        }
        if(commentS.platform_id > 1 && (commentS.speed_point === 0 || commentS.taste_point === 0
            || commentS.service_point === 0)) {
            setErrVsb(true);    
            return setErrMsg("Lütfen puanlama yapınız...");
        }
        if(commentS.comment.length < 10) {
            setErrVsb(true);    
            return setErrMsg("Lütfen en az 10 karakterli yorum yazınız...");
        }

        dispatch(postNewCommentAction(commentS, token?.token));
        close(false);
        setCommentS({ ...init });

    }


  return (
    <WriteCommentStyle
        ref={bgRef} 
        onClick={
        (e) => {
            if (e.target === bgRef.current) {
                close(false);
                setCommentS({...init});
            }
            
        }
        }>
        <WriteCommentArea>
            <PlatformChoserShell>
                <PlatformChoserText>Platform</PlatformChoserText>
                <PlatformChoserSelectBox name='platform_id' onChange={choserChange} defaultValue={"0"}>
                    <PlatformChoserItem v="0" >Seçiniz...</PlatformChoserItem>
                    <PlatformChoserItem v="1" >Restoran</PlatformChoserItem>
                    <PlatformChoserItem v="2" >Yemeksepeti</PlatformChoserItem>
                    <PlatformChoserItem v="3" >Getir</PlatformChoserItem>
                    <PlatformChoserItem v="4" >Trendyol Yemek</PlatformChoserItem>
                    <PlatformChoserItem v="5" >Migros Yemek</PlatformChoserItem>
                    <PlatformChoserItem v="6" >Başkent Yemek</PlatformChoserItem>
                    <PlatformChoserItem v="7" >Çankaya Yemek</PlatformChoserItem>
                </PlatformChoserSelectBox>
            </PlatformChoserShell>


            <ChoserArea>
                { 
                    commentS.platform_id > 0 &&
                <>
                    <PointItemShell CLR={commentS.taste_point}>
                        <PointItemText CLR={commentS.taste_point}><FontAwesomeIcon icon={faBurger} shake /></PointItemText>
                        <PointItemSelectBox CLR={commentS.taste_point} name='taste_point' onChange={choserChange} defaultValue={"0"}>
                            <PointBoxItem v="0">-</PointBoxItem>
                            <PointBoxItem v="1">1</PointBoxItem>
                            <PointBoxItem v="2">2</PointBoxItem>
                            <PointBoxItem v="3">3</PointBoxItem>
                            <PointBoxItem v="4">4</PointBoxItem>
                            <PointBoxItem v="5">5</PointBoxItem>
                        </PointItemSelectBox>
                    </PointItemShell>
                    { commentS.platform_id > 1 &&
                        <PointItemShell CLR={commentS.speed_point}>
                            <PointItemText CLR={commentS.speed_point}><FontAwesomeIcon icon={faTruckFast} bounce /></PointItemText>
                            <PointItemSelectBox CLR={commentS.speed_point} name='speed_point' onChange={choserChange} defaultValue={"0"}>
                                <PointBoxItem v="0">-</PointBoxItem>
                                <PointBoxItem v="1">1</PointBoxItem>
                                <PointBoxItem v="2">2</PointBoxItem>
                                <PointBoxItem v="3">3</PointBoxItem>
                                <PointBoxItem v="4">4</PointBoxItem>
                                <PointBoxItem v="5">5</PointBoxItem>
                            </PointItemSelectBox>
                        </PointItemShell>
                    }

                    <PointItemShell CLR={commentS.service_point}>
                        <PointItemText CLR={commentS.service_point}><BiDish style={{fontSize: "24px"}}/></PointItemText>
                        <PointItemSelectBox CLR={commentS.service_point} name='service_point' onChange={choserChange} defaultValue={"0"}>
                            <PointBoxItem v="0">-</PointBoxItem>
                            <PointBoxItem v="1">1</PointBoxItem>
                            <PointBoxItem v="2">2</PointBoxItem>
                            <PointBoxItem v="3">3</PointBoxItem>
                            <PointBoxItem v="4">4</PointBoxItem>
                            <PointBoxItem v="5">5</PointBoxItem>
                        </PointItemSelectBox>
                    </PointItemShell>

                    { commentS.platform_id === 1 &&
                    <>
                        <PointItemShell CLR={commentS.hygiene_point}>
                            <PointItemText CLR={commentS.hygiene_point}><FontAwesomeIcon icon={faHandSparkles} fade /></PointItemText>
                            <PointItemSelectBox CLR={commentS.hygiene_point} name='hygiene_point' onChange={choserChange} defaultValue={"0"}>
                                <PointBoxItem v="0">-</PointBoxItem>
                                <PointBoxItem v="1">1</PointBoxItem>
                                <PointBoxItem v="2">2</PointBoxItem>
                                <PointBoxItem v="3">3</PointBoxItem>
                                <PointBoxItem v="4">4</PointBoxItem>
                                <PointBoxItem v="5">5</PointBoxItem>
                            </PointItemSelectBox>
                        </PointItemShell>

                        <PointItemShell CLR={commentS.staff_point}>
                            <PointItemText CLR={commentS.staff_point}><FontAwesomeIcon icon={faPerson} beatFade /></PointItemText>
                            <PointItemSelectBox CLR={commentS.staff_point} name='staff_point' onChange={choserChange} defaultValue={"0"}>
                                <PointBoxItem v="0">-</PointBoxItem>
                                <PointBoxItem v="1">1</PointBoxItem>
                                <PointBoxItem v="2">2</PointBoxItem>
                                <PointBoxItem v="3">3</PointBoxItem>
                                <PointBoxItem v="4">4</PointBoxItem>
                                <PointBoxItem v="5">5</PointBoxItem>
                            </PointItemSelectBox>
                        </PointItemShell>
                    </>
                    }
                    
                </>
                }

            </ChoserArea>
            <SelfError VSB={errVsb}>{errMsg}</SelfError>
            <CommentTextArea name='comment' onChange={commetInputChange} maxLength={180}/>
            <MaxTextValue>Kalan karakter: {180 - commentS.comment.length}</MaxTextValue>
            <SubmitBut onClick={gonder}>GÖNDER</SubmitBut>
            
        </WriteCommentArea>
    </WriteCommentStyle>
  )
}

export default WriteComment