
import axios from "axios";
import { Input, Container, Form, FormGroup, Label, Button } from "reactstrap";
import { api } from "../../../config";

export const AddCliente = () => {

    const [cliente, setCliente] = setCliente({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento: ''
    });

    const valorInput = e => setCliente({ ...cliente, [e.target.nome]: e.target.value });

    const cadCliente = async e => {
        e.preventDefault();
        const headers = {
            'Content-type': 'application/json'
        };
        await axios.post(api + '/cliente', cliente, { headers })
            .then((response) => {
                console.log(response.data.message);
            }).catch(() => {
                console.log('Erro: sem conexão com API');
            });
    };



    return (
        <div>
            <Container>
                <div className='d-flex'>
                    <h1>Novo cliente</h1>
                </div>
                <div>
                    <Form onSubmit={cadCliente}>
                        <FormGroup>
                            <Label for='nome'>
                                Nome
                            </Label>
                            <Input
                                id='nome'
                                name='nome'
                                type='text'
                                onChange={valorInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='endereco'>
                                Endereço
                            </Label>
                            <Input
                                id='endereco'
                                name='endereco'
                                placeholder=''
                                type='text'
                                onChange={valorInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='cidade'>
                                Cidade
                            </Label>
                            <Input
                                id='cidade'
                                name='cidade'
                                placeholder=''
                                type='text'
                                onChange={valorInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='uf'>
                                UF
                            </Label>
                            <Input
                                id='uf'
                                name='uf'
                                type='text'
                                onChange={valorInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='nascimento'>
                                Data de Nascimento
                            </Label>
                            <Input
                                id='nascimento'
                                name='nascimento'
                                type='date'
                                onChange={valorInput}
                            />
                        </FormGroup>
                    </Form>
                </div>
                <div>
                    <Button color='primery' outline type='submit'>
                        CRIAR CLIENTE
                    </Button>
                    <Button type='reset' autline color='primery'>
                        Limpar
                    </Button>
                </div>
            </Container>
        </div>
    );
};