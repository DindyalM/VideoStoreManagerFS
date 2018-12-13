import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValidateService } from './services/validate.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthService } from './services/auth.service';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { VideoEditComponent } from './components/video-edit/video-edit.component';

const appRoutes: Routes = [
  // {path:'', component: HomeComponent},
  { path: '', component: VideoListComponent },
  { path: 'videos', component: VideoListComponent, redirectTo: '', pathMatch: 'full' },
  { path: 'videos/:id', component: VideoDetailComponent },
  { path: 'videos/edit/:id', component: VideoEditComponent },
  { path: 'videos/add', component: VideoEditComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    VideoListComponent,
    VideoDetailComponent,
    VideoEditComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgFlashMessagesModule.forRoot()
  ],
  exports: [],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
