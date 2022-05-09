import './App.css';
import {lazy, Suspense} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Mouse from './common/mouse/Mouse'

let Top = lazy(()=> {return import('./common/top/Top')} )
let Footer = lazy(()=> {return import('./common/footer/Footer')} )

let NotFound = lazy(()=> {return import('./common/notfound/NotFound')} )

let MainPage = lazy(()=> {return import('./components/mainpage/MainPage')} )
let About = lazy(()=> {return import('./components/about/About')} )
let Team = lazy(()=> {return import('./components/team/Team')} )
let Contect = lazy(()=> {return import('./components/contect/Contect')} )

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Mouse/>
          <Top />
          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/contect' element={<Contect/>} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
