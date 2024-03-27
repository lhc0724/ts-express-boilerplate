import { RequestHandler } from "express";

export const checkHealth: RequestHandler = (req, res) => {
	const data = {
		uptime: process.uptime(),
		message: 'Ok',
		date: new Date()
	}

	return res.status(200).send(data);
}