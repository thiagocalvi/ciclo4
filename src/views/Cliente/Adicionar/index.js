import axios from "axios";
import { useState } from "react";
import { Input, Container, Form, FormGroup, Label, Button, Alert } from "reactstrap";
import { api } from "../../../config";

export const AddCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setCliente({
        ...cliente,
        [e.target.nome]: e.target.value
    });

    const cadCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };
        await axios.post(api + '/novo-cliente', cliente, { headers })
        .then((response) => {
            if (response.data.error) {
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            }
            else {
                setStatus({
                    type: 'success',
                    message: 'Sucesso'
                });
            }
        }).catch(() => {
            setStatus({
                type: 'error',
                message: 'Erro: sem conexão com a API'
            });
        });
    };



    return (
        <div>
            <Container>
                <div className='d-flex'>
                    <h1>Novo cliente</h1>
                </div>
                <div>
                    <hr className='m-1' />
                    {status.type === 'error' ? <Alert color='danger'>{status.message}</Alert> : ''}
                    {status.type === 'success' ? <Alert color='success'>{status.message}</Alert> : ''}
                    <Form onSubmit={cadCliente}>
                        <FormGroup>
                            <Label>Nome</Label>
                            <Input name='nome' type='text' onChange={valorInput}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Endereço</Label>
                            <Input name='endereco' type='text' onChange={valorInput}/>
                        </FormGroup>

                        <FormGroup>
                            <Label>Cidade</Label>
                            <Input name='cidade' type='text' onChange={valorInput}/>
                        </FormGroup>

                        <FormGroup>
                            <Label>UF</Label>
                            <Input name='uf' type='text' onChange={valorInput}/>
                        </FormGroup>

                        <FormGroup>
                            <Label>Data de Nascimento</Label>
                            <Input name='nascimento' type='text' onChange={valorInput}/>
                        </FormGroup>

                        <FormGroup>
                            <div className='m-auto'>
                                <Button type='submit' color='success' onClick={cadCliente}>
                                    Criar Cliente
                                </Button>
                                <Button type='reset' color='primary'>
                                    Limpar
                                </Button>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
            </Container>
        </div>
    );
};
