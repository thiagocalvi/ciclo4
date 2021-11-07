
import { Input, Container, Form, FormGroup, Label, Button } from "reactstrap";

export const AddProduto = () => {
    return (
        <div>
            <Container>
                <div className='d-flex'>
                    <h1>Adicionar novo Produto</h1>
                </div>
                <div>
                    <Form>
                        <FormGroup>
                            <Label for='nomeProduto'>
                                Nome
                            </Label>
                            <Input
                                id='nomeProduto'
                                name='nomeProduto'
                                type='text'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='descricao'>
                                Descrição
                            </Label>
                            <Input
                                id='descricao'
                                name='descricao'
                                placeholder=''
                                type='text'
                            />
                        </FormGroup>
                    </Form>
                </div>
                <div>
                    <Button color='success' outline='treu'>
                        ADICIONAR PRODUTO
                    </Button>
                </div>
            </Container>
        </div>
    );
};