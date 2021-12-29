import axios from "axios";
import { useState } from "react/cjs/react.development";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const AddServico = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });

    const valorInput = e => setServico({ ...servico, [e.target.name]: e.target.value })

    const cadServico = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api+"/novo-servico", servico, { headers })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch(() => {
                console.log("Erro: Sem conexão com a API.")
            });
    };

    return (
        <div>
            <Container>
                <div>
                    <h1>Cadastrar Serviço</h1>
                </div>
                <Form className="p-2" onSubmit={cadServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" 
                        placeholder="Nome do Serviço" 
                        onChange={valorInput}/>
                    </FormGroup>  
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descriçao do Serviço" 
                        onChange={valorInput}/>
                    </FormGroup>                                      
                    <Button type="submit" outline color="success">Cadastrar</Button>
                    <Button type="reset" outline color="primary">Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}
