import { Component, OnInit, Input, NgModule } from '@angular/core';
import { HttpService } from '../http.service';
import { Student } from '../student';
import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http'
import { NumberSymbol } from '@angular/common';
import { FormGroup } from '@angular/forms';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() text: string;
  mydata: string;
  model = new Student('Tanishq', 9819444887, 'shaikh.tanishq@gmail.com', 'Ram', 22, 'Python');
  
  courseName :string;
  courses: Object;
  myslots : Array<Object>;
  slot : Object;
  xdata: String;
  x : string;
  lowerlimit: number;
  upperlimit: number;
  // myform: FormGroup;
  // onclck(courseName){
  //   alert(courseName)
  //   this.httpService.courseName = courseName;
  //  }

  
  
  submitted = false;

  M() {  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  private myurl = 'https://script.googleusercontent.com/macros/echo?user_content_key=7uADEaIXp1P_plK7YtHLx80VG4prFE0V8cH6cBz9QGtYdQ5JVipoBvc2OFJvfETlje4YGeL6YNRUm48ctXOupP-md2mlbmJHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC09Nb0QZ6ca_LU0vmo6mSiQ7SyFG3CgdL9-1Vgcha-TAYaAGhh-9xNG-9rMNEZHQRElvdDletx0&lib=MlJcTt87ug5f_XmzO-tnIbN3yFe7Nfhi6';
  
  constructor(private httpclient:HttpClient) {  }
  getApiData(){
    // console.log("hello");
    return this.httpclient.get(this.myurl);
    
  }
  
  ngOnInit(): void {
   
    this.getApiData().subscribe(data =>{
      this.courses = data;
      this.myslots = data[0]['slots'];
     
    })
  }

  MyFunc1() 
  {
  //  this.submitted = true;
   this.courseName = this.model.courseName;
   console.log(this.courseName);
   let d = new Date();
    const unixtime = d.valueOf();
    console.log(unixtime);
    const unixtimeplusfour = unixtime + (14400000);
    const unixtimeplussevendays = unixtime + 604800000;

    console.log(unixtimeplusfour);
    this.x = ""+this.courseName+"";
    this.lowerlimit = Number(unixtimeplusfour);
    this.upperlimit = Number(unixtimeplussevendays);
    // this.myform.reset();
  }

  

}
