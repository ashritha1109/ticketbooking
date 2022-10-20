import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.css']
})
export class ShowmoviesComponent implements OnInit {
baseUrl:string="https://634c17c3d90b984a1e45bdc5.mockapi.io/users"
filteredData: any = [];
userdata:any;
// moviedata:{
//   // name:String
// }[]=[];

datamovie:
{username:String,
name:String,
tickets_available:Number,
show:String}[]=[];
ans: any[] = [];
flag=0;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((data)=>{

      this.filteredData = data;
      this.filteredData = this.filteredData.filter((user: any) => {
        return user.username === localStorage.getItem('username');
      })
      console.log(this.filteredData);
    // this.userdata=data;
    // console.log("userdata",this.userdata)
    // let ans=[];
    // for(let i=0;i<this.userdata.length;i++){
    //   //  console.log("userdata",this.userdata)
    //   if (this.userdata[i].username===localStorage.getItem("username")){
    //  this.flag=1;
 
    //   }
    //   else{
    //    this.flag=0;
    //   }
    //   if(this.flag==1){
    //     this.datamovie=this.userdata[i]
    //   }
    // }
   
    // console.log("datamovie",this.datamovie)


  })
 
  }

}
