import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'mantis-todo-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
