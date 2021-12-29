import axios from "axios"
import { Button, Container, Form, FormGroup, FormText, Input, Label } from "reactstrap"
import { api } from "../../../config"
import { useEffect, useStates } from "react/cjs/react.development"
import { Link } from "react-router-dom"

export const EdtCliente = (props) => {
    

    const [id, setId] = useStates(props.match.params.id);
    const [nome, setNome] = useStates('');
    const [cidade, setCidade] = useStates('');
    const [uf, setUf] = useStates('');
    const [nascimento, setNascimento] = useStates('');

    // const [status, setStatus] = useState({
    //     type: '',
    //     message: ''
    // });


    const edtCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/editar-cliente/" + id, { id, nome, cidade, uf, nascimento }, { headers })
            .then((response) => {
                console.log(response.data.error);
                console.log(response.data.message);
            })
            .catch(() => {
                // setStatus({
                //     type: 'error',
                //     message: 'Não foi possivel se conectar com a API.'
                // });
                console.log("erro")
            });
    }

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(api + "/editar-cliente/" + id)
                .then((response) => {
                    setId(response.data.pedido.id)
                })
                .catch(() => {
                    console.log("Erro: não foi possível se conectar a API.")
                })
        }
        getCliente();
    }, [id]);



    return (
        <div>
            <Container>
                <div className="d-flex"><h1>Editar Cliente</h1></div>
                <div className="p-2">
                    <Link to="/listar-cliente" className="btn btn-outline-success btn-sm">Clientes</Link>
                </div>
                <hr className="m-1" />

                <Form className="p-2" onSubmit={edtCliente}>
                    <FormGroup className="p-2">
                        <Label>ID Cliente</Label>
                        <Input type="text" name="id"
                            placeholder="ID do Cliente"
                            disabled = ""
                            defaultValue={id}/>
                    </FormGroup>
                </Form>
            </Container>
        </div>

        
    )
}