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
                console.log(response.data.ped);
                setData(response.data.ped);
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
        <div>
            <Container>
                <div>
                    <h1>Visualizar Pedidos</h1>
                    {status.type == 'error' ? <Alert color='danger'> {status.message} </Alert> : ''} 
                    <Table striped></Table>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID do Pedido</th>
                            <th>ID do Cliente </th>
                            <th>Data do pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(ped => (
                            <tr key={ped.id}>
                                <td>{ped.id}</td>
                                <td>{ped.ClienteId}</td>
                                <td>{ped.dataPedido}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};