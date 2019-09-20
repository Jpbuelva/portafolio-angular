import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  title = 'Angular 7 CheckBox Select/ Unselect All';
  masterSelected: boolean;
  itemsPerPage: 5;
  checklist: any;
  checkedList: any;
  config: any;
  // collection = { count: 60, data: [] };

  constructor() {
      this.masterSelected = false;
      this.checklist = [
        {id: 1, value: 'Elenor Anderson', isSelected: false},
        {id: 2, value: 'Caden Kunze', isSelected: true},
        {id: 3, value: 'Ms. Hortense Zulauf', isSelected: true},
        {id: 4, value: 'Grady Reichert', isSelected: false},
        {id: 5, value: 'Dejon Olson', isSelected: false},
        {id: 6, value: 'Jamir Pfannerstill', isSelected: false},
        {id: 7, value: 'Aracely Renner DVM', isSelected: false},
        {id: 8, value: 'Aracely Renner DVM', isSelected: false},
        {id: 8, value: 'Genoveva Luettgen', isSelected: false},
        {id: 7, value: 'Aracely Renner DVM', isSelected: false},
        {id: 8, value: 'Genoveva Luettgen', isSelected: false},
        {id: 7, value: 'Aracely Renner DVM', isSelected: false},
        {id: 8, value: 'Genoveva Luettgen', isSelected: false},
        {id: 8, value: 'Genoveva Luettgen', isSelected: false}
      ];
      this.getCheckedItemList();
  }

  checkUncheckAll() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    // tslint:disable-next-line: only-arrow-functions
    this.masterSelected = this.checklist.every(  function(item: any) {
        return item.isSelected === true;
      });
    this.getCheckedItemList();
  }
  getCheckedItemList() {
    this.checkedList = [];
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected) {
      this.checkedList.push(this.checklist[i]);
      }
    }
    this.checkedList = JSON.stringify(this.checkedList);
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.checklist.count
    };
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
}


