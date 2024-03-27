import { RequestHandler } from 'express';
import { AppDataSource } from '../../data-source';
import { User } from '../models';

export const getUsers: RequestHandler = async (req, res) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return res.status(200).json({ data: users });
};

export const getUserById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id: id } });

  return res.status(200).json({ data: user });
};