import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { ListarClientes } from './views/Cliente/Listar';
import { ListarPedidos } from './views/Pedido/Listar';
import { ListarServicos } from './views/Servico/Listar';
import { Menu } from './components/Menu';
import { Item } from './views/Servico/Item';
import { AddCliente } from './views/Cliente/Adicionar';
import { AddServico } from './views/Servico/Adicionar';
import { EditarCliente } from './views/Cliente/Editar';
import { ListarProdutos } from './views/Produto/Listar';
import { ListarCompras } from './views/Compra/Listar';
import { AddProduto } from './views/Produto/Adicionar';



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
          <Route path='/editar-cliete/id' component={EditarCliente}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
