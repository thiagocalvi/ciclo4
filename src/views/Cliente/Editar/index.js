import axios from "axios";
import { useEffect, useState } from "react"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EdtCliente = (props) => {

    const [status, setStatus] = useState({
        type: "",
        message: ""
    });

    const [ClienteId, setClienteId] = useState(props.match.params.id);

    const [cliente, setCliente] = useState({
        nome: "",
        endereco: "",
        cidade: "",
        uf: "",
        nascimento: "",
        clienteDesde: ""
    });

    const valorInput = e => setCliente({ ...cliente, [e.target.name]: e.target.value });

    const limparInput = () => setCliente({
        nome: "",
        endereco: "",
        cidade: "",
        uf: "",
        nascimento: "",
        clienteDesde: ""
    });

    const getCliente = async () => {
        await axios.get(api + "/editar-cliente/:id" + ClienteId).then((response) => {
            setCliente(response.data.cli);
        }).catch(() => {
            setStatus({
                type: "error",
                message: "Erro: Sem conexão com a API."
            });
        });
    };

    const atualizar = async e => {
        e.preventDefault();

        const headers = {
            "Content-Type": "application/json"
        };

        await axios.put(api + "/editar-cliente/:id" + ClienteId , cliente, { headers }).then((response) => {
            setStatus({
                type: "success",
                message: response.data.message
            });
        }).catch(() => {
            setStatus({
                type: "error",
                message: "Erro: Sem conexão com a API."
            });
        });
    };

    useEffect(() => {
        getCliente();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="p-2">
                        <h1>Alterar dados do cliente</h1>
                    </div>
                </div>

                {status.type === "error" ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === "success" ? <Alert color="success">{status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={atualizar}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do cliente" value={cliente.nome} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Endereço" value={cliente.endereco} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade" placeholder="Cidade" value={cliente.cidade} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>UF</Label>
                        <Input type="text" name="uf" placeholder="UF" value={cliente.uf} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data de Nascimento</Label>
                        <Input type="date" name="nascimento" placeholder="Data de Nascimento" value={cliente.nascimento} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Cliente desde</Label>
                        <Input type="date" name="clienteDesde" placeholder="Cliente Desde" value={cliente.clienteDesde} onChange={valorInput} />
                    </FormGroup>

                    <Button type="submit" className="m-2" outline color="success">Salvar</Button>
                    <Button type="button" className="m-2" type="button" outline color="secondary" onClick={limparInput}>Limpar</Button>
                </Form>
            </Container>
        </div>
    );
};