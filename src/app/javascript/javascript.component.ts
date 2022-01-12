import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  javascriptDetailes: any;

  constructor(private Commonservice: CommonserviceService) {
    this.javascriptDetailes = this.Commonservice.getinfo().javascript;
    console.log(this.javascriptDetailes)
  }

  ngOnInit(): void {
  }

}
