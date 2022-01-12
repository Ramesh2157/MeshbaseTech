import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  angularDetailes:any;


  constructor(private Commonservice: CommonserviceService) {
this.angularDetailes=this.Commonservice.getinfo().angular;
  }

  ngOnInit(): void {
  }

}
