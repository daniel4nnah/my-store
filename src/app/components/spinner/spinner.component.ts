import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  //@Input() loading = 'Está cargando';
  loading = 'Está cargando'
  @Output() isLoading= new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  whileLoad(){
    this.isLoading.emit(this.loading);
  }

}
