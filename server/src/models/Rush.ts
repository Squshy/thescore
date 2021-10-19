import { Schema, model } from "mongoose";
import { Rush } from "../types";

export const rushSchema = new Schema<Rush>({
  Avg: {
    type: Number,
    required: true,
    default: 0,
    alias: "avg_yards",
  },
  "1st%": {
    type: Number,
    required: false,
    default: 0,
    alias: "first_down_percent",
  },
  "1st": {
    type: Number,
    required: false,
    default: 0,
    alias: "first_downs",
  },
  FUM: {
    type: Number,
    required: false,
    default: 0,
    alias: "fumbles",
  },
  Lng: {
    type: String,
    required: false,
    default: "",
    alias: "longest_rush",
  },
  Player: {
    type: String,
    required: true,
    alias: "player",
  },
  Pos: {
    type: String,
    required: true,
    alias: "pos",
  },
  Att: {
    type: Number,
    required: false,
    default: 0,
    alias: "rush_attempts",
  },
  "Att/G": {
    type: Number,
    required: false,
    default: 0,
    alias: "rush_attempts_per_game",
  },
  Team: {
    type: String,
    required: true,
    alias: "team",
  },
  Yds: {
    type: Number,
    required: false,
    default: 0,
    alias: "total_yards",
  },
  TD: {
    type: Number,
    required: false,
    default: 0,
    alias: "touchdowns",
  },
  "Yds/G": {
    type: Number,
    required: false,
    default: 0,
    alias: "yards_per_game",
  },
  "20+": {
    type: Number,
    required: false,
    default: 0,
    alias: "yards_rush_40",
  },
  "40+": {
    type: Number,
    required: false,
    default: 0,
    alias: "yards_rush_40",
  },
});

export default model("Rush", rushSchema);
