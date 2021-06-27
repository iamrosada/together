import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    //pega os dados do usuário
    const { name, email, admin } = request.body;

    //envia os dados
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      admin,
    });

    return response.json(user);
  }
}

export { CreateUserController };
