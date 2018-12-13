import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Video } from '../video';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videos: Video[];
  private videosUrl = 'http://localhost:3000/videos';

  constructor(
    private http: HttpClient
  ) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl).pipe(
        catchError(this.handleError('getVideos', []))
      );
  }

  searchVideos(term: string): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.videosUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Video[]>('searchVideos', []))
    );
  }

  getVideo(id: number): Observable<Video> {
    const url = `${this.videosUrl}/${id}`;
    return this.http.get<Video>(url).pipe(
      catchError(this.handleError<Video>(`getVideo id ${id}`))
    );
  }

  reserveVideo(video: Video) {
    return this.http.put(this.videosUrl, video, httpOptions).pipe(
      catchError(this.handleError<Video>('reserveVideo'))
    );
  }

  addVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(this.videosUrl, video, httpOptions).pipe(
      catchError(this.handleError<Video>('addVideo'))
    );
  }

  deleteVideo(id: number): Observable<Video> {
    const url = `${this.videosUrl}/${id}`;
    return this.http.delete<Video>(url, httpOptions).pipe(
      catchError(this.handleError<Video>('deleteVideo'))
    );
  }

  updateVideo(updatedVideo: Video): Observable<any> {
    return this.http.put(this.videosUrl, updatedVideo, httpOptions).pipe(
      catchError(this.handleError<any>('updateVideo'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
