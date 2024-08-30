import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import {Store} from './redux/store';
import App from './App';
import 'antd/dist/reset.css'; // Ant Design styles reset
import './App.css'; // Custom global styles

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
