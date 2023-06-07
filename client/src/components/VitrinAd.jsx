import React from 'react'
import { AdImg, VitrinAdStyled } from './style/VitrinAd.styled'
import { RiAdvertisementFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedPartnerAction } from '../redux/actions/partner';
import { getAllCommentsByPartnerId } from '../redux/actions/comment';
import { getDirectionByPartnerId, getMenuByPartnerId } from '../redux/actions/menu';

const VitrinAd = ({data}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function goTo() {
        await dispatch(selectedPartnerAction(data.id));
        await dispatch(getAllCommentsByPartnerId(data.id, "like"));
        await dispatch(getMenuByPartnerId(data.id));
        await dispatch(getDirectionByPartnerId(data.id));
        navigate(`/partner/${data.title}/${data.id}`);   
    }


  return (
    <VitrinAdStyled onClick={goTo}>
        <RiAdvertisementFill style={{color: "#f9f906", width: "40px", height: "40px", position: "absolute", left: "1%" }}/>
        <AdImg src={data.img}/>
    </VitrinAdStyled>
  )
}

export default VitrinAd