import type { HttpContext } from '@adonisjs/core/http'
import { registerValidator } from '#validators/auth'
import Role from '#models/role'
import User from '#models/user'

export default class AuthController {

  public async login ({ request, auth, response }: HttpContext){

    try{

      const {email, password} = request.only(['email', 'password']);

      const user = await User.verifyCredentials(email.trim(), password);

      await auth.use('web').login(user);

      return response.ok({
        message: 'Login Successful',
        user: user,
      });

    } catch(error){
        console.error('LOGIN_FAILURE_DETAIL: ', error.message);
        return response.unauthorized({ message: 'Invalid Credentials'});
    }
  }
  public async register({ request, response}: HttpContext){

    try{

      const payload = await request.validateUsing(registerValidator);

      const user = await User.create(payload);

      const buyerRole = await Role.findByOrFail('name', 'buyer');

      await user.related('roles').attach([buyerRole.id]);

      return response.created({
        message: 'Account created successfully!',
        user: user,
        });

    } catch(error){

      //vine validator error handling ^_^
      if(error.code === 'E_VALIDATION_ERROR'){
        return response.unprocessableEntity(error.messages);
      }

      return response.internalServerError({ message: 'An unexpected error occured!' })
    }
  }
}
