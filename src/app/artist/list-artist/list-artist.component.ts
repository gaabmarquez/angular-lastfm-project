import { ArtistService } from './../artist.service';
import { Artist } from './../artist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.css']
})
export class ListArtistComponent implements OnInit {

  constructor(private artistService: ArtistService) {

  }

  public artists: Artist[] = [];

  ngOnInit() {
    this.artistService.getTopArtists().subscribe(
      artists => {

        for (let artist of artists.artists.artist) {
          let artistAux: Artist = new Artist(artist.name, artist.url, "", artist.image[3]["#text"])
          this.artists.push(artistAux);
        }

      }


    );

  }

}
