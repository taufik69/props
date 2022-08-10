import React from 'react';
import ReactDOM from 'react-dom'

function component(props) {

  return (
    <>
      <marquee behavior="alternate" direction="right" scrollamount='10'>{`As-sala-moalikum  My honorabel person ${props.Father_Name}  ${props.Mother_Name}   ${props.Sister_Name}`}  </marquee>
      <img src={props.Photo} style={{ width: '400px ', height: '400px ', borderRadius: '50%' }} alt=" profile picture" />
      <h1>Time : {props.Time}</h1>
      <h1>Name: {props.name} </h1>
      <h1> Title: {props.Title}</h1>
      <h1>Father_Name: {props.Father_Name} </h1>
      <h1>Mother_Name : {props.Mother_Name} </h1>
      <h1>Sister_Name : {props.Sister_Name} </h1>
      <h1>Sister_Name : {props.Brother_Name} </h1>
      <h1> Without props just Element</h1>
    </>

  )

}
const person = {
  Photo: '../assets/images/taufik.jpg',
  name: 'Taufik islam',
  Title: 'Software Engineer',
  Mother_Name: 'Mst Thamina Begum',
  Father_Name: 'MD Allauddin Mondal',
  Sister_Name: 'Memi Akter Moni',
  Brother_Name: 'Oliul islam Sojib',
  Time: new Date().toLocaleTimeString(),

  gretting: function () {
    alert('asalamoalikum ', this.name);
  }


}

// ReactDOM.render(component(person), document.getElementById('root'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  component(person)

);