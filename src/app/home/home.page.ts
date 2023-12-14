import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonText } from '@ionic/angular/standalone';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonText],
})
export class HomePage {

  data = '';

  options = {
    url: 'https://app-qs.lbv.landbw.de/res/api/file/getlocalization/1'    
  }

  constructor() { }

  async test() {
    try {
      const response: HttpResponse = await CapacitorHttp.get(this.options);
      this.data = JSON.stringify(response, undefined, 2);
      if (response.status == 200) {
        alert('Sweet: Cert pinning works!');
      }
    } catch (error) {
      console.error(error);
      if ((error as any)?.message == 'cancelled') {
        alert('Damn: Cert pinning cancelled this request');
      } else {
        alert(`The API call failed with ${error}`);
      }
    }
  }
}
