import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppDesignComponent } from './app-design/app-design.component';
import { ContactComponent } from './contact/contact.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { IndexComponent } from './index/index.component';
import { LocationsComponent } from './locations/locations.component';
import { WebDesignComponent } from './web-design/web-design.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AppDesignComponent,
    ContactComponent,
    GraphicDesignComponent,
    IndexComponent,
    LocationsComponent,
    WebDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
