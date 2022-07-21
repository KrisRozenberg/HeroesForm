import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  public submitted = false;
  public powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  public createdHero = new Hero(0, '', '', '');

  heroForm = new FormGroup({
    name: new FormControl('', [
      Validators.required]),
    alterEgo: new FormControl(''),
    power: new FormControl('', [
      Validators.required])
  });

  public isControlValid(controlName: string): boolean {
    const control = this.heroForm.controls[controlName];
    return control.valid || control.untouched;
  }

  onSubmit() {
    this.createdHero = this.newHero();
    this.submitted = true;
  }

  editHero() {
    this.submitted = false;
  }

  newHero(): Hero {
    const name = this.heroForm.controls['name'].value;
    const alterEgo = this.heroForm.controls['alterEgo'].value;
    const power = this.heroForm.controls['power'].value;
    return new Hero(42, name, power, alterEgo);
  }
}
