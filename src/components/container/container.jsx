import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './header/header';
import Main from './main/main';

// Dependencias de React-Router
import ComponenteEnrutador from '../../Pages/componente-Enrutador';
import {Link, BrowserRouter} from "react-router-dom";

// Otras dependencias
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';




export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters='true'>
        <Typography component="div" style={{ color: 'white', backgroundColor: '#000020', height: '100vh' }} >
            <Header />
            <Main />
            <BrowserRouter>
              <ComponenteEnrutador />
            </BrowserRouter>
        </Typography>
      </Container>
    </React.Fragment>
  );
}