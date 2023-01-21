import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.page.html',
  styleUrls: ['./input-forms.page.scss'],
})
export class InputFormsPage implements OnInit {

  nombre: string = 'Jonathan Zambrano';
  usuario = {
    email: 'leoalava2016@gmail.com',
    password: '12345'
  }
  constructor() { }
  ngOnInit() { }
  onSubmit(formulario: NgForm)
  {
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
