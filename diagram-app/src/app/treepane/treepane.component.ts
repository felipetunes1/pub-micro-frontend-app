import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-treepane',
  templateUrl: './treepane.component.html',
  styleUrls: ['./treepane.component.css']
})
export class TreepaneComponent implements OnInit {
  @Input() treelist;

  constructor(private sanitizer: DomSanitizer) {

  }
  ngOnInit(): void {
  }

}
