import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Alert } from "reactstrap";

import { api } from "../../../config";

export const ListarServicos = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + "/listar-servicos")
            .then((response) => {
                setData(response.data.ser);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API'
                })

            });
    };

    useEffect(() => {
        getServicos();
    }, []);

    return (
        <div>
            <Container>
                <div className='p-2'>
                    <a href='/novo-servico' className='btn btn-outline-primary btn-sm'>Adicionar novo serviço</a>
                </div>
                <div>
                    <h1>Informações do Serviços</h1>
                </div>
                {status.type === 'error' ? <Alert color='danger'> {status.message} </Alert> : ''}
                <Table striped>
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
                        {data.map(ser => (
                            <tr key={ser.id}>
                                <td scope='row'>{ser.id}</td>
                                <td>{ser.nome}</td>
                                <td>{ser.descricao}</td>
                                <td>{ser.createdAt}</td>

                                <td className='text-center'><Link to={'/listar-pedidos/' + ser.id}
                                    className='btn btn-outline-primary btn-sm'>Consultar</Link>
                                </td>
                                <td className='text-center'><Link to={'/editar-servico/' + ser.id}
                                    className='btn btn-outline-warning btn-sm'>Editar</Link>
                                </td>

                                <td className='text-center'><Link to={'/excluir-servico/' + ser.id}
                                    className='btn btn-outline-danger btn-sm'>Excluir</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};