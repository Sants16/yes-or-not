import Button from "./components/Button";
import Container from './components/Container';
import * as S from './styles'
import React, { useState } from 'react';

function App() {

  const [resposta, setResposta] = useState()
  const [contagemSim, setContagemSim] = useState(0)
  const [contagemNao, setContagemNao] = useState(0)
  const [contagemPergunta, setContagemPergunta] = useState(1)

  function responderSim(){
    setResposta(true)
    setContagemSim(contagemSim + 1)
    setContagemPergunta(contagemPergunta + 1)
  }

  function responderNao(){
    setResposta(false)
    setContagemNao(contagemNao + 1)
    setContagemPergunta(contagemPergunta + 1)
  }

  return (
    <Container>
      <S.Fundo background={typeof(resposta) === 'undefined' ? 'white' : resposta ? 'green' : 'red'}>
        <header>
          <h1>{contagemPergunta}° Pergunta</h1>
        </header>
        <div>
          <div>
            <Button texto='Sim' funcao={responderSim}/>
            <span>Sim: {contagemSim}</span>
          </div>
          <div>
            <Button texto='Não' funcao={responderNao}/>
            <span>Não: {contagemNao}</span>
          </div>
        </div>
      </S.Fundo>
    </Container>
  );
}

export default App;
