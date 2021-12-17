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
                console.log(response.data.ser);
                setData(response.data.ser);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API'
                })

            });
    };

    const delServicos = async (idServico) => {
        console.log(idServico);

        const headers = {
            'Content-type': 'application/json'
        }

        await axios.delete(api + '/excluir-servico/' + idServico, { headers })
            .then((response) => {
                console.log(response.data.type);
                console.log(response.data.message);
                getServicos();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possivel se conectar'
                });
            });
    }

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
                                <td className='text-center'><Link to={'/editar-servico/' + ser.id}
                                    className='btn btn-outline-warning btn-sm'>Editar</Link>
                                </td>
                                <td className='text-center'>
                                    <span className='btn btn-outline-danger btn-sm' onClick={ () => delServicos(ser.id)}>Excluir</span>
                                </td>
                            </tr> 
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};