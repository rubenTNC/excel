import './styles/index.scss';


const app = document.getElementById('app');

const greeting = 'Hello World';

app
  ? (app.innerHTML = `
    <strong class="main-title">
        ${greeting}. Webpack работает!
    </strong>
`)
  : null;
