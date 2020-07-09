import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Student } from './student';
import { HomeComponent } from './home/home.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private myurl = 'https://script.googleusercontent.com/macros/echo?user_content_key=7uADEaIXp1P_plK7YtHLx80VG4prFE0V8cH6cBz9QGtYdQ5JVipoBvc2OFJvfETlje4YGeL6YNRUm48ctXOupP-md2mlbmJHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC09Nb0QZ6ca_LU0vmo6mSiQ7SyFG3CgdL9-1Vgcha-TAYaAGhh-9xNG-9rMNEZHQRElvdDletx0&lib=MlJcTt87ug5f_XmzO-tnIbN3yFe7Nfhi6';
  courseName: string;
  private mycourse = new BehaviorSubject('Python');
  currentcourse = this.mycourse.asObservable();

  constructor(private http: HttpClient) { }

  getApiData(course_id: number){
    // const options = { params: new HttpParams({fromString: "course_id=1"}) };
    // const url = `${this.myurl}/${course_id}`;
    
    return this.http.get(this.myurl);
  }

  getmydata(mydata: string) {
    this.mycourse.next(mydata);
  }
}
