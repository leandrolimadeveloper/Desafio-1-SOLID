import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers

    try {
      const users = this.listAllUsersUseCase.execute({
        user_id: String(user_id)
      })

      return response.json(users)
    } catch (error) {
      console.log(error)
      return response.status(401).json({ error: error })
    }
  }
}

export { ListAllUsersController };
