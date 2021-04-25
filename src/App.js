import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from "@material-ui/core"
import 'fontsource-roboto';
function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf}/>
    </Container>
  );
}

function aoEnviarForm(dados){
	console.log(dados);
}

function validarCpf(cpf){
	if (cpf.length !== 11) {
		return {valido: false, texto:"CPF deve ter 11 digitos"}
	}
	return {valido: true, texto:""}
}

export default App;
