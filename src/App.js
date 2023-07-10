import   Card from './assort/icon down.png'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [messege, setMessege] = useState('')
  const [quastion, setQuastion] = useState('')
  const [section, setSection] = useState('')
  const [pomidor, setPomidor] = useState('')
  const [toma,setToma] = useState('')
 
  return (
    <div className="App">
      <div className='hold-text'>
      <p className='wrapper' onClick={ () => setMessege(!messege )}>
     { messege ? ' Сколько раз в год можно обратиться к терапевту или педиатору по данной программе?    ' : 'Сколько раз в год можно обратиться к терапевту или педиатору по данной программе?   '} 
       <p className='counter'>{messege}  </p>{messege && <div className='second-text'>Количество обращений не ограничено в течении всего срока действия договора</div>}</p>

      </div>
    <h1 className='maft'>Часто задоваемые вопросы</h1>
    
     
     <div className='hold'>
       <p className='wrapper-text2' onClick={ () => setQuastion(  !quastion )} >
         { quastion  ? 'Сколько раз в год можно обратиться к узкому специалисту?' : 'Сколько раз в год можно обратиться к узкому специалисту?'}  <p className='counter-text2'>{quastion}</p> {quastion && <div className='third-text'>С одним направлением можно обратиться к врачу-специалисту один раз</div>}</p>
    </div>
   <div className='hold-text3'>
    <p className='wrapper-text3' onClick={() => setSection ( !section)}>
      {section ? 'Как получить консультацию врача?' : 'Как получить консультацию врача?'} <p className='counter-text3'> {section}</p> {section && <div className='fourst-text'>получить второе мнение профильных врачей ЦНМТ</div>}  </p>
   </div>
   <div className='hold-text4'>
    <p className='wrapper-text4' onClick={() => setToma(!toma)}>
      {toma ? 'Какие врачи-специалисты представлены в сервисе , кроме терапевта и педиатара?' : 'Какие врачи-специалисты представлены в сервисе, кроме терапевта и педиатара?'} <p className='counter-text3'> {toma}</p>{toma && <div className='fifth-text'>Кардиолог,Невролог,Гинеколог,Уролог,Хируруг</div>}
    </p>
   </div>
   <div className='hold-text5'>
    <p className='wrapper-text5' onClick={() =>setPomidor (!pomidor)}>
      {pomidor ? 'Как получить консультацию педиатара,если возраст ребенка  меньше 1 года,и оформить на ребенка программу  нельзя?' : 'Как получить консультацию педиатара,если возраст ребенка  меньше 1 года,и оформить на ребенка программу  нельзя?'}<p className='counter-text3' >{pomidor}</p>{pomidor && <div className='sixth-text'>Обратитесь в местную поликлиннику или детскую больницу где могут предаставить педиатора</div>}
    </p>
   </div>
    </div>
    
  
  );
}

export default App;