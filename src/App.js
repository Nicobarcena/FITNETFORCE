import {useState} from 'react'; 
import logo from './logo.svg';
import './App.css';
import Contador from './componentes/Contador';
function App() {
  const[numero, setNumero] = useState(1)
  const [mostar, setMostrar] = useState(false)
  
  //const handleMostar = () => {
    //console.log("Hola! Hiciste click");
  //}  
  function handleMostar (){
    console.log("Hola! Hiciste click");
    if (mostar === true){
      setMostrar (false);
    } else {
      setMostrar (true);
    }
    
    
  }
  
  return (
    
    <div className="App">
      <Contador/>
      Hola {numero}
      
      { mostar &&
      <button onClick={handleMostar}>
        Ocultar
      </button>

      }
      { !mostar &&
      <button onClick={handleMostar}>
        Mostar
      </button>
      }
    
      {mostar &&
      
      <div>
    Hola soy una seccion oculta
      </div>
      }
    </div>
  );  
}

export default App;
