import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { Menu } from './components/Menu';

//cliente
import { ListarClientes } from './views/Cliente/Listar';
import { AddCliente } from './views/Cliente/Adicionar';
import { EdtCliente } from './views/Cliente/Editar';

//pedido
import { ListarPedidos } from './views/Pedido/Listar';

//compra
import { ListarCompras } from './views/Compra/Listar';

//serviço
import { ListarServicos } from './views/Servico/Listar';
import { AddServico } from './views/Servico/Adicionar';

//produto
import { ListarProdutos } from './views/Produto/Listar';
import { AddProduto } from './views/Produto/Adicionar';

import { Item } from './views/Servico/Item';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/listar-clientes' component={ListarClientes} />
          <Route path='/listar-pedidos' component={ListarPedidos} />
          <Route path='/listar-servicos' component={ListarServicos} />
          <Route path='/listar-produtos' component={ListarProdutos} />
          <Route path='/listar-compras' component={ListarCompras} />
          <Route path='/listar-pedido:id' component={Item} />
          <Route path='/novo-cliente' component={AddCliente} />
          <Route path='/novo-servico' component={AddServico} />
          <Route path='/novo-produto' component={AddProduto} />
          <Route path='/editar-cliete/:id' component={EdtCliente}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
