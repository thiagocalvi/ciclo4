import  axios  from "axios";
import { useEffect, useState } from "react";
import { Container, Table, Alert } from "reactstrap";

import { api } from "../../../config";

export const ListarPedidos = () => {
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + '/listar-pedidos')
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API'
                })
            });
    };

    useEffect(() => {
        getPedidos();
    }, []);
    return (
        <div className=''>
            <Container>
                <div>
                    <h1>Visualizar Pedidos</h1>
                    {status.type == 'error' ? <Alert color='danger'> {status.message} </Alert> : ''} 
                    <Table striped></Table>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data do pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>?</td>
                        <td>?</td>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};