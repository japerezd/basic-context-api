import ButtonShareData from './components/ButtonShareData';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import DataProvider from './context/DataContext';



function App() {

  return (
    <DataProvider>
    <div className="container">
      <Page1 />
      <Page2 />
      <ButtonShareData />
    </div>
    </DataProvider>
  );
}

export default App;
