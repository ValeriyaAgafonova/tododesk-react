import React from 'react';
import './App.scss';
import AddingForm from './components/AddingForm/AddingForm';
import Modal from './components/Modal/Modal';
import ProjectList from './components/ProjectsList/ProjectList';

function App() {
  return (
    <div className="App">
     {/* <ProjectList/> */}
     <Modal children={<AddingForm/>}/>
    </div>
  );
}

export default App;
