import styled from 'styled-components';
export const Portofoliosec=styled.div`
background: #f8f8f8;
padding-top: 20px; 
overflow: hidden;
`
export const H2=styled.h2`
text-align: center;
font-size: 35px
`
export const Span =styled.span`
font-weight: normal
`
export const Ul =styled.ul`
list-style: none;
text-align: center;
margin: 20px 0
`
export const Li=styled.li`
display: inline-block;
width: 100px;
padding: 10px
background:${props=>props.active?'#eb5424' : ''}
color:${props=>props.active? '#fff': '#000'}
`
export const Box=styled.div`
width: 25%;
float: left;
font-size: 0;
position: relative;
&:hover >div {
    opacity:1;
}
`
export const Img=styled.img`
width: 100%
`
export const Overlay=styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: rgba(235,84,36 , 0.5);
font-size: 15px;
opacity: 0;
` 

export const Span2=styled.span`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: #fff;
display: block;
padding: 10px 20px;
cursor: pointer;
border: 2px solid #eb5424;
`
