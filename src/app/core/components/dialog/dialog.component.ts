import { Component,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { SpeciesService } from '@core/services/species.service';
import { NotificationService } from '@core/services/notification.service';
import { Species } from '@core/services/species';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;
  fileError: string | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private speciesService: SpeciesService, private notificationService: NotificationService) {}

  submitForm() {
    this.notificationService.showNotification('Loading...');
    this.notificationService.setLoading(true);
    this.fileError = '';

    if (this.imageInput?.nativeElement.files && this.imageInput.nativeElement.files.length > 0) {
      
      const selectedFile = this.imageInput.nativeElement.files[0];
      const allowedFileTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];

      if (allowedFileTypes.includes(selectedFile.type)) {
        const formData = new FormData();
        formData.append('file', selectedFile);

        this.speciesService.identifyImage(formData).subscribe(
          response => {
            this.speciesService.addSpeciesToList(response);
            this.notificationService.showNotification('Pokemon added to the list!');
            this.notificationService.setLoading(false);
          },

          error => {
            console.error('API Error:', error);
            this.notificationService.setLoading(false);
          },
        );
      this.closeDialog.emit();
    } else {
      console.log(this.fileError = 'Invalid file type. Supported types are: jpg, jpeg, png, gif, svg');
      this.notificationService.setLoading(false);
  }

  } else {
    console.error('No file selected.');
    this.notificationService.setLoading(false);
  }
}

//image preview

onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log(input);

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

clearImage(): void {
    this.imagePreview = null;
    this.imageInput.nativeElement.value = '';
  }

cancel() {
      console.log('cancel')
      this.closeDialog.emit();
    }

}