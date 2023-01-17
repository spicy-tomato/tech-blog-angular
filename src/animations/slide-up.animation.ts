import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideUp = trigger('slideUp', [
  transition(':enter', [
    query(
      ':self, .slide-element',
      [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        stagger('150ms', [
          animate(
            '250ms ease-in-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
