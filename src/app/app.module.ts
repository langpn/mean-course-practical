import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import {HeaderComponent} from './header/header.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthInterceptor} from "./auth/auth-interceptor";
import {ErrorInterceptor} from "./error-interceptor";
import {ErrorComponent} from './error/error.component';
import {AngularMaterialModule} from "./angular-material.module";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
