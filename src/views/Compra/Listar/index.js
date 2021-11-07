import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Alert } from "reactstrap";

import { api } from "../../../config";

export const ListarCompras = ()=>{

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCompras = async()=>{
        await axios.get(api+'/listar-compras')
        .then((response)=>{
            console.log(response.data.compras);
            setData(response.data.compras);
        }).catch(()=>{
            setStatus({
                type: 'error',
                message: 'Erro: sem conexão com a API'
            })
        });
    };

    useEffect(()=>{
        getCompras();
    },[]);

    return(
            <div>
                <Container>
                    <div>
                        <h1>Visualizar Compras</h1>
                    </div>
                    {status.type == 'error' ? <Alert color='danger'> {status.message} </Alert> : ''} 
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data da compra</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item =>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td className='text-center/'>
                                        <Link to={'/listar-pedido/'+item.id}
                                        className='btn btn-outline-primary btn-sm'>
                                            Consultar
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