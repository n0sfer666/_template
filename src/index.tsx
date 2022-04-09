import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
}
importAll(require.context('./components', true, /\.(png|jpg|jpeg|gif)$/));
importAll(require.context('./styles', true, /\.scss$/));
importAll(require.context('./components', true, /\.scss$/));

function App() {
  const [state, setState] = useState('loading');
  setTimeout(() => {
    setState('loaded');
  }, 3000);
  return (
    <div>
      {
        state === 'loaded'
          ? "I'm alive!"
          : 'loading'
      }
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
