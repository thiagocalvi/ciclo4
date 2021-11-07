
import { Input, Container, Form, FormGroup, Label, Button } from "reactstrap";

export const AddCliente = () => {
    return (
        <div>
            <Container>
                <div className='d-flex'>
                    <h1>Adicionar novo cliente</h1>
                </div>
                <div>
                    <Form>
                        <FormGroup>
                            <Label for='nome'>
                                Nome
                            </Label>
                            <Input
                                id='nome'
                                name='nomeCliente'
                                type='text'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='endereco'>
                                Endereço
                            </Label>
                            <Input
                                id='endereco'
                                name='enderecoCliente'
                                placeholder=''
                                type='text'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='cidade'>
                                Cidade
                            </Label>
                            <Input
                                id='cidade'
                                name='cidadeCliente'
                                placeholder=''
                                type='text'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='uf'>
                                UF
                            </Label>
                            <Input
                                id='uf'
                                name='ufCliente'
                                type='text'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='nascimento'>
                                Data de Nascimento
                            </Label>
                            <Input
                                id='nascimento'
                                name='nascimentoCliente'
                                type='date'
                            />
                        </FormGroup>
                    </Form>
                </div>
                <div>
                    <Button color='success' outline='treu' block='true'>
                        CRIAR CLIENTE
                    </Button>
                </div>
            </Container>
        </div>
    );
};