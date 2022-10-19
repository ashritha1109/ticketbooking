import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviedataService {
  baseUrl:string ="https://631ad5dddc236c0b1ee5611f.mockapi.io/movies"
  postUrl:string="https://631ad5dddc236c0b1ee5611f.mockapi.io/register"
  postTicketUrl:string="https://634c17c3d90b984a1e45bdc5.mockapi.io/users"

  teluguBaseUrl:string="https://631ad5dddc236c0b1ee5611f.mockapi.io/telugumovies"
  hindiBaseUrl:string="https://631ad5dddc236c0b1ee5611f.mockapi.io/hindimovies"
  constructor(private http:HttpClient) { }
  getEnglishMovieData():Observable<any>{
    return this.http.get(this.baseUrl)
  }
  getSingleMovieData(id:any):Observable<any>{
    return this.http.get(this.baseUrl+'/'+id)
  }
  editTicketsData(data:any):Observable<any>{
    return this.http.put(this.baseUrl+'/'+data.id,JSON.stringify(data),
    {
      headers: {"content-type" : "application/json"}
    })
  }

  // telugu movies
  getTeluguMovieData():Observable<any>{
    return this.http.get(this.teluguBaseUrl)
  }
  getSingleTeluguMovieData(id:any):Observable<any>{
    return this.http.get(this.teluguBaseUrl+'/'+id)
  }
  editTeluguTicketsData(data:any):Observable<any>{
    return this.http.put(this.teluguBaseUrl+'/'+data.id,JSON.stringify(data),
    {
      headers: {"content-type" : "application/json"}
    })
  }

  // hindi movies

  getHindiMovieData():Observable<any>{
    return this.http.get(this.hindiBaseUrl)
  }
  getSingleHindiMovieData(id:any):Observable<any>{
    return this.http.get(this.hindiBaseUrl+'/'+id)
  }
  editHindiTicketsData(data:any):Observable<any>{
    return this.http.put(this.hindiBaseUrl+'/'+data.id,JSON.stringify(data),
    {
      headers: {"content-type" : "application/json"}
    })
  }

  postRegisteredData(data:any):Observable<any>{
    return this.http.post(this.postUrl,JSON.stringify(data),{
      headers: {"content-type" : "application/json"}
    })
  }
  postTicketDetails(data:any):Observable<any>{
    return this.http.post(this.postTicketUrl,JSON.stringify(data),{
      headers: {"content-type":"application/json"}
    })
  }

  getTicketDetails():Observable<any>{
    return this.http.get(this.postTicketUrl)
  }
  


  getLoginData():Observable<any>{
    return this.http.get(this.postUrl)
  }

  userLoginStatus():boolean{
    if(localStorage.getItem("username")===null)
    {
      return false;
    }
    else{
      return true
    }
  }

  //logout
  onLogout(){
    localStorage.clear();    
  }
  

}
