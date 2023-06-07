import React, { useRef, useState } from 'react'
import { AddMenuArea, AddMenuStlye, ImgArea, MenuImg, SubmitBut, TextBox, TextDescp, TextInput } from './style/AddMenu.styled'
import { postNewMenu } from '../redux/actions/menu';
import { useDispatch } from 'react-redux';

const AddMenu = ({close, partner_id, token}) => {
    const dispatch = useDispatch();
    const bgRef = useRef(null);
    const [img, setImg] = useState(false);
    const[errMsg, setErrMsg] = useState("ERROR - 403");
    const[errVsb, setErrVsb] = useState(false);
    const [data, setData] = useState({
        head: "",
        content: "",
        menu_img: "",
        partner_id: partner_id
    })

    function onChange (e) {
        setData({...data, [e.target.name]: e.target.value});
        setErrVsb(false);
        if(e.target.name === "menu_img" && e.target.value !== "") {
            setImg(true);
        }
        if(e.target.name === "menu_img" && e.target.value === "") {
            setImg(false);
        }
    }
    console.log(data);
    function gonder() {
        if(data.head === "" || data.content === "" || data.menu_img === "") {
            setErrVsb(true);
            return setErrMsg("Zorunlu alanları boş bırakmayın.");
        }
        dispatch(postNewMenu(data, token?.token))
        close(false);
    }



  return (
    <AddMenuStlye
        ref={bgRef} 
        onClick={
        (e) => {
            if (e.target === bgRef.current) {
                close(false);
            }
            
        }
        }
    >
        <AddMenuArea IMG={img}>
            <TextBox>
                <TextDescp>Başlık</TextDescp>
                <TextInput onChange={(e) => onChange(e)} name='head' maxLength={100}/>
            </TextBox>
            <TextBox>
                <TextDescp>Açıklama</TextDescp>
                <TextInput onChange={(e) => onChange(e)} name='content' maxLength={255}/>
            </TextBox>
            <TextBox>
                <TextDescp>Görsel URL</TextDescp>
                <TextInput onChange={(e) => onChange(e)} name='menu_img' maxLength={255}/>
            </TextBox>
            {img && <ImgArea><MenuImg src={data.menu_img}/></ImgArea>} 
            <SubmitBut ERR={errVsb} onClick={gonder}>{errVsb ? errMsg : "YÜKLE"}</SubmitBut>
        </AddMenuArea>


    </AddMenuStlye>


  )
}


export default AddMenu