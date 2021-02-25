import styled from 'styled-components';
export const Navbar=styled.div`
padding: 20px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000
`
export const Logo=styled.div`
width: 50%;
float: left;
@media (max-width : 991px) {
    
        width: 100%;
        float: none;
    
`
export const Ul=styled.ul`
width: 50%;
float: left;
list-style: none;
padding:0;
@media (max-width : 991px)
{
    width: 100%;
    float:  none;
    margin-top: 20px;
    display: none
}
`
export const Li=styled.li`
display: inline-block;
@media (max-width : 991px)
{
    display: block;
    text-align: center;
}
`
export const A=styled.a`
display: block;
cursor:pointer;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
&:hover {
    color: #eb5424
}
`