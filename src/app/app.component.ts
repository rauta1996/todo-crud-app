import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODO-APP';
  datas =[];

  add(data){
    this.datas.push(data.value);
    data.value =" ";
  }

  delete(data){
    this.datas = this.datas.filter(elem =>{
      return elem !==data;
    })
  }
}
