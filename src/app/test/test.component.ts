import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id: number;
  param1: string;
  param2: string;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params)=> {
      if(!isNullOrUndefined(params.id)){
      this.id=+params.id;
    } else {
      this.id=null;
    }
    });
    this.activatedRoute.queryParams.subscribe((params)=> {
      this.param1 = params.param1;
      this.param2 = params.param2;
      console.log(this.param1, this.param2);
    })
  }

  ngOnInit(): void {
  }

}
