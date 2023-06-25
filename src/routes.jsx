import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "./pages/Inicio"
import Sobremin from './pages/Sobremim'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import PaginaPadrao from './components/PaginaPadrao'
import Post from './pages/Post'
import NaoEncontrado from './pages/NaoEncontrado'


function AppRoutes() {

  return (
    <BrowserRouter>
      <Menu/>
        <Routes>
          {
            /*
            Na rota "/", a estrutura a ser renderiza é :
             <PaginaPadrao>
                <Inicio/>             
             <PaginaPadrao/>

             Na rota "/sobremim", a estrutura a ser renderiza é :
             <PaginaPadrao>
                <Sobremim/>             
             <PaginaPadrao/>
            
            */
          }
          <Route path="/" element={<PaginaPadrao/>}>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/sobremim' element={<Sobremin/>}></Route>
          </Route>  
            <Route path='posts/:id/*' element={<Post/>}></Route>
            <Route path='*' element={<NaoEncontrado/>}></Route>
        </Routes>      
      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes
