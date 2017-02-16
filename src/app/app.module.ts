import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PhotoListComponent } from './photo/photolist.component';
import { GuestBookListComponent } from './guestbook/guestbooklist.component';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { PhotoModule } from './photo/photo.module';
import { GuestbookModule } from './guestbook/guestbook.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo:'welcome', pathMatch: 'full' },
      { path: '**', redirectTo:'welcome', pathMatch: 'full' }
    ]),
    PhotoModule,
    ProjectModule,
    UserModule,
    GuestbookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
