import { Routes as Rotas, Route } from "react-router-dom";
import Login from "pages/Login";
import Home from 'pages/Home'

const Routes = () => {
  return (
    <Rotas>
      <Route index element={<Login />}/>
      <Route path='/home' element={ <Home />}/>
    </Rotas>
  )
}

export default Routes;
