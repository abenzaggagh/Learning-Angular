import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { Profile } from './profile/profile';
import { IProfile, IProfileDetails } from '../../core/interfaces/profile.interfaces';

@Component({
  imports: [Profile],
  selector: 'wh-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  // HTTP Request retrieve Profile
  protected readonly profile: WritableSignal<IProfile> = signal({
    firstName: "Toto",
    lastName: "Tata",
    birthday: "1990-01-01",
    email: "toto.tata@example.com",
    phoneNumber: "+1234567890",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  });
}
