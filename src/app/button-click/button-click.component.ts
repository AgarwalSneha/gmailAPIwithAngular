import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent implements OnInit {
  buttonDisabled=true;
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  
}
