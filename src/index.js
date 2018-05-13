import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import List from './components/list/List'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './index.css'
import Table from './components/list/Table';

const App =()=>{
  return <BrowserRouter>
   <div>
    <Header/>
<Switch>
  <Route path='/' component={List} exact/>

</Switch>

  </div>
</BrowserRouter>
}
ReactDOM.render(
  <App/>,document.getElementById('root')
);
