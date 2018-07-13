import { Directions } from "../models/direction.model";

export const DIRECTIONS: Directions = {
    37: { x: -1, y: 0 }, // Left Arrow
    39: { x: 1, y: 0 },  // Right Arrow
    38: { x: 0, y: -1 }, // Up Arrow
    40: { x: 0, y: 1 }   // Down Arrow
};

export const INITIAL_DIRECTION = {x: 0, y: 0}