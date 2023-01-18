import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent implements OnInit {
  public isLoad = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    window.onload = () => {
      this.isLoad = false;
      this.cdr.markForCheck();
      // console.log('loaded');
    };
  }
}
