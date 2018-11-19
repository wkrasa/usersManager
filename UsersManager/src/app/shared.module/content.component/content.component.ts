import { Component, Input, ViewChild, OnInit } from '@angular/core';

import { MatSidenav } from '@angular/material'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  @Input() opened: boolean = true;

  ngOnInit() {
    // this.opened = false;
  }
}
