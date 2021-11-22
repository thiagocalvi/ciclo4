import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarCompras = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCompras = async () => {
        await axios.get(api + '/listar-compras')
            .then((response) => {
                console.log(response.data.cp);
                setData(response.data.cp);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API'
                })
            });
    };

    useEffect(() => {
        getCompras();
    }, []);

    return (
        <div>
            <Container>
                <div className='p-2'>
                    <div>
                        <h1>Visualizar Compras</h1>
                        {status.type == 'error' ? <Alert color='danger'> {status.message} </Alert> : ''}
                        <Table striped></Table>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID Cliente</th>
                            <th>Data de criação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(cp => (
                            <tr key={cp.id}>
                                <td>{cp.id}</td>
                                <td>{cp.ClienteId}</td>
                                <td>{cp.data}</td>
                                {/* <td className='text-center'><Link to={'/cliente/'+cli.id} 
                                className='btn btn-outline-primary btn-sm'>Consultar </Link></td>

                                <td className='text-center'><Link to={'/editar-cliente/'+cli.id} 
                                className='btn btn-outline-warning btn-sm'>Editar</Link></td>
                                
                                <td className='text-center'><Link to={'/excluir-cliente/'+cli.id} 
                                className='btn btn-outline-danger btn-sm'>Excluir</Link></td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
} 