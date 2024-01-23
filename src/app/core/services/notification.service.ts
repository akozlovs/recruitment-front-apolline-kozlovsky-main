import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSource = new BehaviorSubject<string | null>(null);
  public notification$ = this.notificationSource.asObservable();
  
  private loadingSource = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSource.asObservable();

  setLoading(loading: boolean) {
    this.loadingSource.next(loading);
  }

  showNotification(message: string) {
    this.notificationSource.next(message);
  }

  closeNotification() {
    this.notificationSource.next(null);
  }
}
