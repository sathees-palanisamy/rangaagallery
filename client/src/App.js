import React from 'react';
import NavHeader from './components/Util/NavHeader';
import SearchProduct from './components/SearchProduct';
import Webfooter from './components/Webfooter';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import Balaji from './components/Balaji/Balaji';
import Ganesha from './components/Ganesha/Ganesha';
import Lakshmi from './components/Lakshmi/Lakshmi';
import Embossed from './components/Embossed/Embossed';
import Gifts from './components/Gifts/Gifts';
import Basket from './components/Basket/Basket';
import NewCollection from './components/NewCollection/NewCollection';
import Details from './components/Detail/Details';
import Orders from './components/Orders/Orders';
import OrderList from './components/List/OrderList';
import Search from './components/Search/Search';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Amman from './components/Amman/Amman';
import Annapoorani from './components/Annapoorani/Annapoorani';
import Krishna from './components/Krishna/Krishna';
import Mukk from './components/mukk/Mukk';
import Plain from './components/Plain/Plain';
import Saibaba  from './components/Saibaba/Saibaba';
import Saraswathi from './components/Saraswathi/Saraswathi';
import Sivan from './components/Sivan/Sivan';
import Murugar from './components/Murugar/Murugar';
import WallPlate from './components/Wall/Wall'

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';


function App() {
  return (
    <div className="App">

      <NavHeader />
      <SearchProduct />
      <Switch>
        <Route path="/" exact render={(props => <Home/>)} />
        <Route path="/all" render={(props => <AllProducts/>)}/>
        <Route path="/balaji" render={(props => <Balaji/>)}/>
        <Route path="/ganesha" render={(props => <Ganesha/>)}/>
        <Route path="/lakshmi" render={(props => <Lakshmi/>)}/>
        <Route path="/embossed" render={(props => <Embossed/>)}/>
        <Route path="/Gifts" render={(props => <Gifts/>)}/>
        <Route path="/basket" render={(props => <Basket/>)}/>
        <Route path="/newcollection" render={(props => <NewCollection/>)}/>
        <Route path="/detail" render={(props => <Details/>)}/>
        <Route path="/orders" render={(props => <Orders/>)}/>
        <Route path="/list" render={(props => <OrderList/>)}/>
        <Route path="/search" render={(props => <Search />)}/>
        <Route path="/contact" render={(props => <Contact />)}/>
        <Route path="/about" render={(props => <About />)}/>
        <Route path="/Amman" render={(props => <Amman />)}/>
        <Route path="/Annapoorani" render={(props => <Annapoorani />)}/>
        <Route path="/Krishna" render={(props => <Krishna />)}/>
        <Route path="/mukk" render={(props => <Mukk />)}/>
        <Route path="/Plain" render={(props => <Plain />)}/>
        <Route path="/Saibaba" render={(props => <Saibaba />)}/>
        <Route path="/Saraswathi" render={(props => <Saraswathi />)}/>
        <Route path="/Sivan" render={(props => <Sivan />)}/>
        <Route path="/Murugar" render={(props => <Murugar />)}/>
        <Route path="/WallPlate" render={(props => <WallPlate />)}/>
      </Switch>
     
      <Webfooter />



    </div>
  );
}

export default App;
