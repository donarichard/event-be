import { FORBIDDEN, CREATED, OK, BAD_REQUEST } from "http-status-codes";
import Booking from "../model/booking";
import Event from "../model/events";

export const addBooking = async (req, res, next) => {
  try {
    const saveData = { ...req.body };
    const id = req.params.id;
    const event = await Event.find({
      _id: id,
      available: { $ne: 0 },
    });
    if (event.length === 0) {
      return res.status(BAD_REQUEST).send({
        message: "No seat Available",
      });
    }
    const booking = new Booking(saveData);
    const saveBooking = await booking.save();
    await Event.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        available: event[0].available - saveData.seat,
        booked: event[0].booked + saveData.seat,
      }
    );
    res.status(CREATED).send({
      booked: saveBooking,
    });
  } catch (error) {
    next(error);
    res.status(FORBIDDEN).send("Some thing went wrong");
  }
};
