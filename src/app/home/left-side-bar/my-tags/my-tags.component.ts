import { ChangeDetectionStrategy, Component } from '@angular/core';

type Tag = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-home-left-side-bar-my-tags',
  templateUrl: './my-tags.component.html',
  styleUrls: ['./my-tags.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyTagsComponent {
  readonly myTags: string[] = [
    'angular',
    'webdev',
    'beginners',
    'go',
    'vim',
    'typescript',
    'blockchain',
    'linux',
    'web3',
  ];
}
