import { Routes as Rotas, Route } from "react-router-dom";
import Login from "pages/Login";
import Home from 'pages/Home'
import Create from "pages/Create";
import Details from "pages/Details";
import Edit from "pages/Edit";

const Routes = () => {
  return (
    <Rotas>
      <Route index element={<Login />}/>
      <Route path='/home' element={ <Home />}/>
      <Route path='/new' element={ <Create />}/>
      <Route path='/details/:id' element={ <Details />} />
      <Route path='/edit/:id' element={ <Edit />} />
    </Rotas>
  )
}

export default Routes;
