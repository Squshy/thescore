import { Schema, model } from "mongoose";
import { Rush } from "../types";

export const rushSchema = new Schema<Rush>({
  avg_yards: {
    type: Number,
    required: false,
    default: 0,
    alias: "Avg",
  },
  first_down_percent: {
    type: Number,
    required: false,
    default: 0,
    alias: "1st%",
  },
  first_downs: {
    type: Number,
    required: false,
    default: 0,
    alias: "1st",
  },
  fumbles: {
    type: Number,
    required: false,
    default: 0,
    alias: "FUM",
  },
  longest_rush: {
    type: String,
    required: false,
    default: "",
    alias: "Lng",
  },
  player: {
    type: String,
    required: true,
    alias: "Player",
  },
  pos: {
    type: String,
    required: true,
    alias: "Pos",
  },
  rush_attempts: {
    type: Number,
    required: false,
    default: 0,
    alias: "Att",
  },
  rush_attempts_per_game: {
    type: Number,
    required: false,
    default: 0,
    alias: "Att/G",
  },
  team: {
    type: String,
    required: true,
    alias: "Team",
  },
  total_yards: {
    type: Number,
    required: false,
    default: 0,
    alias: "Yds",
  },
  touchdowns: {
    type: Number,
    required: false,
    default: 0,
    alias: "TD",
  },
  yards_per_game: {
    type: Number,
    required: false,
    default: 0,
    alias: "Yds/G",
  },
  yards_rush_20: {
    type: Number,
    required: false,
    default: 0,
    alias: "20+",
  },
  yards_rush_40: {
    type: Number,
    required: false,
    default: 0,
    alias: "40+",
  },
});

export default model("Rush", rushSchema);
