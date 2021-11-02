import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table, Alert } from "reactstrap";

import { api } from "../../../config";

export const ListarServicos = ()=>{

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async()=>{
        await axios.get(api+'/listar-servicos')
        .then((response)=>{
            console.log(response.data.servicos);
            setData(response.data.servicos);
        }).catch(()=>{
            setStatus({
                type: 'error',
                message: 'Erro: sem conexão com a API'
            })
        });
    };

    useEffect(()=>{
        getServicos();
    },[]);

    return(
            <div>
                <Container>
                    <div>
                        <h1>Visualizar informações do serviço</h1>
                    </div>
                    {status.type == 'error' ? <Alert color='danger'> {status.message} </Alert> : ''} 
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item =>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td className='text-center/'>Botão</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
    );
};