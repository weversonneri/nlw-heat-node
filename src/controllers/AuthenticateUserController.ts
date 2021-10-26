import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code, serviceType } = request.body;

    const service = new AuthenticateUserService();

    try {
      const result = await service.execute(code, serviceType);
      return response.json(result);
    } catch (err) {
      return response.json({ error: true, message: err.message });
    }

  }
}

export { AuthenticateUserController };