import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-left-side-bar-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularTagsComponent {}
