import { appendCanvasAndGetContext } from "./canvas/canvas";
import { combineLatest } from "rxjs/operators";
import { snake$, apples$, score$ } from "./state/state";
import { interval } from "rxjs";
import { animationFrame } from "rxjs/internal/scheduler/animationFrame";
import { FPS } from "./configs/canvas.config";

appendCanvasAndGetContext();

let scene$ = combineLatest(snake$, apples$, score$, 
    (snake, apples, score) => ({snake, apples, score}));

const game$ = interval(1000 / FPS, animationFrame)
