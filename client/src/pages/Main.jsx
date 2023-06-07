import MainStyled, { Banner, QuickSearch } from "./style/Main.styled"
import dominosbanner from "./domban.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getPartnerActionWhere, getPartnerTakeAdsAction } from "../redux/actions/partner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VitrinAd from "../components/VitrinAd";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [first, setFirst] = useState(true);

  async function run() {
    await dispatch(getPartnerTakeAdsAction());
  }

  if(first) {
    run();
    setFirst(false);
  }
  const {ads} = useSelector(state => state.ads);
  console.log("ads", ads);


  return (
    <MainStyled>
      <div>
        <Banner><img src={dominosbanner} alt="dom-ban" style={{width: "100%", height: "100%"}} /></Banner>
        <div style={{display: "flex", 
          marginTop: "1vh", marginLeft: ".5%", width: "99%", 
          borderRadius: "10px"}}>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=1")); navigate("/list")}}>₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=2")); navigate("/list")}}>₺₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=3")); navigate("/list")}}>₺₺₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=4")); navigate("/list")}}>₺₺₺₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=5")); navigate("/list")}}>₺₺₺₺₺</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("price=6")); navigate("/list")}}>₺₺₺₺₺₺</QuickSearch>         
        </div>
        <div style={{display: "flex", 
          marginTop: "0vh", marginLeft: ".5%", width: "99%", 
          borderRadius: "10px"}}>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Döner%25'")); navigate("/list")}}>Döner</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Izgara%25'")); navigate("/list")}}>Izgara</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Tatlı%25'")); navigate("/list")}}>Tatlı</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Hamburger%25'")); navigate("/list")}}>Hamburger</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Pizza%25'")); navigate("/list")}}>Pizza</QuickSearch>
          <QuickSearch onClick={async() => { await dispatch(getPartnerActionWhere("tag LIKE '%25Tavuk%25'")); navigate("/list")}}>Tavuk</QuickSearch>         
        </div>
        <div style={{display: "flex"}}>
          {
            ads?.map((ad, i) => (
              <VitrinAd key={i} data={ad}/>
            ))
          }
        </div>
        



      </div>


    </MainStyled>



  )
}

export default Main