import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import "./Welcome.css";

import Quiz from '../image/quiz.svg';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
      <h2>Seja Bem-Vindo</h2>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="Imagem Inicio Quiz" />
    </div>
  )
}

export default Welcome