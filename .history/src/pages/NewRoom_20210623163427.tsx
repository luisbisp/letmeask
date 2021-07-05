import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button'
export function NewRoom() {
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
                    <h2>Criar uma nova Sala</h2>
                    <form>
                        <input type="text" placeholder="Nome da Sala" />
                        <Button type="submit"> Criar sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}