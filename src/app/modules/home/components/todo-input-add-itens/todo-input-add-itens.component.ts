import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public addItemTaskList:string = "";

  public submitItemTaskList(){
    //console.log(this.addItemTaskList);
    if (this.addItemTaskList && this.addItemTaskList.trim() != ""){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
