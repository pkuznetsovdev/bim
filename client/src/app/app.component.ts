import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AsyncPipe,} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {UserService} from "@app/core/services";
import {User} from "@app/models";
import {environment} from "@env";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {
  title = 'bim';
  userData: User | undefined = undefined;

  constructor(
    private readonly userService: UserService,
  ) {
  }
  ngOnInit(): void {
    this.userService.read(123).subscribe(newUser => {
      console.log('newUser: ', newUser)
      this.userData = newUser;
    });
  }
}
