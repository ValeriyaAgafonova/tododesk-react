import React from 'react';
import  './AddingForm.scss';


function AddingForm() {
   const currentDate = new Date().toLocaleDateString().split('.').reverse().join('-')
  return (
    <form className='form'>
<input className ="formHeadingInput" type='text' placeholder='заголовок'/>
<textarea className="formTextarea" placeholder='описание задачи' rows={5}/>
<input type='file' id='file' placeholder='Прикрепить файл'/>
<p className='formPriorityHeading'>Приоритет:</p>
<div className='priorityButtons'>
<input className='formRadio' type="radio" id="сhoice1"
     name="priority" value="low"/>
    <input className='formRadio' type="radio" id="сhoice2"
     name="priority" value="medium"/>
    <input className='formRadio' type="radio" id="сhoice3"
     name="priority" value="high"/>
    </div>
<label htmlFor='endDate'>Дата окончания</label>
    <input type='date' id='endDate' name="endDate" min={currentDate} defaultValue={currentDate}/>
    </form>
  );
}

export default AddingForm;