import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterKitchen, filterPlatform, filterPoint, filterPrice } from '../redux/actions/where';
import { FilterItemSelectBox, FilterItemShell, FilterItemText, SelectBoxItem } from './style/FilterItem'

const FilterItem = ({data}) => {

  const dispatch = useDispatch();

  function pushPrice (j) {
    dispatch(filterPrice(j));
  }
  function pushKitchen (j) {
    dispatch(filterKitchen(j));
  }
  function pushPoint (j) {
    dispatch(filterPoint(j));
  }
  function pushPlatform (j) {
    dispatch(filterPlatform(j));
  }

  const selectBoxItems = [];
  function b (e) {
    console.log("Sonuc -> ", e.target.value);
    if(data.title === "Fiyat") {
      pushPrice(e.target.value);
    } else if(data.title === "Mutfak") {
      pushKitchen(e.target.value);
    } else if(data.title === "Puan") {
      pushPoint(e.target.value);
    } else if(data.title === "İl") {
      pushPlatform(e.target.value);
    }
  }

  const {price} = useSelector(state => state.price);
  // console.log("price", price);
  const {kitchen} = useSelector(state => state.kitchen);
  // console.log("kitchen", kitchen);
  const {point} = useSelector(state => state.point);
  // console.log("point", point);
  const {platform} = useSelector(state => state.platform);
  // console.log("platform", platform);

  function a () {
    for (let i = 0; i < data.options.length; i++ ) {
      selectBoxItems.push(<SelectBoxItem v={data.value[i]} key={i}>{data.options[i]}</SelectBoxItem>)
    }
    return 0;
  }
  a();



  return (
    <FilterItemShell>
        <FilterItemText>{data.title}</FilterItemText>
        <FilterItemSelectBox onChange={b}  defaultValue={"0"}>
            <SelectBoxItem v="0">Seçim Yok</SelectBoxItem>
            {selectBoxItems}
        </FilterItemSelectBox>
    </FilterItemShell>
  )
}

export default FilterItem