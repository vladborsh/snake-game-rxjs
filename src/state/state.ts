import { INITIAL_SNALE_LENGTH, POINTS_PER_APPLE, GAME_SPEED } from "../configs/state.config";
import { BehaviorSubject, interval } from "rxjs";
import { scan, share, startWith, withLatestFrom, skip, tap } from "rxjs/operators";
import { direction$ } from "../control/control";
import { move } from "./move";
import { generateSnake } from "./generators/generate-snake";
import { generateApples } from "./generators/generate-apples";
import { eat } from "./eat";

let length$ = new BehaviorSubject<number>(INITIAL_SNALE_LENGTH);

export const snakeLength$ = length$
    .pipe(
        scan((step, snakeLength) => snakeLength + step),
        share(),
    );

export const score$ = snakeLength$
    .pipe(
        startWith(0),
        scan((score, _) => score + POINTS_PER_APPLE),
    );

export const ticks$ = interval(GAME_SPEED);

export const snake$ = ticks$
    .pipe(
        withLatestFrom(direction$, snakeLength$, (_, direction, snakeLength) => [direction, snakeLength]),
        scan(move, generateSnake()),
        share()
    );

export const apples$ = snake$
    .pipe(
        scan(eat, generateApples())
    );

export const appleEaten$ = apples$
    .pipe(
        skip(1),
        tap(() => length$.next(POINTS_PER_APPLE)),
    )
    .subscribe()