import { FORBIDDEN, CREATED, OK } from "http-status-codes";
import Event from "../model/events";

export const addEvent = async (req, res, next) => {
  try {
    const saveData = { ...req.body };
    const event = new Event(saveData);
    const saveEvent = await event.save();
    res.status(CREATED).send({
      event: saveEvent,
    });
  } catch (error) {
    next(error);
    res.status(FORBIDDEN).send("Some thing went wrong");
  }
};

export const getEvent = async (req, res, next) => {
  try {
    let events = {};
    const event = await Event.find({}).lean();
    event.forEach(async (element, index) => {
      events = event;
      if (element.booked < element.available) {
        events[index].inStock = true;
      } else {
        events[index].inStock = false;
      }
      return events;
    });

    res.status(OK).send({
      event: events,
    });
  } catch (error) {
    next(error);
    res.status(FORBIDDEN).send("Some thing went wrong");
  }
};

export const getEventById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.find({
      _id: id,
    }).lean();

    res.status(OK).send({
      event: event,
    });
  } catch (error) {
    next(error);
    res.status(FORBIDDEN).send("Some thing went wrong");
  }
};
