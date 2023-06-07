import img1 from '../Images/img-1.jpg';
import img2 from '../Images/img-2.jpg';
import img3 from '../Images/img-3.jpg';
import img4 from '../Images/img-4.jpg';
import img5 from '../Images/img-5.jpg';
import img6 from '../Images/img-6.jpg';
import img7 from '../Images/img-7.jpg';
import StyledSliderJsx, { DotCont, Dots, Imaj, 
  LeftArrow, RightArrow, SlideCont, Test, Test0, TestOverFlow} from "./style/SliderJsx.styled";
import {useRef, useEffect, useState, useCallback} from 'react';


const fotos = [
  {src: img1, title: 'imaj01'},
  {src: img2, title: 'imaj02'},
  {src: img3, title: 'imaj03'},
  {src: img4, title: 'imaj04'},
  {src: img5, title: 'imaj05'},
  {src: img6, title: 'imaj06'},
  {src: img7, title: 'imaj07'}
];


const SliderJsx = () => {
  const[currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const totalFoto = Object.keys(fotos).length;



  const nextFoto = useCallback( () => {
    const isLast = currentIndex === totalFoto -1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, fotos]);



  useEffect(() => 
    {
      if(timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(()=>{
        nextFoto();
      }, 2750)

      return () => clearTimeout(timerRef.current);
    }, [nextFoto]
  );


 

  const oncekiFoto = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? totalFoto - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };



  const goToFoto = (i) => {
    setCurrentIndex(i);
  };
   

  const nowFotoPx = (a, b) => {
    return (-100/a)*b;
  };

  return (
    <StyledSliderJsx>
      <Test0>
        {/* <Test> */}
            <LeftArrow onClick={oncekiFoto} >◄</LeftArrow>
            <RightArrow onClick={nextFoto}>►</RightArrow>
          
              <TestOverFlow>
              <SlideCont s={totalFoto} n={nowFotoPx(totalFoto, currentIndex)} >

                {fotos.map((_, i) => (
                  <div key={i}> 
                    <Imaj  src={fotos[i].src}/>
                  </div>
                ))}
              </SlideCont>
              </TestOverFlow>

            <DotCont>
              {fotos.map((fotos, i) =>(
                <Dots key={i}
                  onClick={() => goToFoto(i)}>
                  •
                </Dots>
              ))}
            </DotCont> 
            
            
          
        {/* </Test> */}
      </Test0>
    </StyledSliderJsx>
     
  )
}

export default SliderJsx