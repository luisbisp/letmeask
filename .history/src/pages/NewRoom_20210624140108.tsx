import { FormEvent } from 'react';
import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button'
//import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom() {
//const { user } = useAuth();


const [newRoom, setNewRoom] = useState('');

 async function handleCreateRoom(event: FormEvent){
    event.preventDefault();
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
                    <h2>Criar uma nova Sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input type="text" placeholder="Nome da Sala" onChange={event =>setNewRoom(event.target.value)} />
                        <Button type="submit"> Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link></p>
                </div>
            </main>
        </div>
    );
}