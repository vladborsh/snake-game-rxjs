import { Point2D } from "../models/point.model";

export function nexDirection(previous, next) {
    let isOposite = (previous: Point2D, next: Point2D) => next.x === -previous.x || next.y === -previous.y;
    return isOposite(previous, next) ? previous : next;
}