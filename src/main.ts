import { createElement } from 'react';
import { createRoot } from 'react-dom';
import App from './pages/App';
import './index.css';

const el = document.querySelector('#root');

if (!el) throw new Error('Element not found');

const root = createRoot(el);

root.render(createElement(App));
