import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";
import { addEvent, getEvent } from "../../services/event";

export default (app) => {
  const router = Router();

  app.use("/event", router);
  router.route("/").get(getEvent);
  router.route("/").post(
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        imageUrl: Joi.string().required(),
        date: Joi.date().required(),
        available: Joi.number().required(),
        booked:Joi.number().default(0)
      }),
    }),
    addEvent
  );
};
