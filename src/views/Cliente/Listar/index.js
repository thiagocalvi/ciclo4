import { axios } from "axios";
import { useEffect, useState } from "react";
import { Container, Table, Alert } from "reactstrap";

import { api } from "../../../config";

export const ListarClientes = () => {
    return (
        <div className=''>
            <Container>
                <div className='p-1'>
                    <a href='/novo-cliente' className='btn btn-outline-success btn-sm'>Adicionar novo cliente</a>
                </div>
                <div>
                    <h1>Visualizar Clientes</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};