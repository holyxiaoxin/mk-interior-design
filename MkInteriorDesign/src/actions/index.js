import counter from './counter';
import util from './util';

let actions = {};
Object.assign(actions, counter, util);

module.exports = actions;
