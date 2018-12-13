import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  apikey: String = "'http://localhost:3000";
  constructor(private http:HttpClient) {}

 
  //CREATE: 
  addVideo(video){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(this.apikey+'/videos/add', video , {headers: headers})
  }

  //Remove: 
  removeVideo(id:number){
    let headers = new HttpHeaders();
    return this.http.delete(this.apikey+'/videos/'+id+'', {headers: headers})
  }

  //UPDATE:
  updateVideo(id:number,video){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.put(this.apikey+'/edit/'+id+'',video, {headers: headers})
  } 

  //DELETE: 
  deleteVideo(id:number){
    let headers = new HttpHeaders();
    return this.http.delete(this.apikey+'/videos/'+id+'', {headers: headers})
  }
  //get 
  getvideo(){
    let headers = new HttpHeaders();
    return this.http.get(this.apikey+'/videos', {headers: headers})
  }
}
