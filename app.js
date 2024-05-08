import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import CartPage from './CartPage';
import CatalogPage from './CatalogPage';
import ProductPage from './ProductPage';
import ShopPage from './ShopPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/catalog" component={CatalogPage} />
                <Route path="/product" component={ProductPage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </Router>
    );
}

export default App;
