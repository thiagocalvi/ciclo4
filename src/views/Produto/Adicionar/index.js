import axios from "axios";
import { useState } from "react/cjs/react.development";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";

export const AddProduto = () => {

    const [produto, setProduto] = useState({
        nome: '',
        descricao: ''
    });

    const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value })

    const cadProduto = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/novo-produto", produto, { headers })
            .then((response) => {
                console.log(response.data.message)
            }).catch(() => {
                console.log("Sem conexão com a API")
            });
    };

    return (
        <div>
            <Container>
                <div className='d-flex'>
                    <h1>Novo produto</h1>
                </div>
                <Form className="p-2" onSubmit={cadProduto}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input name='nome' type='text' placeholder="Nome do Produto" onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input name='descricao' type='text' placeholder="Descriçao do Produto" onChange={valorInput} />
                    </FormGroup>
                    <Button type="submit" outline color="success">Cadastrar</Button>
                    <Button type="reset" outline color="primary">Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}