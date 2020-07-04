import { Component, OnInit } from '@angular/core';
import { StudentSurvey } from '../student-survey';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit{

constructor(private apiService: ApiService){}
ngOnInit() {
  }

// optionsRecommend = ['Likely', 'Very Likely', 'Not Likely']; 

// list: any[];

// survey = new StudentSurvey();
// sample: any;
// test: any;
// submitted = false;

// ngOnInit() {
// }

// onSubmit(){ 
//   this.sample = JSON.stringify(this.survey);

//   console.log(this.survey);
//   this.test={"body": this.sample};
  
//  //this.test={"body": "{\"fname\":\"Devika4\",\"lname\":\"W\",\"add\":\"4307 Ramona Drive\",\"email\":\"s@gmail.com\",\"zip\":88888,\"sdate\":\"2019-12-07\", \"city\":\"Herndon\", \"state\":\"Chicago\", \"phone\":999}"}
//   this.apiService.createSurvey(this.test).subscribe((res)=>{
//     console.log("Student Survey Saved!");
//   });
//   this.submitted = true; 
//   console.log("Print data",this.survey);
// }

// // TODO: Remove this when we're done
// get diagnostic() { return JSON.stringify(this.survey); }

}