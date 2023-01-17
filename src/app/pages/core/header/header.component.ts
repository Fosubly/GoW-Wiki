import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

const buttons = [
  {
    translateKey: 'header.characters',
    path: '',
  },
  {
    translateKey: 'header.items',
    path: '',
  },
  {
    translateKey: 'header.enemies',
    path: '',
  },
  {
    translateKey: 'header.quests',
    path: '',
  },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public buttons = buttons;
  constructor() {}

  ngOnInit(): void {}
}
