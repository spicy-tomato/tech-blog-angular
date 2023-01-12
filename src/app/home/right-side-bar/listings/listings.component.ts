import { ChangeDetectionStrategy, Component } from '@angular/core';

type Listing = {
  id: string;
  title: string;
  category: string;
};

@Component({
  selector: 'app-home-right-side-bar-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingsComponent {
  readonly listings: Listing[] = [
    {
      id: 'how-to-build-a-single-page-app-with-javascript-no-frameworks-4pe8',
      title: 'How to Build a Single Page App with JavaScript (No Frameworks)',
      category: 'education',
    },
    {
      category: 'education',
      id: 'learning-the-javascript-dom-enrol-in-this-course-o6a',
      title: '✍️ Learning the JavaScript DOM? Enrol in This Course',
    },
    {
      id: 'how-to-build-a-single-page-app-with-javascript-no-frameworks-4pe8',
      title: 'How to Build a Single Page App with JavaScript (No Frameworks)',
      category: 'education',
    },
    {
      category: 'education',
      id: 'learning-the-javascript-dom-enrol-in-this-course-o6a',
      title: '✍️ Learning the JavaScript DOM? Enrol in This Course',
    },
  ];
}
