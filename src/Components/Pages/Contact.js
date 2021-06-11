import React from 'react';
import Teacherinfo from './Teacherinfo';
import  '../../css/Card.css';


const Contact = ({title,imageUrl,body}) => {
  return (
    <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
       <div>
      <h1>Contact Us</h1>
      </div> </div>
      <div className="container" >
          <h3 class="centertext">12th grade</h3>
        <ul className="cards"class ="gradedivide"
      ><Teacherinfo
          imageUrl='Image for each teacher'
          title ='Dominguez'
          body='Teacher for Computer Science and the City'
          email ='Email: jdominguez@richmondhillhs.org '
          />
      </ul>
      <h3 class="centertext">11th grade</h3>
      <ul className="cards"class ="gradedivide">
        <Teacherinfo
          imageUrl='../../images/Canzoneri.jpg'
          title ='Canzoneri'
          body='Teacher for AP computer science principles'
          email ='Email: rcanzoneri@richmondhillhs.org'
          />
      </ul>
          <h3 class="centertext">10th grade</h3>
      <ul className="cards"class ="gradedivide">
        <Teacherinfo
          imageUrl='Image for each teacher'
          title ='Joseph'
          body='Teacher for sophmore year'
          email ='?'
          />

      </ul>
      <h3 class="centertext">9th grade</h3>
      <ul className="cards"class ="gradedivide">
        <Teacherinfo
          imageUrl='Image for each teacher'
          title ='?'
          body='Teacher for freshmen year'
          email ='?'
          />
      </ul>
      </div>
      </div>
    
  );
};

export default Contact;