import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Alert } from "reactstrap";

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
                console.log(response.data.produtos);
                setData(response.data.produtos);
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
                <div className='p-1'>
                    <a href='/novo-produto' className='btn btn-outline-success btn-sm'>Adicionar novo produto</a>
                </div>
                <div>
                    <h1>Visualizar Produtos</h1>
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
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className='text-center/'>
                                    <Link to={'/listar-pedido/' + item.id}
                                        className='btn btn-outline-primary btn-sm'>
                                        Consultar
                                    </Link>
                                </td>
                                <td className='text-center/'>
                                    <Link to={'/listar-pedido/' + item.id}
                                        className='btn btn-outline-warning btn-sm'>
                                        Alterar
                                    </Link>
                                </td>
                                <td className='text-center/'>
                                    <Link to={'/listar-pedido/' + item.id}
                                        className='btn btn-outline-danger btn-sm'>
                                        Excluir
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};