import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit/dist/js/uikit-core';

import Comlogik from './Comlogik';

import './index.scss';

window.UIkit = UIkit;

ReactDOM.render(<Comlogik></Comlogik>, document.getElementById('app'));
