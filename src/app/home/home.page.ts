import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@ViewChild(IonModal) modal!: IonModal;
  users: any[] = [] ;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = "";
  password: string ="";
  email: string ="";

  constructor(private userService: UsersService){}

  ngOnInit(): void{
    this.userService.getUsers().subscribe((resp) =>{
      this.users = resp.users
    })
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
