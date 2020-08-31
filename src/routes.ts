import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
});
router.get('/users',(req, res) => {
  return res.status(200).send(`servidor rodando na porta ${process.env.PORT || 3333}`);
})

export { router };