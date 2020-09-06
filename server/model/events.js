import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * event model design.
 * @returns {mongooseModel} it returns the schema model of user
 */
const event = new Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    imageUrl: {
      type: String,
      required: [true, "can't be blank"],
    },
    date: {
      type: Date,
      required: [true, "can't be blank"],
    },
    available: {
      type: Number,
      required: [true, "can't be blank"],
    },
    booked: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

event.index(
  {
    name: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.model("Events", event);
