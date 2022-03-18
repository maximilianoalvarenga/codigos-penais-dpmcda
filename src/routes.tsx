import { Routes as Rotas, Route } from "react-router-dom";
import Login from "pages/Login";
import Home from 'pages/Home'
import Create from "pages/Create";

const Routes = () => {
  return (
    <Rotas>
      <Route index element={<Login />}/>
      <Route path='/home' element={ <Home />}/>
      <Route path='/new' element={ <Create />}/>
    </Rotas>
  )
}

export default Routes;
