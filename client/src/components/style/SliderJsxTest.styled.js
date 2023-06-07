import styled from "styled-components";


const SliderJsx = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    /* height:  ${props => props.b}; */
    /* background-color: ${props => props.a}; */
    /* border-radius: 57px; */
    border-radius: calc(0.9vh + 1.35vw);
    overflow: hidden;

`;

export default SliderJsx;

export const Test0 = styled.div`
    width: 100%; /**500px */
    height: 100%; /**280px */
    margin: 0;
    padding: 0;
`;



export const TestOverFlow = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%; /**280px */
`;



export const SlideCont = styled.div`
    display: flex;
    height: 100%; /**280px */
    transition: transform ease-out 0.3s;
    width: ${props => props.s * 100}%;
    transform: translateX( ${props => props.n}% );
`;

export const Test = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const LeftArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 1vw;
    /* font-size: 80px; */
    font-size: calc(2.1vh + 2.8vw);
    color: whitesmoke;
    z-index: 1;
    cursor: pointer;

`;

export const DotCont = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    /* top: 50%; */
    /* transform: translate(0, -50%); */
    bottom: 3%;
    z-index: 1;
    /* right: 0; */
    left: 30%;
    
`;

export const Dots = styled.div`
    /* margin: 0 3px; */
    margin: 0 0.2vw;
    cursor: pointer;
    /* font-size: 40px; */
    font-size: calc(1.5vh + 2vw); /*h1 fontsize */
    color: #2691d9;
    

`;

export const Photos = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
`;
export const Imaj = styled.img`
    /* height: 100%; */
    width: 100%;
    height: 100%;
    /* object-fit: fill; */
    /* border-radius: 57px; */
    border-radius: calc(0.9vh + 1.35vw);
`;


export const RightArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 1vw;
    /* font-size: 80px;  */
    font-size: calc(2.1vh + 2.8vw);
    color: whitesmoke;
    z-index: 1;
    cursor: pointer;

`;


export const Body = styled.body`
    display: flex;
    padding: 0 35px;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #343f4f;



`;

export const Wrapper = styled.div`
    max-width: 1200px;
    position: relative;

    & button {
        top: 50%;
        height: 45px;
        width: 45px;
        cursor: pointer;
        position: absolute;
        font-size: 1.2rem;
        background-color: #fff;
        text-align: center;
        line-height: 46px;
        border-radius: 50%;
        transform: translateY(-50%);
        &:first-child{
            left: -23px;
        }
        &:last-child{
            right: -23px;
        }
    }

`;

export const Carousel = styled.div`
    white-space: nowrap;
    font-size: 0px;
    cursor: pointer;
    overflow: hidden;


`;



export const Img = styled.img`
    height: 340px;
    object-fit: cover;
    margin-left: 14px;
    width: calc(100% /3);

    &:first-child{
        margin-left: 0px;
    }

    @media(max-width: 900px){
        width: calc(100% /2);

    }
    @media(max-width: 550px){
        width: 100%;

    }


`;