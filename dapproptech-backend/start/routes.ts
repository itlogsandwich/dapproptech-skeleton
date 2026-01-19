/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

router.get('/', async () => {
  return {
    status: 'active',
    system: 'DAPProptech Backend',
    version: '0.1.0',
  }
});

const PropertiesController = () => import('#controllers/properties_controller')
router.get('/properties', [PropertiesController, 'index']);
router.get('/properties/:id', [PropertiesController, 'show']);
router.get('/featured', [PropertiesController, 'featuredIndex']);

const AuthController  = () => import('#controllers/auth_controller');
router.post('/login', [AuthController, 'login']);
router.post('/signup', [AuthController, 'register']);

const AgentController = () => import('#controllers/agents_controller');
router.get('/agents', [AgentController, 'index']);


//Check start/kernel.ts to see registered middlewares
//no middlewares are currently being used at this time.
