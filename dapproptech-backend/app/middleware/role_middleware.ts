import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class RoleMiddleware {
  async handle(ctx: HttpContext, next: NextFn, allowedRoles: string[]) {
    const { auth, response } = ctx;
    const user = auth.user;

    if (!user){
      return response.unauthorized({ message: 'You must be logged in!'});

    await user.load('roles');

    const hasRole = user.roles.some((role) => allowedRoles.includes(role.name))

    if (!hasRole){
      return response.forbidden({ message: 'You do not have permission to access this.'});
    }

    await next()
   }
  }
}
