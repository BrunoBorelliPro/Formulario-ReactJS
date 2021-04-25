import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [CPF, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, CPF, novidades, promocoes });
            }}
            action=""
        >
            <TextField
                id="nome"
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                label="Nome"
                variant="outlined"
                type="text"
                margin="normal"
                fullWidth
            />
            <TextField
                id="sobrenome"
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                label="Sobrenome"
                variant="outlined"
                type="text"
                margin="normal"
                fullWidth
            />
            <TextField
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
				onBlur={(event)=>{
					setErros({cpf:validarCpf(CPF)})
				}}
                id="CPF"
                value={CPF}
                onChange={(event) => {
                    setCPF(event.target.value);
                }}
                label="CPF"
                variant="outlined"
                type="text"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={promocoes}
                        name="promocoes"
                        color="primary"
                        onChange={(event) => setPromocoes(event.target.checked)}
                    />
                }
                label="Promoções"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={novidades}
                        name="novidades"
                        color="primary"
                        onChange={(event) => setNovidades(event.target.checked)}
                    />
                }
                label="Novidades"
            />

            <Button variant="contained" color="primary" type="submit">
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;
