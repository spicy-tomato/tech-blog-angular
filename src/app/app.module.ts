import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  defaultEditorExtensions,
  TUI_EDITOR_EXTENSIONS,
  TUI_IMAGE_LOADER,
} from '@taiga-ui/addon-editor';
import {
  TuiAlertModule,
  tuiButtonOptionsProvider,
  TuiDialogModule,
  TuiRootModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
// import { TUI_LANGUAGE, TUI_VIETNAMESE_LANGUAGE } from '@taiga-ui/i18n';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
// import { of } from 'rxjs';
import { appFeatureKey, appReducer } from 'src/app/store';
import { AppEffects } from 'src/app/store/app.effects';
import { imageLoader } from 'src/core/factories/image-loader';
import { emailFactory, requiredFactory } from 'src/data/factories';
import { ImageService } from 'src/data/services/image.service';
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
      provide: TUI_EDITOR_EXTENSIONS,
      useValue: defaultEditorExtensions,
    },
    {
      provide: TUI_IMAGE_LOADER,
      useFactory: imageLoader,
      deps: [ImageService],
    },
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        // maxlength: maxLengthFactory,
        required: requiredFactory,
        email: emailFactory,
      },
    },
    // {
    //   provide: TUI_LANGUAGE,
    //   useValue: of(TUI_VIETNAMESE_LANGUAGE),
    // },
    tuiButtonOptionsProvider({ size: 'm' }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
