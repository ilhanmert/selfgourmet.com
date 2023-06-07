import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../components/Comment';
import MenuItem from '../components/MenuItem';
import SaleItem from '../components/SaleItem';
import { BosYildiz, TamYildiz, YarimYildiz } from '../components/style/ListedItem';
import { getAllCommentsByPartnerId } from '../redux/actions/comment';
import PartnerProfileStyled, { AddComentBut, AddMenuBut, DegArea, DegName, FiveDegArea, MenuArea, MultiArea, OnOff, PartnerProfileCard, PhotoArea, ProfilNavigateArea, ProfilNavigateButton, ResizedPhoto, SalesArea, SideArea, StarArea, TabArea, TabButton, Title, TitleArea } from './style/PartnerProfile.styled'
import { selectedPartnerAction } from '../redux/actions/partner';
import { getDirectionByPartnerId, getMenuByPartnerId } from '../redux/actions/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import WriteComment from '../components/WriteComment';
import { useNavigate } from 'react-router-dom';
import AddMenu from '../components/AddMenu';




const PartnerProfile = ({token}) => {
    const {selectedPartner} = useSelector(state => state.selectedPartner);
    console.log("selectedPartner", selectedPartner);
    const {comments} = useSelector(state => state.comments);
    console.log("comments", comments); //NOT TANIMLI DURUM SADECE KENDİ TANIMINA EŞİTLENİR DİĞER TÜRLÜ UNDEFINED DONDURUR
    const {menu} = useSelector(state => state.menu);
    console.log("menu", menu);
    const {direction} = useSelector(state => state.direction);
    console.log("direction", direction);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    //refresh 
    async function run (id) {
        await dispatch(selectedPartnerAction(id));
        await dispatch(getAllCommentsByPartnerId(id, "like"));
        await dispatch(getMenuByPartnerId(id));
        await dispatch(getDirectionByPartnerId(id));
        await PartnerProfile();
    }

    if(!selectedPartner.id) {
        var pathArray = window.location.pathname.split('/'); 
        run(parseInt(pathArray[3]));
    }
    
    
    function adresLink () {
        window.open(
            `${selectedPartner.google_maps_url}`,
            '_blank'
        );
    }
    function goToWebsite () {
        window.open(
            `${selectedPartner.website_url}`,
            '_blank'
        );
    }

    function fiyatla (gelen) {
        let fiyat = "";
        for (let i = 0; i < gelen; i++) {
            fiyat += '₺';
        }
        return fiyat;
    }
    const _fiyat = fiyatla(selectedPartner.price);
    

    function puanla (gelen) {
        const yildiz = [];
        const kalan = gelen % 1;
        if(kalan > 0) {
            const tam = Math.floor(gelen);
            const bos = 5 - Math.ceil(gelen);
            if(kalan >= 0.5) {
                for (let i = 0; i < tam; i++) {
                    yildiz.push(<TamYildiz/>);
                }
                yildiz.push(<YarimYildiz/>);
                for (let i = 0; i < bos; i++) {
                    yildiz.push(<BosYildiz/>);
                }
            } else {
                for (let i = 0; i < tam; i++) {
                    yildiz.push(<TamYildiz/>);
                }
                for (let i = 0; i < bos; i++) {
                    yildiz.push(<BosYildiz/>);
                }
                yildiz.push(<BosYildiz/>);
            }
        } else {
            const bos = 5 - gelen;
            for (let i = 0; i < gelen; i++) {
                yildiz.push(<TamYildiz/>);
            }
            for (let i = 0; i < bos; i++) {
                yildiz.push(<BosYildiz/>);
            }
        }
        return <>{yildiz}</>
    }
    const _staff = puanla(selectedPartner.staff_point);
    const _hiz = puanla(selectedPartner.speed_point);
    const _servis = puanla(selectedPartner.service_point);
    const _lezzet = puanla(selectedPartner.taste_point);
    const _temizlik = puanla(selectedPartner.hygiene_point);
    const _avg = puanla(selectedPartner.avg_point);
    
    const [a, setA] = useState(true);
    const [b, setB] = useState(false);
    const [c, setC] = useState(false);
    const [y, setY] = useState(false);
    const [m, setM] = useState(false);
    const [o, setO] = useState(true);
    const [commentArea, setCommentArea] = useState(true);
    const [menuArea, setMenuArea] = useState(false);
    const [saleArea, setSaleArea] = useState(false);

    // const dispatch = useDispatch();
    async function getCommentOrderByX (x) {
        await dispatch(getAllCommentsByPartnerId(selectedPartner.id, x));
    }

    async function tabOne (e) {
        await getCommentOrderByX("like");
        setA(true);
        setB(false);
        setC(false);
    }
    async function tabTwo (e) {
        await getCommentOrderByX("time");
        setA(false);
        setB(true);
        setC(false);
    }
    async function tabThree (e) {
        await getCommentOrderByX("answered");
        setA(false);
        setB(false);
        setC(true);
    }

        
  return (

    <PartnerProfileStyled>
        <PartnerProfileCard>
            <PhotoArea>
                <ResizedPhoto src={selectedPartner.img} alt="PartnerLogo" />
                {(token?.userNow?.isAdmin || token?.userNow?.isMod) && <OnOff open={o} onClick={() => setO(!o)}><FontAwesomeIcon icon={faPowerOff} /></OnOff>}
            </PhotoArea>
            <SideArea>
                <TitleArea>
                    <Title>{selectedPartner.title}</Title>
                    <Title>{_avg}</Title>
                    <Title>{_fiyat}</Title>
                    <Title>{selectedPartner.tag}</Title>
                </TitleArea>
                
                <ProfilNavigateArea>
                    {selectedPartner.hasSale && <ProfilNavigateButton onClick={() => {setCommentArea(false); setMenuArea(false); setSaleArea(true)}}>Kampanyalar</ProfilNavigateButton>}
                    <ProfilNavigateButton onClick={() => {setCommentArea(true); setMenuArea(false); setSaleArea(false)}}>Yorumlar ({selectedPartner.total_comment})</ProfilNavigateButton>
                    <ProfilNavigateButton onClick={() => {setCommentArea(false); setMenuArea(true); setSaleArea(false)}}>Menü
                        { (token?.userNow?.id === selectedPartner.user_id_isPartner || token?.userNow?.comment_rate >= 7) && menuArea
                            &&
                            <AddMenuBut onClick={() => {setM(true)}}> <FontAwesomeIcon icon={faPlus} /> Menü Ekle</AddMenuBut>
                        }
                    </ProfilNavigateButton>
                    <ProfilNavigateButton onClick={adresLink}>Adres</ProfilNavigateButton>
                    {selectedPartner.website_url === "" ? "" : <ProfilNavigateButton onClick={goToWebsite}>Siteye Yönlendir</ProfilNavigateButton>}
                </ProfilNavigateArea>

                <FiveDegArea>
                    <DegArea>
                        <DegName>Lezzet</DegName>
                        <StarArea>{_lezzet}</StarArea> 
                    </DegArea>
                    <DegArea>
                        <DegName>Hız</DegName>
                        <StarArea>{_hiz}</StarArea> 
                    </DegArea>
                    <DegArea>
                        <DegName>Servis</DegName>
                        <StarArea>{_servis}</StarArea> 
                    </DegArea>
                    <DegArea>
                        <DegName>Temizlik</DegName>
                        <StarArea>{_temizlik}</StarArea> 
                    </DegArea>
                    <DegArea>
                        <DegName>Personel</DegName>
                        <StarArea>{_staff}</StarArea> 
                    </DegArea>
                </FiveDegArea>
            </SideArea>
        </PartnerProfileCard>

        {
            commentArea
            &&
            <>
                <AddComentBut onClick={() => {token?.token ? setY(true) : window.open("/login", "_self")}}> <FontAwesomeIcon icon={faPlus} /> Yorum Ekle</AddComentBut>
                {y && <WriteComment close={setY} partner_id={selectedPartner.id}/>}
                <TabArea>
                    <TabButton Act={a} onClick={tabOne}>En Beğenilen</TabButton>
                    <TabButton Act={b} onClick={tabTwo}>En Yeni</TabButton>
                    <TabButton Act={c} onClick={tabThree}>Cevaplananlar</TabButton>
                </TabArea>

                <MultiArea>
                    {
                        comments?.map((comment, i) => (
                            // console.log(comment.id, " - ", comment.user_name),
                            //key + 100 yapıldı değişiklikleri kontrol et
                            <Comment key={comment.id+100} comment = {comment} token={token} 
                                user_id_isPartner={selectedPartner.user_id_isPartner} selected_partner_id={selectedPartner.id}
                                tabA={a} tabB={b}
                            />
                        ))
                    }
                    
                </MultiArea>
            </>
        }
        {
            menuArea
            &&
            <>
                {m && <AddMenu close={setM} partner_id={selectedPartner.id} token={token}/>}
                <MenuArea>
                    {
                        menu?.map((menuItem, i) => (
                            <MenuItem key={menuItem.id} data={menuItem} direction={direction} 
                                userHasThis={(token?.userNow?.id === selectedPartner.user_id_isPartner || token?.userNow?.comment_rate >= 7)}
                                token={token}
                            />
                        ))
                    }
                </MenuArea>
            </>
        }
        {   selectedPartner.hasSale &&
            saleArea
            &&
            <>
                <SalesArea>
                    <SaleItem/>
                    <SaleItem/>
                    <SaleItem/>
                    <SaleItem/>
                    <SaleItem/>
                    <SaleItem/>
                    <SaleItem/>
                    <SaleItem/>
                </SalesArea>
            </>
        }
    </PartnerProfileStyled>
  
  )
}

export default PartnerProfile