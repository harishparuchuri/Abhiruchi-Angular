import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/landing-page/header/header.component';
import { CarouselComponent } from './components/landing-page/carousel/carousel.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RemainingComponent } from './components/landing-page/remaining/remaining.component';
import { AboutComponent } from './components/landing-page/about/about.component';
import { ChefComponent } from './components/landing-page/chef/chef.component';
import { ContactComponent } from './components/landing-page/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent, 
    FooterComponent,
    LandingPageComponent,
    RemainingComponent,
    AboutComponent,
    ChefComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
