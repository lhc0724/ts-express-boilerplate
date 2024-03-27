import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../models";

export default class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getById(id: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id: id } });
  }
}