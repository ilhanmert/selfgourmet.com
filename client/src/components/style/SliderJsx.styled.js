import styled from "styled-components";


const SliderJsx = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
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
export const Test = styled.div`
    /* width: 100%; */
    /* height: 100%; */
    /* position: relative; */
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
    margin: 0 0.2vw;
    cursor: pointer;
    font-size: calc(1.5vh + 2vw); /*h1 fontsize */
    color: ${({theme}) => theme.slider_dot};
    

`;

export const Imaj = styled.img`
    width: 100%;
    height: 100%;
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