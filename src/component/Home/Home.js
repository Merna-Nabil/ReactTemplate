import React  from 'react';
import {Homeclass,Info,H2,H4,P,Span,Button} from './Homestyle.js';

const Home=()=> {
  return (
    <Homeclass>
    <div className="container">
        <Info>
            <H2>Hamza Nabil</H2>
            <H4>Creative Director</H4>
            <P>
                Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </P>
            <Button>Let's Begin</Button>
        </Info>
    </div>
</Homeclass>
  );
}

export default Home;
