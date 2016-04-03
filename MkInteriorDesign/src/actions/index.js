import counter from './counter';
import user from './user';
import browse from './browse';

let actions = {};
Object.assign(actions, counter, user, browse);

module.exports = actions;
