import Card from './components/Card';
import { cardIcon } from './assets/icons.js';
import data from './components/data.js';

function App() {

  const allCardsList = data.map((cardData, index) => (
    <li key={index}>
      <Card data={cardData} icons={cardIcon} />
    </li>
  ));

  return (
  <> 
  <body class="flex flex-col gap-8 justify-center  items-center mx-6">
     <ul>{allCardsList}</ul>
  </body> 
  </>
  );
}

export default App
