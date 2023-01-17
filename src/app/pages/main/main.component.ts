import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { of, take, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  public isLoad = true;

  public load() {
    timer(2000)
      .pipe(take(1))
      .subscribe(() => {
        this.isLoad = false;
        this.cdr.markForCheck();
      });
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
