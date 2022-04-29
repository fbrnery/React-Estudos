import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Dicas from './pages/Dicas';
import Fale from './pages/Fale';
import Matricula from './pages/Matricula';
import Footer from './components/Footer';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
            <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route path="/dicas" component={Dicas} />
                <Route path="/fale" component={Fale} />
                <Route path="/matricula" component={Matricula} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes;