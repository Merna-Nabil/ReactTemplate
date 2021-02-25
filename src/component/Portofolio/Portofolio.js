import React ,{useState,useEffect}  from 'react';
import axios from 'axios';
import {Portofoliosec,H2,Span,Ul,Li,Box,Img,Overlay,Span2} from './Portofoliostyle.js';

const Portofolio=()=> {
  const [images ,setImages]=useState([]);
  useEffect(()=>{
 axios.get('js/data.json').then(res=>{
   setImages(res.data.portofolio)
 })
  },[])
const portofolioImages=images.map((imageItem)=>{
  return(
    <Box key={Math.random()}>
      
    <Img src={imageItem.image}/>
    <Overlay>
        <Span2>
            Show Image
        </Span2>
    </Overlay>
</Box>
  )
})
  return (
    <Portofoliosec>
    <H2><Span>My</Span> Portfolio</H2>
    <Ul>
        <Li>All</Li>
        <Li>HTML</Li>
        <Li>Photoshop</Li>
        <Li>Wordpress</Li>
        <Li>Mobile</Li>
    </Ul>
   
   {portofolioImages}
  
</Portofoliosec>
  );
}

export default Portofolio;
