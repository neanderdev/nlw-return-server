import express from "express";

import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailMailAdapter } from "./adapters/nodemailer/nodemailer-email-adapter";

import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodemailMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
