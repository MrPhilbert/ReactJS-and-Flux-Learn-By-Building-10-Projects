var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var AppAPI = require('./utils/AppAPI.js');


AppAPI.getvideos();

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
