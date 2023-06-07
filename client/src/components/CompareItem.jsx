import React, { useState } from 'react'
import { CompareItemStyle, ComparePartnerPrice, ComparePartnerTitle, Delete } from './style/CompareItem.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import AddPlatform from './AddPlatform';
import { useDispatch } from 'react-redux';
import { getAllPlatform } from '../redux/actions/platform';
import useToken from '../hooks/useToken'
import { deleteDirectionAction } from '../redux/actions/menu';


const CompareItem = ({data, newCompareItem, userHasThis, menu_id, partner_id, token}) => {
  const [ekle, setEkle] = useState(false);
  const dispatch = useDispatch();
  const [newToken] = useToken();
  async function goToMenu () {
    if(!ekle){
      if(!newCompareItem) {
        if(data?.direct_url !== null){
          window.open(
            `${data?.direct_url}`,
            '_blank'
          );
        }
      } else {
        await dispatch(getAllPlatform());
        setEkle(true);
      }
    }
    
  }

  let color = "";
  switch (data?.platform_id) {
    case 1: color = ({theme}) => theme.restoran; break;
    case 2: color = ({theme}) => theme.yemeksepeti; break; 
    case 3: color = ({theme}) => theme.getir; break;
    case 4: color = ({theme}) => theme.trendyol; break;
    case 5: color = ({theme}) => theme.migros; break;
  
    default: color = ({theme}) => theme.default_platform; break;
  }

  function deleteDirection () {
    dispatch(deleteDirectionAction({direction_id: data.id, token: token?.token}));
  }
  
  return (
    <CompareItemStyle ekleOpen={ekle} CLR={data?.platform_id ? color : ({theme}) => theme.new_direction} onClick={goToMenu}>
      {ekle && <AddPlatform close={setEkle} menu_id={menu_id} partner_id={partner_id} token={newToken}/>}
        <ComparePartnerTitle>
            {data?.platform_name ? data?.platform_name : "Yeni Platform Eşleştir"}
        </ComparePartnerTitle>
        <ComparePartnerPrice>
            {data?.price ? `${data?.price}₺` : ""}
        </ComparePartnerPrice>
        {userHasThis && <Delete onClick={deleteDirection}><FontAwesomeIcon icon={faTrashCan} /></Delete>}
    </CompareItemStyle>
  )
}

export default CompareItem