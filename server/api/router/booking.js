import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";
import { addBooking } from "../../services/booking";
export default (app) => {
  const router = Router();

  app.use("/book", router);
  router.route("/:id").post(
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        mobile: Joi.number().required(),
        seat: Joi.number().required(),
        attendee: Joi.array().required(),
      }),
    }),
    addBooking
  );
};
