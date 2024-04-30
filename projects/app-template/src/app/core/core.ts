import {
  Routes,
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ENVIRONMENT_INITIALIZER } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

export interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideAnimations(),
    provideHttpClient(
      withFetch()
    ),
    provideRouter(
      routes,
      withRouterConfig({onSameUrlNavigation: 'reload'}),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    // altre impostazioni
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        // impostazioni iniziali
      },
    }
  ];
}
