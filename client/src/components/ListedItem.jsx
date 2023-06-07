import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllCommentsByPartnerId } from "../redux/actions/comment";
import { selectedPartnerAction } from "../redux/actions/partner";
import { BosYildiz, DegArea, DegName, FiveDegArea, 
    GetirPlatformBut, ListedItemPhoto, ListedItemPhotoArea, 
    ListItem, MigrosPlatformBut, PlatformArea, TitleArea,  
    SideArea, StarArea, TamYildiz, Title, YarimYildiz,
    TrendyolPlatformBut, YemekSepetiPlatformBut
    } from "./style/ListedItem"
;
import { getMenuByPartnerId } from "../redux/actions/menu";
import { getDirectionByPartnerId } from "../redux/actions/menu";




const ListedItem = ({partner}) => {

    const yemeksepeti_link = () => {
        window.open(partner.yemeksepeti_url);
    }
    const getir_link = () => {
        window.open(partner.getir_url);
    }
    const trendyol_link = () => {
        window.open(partner.trendyol_url);
    }
    const migros_link = () => {
        window.open(partner.migros_url);
    }
    
    function fiyatla (gelen) {
        let fiyat = "";
        for (let i = 0; i < gelen; i++) {
            fiyat += '₺';
        }
        return fiyat;
    }
    const _fiyat = fiyatla(partner.price);
    

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
    
    const _staff = puanla(partner.staff_point);
    const _hiz = puanla(partner.speed_point);
    const _servis = puanla(partner.service_point);
    const _lezzet = puanla(partner.taste_point);
    const _temizlik = puanla(partner.hygiene_point);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function getSelectedPartner () {
        await dispatch(selectedPartnerAction(partner.id));
        await dispatch(getAllCommentsByPartnerId(partner.id, "like"));
        await dispatch(getMenuByPartnerId(partner.id));
        await dispatch(getDirectionByPartnerId(partner.id));
        navigate(`/partner/${partner.title}/${partner.id}`);
    }

  return (
    <ListItem>
        <ListedItemPhotoArea>
            <ListedItemPhoto>
                <img onClick={getSelectedPartner} src={partner.img}  alt="Photo"/>
            </ListedItemPhoto>
        </ListedItemPhotoArea>
        <TitleArea>
            <Title onClick={getSelectedPartner} >{partner.title}</Title>
            <Title>{_fiyat}</Title>
            <Title>{partner.tag}</Title>
        </TitleArea>
        <SideArea>
            <FiveDegArea>
                <DegArea>
                    <DegName>Lezzet</DegName>
                    <StarArea>
                        {_lezzet}
                    </StarArea> 
                </DegArea>
                <DegArea>
                    <DegName>Hız</DegName>
                    <StarArea>
                        {_hiz}
                    </StarArea> 
                </DegArea>
                <DegArea>
                    <DegName>Servis</DegName>
                    <StarArea>
                        {_servis}
                    </StarArea> 
                </DegArea>
                <DegArea>
                    <DegName>Temizlik</DegName>
                    <StarArea>
                        {_temizlik}
                    </StarArea> 
                </DegArea>
                <DegArea>
                    <DegName>Personel</DegName>
                    <StarArea>
                        {_staff}
                    </StarArea> 
                </DegArea>
            </FiveDegArea>
            <PlatformArea>
                {partner.yemeksepeti_url !== "" && <YemekSepetiPlatformBut onClick={yemeksepeti_link}>Yemeksepeti</YemekSepetiPlatformBut>}
                {partner.getir_url !== "" && <GetirPlatformBut onClick={getir_link}>Getir</GetirPlatformBut>}
                {partner.trendyol_url !== "" && <TrendyolPlatformBut onClick={trendyol_link}>Trendyol</TrendyolPlatformBut>}
                {partner.migros_url !== "" && <MigrosPlatformBut onClick={migros_link}>Migros</MigrosPlatformBut>}
            </PlatformArea>
        </SideArea>
    </ListItem>
  )
}

export default ListedItem