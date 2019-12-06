const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add('postview', '/@:username/:postslug');
routes.add('username', '/@:username');