import './styles.css';

import add from './modules/add.js';
import create from './modules/create.js';
import order from './modules/order.js';
import { post, get, start } from './modules/api.js';

const a = 1;
add(a, a);
create(a);
order();
console.log(start());