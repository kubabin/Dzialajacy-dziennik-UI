import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {ServiceWorkerModule} from '@angular/service-worker';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  //enableProdMode();
}

function bootstrap() {
  ServiceWorkerModule.register('ngsw-worker.js', {
    // enabled: !isDevMode(),
    enabled: true,
    registrationStrategy: 'registerWhenStable:30000'
    // registrationStrategy: 'registerImmediately'
  }),
  //console.log("service worker registered!")
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
};


 if (document.readyState === 'complete') {
   bootstrap();
 } else {
   document.addEventListener('DOMContentLoaded', bootstrap);
 }

