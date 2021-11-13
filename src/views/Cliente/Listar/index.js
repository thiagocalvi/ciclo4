import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                console.log(response.data.cli);
                setData(response.data.cli);
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
                <div className='p-2'>
                    <div className='p-2'>
                        <a href='/novo-cliente' className='btn btn-outline-primary btn-sm'>Adicionar novo cliente</a>
                    </div>
                    <div>
                        <h1>Visualizar Clientes</h1>
                        {status.type == 'error' ? <Alert color='danger'> {status.message} </Alert> : ''}
                        <Table striped></Table>
                    </div>
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
                            <th>Cliente desde</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(cli => (
                            <tr key={cli.id}>
                                <td>{cli.id}</td>
                                <td>{cli.nome}</td>
                                <td>{cli.endereco}</td>
                                <td>{cli.cidade}</td>
                                <td>{cli.uf}</td>
                                <td>{cli.nascimento}</td>
                                <td>{cli.createdAt}</td>
                                <td className='text-center'><Link to={'/cliente/'+cli.id} 
                                className='btn btn-outline-primary btn-sm'>Consultar </Link></td>

                                <td className='text-center'><Link to={'/editar-cliente/'+cli.id} 
                                className='btn btn-outline-warning btn-sm'>Editar</Link></td>
                                
                                <td className='text-center'><Link to='' 
                                clssName='btn btn-outline-danger btn-sm'>Excluir</Link></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </div>
    );
};