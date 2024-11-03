import Route from '@ioc:Adonis/Core/Route'
import AuthController from '../infra/http/controllers/AuthController'

export default function authRoutes() {
  const authController = new AuthController()
  Route.group(() => {
    Route.post('/register', authController.register.bind(authController))
  }).prefix('/auth')
}
