
import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button'
import { useContext } from 'react';
import { AuthContext } from '../App';



export function Home() {
  const history = useHistory();
  const {} useContext(AuthContext);

  function handleCreateRoom() {
    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire Suas Dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask"></img>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit"> Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
