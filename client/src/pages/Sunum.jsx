import SunumStyled, { ButtonContainer, MainContainer, SunumButton, SunumImage, SunumContainer } from './style/Sunum.styled'
import express from '../Images/Presentation/express.png'
import github from '../Images/Presentation/github.png'
import nodejs from '../Images/Presentation/nodejs.png'
import react from '../Images/Presentation/react.png'
import redux from '../Images/Presentation/redux.png'
import styled from '../Images/Presentation/styled.png'
import postgre from '../Images/Presentation/postgre.png'
import nginx from '../Images/Presentation/nginx.png'
import postman from '../Images/Presentation/postman.png'
import postmanss from '../Images/Presentation/postmanss.png'
import site1 from '../Images/Presentation/Old/1.png'
import site2 from '../Images/Presentation/Old/2.png'
import site3 from '../Images/Presentation/Old/3.png'
import site4 from '../Images/Presentation/Old/4.png'
import site5 from '../Images/Presentation/Old/5.png'
import favi from '../Images/Presentation/Old/f.png'
import logoZ from '../Images/Presentation/Old/newlogoZ.png'
import { useState } from 'react'
import SunumOpenScreen from '../components/SunumOpenScreen'
import msproject from '../Images/Presentation/MsProject/msproject.png'
import githubss from '../Images/Presentation/Github/githubss.png'

const Sunum = () => {
    const[a, setA] = useState(false);
    const[b, setB] = useState(false);
    const[c, setC] = useState(false);
    const[d, setD] = useState(false);
    const[e, setE] = useState(true);
    const[f, setF] = useState(false);

    const [y, setY] = useState(false);
    const [sendData, setSendData] = useState({});

    const postgredata = {
        img: postgre,
        detail: [
                    <div>
                        <div>⚫ Veritabanı olarak postgresql kullandık.</div>
                        <div>⚫ Proje içinde knex aracıyla kullandık.</div>
                        <div>⚫ Veritabanı yönetim sistemi pgAdmin4 kullandık.</div>
                    </div>
                ]
    }

    const githubdata = {
        img: github,
        detail: [
                    <div>
                        <div>⚫ Proje versiyon yönetimi.</div>
                        <div>⚫ Proje yönetimi ve iş dağılımı içinde branche kullandık.</div>
                        <SunumImage style={{height: "auto", width: "calc(100% - 5px)", marginTop: "10px"}} src={githubss} title='Microsoft Project Screenshot'/>
                    </div>
                ]
    }

    const expressdata = {
        img: express,
        detail: [
                    <div>
                        <div>⚫ Rest api olarak kullandık, node.js içinde işleri kolaylaştıran bir kütüphanedir.</div>
                    </div>
                ]
    }

    const nodejsdata = {
        img: nodejs,
        detail: [
                    <div>
                        <div>⚫ Express server kütüphanesi ile birlikte backend server olarak kullandık.</div>
                        <div>⚫ Ayrıca npm paket yönetimi sayesinde react ve react kütüphaneleri içinde kullandık.</div>
                    </div>
                ]
    }

    const reactdata = {
        img: react,
        detail: [
                    <div>
                        <div>⚫ Projenin frontend tarafında kullandık. Scriptler react donanımlarına uygun şekilde kodlandı.</div>
                    </div>
                ]
    }
    
    const reduxdata = {
        img: redux,
        detail: [
                    <div>
                        <div>⚫ Reactta stateleri genel dağıtımda kullanmaya yarar. Biz bu amaçla ve fetc işlemleri için actionlarını kullandık.</div>
                        <div>⚫ ReactQuery kullansaydık ihtiyacımız olmayacaktı.</div>
                    </div>
                ]
    }

    const styleddata = {
        img: styled,
        detail: [
                    <div>
                        <div>⚫ Tasarımları styled component ile tasarladık.</div>
                        <div>⚫ Tüm tasarımlar bize ait. Sadece login page tasarımı başka tasarımdan esinlenilmiştir.</div>
                        <div>⚫ Dinamik olarak oluşturulması site içi hız kazandırıyor.</div>
                    </div>
                ]
    }

    const nginxdata = {
        img: nginx,
        detail: [
                    <div>
                        <div>⚫ VPS içinde kurduk.</div>
                        <div>⚫ React'ı deploy etmek için kullandık.</div>
                    </div>
                ]
    }


  return (
    <SunumStyled>
        {y && <SunumOpenScreen close={setY} data={sendData}/>}
        <MainContainer>
            <SunumContainer OPN={e} style={{paddingTop: "5px", color: "black"}}>
                <div style={{width: "80%", marginLeft: "10%"}}>
                    <br/>
                    <div>&nbsp;&nbsp;&nbsp;Projemiz başta restoranları detaylı puanlama ve yorumlama olarak planlamıştı.</div>
                    <div style={{marginTop: "2px"}}>
                        &nbsp;&nbsp;&nbsp;Ama planlama aşamasında, grup olarak bunu yetersiz bulduk
                        bizde online platformları karşılatırma fikri üzerine yoğunlaştık ama yorumlama ve puanlama
                        özelliklerinide koruduk.
                    </div>
                    <br/>
                    <div style={{marginTop: "2px"}}>
                        &nbsp;&nbsp;&nbsp;Küresel çapta online yemek platformları sayısı gittikçe artmakta ve bu nedenle aynı restoranın her platformda fiyatları
                        değişiklik göstermekte ve bazı platformlara özel menüler olmakta.
                        <div>
                            (Örneğin 21.05.2023 tarihinde McDonald's BigMac Menü tüm platformlarda 135₺ iken 
                            Yemeksepeti platformunda 2 BigMac Menü 1+1 kampnaysı ile 135₺. Sadece GetirYemek'ten sipariş veren bir
                            kullanıcı bu kampanyada ve indirimden haberi dahi olmayacak.
                            )
                            <div style={{marginTop: "2px"}}>
                                &nbsp;&nbsp;&nbsp;Bizim sitemiz fiyatları karşılaştırarak hem müşterinin ekonomisini koruyacak hem de platformalar arası rekabeti artıracak. 
                                Bu sayede platformlar aldıkları yüzdelik komisyonu azaltacak.
                            </div>
                        </div> 
                    </div>
                    <div style={{marginTop: "2px"}}>
                        &nbsp;&nbsp;&nbsp;Bizim projemiz, bütün menüleri aynı ortamda topluyor ve bu menülerin her platforma göre fiyatlarını karşılaştırıyor. 
                        Ayrıca proje dahilinde kullanıcılar aldıkları platformları belirterek restoranları yorumlayıp, hizmetlerini değerlendirebiliyor.                    
                    </div>
                    <div style={{marginTop: "2px"}}>
                        &nbsp;&nbsp;&nbsp;Planlama aşamasında belirlediğimiz teknolojileri değiştirmedik, 
                        aslında seçtiğimiz teknolojilerden daha uyumlu teknolojiler vardı ama biz proje planlamasına sadık kaldık.
                    </div>
                    <div style={{marginTop: "2px"}}>
                        &nbsp;&nbsp;&nbsp;Genel olarak, planlama aşamasında belirtiğimiz tüm yetkinlikleri ve isterleri yerine getirdik. 
                        Tam olarak yerine getiremediklerimizin altyapısı kurulu, proje yayınlanacağı zaman belirlenecek bazı değişkenler lazım. 
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div style={{width: "80%", marginLeft: "10%"}}>İlk Yarı Dönem Proje Slaytına <a href="https://docs.google.com/presentation/d/1aiJl13Gx-fd4vg7hDgQCjuLMT0NZr808/edit?usp=share_link&ouid=116352841733212106962&rtpof=true&sd=true" target="_blank">Buradan</a> Erişebilirsiniz</div>
                <div style={{width: "80%", marginLeft: "10%"}}>İlk Yarı Dönem Proje Raporuna <a href="https://docs.google.com/document/d/1A29LpDDSM-vrvmbIU3wOUgXXy8ZKl-uP/edit?usp=sharing&ouid=116352841733212106962&rtpof=true&sd=true" target="_blank">Buradan</a> Erişebilirsiniz</div>
                <br/>
                <hr/>
                <br/>

                <center><SunumImage style={{height: "auto", width: "80%"}} src={site1} title='Login Page'/></center> <br/>
                <center><SunumImage style={{height: "auto", width: "80%"}} src={site2} title='Home Page'/></center> <br/>
                <center><SunumImage style={{height: "auto", width: "80%"}} src={site3} title='Listed Page'/></center> <br/>
                <center><SunumImage style={{height: "auto", width: "80%"}} src={site4} title='Restaurant Page'/></center> <br/>
                <center><SunumImage style={{height: "auto", width: "80%"}} src={site5} title='Compare Page'/></center> <br/>
                <center><SunumImage style={{height: "auto", width: "80%", backgroundColor: "#826f82"}} src={logoZ} title='Logo - Tasarım bize ait.'/></center> <br/>
                <center><SunumImage style={{height: "auto", width: "80%"}} src={favi} title='Favicon - Tasarım bize ait.'/></center> <br/>


                
            </SunumContainer>

            <SunumContainer OPN={a}>
                <SunumImage onClick={() => {setSendData(expressdata); setY(true)}} src={express} title='Backend Server'/>
                <SunumImage onClick={() => {setSendData(githubdata); setY(true)}} src={github} title='Project&Version Management System'/>
                <SunumImage onClick={() => {setSendData(nodejsdata); setY(true)}} style={{paddingLeft: "10px"}} src={nodejs} title='Backend + React'/>
                <SunumImage onClick={() => {setSendData(reactdata); setY(true)}} src={react} title='Frontend JavaScript Library'/>
                <SunumImage onClick={() => {setSendData(reduxdata); setY(true)}} src={redux} title='Frontend Global Store'/>
                <SunumImage onClick={() => {setSendData(styleddata); setY(true)}} src={styled} title='Frontend Design (CSS)'/>
                <SunumImage onClick={() => {setSendData(postgredata); setY(true)}} src={postgre} title='Database'/>
                <SunumImage onClick={() => {setSendData(nginxdata); setY(true)}} src={nginx} title='React Deploy Server'/>
            </SunumContainer>

            <SunumContainer style={{paddingTop: "5px"}} OPN={b}>
                <center>
                    <SunumImage style={{width: "70%", height: "auto"}} src={postman} title='Postman Logo'/>
                </center>
                <SunumImage style={{height: "auto", width: "calc(100% - 5px)"}} src={postmanss} title='Postman Screenshot'/>

            </SunumContainer>

            <SunumContainer style={{paddingTop: "20px", color: "black", fontSize: "24px"}} OPN={c}>
                <div style={{width: "80%", marginLeft: "10%"}}>
                    <div>
                        &nbsp;&nbsp;&nbsp;Bu projeye başlamadan önce grup üyelerinin websitesi tasarımı ve rest-api yönetiminde 
                        pek deneyimi yoktu, sadece Mert arkadaşımız .NET platformunda backend deneyimi vardı ama react ile .NET çok uyumlu değildi.
                        <div style={{marginTop: "3px"}}>
                            &nbsp;&nbsp;&nbsp;Frontend tarafında react tercih ederken son zamanlarda popüler olması etkili oldu. Grup üyeleri ilk defa react kullanıyordu hatta
                            ilk defa html-css-js ile tanışanlarda vardı. Deneyimimiz olmadığı için bütün teknolojileri öğrenerek devam ettik ve bu sırada her yaptığımızı 
                            defalarca test etmek durumunda kaldık.
                        </div>

                        <div style={{marginTop: "3px"}}>
                            &nbsp;&nbsp;&nbsp;Mücbir sebeplerden ötürü grup üyeleri aynı anda bir araya gelip projeyi tartışamadı, genelde tüm grup üyeleri ilgili alanlarını yaptı
                            ve github üzerinden projeyi, kordinatör olarak belirlediğimiz bir grup üyesi birleştirdi ve uyumluluklarını test etti. Kordinatör, 
                            uyumlu olan birleşmiş projeyide başka githup reposu üzerinden yayınlıyordu.
                        </div>
                        <div style={{marginTop: "3px"}}>
                            &nbsp;&nbsp;&nbsp;Proje zaman yönetiminde, projeyi planladığımızdan daha az zaman ayırabildik.
                        </div>
                        <div style={{marginTop: "3px"}}>
                            &nbsp;&nbsp;&nbsp;Proje geliştirme aşamasında bazı eklentilerin update sonucu hata vermesi yüzünden aksaklıklar.
                        </div>
                    </div>
                </div>
            </SunumContainer>

            <SunumContainer style={{paddingTop: "20px", color: "black", fontSize: "24px"}} OPN={d}>
            <div style={{width: "80%", marginLeft: "10%"}}>
                <div style={{marginTop: "3px"}}>⚫ Global klasörlendirme ve isimlendirme.</div>
                <div style={{marginTop: "3px"}}>⚫ Proje yönetim sistemi github kullanmı ve işbölümü.</div>
                <div style={{marginTop: "3px"}}>⚫ Github üzerinde dallardırma yaparak herkes kendi bölümü üzerinde çalıştı ve 
                    alpha testleri yaptıktan sonra commit&push etti en son proje yönetisi kontrol ettikten sonra
                    main branche ile birleştirdi (merge).
                </div>
            </div>

                
            </SunumContainer>

            <SunumContainer style={{paddingTop: "20px", color: "black", fontSize: "24px"}} OPN={f}>
                <div style={{width: "80%", marginLeft: "10%"}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Project_%282019%E2%80%93present%29.svg/1200px-Microsoft_Project_%282019%E2%80%93present%29.svg.png" 
                    title='Microsoft Project Logo'
                     style={{width: "100px", marginBottom: "20px"}}/>
                    <SunumImage style={{height: "auto", width: "calc(100% - 5px)"}} src={msproject} title='Microsoft Project Screenshot'/>
                    
                </div>

                
            </SunumContainer>

        </MainContainer>
       

        <ButtonContainer>
            <SunumButton ACT={e} onClick={() => {setA(false); setB(false); setC(false); setD(false); setE(true); setF(false)}}>Hatırlatma</SunumButton>
            <SunumButton ACT={a} onClick={() => {setA(true); setB(false); setC(false); setD(false); setE(false); setF(false)}}>Teknolojiler</SunumButton>
            <SunumButton ACT={f} onClick={() => {setA(false); setB(false); setC(false); setD(false); setE(false); setF(true)}} style={{fontSize: "20px", paddingTop: "0px", height: "55px"}}>Microsoft Project</SunumButton>
            <SunumButton ACT={b} onClick={() => {setA(false); setB(true); setC(false); setD(false); setE(false); setF(false)}}>Test</SunumButton>
            <SunumButton ACT={c} onClick={() => {setA(false); setB(false); setC(true); setD(false); setE(false); setF(false)}} style={{fontSize: "19px", paddingTop: "0px", height: "55px"}}>Karşılaştığımız Problemler</SunumButton>
            <SunumButton ACT={d} onClick={() => {setA(false); setB(false); setC(false); setD(true); setE(false); setF(false)}}>Kazanımlar</SunumButton>
            
        </ButtonContainer>
    </SunumStyled>




  )
}

export default Sunum