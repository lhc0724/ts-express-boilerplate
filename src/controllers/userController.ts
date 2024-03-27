import { RequestHandler } from 'express';
import { UserService } from '../services';

class UserController {
  public userService = new UserService();

  public getUsers: RequestHandler = async (req, res) => {
    const data = this.userService.getAll();
    return res.status(200).json({ data });
  };

  public getUserById: RequestHandler<{ id: number }> = async (req, res) => {
    const id = req.params.id;
    const data = this.userService.getById(id);

    return res.status(200).json({ data });
  };
}

export default UserController;