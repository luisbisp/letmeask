import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="letmeask"></img>
          <button>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div>Ou entre em uma sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit"> Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
