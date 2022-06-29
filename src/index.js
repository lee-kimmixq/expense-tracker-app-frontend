import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5948D3',
      contrastText: '#EFEFEF',
    },
    secondary: {
      main: '#CF65F2',
    },
    background: {
      default: '#262431',
    },
    text: {
      primary: '#EFEFEF',
      disabled: '#B4B4B4',
      secondary: '#B4B4B4',
      hint: '#EFEFEF',
    },
    info: {
      main: '#CF65F2',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
          <App />
    </ ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
