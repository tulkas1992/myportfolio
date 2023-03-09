import logo from "./logo.svg";
import "./App.css";
//https://spotlight.tailwindui.com/ website de referencia
function App() {
  return (
    <div className="App">
  
  <div className="px-4 bg-main">
        <div className="grid grid-cols-1 gap-4 py-20 container mx-auto">
          <div> 
        <img src={logo} className="App-logo" alt="logo" />

            <h2 className="text-xl font-bold mb-2 text-left">Victor Alfonso Ruiz Reyes</h2>
          
           
          </div>
          <div> 
        <img src={logo} className="App-logo" alt="logo" />

            <p className="mb-4 text-left w-[750px]">
            Soy un desarrollador apasionado que utiliza tecnologías de vanguardia para crear sitios web y aplicaciones. Me he enfocado principalmente en el Front-End, pero también tengo experiencia en el Back-End y SEO. He utilizado tecnologías como WordPress y React para llevar a cabo estos trabajos.
            </p>
           
          </div>
       
        </div>
      </div>

      <div className="px-4 bg-main">
        <div className="grid grid-cols-1 gap-4 py-20 container mx-auto">
          <div> 
        <img src={logo} className="App-logo" alt="logo" />

            <h2 className="text-xl font-bold mb-2 text-left">Desarrollador web</h2>
            <p className="mb-4 text-left w-[750px]">
            Soy un desarrollador apasionado que utiliza tecnologías de vanguardia para crear sitios web y aplicaciones. Me he enfocado principalmente en el Front-End, pero también tengo experiencia en el Back-End y SEO. He utilizado tecnologías como WordPress y React para llevar a cabo estos trabajos.
            </p>
           
          </div>
       
        </div>
      </div>



      <div className="px-4 ">
        <div className="grid grid-cols-1 gap-4 py-20 container mx-auto">
          <div> 

            <h2 className="text-xl font-bold mb-2 text-left">Esto es el portafolio</h2>
           
           
          </div>
       
        </div>
      </div>

      <div className="px-4 bg-main">
        <div className="grid grid-cols-1 gap-4 py-20 container mx-auto">
          <div> 

            <h2 className="text-xl font-bold mb-2 text-left">Mi experiencia</h2>
           
           
          </div>
       
        </div>
      </div>
    </div>

    
  );
}

export default App;
