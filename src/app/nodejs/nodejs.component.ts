import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  nodejsDetailes: any;
  
  constructor( private Commonservice:CommonserviceService) { 
  this.nodejsDetailes=this.Commonservice.getinfo().nodejs;
  }

  ngOnInit(): void {
  }

}
