import React, { useState } from 'react'
import { AddPlatformStlye, Close, InputPrice, InputPriceArea, InputUrl, InputUrlArea, PlatformOption, SelectPlatform, SelectPlatformArea, Submit } from './style/AddPlatform.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addDirectionAction } from '../redux/actions/menu'

const AddPlatform = ({close, menu_id, partner_id, token}) => {
    const dispatch = useDispatch();
    const {platforms} = useSelector(state => state.platforms);
    // console.log("platforms", platforms);
    const [data, setData] = useState({
        partner_id,
        menu_id,
        platform_id: 0,
        direct_url: "",
        price: 0,
    })

    function onChange (e) {
        if(e.target.name === "price"){
            const regex = /^(\d{1,4}(\.\d{0,2})?)$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
                setData({...data, [e.target.name]: e.target.value});
              }
        } else if (e.target.name === "platform_id") {
            setData({...data, [e.target.name]: parseInt(e.target.value)});
        } else{
            setData({...data, [e.target.name]: e.target.value});
        }
    }

    function onClick(e) {
        if(e.target.value === "0")
        e.target.value = '';
    }

    function gonder() {
        data.price = parseFloat(data.price);
        console.log("data", data);
        dispatch(addDirectionAction(data, token?.token))
        close(false);
    }

  return (
    <AddPlatformStlye>
        <SelectPlatformArea>
            <SelectPlatform CLR={data.platform_id} name="platform_id" onChange={(e) => onChange(e)}>
                {
                    platforms?.map((platform, i) => (
                        <PlatformOption CLR={platform.id} value={platform.id}>{platform.platform_name}</PlatformOption>
                    )) 
                }
            </SelectPlatform>
        </SelectPlatformArea>
        <InputUrlArea>URL:<InputUrl onChange={(e) => onChange(e)} name="direct_url" maxLength={255}/></InputUrlArea>
        <InputPriceArea><InputPrice onClick={(e) => onClick(e)} onChange={(e) => onChange(e)} name="price" value={data.price} maxLength={7}/>₺</InputPriceArea>
        <Close onClick={() => {close(false)}}><FontAwesomeIcon icon={faXmark}/></Close>
        <Submit onClick={gonder}><FontAwesomeIcon icon={faCheck}/></Submit>
    </AddPlatformStlye>
  )
}

export default AddPlatform