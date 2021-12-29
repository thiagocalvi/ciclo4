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
                            <th>ID Compra</th>
                            <th>ID Cliente</th>
                            <th>Data da Compra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(cp => (
                            <tr key={cp.id}>
                                <td>{cp.id}</td>
                                <td>{cp.ClienteId}</td>
                                <td>{cp.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
} 