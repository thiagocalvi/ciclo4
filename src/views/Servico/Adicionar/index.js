import axios from "axios";
import { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const AddServico = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    })

    const valorInput = e => setServico({ ...servico, [e.target.nome]: e.target.value })

    const cadServico = async e => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        }

        await  axios.post(api+'/listar-servicos', servico, {headers})
        .then((response)=>{
            console.log(response);
        }).catch(()=>{
            console.log('Erro: sem conexão com api')
        })
    }

    return (
        <Container>
            <div>
                <Form className='p-2' onSubmit={cadServico}>
                    <FormGroup className='p-2'>
                        <Label>
                            Nome
                        </Label>
                        <Input type='text' name='nome'
                            placeholder='Nome do serviço' onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className='p-2'>
                        <Label>
                            Descrição
                        </Label>
                        <Input type='text' name='descicao'
                            placeholder='Descrição do serviço' onChange={valorInput} />
                    </FormGroup>
                </Form>
                <Button type='submit' className='btn-success'>Cadastrar</Button>
            </div>
        </Container>
    )
}