import React, { useState } from 'react'
import { Delete, Flexer, MenuContent, MenuHeader, MenuImage, MenuImageArea, MenuItemSideArea, MenuStyle } from './style/MenuItem.style'
import CompareItem from './CompareItem';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { deleteMenuAction } from '../redux/actions/menu';

const MenuItem = ({data, direction, userHasThis, token}) => {
  const dispatch = useDispatch();
  const [k, setK] = useState(false);

  const direction_of_this = [];
  direction.forEach(element => {
    if(element.menu_id === data.id) direction_of_this.push(element);
  });

  var count = Object.keys(direction_of_this).length;

  function deleteMenu () {
    dispatch(deleteMenuAction({menu_id: data.id, token: token?.token}));
  }

    

  return (
    <MenuStyle Open={k} Hmuch={userHasThis ? count+1 : count}>
      <Flexer onClick={() => setK(!k)}>
        <MenuImageArea>
            <MenuImage src={data.menu_img}/>
        </MenuImageArea>
        {userHasThis && <Delete onClick={deleteMenu}><FontAwesomeIcon icon={faTrashCan} /></Delete>}
        <MenuItemSideArea>
            <MenuHeader>{data.head}</MenuHeader>
            <MenuContent>{data.content}</MenuContent>
        </MenuItemSideArea>
      </Flexer>

      {
        direction_of_this?.map((item, i) => (
          <CompareItem key={item.id} data = {item} userHasThis={userHasThis} token={token}/>
        ))
      }
      {userHasThis && <CompareItem newCompareItem={true} menu_id={data.id} partner_id={data.partner_id}/>} {/**yeni eklemek için */}
        
    </MenuStyle>
  )
}

export default MenuItem