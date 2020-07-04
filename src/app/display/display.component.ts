import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Bodydata } from '../bodydata';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  apiUrl = 'https://4jqaa6cls9.execute-api.us-east-2.amazonaws.com/live/getstudent';
  surveyList;
  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getStudentData().subscribe((res)=>{
      console.log(res);
      this.surveyList = res;
      console.log(this.surveyList);
    });

    //this.apiService.getStudentData();
  }

}
