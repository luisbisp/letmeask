import { createContext, useState } from 'react'
import { BrowserRouter, Route, useHistory } from 'react-router-dom'
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';

export const AuthContext = createContext({} as any);

function App() {
  const [user, setUser] = useState('Teste');

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider;

    auth.signInWithPopup(provider).then(result => {
      if (result.user) {
        const { displayName, photoURL, uid } = result.user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }
        setUser({
          id: uid,
          name: displayName,
          avatat: photoURL
        })
      }
    })


    return (
      <BrowserRouter>
  function signInWithGoogle() {
        <AuthContext.Provider value={{ user,  }}>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </AuthContext.Provider>
      </BrowserRouter>
    )
  }
}
export default App;
