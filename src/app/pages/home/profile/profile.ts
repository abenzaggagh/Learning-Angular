import {
  Component,
  computed,
  input,
  Input,
  InputSignal,
  OnInit,
  Signal,
  SimpleChanges,
} from '@angular/core';
import { IProfile, IProfileDetails } from '../../../core/interfaces/profile.interfaces';
import { ProfileDetails } from './profile-details/profile-details';

@Component({
  imports: [ProfileDetails],
  selector: 'wh-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  public profile: InputSignal<IProfile> = input.required<IProfile>();

  constructor() {
    console.log('profile page');
  }

  protected readonly profileDetails: Signal<IProfileDetails> = computed(() => {
    return {
      firstName: this.profile().firstName,
      lastName: this.profile().lastName,
      birthday: this.profile().birthday,
    } as IProfileDetails;
  });
}
