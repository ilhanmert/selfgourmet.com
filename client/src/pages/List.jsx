import React from 'react'
import ListStyled, { FilterArea, FilterButton, 
    FilterItemBasket, ListedArea } from './style/List.styled'
import ListedItem from '../components/ListedItem';
import { useDispatch, useSelector } from "react-redux";
import FilterItem from '../components/FilterItem';
import { getAllPartnersAction, getPartnerActionWhere } from '../redux/actions/partner';


const List = () => {
    const dispatch = useDispatch();


    const fiyatFilter = {
        title: "Fiyat",
        options: ["₺", "₺₺", "₺₺₺", "₺₺₺₺", "₺₺₺₺₺", "₺₺₺₺₺₺"],
        value: ["price=1", "price=2", "price=3", "price=4", "price=5", "price=6"]
    }
    const mutfakFilter = {
        title: "Mutfak",
        options: ["Döner", "Izgara", "Tatlı", "Hamburger", "Pizza", "Tavuk", "Fast-Food"],
        value: ["tag LIKE '%25Döner%25'", 
                "tag LIKE '%25Izgara%25'", 
                "tag LIKE '%25Tatlı%25'", 
                "tag LIKE '%25Hamburger%25'", 
                "tag LIKE '%25Pizza%25'", 
                "tag LIKE '%25Tavuk%25'", 
                "tag LIKE '%25Fast-Food%25'"]
    }
    // uğraştığımız işlere bak % işaretini direk olarak algılayıp çevirmiyor %25 yapınca % olarak algılıyor
    const puanFilter = {
        title: "Puan",
        options: ["1 yıldız", "2 yıldız", "3 yıldız", "4 yıldız", "5 yıldız" ],
        value: ["avg_point>1", "avg_point>2", "avg_point>3", "avg_point>4", "avg_point>5", "avg_point>6"]
    }
    const provinceFilter = {
        title: "İl",
        options: ["İstanbul", "Ankara", "İzmir", "Bursa", "Adana", "Konya"],
        value: ["province='İSTANBUL'", "province='ANKARA'", "province='İZMİR'", "province='BURSA'", "province='ADANA'", "province='KONYA'"]
    }

    const {price} = useSelector(state => state.price);
    // console.log("price", price);
    const {kitchen} = useSelector(state => state.kitchen);
    // console.log("kitchen", kitchen);
    const {point} = useSelector(state => state.point);
    // console.log("point", point);
    const {platform} = useSelector(state => state.platform);
    // console.log("platform", platform);
    let betik = "";
    function submit() {
        if(price !== "0" && (kitchen !== "0" || point !== "0" || platform !== "0")) {
            betik += price;
            betik += " AND ";
        }
        if(price !== "0" && kitchen === "0" && point === "0" && platform === "0") {
            betik += price;
        }

        if(kitchen !== "0" && (point !== "0" || platform !== "0")) {
            betik += kitchen;
            betik += " AND ";
        }
        if(kitchen !== "0" && point === "0" && platform === "0") {
            betik += kitchen;
        }

        if(point !== "0" && platform !== "0") {
            betik += point;
            betik += " AND ";
        }
        if(point !== "0" && platform === "0") {
            betik += point;
        }

        if(platform !== "0") {
            betik += platform;
        }

        // console.log("test active");
        if(price === "0" && kitchen === "0" && point === "0" && platform === "0") {
            console.log("getallpartners");
            dispatch(getAllPartnersAction());
        } else {
            console.log("WHERE ", betik);
            console.log("getallpartnersWHERE");
            dispatch(getPartnerActionWhere(betik));
        }

    }
    
    

    const {partners} = useSelector(state => state.partners);
    console.log("partners", partners);
    return (
        <ListStyled>
            <FilterArea>
                <FilterItemBasket>
                    <FilterItem data={fiyatFilter}/>
                    <FilterItem data={mutfakFilter}/>
                    <FilterItem data={puanFilter}/>
                    <FilterItem data={provinceFilter}/>
                </FilterItemBasket>
                <FilterButton onClick={submit}>Onayla</FilterButton>                
            </FilterArea>
            
            <ListedArea>
                {
                    partners?.map((partner, i) => (
                        // console.log(partner.title, " - ", partner.id),
                        //key +1000 yapıldı değişiklikleri kontrol et
                        <ListedItem key={partner.id+1000} partner = {partner} />
                    ))
                }
            </ListedArea>
        </ListStyled>
  )

}

export default List






