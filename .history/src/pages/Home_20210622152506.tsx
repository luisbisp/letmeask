import illustrationImg from './assets/images/illustration.svg'

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
      </aside>
    </div>
  );
}
