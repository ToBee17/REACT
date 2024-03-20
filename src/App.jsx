import Card from './components/Card';
import { cardIcon } from './assets/icons.js';
import data from './components/data.js';

import { useState } from 'react';

function App() {

  const allCardsList = data.map((cardData, index) => (
    <li className='flex w-full' key={index}>
      <Card data={cardData} icons={cardIcon} />
    </li>
  ));

  const [LightMode, setLightkMode] = useState(true);
  const handlerClick = () => {
    setLightkMode(!LightMode);
  }
  const classMode = LightMode ? "" : "light";
  const classSwitch = LightMode ? "" : "flex-row-reverse";

  return (
  <div className={`${classMode} bg-background`}> 
  <section >
    <h1 className='text-foreground font-medium text-3xl'>Social Media Dashboard</h1>
    <p className='text-cardforeground text-xl font-medium'>Total followers: </p>
  </section>
  

  <section className='flex justify-between'>
    <p className='text-xl font-medium text-cardforeground'>{LightMode ? "Light" : "Dark"} Mode</p> <button className={`inline-flex items-center w-16 h-9 rounded-full border-4 border-foreground before:block before:w-6 before:h-6 before:bg-foreground before:rounded-full before:mx-1 ${classSwitch}`} onClick={handlerClick}><span className='sr-only'>Change</span></button>
  </section>

  <article className="">
     <ul className='flex flex-col gap-6 justify-center items-center'>{allCardsList}</ul>
  </article>
  
  </div>
  );
}

export default App
