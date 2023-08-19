import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonComponent} from "@feel/form";
import {NotificationListComponent} from "@feel/notification";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexGridComponent} from "@feel/layout";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonComponent,
    NotificationListComponent,
    FlexGridComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
