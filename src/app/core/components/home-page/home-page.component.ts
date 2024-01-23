import { Component } from '@angular/core';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isDialogOpen = false;
  notificationMessage: string | null = null;
  loading: boolean = false;

  constructor(private notificationService: NotificationService) {
    this.notificationService.loading$.subscribe(loading => {
    this.loading = loading;
  });}

  ngOnInit() {
    this.notificationService.notification$.subscribe(message => {
      this.notificationMessage = message;
    });
  }

  closeNotification() {
    this.notificationService.closeNotification();
  }

  toggleDialog() {
    this.isDialogOpen = !this.isDialogOpen;
}
}
