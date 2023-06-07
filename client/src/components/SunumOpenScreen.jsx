import React, { useRef } from 'react'
import { DetailSunumArea, ImgSunumDetail, SunumOpenScreenArea, SunumOpenScreenStyle } from './style/SunumOpenScreen.styled'

const SunumOpenScreen = ({close, data}) => {
    const bgRef = useRef(null);


  return (
    <SunumOpenScreenStyle ref={bgRef} 
        onClick={
        (e) => {
            if (e.target === bgRef.current) {
                close(false);
            }
        }}>
        
        <SunumOpenScreenArea>
            <ImgSunumDetail src={data?.img}/>
            <DetailSunumArea>
                {data?.detail}
            </DetailSunumArea>
        </SunumOpenScreenArea>

    </SunumOpenScreenStyle>




  )
}

export default SunumOpenScreen