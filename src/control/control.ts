import { fromEvent } from 'rxjs';
import { map, filter, scan, startWith, distinctUntilChanged } from 'rxjs/operators';
import { DIRECTIONS, INITIAL_DIRECTION } from '../configs/direction.config';
import { Directions } from '../models/direction.model';
import { nexDirection } from '../helpers/nextDirection.helper';

export const direction$ = fromEvent(document, 'keydown')
    .pipe(
        map((event: KeyboardEvent) => DIRECTIONS[event.keyCode]),
        filter((direction: Directions) => !!direction),
        scan(nexDirection),
        startWith(INITIAL_DIRECTION),
        distinctUntilChanged()
    );