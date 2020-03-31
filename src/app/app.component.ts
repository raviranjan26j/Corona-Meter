import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eshoppy';
  data : object=[];
  post: any;

  constructor( private http: HttpClient){
  }
  compare( a, b ) {
    if ( a.TotalConfirmed < b.TotalConfirmed ){
      return 1;
    }
    if ( a.TotalConfirmed > b.TotalConfirmed ){
      return -1;
    }
    return 0;
  }

  ngOnInit(){
    this.post= {Countries: ""};
    let obs=this.http.get('https://api.covid19api.com/summary');
    obs.subscribe((response) => this.post=response);
    obs.subscribe(()=>this.post.Countries.sort(this.compare));
    //obs.subscribe((response) => console.log(response));
    
  }

}
