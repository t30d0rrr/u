import React from 'react';
import './styles/App.sass';
import Карточка from './components/kartochka'
import Button from './components/Button';
import JSLearn from './components/JSLearn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       сайт 1 
       <Карточка/> 
       <Button
        chislo={1}
        chislo2={2}
       />
       <JSLearn />
      </header>
    </div>
  );
}

export default App;
