import { Component, input, InputSignal } from '@angular/core';
import { IProfileDetails } from '../../../../core/interfaces/profile.interfaces';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'wh-profile-details',
  styleUrl: './profile-details.css',
  templateUrl: './profile-details.html',
})
export class ProfileDetails {
  public readonly details: InputSignal<IProfileDetails> = input.required();
}
