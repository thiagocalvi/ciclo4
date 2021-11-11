import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table, Alert } from "reactstrap";

import { api } from "../../../config";

export const ListarClientes = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + '/listar-clientes')
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API'
                })
            });
    };

    useEffect(() => {
        getClientes();
    }, []);


    return (
        <div className=''>
            <Container>
                <div className='p-1'>
                    <a href='/novo-cliente' className='btn btn-outline-success btn-sm'>Adicionar novo cliente</a>
                </div>
                <div>
                    <h1>Visualizar Clientes</h1>
                    {status.type == 'error' ? <Alert color='danger'> {status.message} </Alert> : ''}
                    <Table striped></Table>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item=>(
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.endereco}</td>
                            <td>{item.cidade}</td>
                            <td>{item.uf}</td>
                            <td>{item.nascimento}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};