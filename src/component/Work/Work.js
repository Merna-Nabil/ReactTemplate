import axios from 'axios';
import React, { Component }  from 'react';
import {Worksec,H2,Span,Part,Icon,H4,Hr,P} from './Workstyle.js';

class Work extends Component {
  state={
    works:[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(res =>{
        this.setState({works:res.data.works})
    })
  }
  render(){
      const {works}=this.state;
      const workList=works.map(workItem=>{
    return(
      
     <Part key={Math.random()} first={workItem.id} >
                <Icon className={workItem.icon_name}></Icon>
                <H4>{workItem.title}</H4>
                <Hr/>
                <P>{workItem.body}</P>
            </Part>
      
          )
      })

    return (
      <Worksec>
              <div className="container">
                  <H2><Span>My</Span> Work</H2>
                {workList}
              </div>
          </Worksec>
    );
  }
}

export default Work;
