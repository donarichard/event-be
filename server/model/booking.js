import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * booking model design.
 * @returns {mongooseModel} it returns the schema model of user
 */
const booking = new Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "events",
    },
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
    },
    seat: {
      type: Number,
      required: [true, "can't be blank"],
    },
    attendee: {
      type: Array,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", booking);
