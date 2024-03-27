import { RequestHandler } from "express";

export const checkHealth: RequestHandler = (req, res) => {
	const data = {
		uptime: process.uptime(),
		message: 'Ok',
		date: new Date()
	}

	res.status(200).send(data);
}

export const test: RequestHandler = (req, res) => {
  res.status(200).send();
};