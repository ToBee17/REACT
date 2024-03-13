import Card from './components/Card';

function App() {
  return (
  <> 
  <body class="flex flex-col gap-8 justify-center h-lvh items-center mx-6">
    <Card name="@nathanf" followers="1987" nb="12" platform="facebook" arrow="up"/>
    <Card name="@nathanf" followers="1044" nb="99" platform="youtube" arrow="down"/>
  </body> 
  </>
  );
}

export default App
