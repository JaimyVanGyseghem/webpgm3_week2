import React from 'react';
import './App.css';

import Person from './Person';

function App() {
  return (
    <div className="App">
      <Person voornaam= "Jaimy" familienaam= "Van Gyseghem" leeftijd= {21} lengte= {175} gewicht= {60 } pictureURL= "https://i.pinimg.com/originals/47/df/6c/47df6c95b40d82f3b2c6015cbed62cbd.jpg" />
      <Person voornaam= "Rinche" familienaam= "Willems" leeftijd= {18} lengte= {174} gewicht= {70} pictureURL= "https://i.pinimg.com/564x/bb/39/a1/bb39a119a0bc79abd422af759b5eed00.jpg" />
      <Person voornaam= "Iron" familienaam= "Man" leeftijd= {21} lengte= {175} gewicht= {60 } pictureURL= "https://fhm.nl/wp-content/uploads/2019/09/8709927466_b398900197_b.jpg" />
    </div>
  );
}

export default App;
