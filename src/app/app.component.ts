import { Component } from '@angular/core';

interface Item {
  id:     string;
  title:  string;
  color:  string;
  text:   string;
  active: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editField: any;

  data: Array<Item> = [
    { id: '12',  title: 'Paris',     color: '#ed282f', text: 'Further Details', active: true },
    { id: '23',  title: 'New York',  color: '#ff781b', text: 'Further Details', active: false},
    { id: '34',  title: 'Zurich',    color: '#ff9a00', text: 'Further Details', active: false},
    { id: '45',  title: 'Barcelona', color: '#ffaec9', text: 'Further Details', active: false},
  ];

  empty: Item = { id: '\n',  title: '\n', color: '#000', text: '\n', active: false };

  activeItem = this.data.find(res => res.active === true);

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.data[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  remove(id: any) {
    this.data.splice(id, 1);
  }

  add() {
    this.data.push(Object.assign({}, this.empty));
  }

  itemClick = (id: number) => {
    this.data.find(res => res.active === true).active = false;
    this.data[id].active = true;
    this.activeItem = this.data.find(res => res.active === true);
  }

}
