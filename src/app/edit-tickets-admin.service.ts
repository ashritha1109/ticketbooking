import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EditTicketsAdminService {
  EngBaseUrl: string = 'https://631ad5dddc236c0b1ee5611f.mockapi.io/movies';
  TelBaseUrl:string="https://631ad5dddc236c0b1ee5611f.mockapi.io/telugumovies"
  HinBaseUrl:string="https://631ad5dddc236c0b1ee5611f.mockapi.io/hindimovies"
  constructor(private http: HttpClient) {}
  editBookedSeatsData(
    changeinbookedseats: any,
    movieid: any,
    show: any,
    lang: any
  ) {
    console.log(changeinbookedseats, movieid, show, lang);
    if (lang == 'English') {
      this.http
        .get(this.EngBaseUrl + '/' + movieid)
        .subscribe((response: any) => {
          console.log('in service', response);
          let moviedata = response;
          if (show === 'morning') {
            let newbookedseats = moviedata.morning_show - changeinbookedseats;
            let body = { morning_show: newbookedseats };
            this.http.put<any>(this.EngBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (show === 'matnee') {
            let newbookedseats = moviedata.matnee_show - changeinbookedseats;
            let body = { matnee_show: newbookedseats };
            this.http.put<any>(this.EngBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (show === 'first') {
            let newbookedseats = moviedata.first_show - changeinbookedseats;
            let body = { first_show: newbookedseats };
            this.http.put<any>(this.EngBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (show === 'second') {
            let newbookedseats = moviedata.second_show - changeinbookedseats;
            let body = { second_show: newbookedseats };
            this.http.put<any>(this.EngBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          }
        });
    }

    // TELUGU
    if (lang == 'Telugu') {
      this.http
        .get(this.TelBaseUrl + '/' + movieid)
        .subscribe((response: any) => {
          console.log('in service', response);
          let moviedata = response;
          if (show === 'morning') {
            let newbookedseats = moviedata.morning_show - changeinbookedseats;
            let body = { morning_show: newbookedseats };
            this.http.put<any>(this.TelBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (show === 'matnee') {
            let newbookedseats = moviedata.matnee_show - changeinbookedseats;
            let body = { matnee_show: newbookedseats };
            this.http.put<any>(this.TelBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (show === 'first') {
            let newbookedseats = moviedata.first_show - changeinbookedseats;
            let body = { first_show: newbookedseats };
            this.http.put<any>(this.TelBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (show === 'second') {
            let newbookedseats = moviedata.second_show - changeinbookedseats;
            let body = { second_show: newbookedseats };
            this.http.put<any>(this.TelBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          }
        });
    }

    // HINDI
    if (lang == 'Hindi') {
      this.http
        .get(this.HinBaseUrl + '/' + movieid)
        .subscribe((response: any) => {
          console.log('in service', response);
          let moviedata = response;
          if (show === 'morning') {
            let newbookedseats = moviedata.morning_show - changeinbookedseats;
            let body = { morning_show: newbookedseats };
            this.http.put<any>(this.HinBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (show === 'matnee') {
            let newbookedseats = moviedata.matnee_show - changeinbookedseats;
            let body = { matnee_show: newbookedseats };
            this.http.put<any>(this.HinBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (show === 'first') {
            let newbookedseats = moviedata.first_show - changeinbookedseats;
            let body = { first_show: newbookedseats };
            this.http.put<any>(this.HinBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (show === 'second') {
            let newbookedseats = moviedata.second_show - changeinbookedseats;
            let body = { second_show: newbookedseats };
            this.http.put<any>(this.HinBaseUrl + '/' + movieid, body).subscribe(
              (data) => {
                console.log('put data success', data);
              },
              (error) => {
                console.log(error);
              }
            );
          }
        });
    }
  }
}
