import { ChangeDetectionStrategy, Component } from '@angular/core';

type MetaData = {
  key: string;
  value: string;
};

@Component({
  selector: 'app-user-details-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsInfoComponent {
  userData: MetaData[] = [
    {
      key: 'Currently learning',
      value:
        '<p>- CyberSecurity<br>- Cryptography<br>- Network<br>- Processes Automation<br>- Machine Learning<br>- Data Visualization<br>- Ex Reality<br>- Mathematics</p>',
    },
    {
      key: 'Skills/Languages',
      value:
        '<p>- OpenBSD / FreeBSD / Linux flavors<br>- Rust and Actix / PHP and Symfony<br>- Go / Python and Django or Flask. Also, Haskell. Javascript and Solid, Inferno, Vue or Mithril</p>',
    },
    {
      key: 'Available for',
      value:
        '<p>- Cosultation of Cybersecurity / Digital Marketing / Education<br>- Cofiguring Networking<br>- Buliding and Managing Servers<br>- Developing Service / Apps of <br>Web / Mobile / Standalone</p>',
    },
  ];
}
