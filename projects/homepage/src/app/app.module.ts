import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonComponent} from "@feel/form";
import {NotificationListComponent} from "@feel/notification";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexGridComponent} from "@feel/layout";
import {IconStyleComponent} from "./icons/icon-style/icon-style.component";
import {IconNotificationComponent} from "./icons/icon-notification/icon-notification.component";
import {IconKeyboardComponent} from "./icons/icon-keyboard/icon-keyboard.component";
import {IconDashboardComponent} from "./icons/icon-dashboard/icon-dashboard.component";
import {FormDropdownComponent} from "../../../feel/form/src/lib/form-dropdown/form-dropdown.component";

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
    FlexGridComponent,
    IconStyleComponent,
    IconNotificationComponent,
    IconKeyboardComponent,
    IconDashboardComponent,
    FormDropdownComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
