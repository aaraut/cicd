import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentSurvey } from './student-survey';
import { Bodydata } from './bodydata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://4jqaa6cls9.execute-api.us-east-2.amazonaws.com/live';
  apiGetURL: string = 'https://4jqaa6cls9.execute-api.us-east-2.amazonaws.com/live/getstudent';
  surveylist : any;

  constructor(private httpClient: HttpClient) { }

  public createSurvey(savestudent: StudentSurvey){
    console.log("Sending data", savestudent);
    return this.httpClient.post(`${this.apiURL}/savestudent/`,savestudent);
  }
  public getStudentData(){
  return this.httpClient.get(`https://4jqaa6cls9.execute-api.us-east-2.amazonaws.com/live/getstudent`);
  }
}