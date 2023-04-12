import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// when creating components using cli tool they are imported here automatically
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
