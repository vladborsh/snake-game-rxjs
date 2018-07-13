import { Point2D } from "../models/point.model";

export function eat(apples: Point2D[], snake): Point2D[] {
    let head = snake[0];

    for (let i = 0; i < apples.length; i++) {
        if (checkCollision(apples[i], head)) {
            apples.splice(i, 1);
            // length$.next(POINTS_PER_APPLE);
            return [...apples, getRandomPosition(snake)];
        }
    }

    return apples;
}

function checkCollision(apple: Point2D, head: Point2D): boolean {
    return false;
}

function getRandomPosition(snake: Point2D[]): Point2D {
    return {x: 0, y: 0};
}