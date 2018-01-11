import 'babel-core/register';


var context = require.context('../src', true, /\.spec.js$/);
context.keys().forEach(context);


export default context;