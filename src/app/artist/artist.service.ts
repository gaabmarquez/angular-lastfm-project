import { environment } from './../../environments/environment';
import { Artist } from './artist';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpHeaders, HttpResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent } from '@angular/common/http'

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient) {

  }

  getTopArtists() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(environment.baseUrl + "method=chart.gettopartists&api_key=" + environment.apiKey + "&format=json", { headers: headers });

  }

  getArtistInfoByName(name: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(environment.baseUrl + "method=artist.getinfo&artist=" + name + "&api_key=" + environment.apiKey + "&format=json", { headers: headers });

  }
  getArtistTopTracksByName(name: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    name = name.trim();
    name = name.replace(" ", "+");
    return this.http.get<any>(environment.baseUrl + "method=artist.gettoptracks&artist=" + name + "&api_key=" + environment.apiKey + "&format=json", { headers: headers });

  }
  getArtistTopAlbumsByName(name: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    name = name.trim();
    name = name.replace(" ", "+");
    return this.http.get<any>(environment.baseUrl + "method=artist.gettopalbums&artist=" + name + "&api_key=" + environment.apiKey + "&format=json", { headers: headers });

  }


}
