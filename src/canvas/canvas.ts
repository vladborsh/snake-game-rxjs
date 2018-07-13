import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../configs/canvas.config';

export function createCanvasElement(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    return canvas;
}

export function appendCanvasAndGetContext(): CanvasRenderingContext2D {
    const canvas = createCanvasElement();
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    return ctx;
}
