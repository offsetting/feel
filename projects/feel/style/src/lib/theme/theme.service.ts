import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {Theme} from "./theme.domain";

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnInit, OnDestroy {

  private readonly theme0 = new BehaviorSubject(Theme.AUTO);
  public readonly theme = this.theme0.asObservable();

  private subscription: Subscription | undefined = undefined;

  public ngOnInit(): void {
    this.subscription = this.theme0.subscribe(theme => {
      document.body.classList.remove(Theme.LIGHT, Theme.DARK);

      switch (theme) {
        case Theme.LIGHT:
        case Theme.DARK:
          document.body.classList.add(theme);
          break;
        case Theme.AUTO:
          break;
      }
    });
  }

  public ngOnDestroy(): void {
    this.theme0.complete();
    this.subscription?.unsubscribe();
  }

  public setTheme(theme: Theme): void {
    this.theme0.next(theme);
  }
}
