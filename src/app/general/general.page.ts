import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostModalComponent } from './post-modal/post-modal.component';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PostModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      //this.message = `Hello, ${data}!`;
    }
  }

}
