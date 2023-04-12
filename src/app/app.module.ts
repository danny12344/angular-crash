import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root component
import { AppComponent } from './app.component';

// when creating components using cli tool they are imported here automatically
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
