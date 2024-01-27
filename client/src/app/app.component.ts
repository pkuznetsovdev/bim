import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AsyncPipe,} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})

export class AppComponent implements OnInit {
  title = 'bim';

  constructor(
    // private readonly userService: UserService,
  ) {
  }
  ngOnInit(): void {

  }
}
