import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  logData(data: any) {
    console.log('Form Submitted Data:', data);
  }
}
