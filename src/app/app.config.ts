import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './core/log.interceptor';
import { AppService } from './app.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
       multi: true
    },
    AppService,
    provideRouter(routes)
  ]
};
