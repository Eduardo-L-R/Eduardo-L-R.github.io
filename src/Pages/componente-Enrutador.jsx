import React from 'react';
// Dependencias de React-Router
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  // Importacion de paginas
import ToDoAplicacionPage from './To-do-aplicacion/to-do-aplicacion-pages';
import PanelTarjetasPage from './Panel-tarjetas/panel-tarjetas-pages';
import Home from '../Pages/Home/home-pages';

  export default function funcionEnrutador(){
      return(
            <div>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav> */}

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/Home">
                    <Home />
                    </Route>
                <Route path="/Proyecto-to-do">
                    <ToDoAplicacionPage />
                </Route>
                <Route path="/Poyecto-Panel-Tarjetas">
                    <PanelTarjetasPage />
                    <h1>tercero</h1>
                </Route>
                <Route>
                    <h1>Error 404</h1>
                </Route>
            </Switch>
            </div>
      )
  } 