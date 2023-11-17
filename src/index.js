import _ from 'lodash';

function component() {
  let html = require('./README.md');
  let container = document.getElementById('container');

  container.innerHTML = html;

  return container;
}

document.body.appendChild(component());
