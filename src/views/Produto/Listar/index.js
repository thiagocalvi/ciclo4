import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarProdutos = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getProdutos = async () => {
        await axios.get(api + '/listar-produtos')
            .then((response) => {
                console.log(response.data.pro);
                setData(response.data.pro);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API'
                })
            });
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <div>
            <Container>
                <div className='p-2'>
                    <div>
                        <a href='/novo-produto' className='btn btn-outline-primary btn-sm'>Adicionar novo produto</a>
                    </div>
                    <div>
                        <h1>Visualizar Produtos</h1>
                        {status.type == 'error' ? <Alert color='danger'> {status.message} </Alert> : ''}
                        <Table striped></Table>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Data de criação</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(pro => (
                            <tr key={pro.id}>
                                <td>{pro.id}</td>
                                <td>{pro.nome}</td>
                                <td>{pro.descricao}</td>
                                <td>{pro.createdAt}</td>
                                <td className='text-center'><Link to={'/editar-produto/' + pro.id}
                                    className='btn btn-outline-warning btn-sm'>Editar</Link>
                                </td>
                                <td className='text-center'><Link to={'/excluir-produto/' + pro.id}
                                    className='btn btn-outline-danger btn-sm'>Excluir</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
} 