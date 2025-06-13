import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button implements OnInit {
  @Output() btnClick = new EventEmitter();

ngOnInit(): void {};

  onClick() {
    this.btnClick.emit();
  }
}
