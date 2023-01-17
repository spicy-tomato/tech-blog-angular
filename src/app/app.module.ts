import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  TuiAlertModule,
  TuiDialogModule,
  TuiRootModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { appFeatureKey, appReducer } from 'src/app/store';
import { AppEffects } from 'src/app/store/app.effects';
import { requiredFactory } from 'src/data/factories';
import { AuthInterceptor } from 'src/interceptors/auth.interceptor';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

const NGRX = [
  StoreModule.forRoot({}, {}),
  StoreModule.forFeature(appFeatureKey, appReducer),
  EffectsModule.forRoot([AppEffects]),
  StoreDevtoolsModule.instrument({
    maxAge: 50,
  }),
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
    ...NGRX,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        // maxlength: maxLengthFactory,
        required: requiredFactory,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
