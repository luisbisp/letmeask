import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import {  AuthContextPtovider } from './contexts/AuthContext'


function App() {


  }

  return (
    <BrowserRouter>
    <AuthContextPtovider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
    </AuthContextPtovider>
    </BrowserRouter>
  )
}

export default App;
