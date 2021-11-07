import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { ListarClientes } from './views/Cliente/Listar';
import { ListarPedidos } from './views/Pedido/Listar';
import { ListarServicos } from './views/Servico/Listar';
import { Menu } from './components/Menu';
import { AddCliente } from './views/Cliente/AddCliente';
import { Item } from './views/Servico/Item';
import { ListarCompras } from './views/Compra/Listar';
import { ListarProdutos } from './views/Produto/Listar';
import { AddProduto } from './views/Produto/AddProduto';


function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/listar-clientes' component={ListarClientes} />
          <Route path='/listar-pedidos' component={ListarPedidos} />
          <Route path='/listar-servicos' component={ListarServicos} />
          <Route path='/listar-pedido:id' component={Item} />
          <Route path='/novo-cliente' component={AddCliente} />
          <Route path='/listar-compras' component={ListarCompras}/>
          <Route path='/listar-produtos' component={ListarProdutos}/>
          <Route path='/novo-produto' component={AddProduto}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
