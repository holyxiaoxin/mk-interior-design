import counter from './counter';
import user from './user';

let actions = {};
Object.assign(actions, counter, user);

module.exports = actions;
