import axios from "axios";
import { useState } from "react";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";
export const AddProduto = () => {

    const [produto, setProduto] = useState({
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setProduto({ ...produto, [e.target.nome]: e.target.value })

    const cadProduto = async e => {
        e.preventDefault();
        const headers = {
            'Content-type': 'application/json'
        };
        await axios.post(api + '/novo-produto', produto, { headers })
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
                        message: response.data.message
                    });
                }
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API'
                });
            });
    };

    return(
        <div>
            <Container>
                <div className='d-flex'>
                    <h1>Novo produto</h1>
                </div>
                <div>
                    <hr className='m-1'/>
                    {status.type === 'error' ? <Alert color='danger'>{status.message}</Alert> : ''}
                    {status.type === 'success' ? <Alert color='success'>{status.message}</Alert> : ''}
                </div>
                <Form onSubmit={cadProduto}>
                    <FormGroup>
                        <Label for='nome'>
                            Nome
                        </Label>
                        <Input
                            name='nome'
                            type='text'
                            onChange={valorInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='descricao'>
                            Descrição
                        </Label>
                        <Input
                            name='descricao'
                            type='text'
                            onChange={valorInput}
                        />
                    </FormGroup>
                    <FormGroup>
                            <div className='m-auto'>
                                <Button type='submit' color='success' onClick={cadProduto}>
                                    Adicionar Produto
                                </Button>
                                <Button type='reset' color='primary'>
                                    Limpar
                                </Button>
                            </div>
                        </FormGroup>
                </Form>
            </Container>
        </div>
    )
}