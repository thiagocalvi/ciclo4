import axios from "axios";
import { useState } from "react/cjs/react.development";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const AddCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        nascimento: '',
        endereco: '',
        cidade: '',
        uf: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setCliente({ ...cliente, [e.target.name]: e.target.value });

    const cadCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api + "/novo-cliente", cliente, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: 'Sem conexão com a API.'
                    });
                }
                else {
                    setStatus({
                        type: 'succes',
                        message: 'Succes'
                    })
                };
            })
            .catch((erro) => {
                setStatus({
                    type: 'error',
                    message: 'Sem conexão com a API'
                })
            });
    };

    return (
        <div>
            <Container>
                <div className='d-flex'>
                    <h1>Cadastrar Cliente</h1>
                </div>
                <hr />
                {status.type === 'error' ? <Alert color='danger'>{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color='success'>{status.message}</Alert> : ''}

                <Form className="p-2" onSubmit={cadCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="Nome do Cliente"
                            onChange={valorInput} required />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Nascimento</Label>
                        <Input type="date" name="nascimento"
                            onChange={valorInput} required />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Endereço"
                            onChange={valorInput} required/>
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>UF</Label>
                        <Input type="text" name="uf" placeholder="UF"       
                            onChange={valorInput} required/>
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade" placeholder="Cidade"
                            onChange={valorInput} required/>
                    </FormGroup>
                    <Button type="submit" className="m-2" outline color="success">Cadastrar</Button>
                    <Button type="reset"  outline color='primary'>Limpar</Button>
                </Form>

            </Container>

        </div>
    )
}