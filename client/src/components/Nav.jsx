import { useState } from "react";
import StyledNav, { BackG, DesktopMenu, Girdi, GirisYapBut, HamburherButton, InputArea, Logo, MenuLink, MobileMenu, PopupCont, PopupItem, SearchSuggestArea, SearchSuggestLabel, TTest } from "./style/Nav.styled";
import logo from "../logo.png";
import defAvatar from "./avatar.png";
import { BsSearch } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllPartnersAction, getPartnerAction } from "../redux/actions/partner";



const Nav = ({setModal, token}) => {
    const [navOpen, setNav] = useState(false);
    const[searchData, setSearchData] = useState({searchText: ""})


    const [suggestAreaState, setSuggestAreaState] = useState(false);
    function setHandle(e) {
        setSearchData({searchText: e.target.value});
        if(searchData.searchText.length < 2) {
            setSuggestAreaState(false);
        } else {
            setSuggestAreaState(true);
            dispatch(getPartnerAction(searchData.searchText));

        }
    }
    console.log("searchData", searchData);
    


    const dispatch = useDispatch();
    function getAllPartnerData () {
        dispatch(getAllPartnersAction());
    }
    function getPartnerData (query) {
        dispatch(getPartnerAction(query));
    }


    const navigate = useNavigate();
    const search = () => {
        if(searchData.searchText === "") {
            getAllPartnerData();

        } else {
            getPartnerData(searchData.searchText);
        }
        navigate(`/list?search=${searchData.searchText}`)

    };
    function bindEnter(e) { if (e.key === 'Enter') search();}

    const logoutFunc = () => {
        localStorage.clear();
        window.location = "/login";
    }
console.log(token?.userNow?.photo_url);

  return (<StyledNav >

        <Link style={{width: "69.2px", height: "60px"}} to="/">
            <Logo src={logo} alt="logo" />
        </Link>
        {/* <MenuLink to="/" activeStyle></MenuLink> */}
        {/* <MenuLink to="/" activeStyle>Home</MenuLink> */}
        {/* setA(true) */}
    
        <InputArea>
            <Girdi defaultValue={searchData.searchText} maxLength={50} placeholder="Search" onKeyDown={bindEnter} onChange={setHandle}/>
            
            <BsSearch onClick={search} style={{width: "30px", height: "30px", 
                position: "absolute", color: "black", right: "15px", marginTop: "13px", cursor: "pointer" }}/>
            
            {/* <SearchSuggestArea act={suggestAreaState}>
                <SearchSuggestLabel>Mcdonalds</SearchSuggestLabel>
                <SearchSuggestLabel>Mcdonalds</SearchSuggestLabel>  
            </SearchSuggestArea> */}
        </InputArea>


                
        
        {token?.token ? <TTest onClick={()=>setModal(true)}>
            <img src={token?.userNow?.photo_url === null ? defAvatar : token?.userNow?.photo_url} style={{width: "60px", height: "60px", borderRadius: "100px"}} alt="pp" />
        </TTest> : 
            <GirisYapBut onClick={logoutFunc}>LOGIN</GirisYapBut>}

    </StyledNav>
  )
}

export default Nav