import { ArtistService } from './../artist.service';
import { Artist } from './../artist';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail-artist',
  templateUrl: './detail-artist.component.html',
  styleUrls: ['./detail-artist.component.css']
})
export class DetailArtistComponent implements OnInit {


  // 1) The artist's name
  // 2) An image from the artist.
  // 3) The artist's URL.
  // 4) List of the artist's top tracks' names.
  // 5) List of the artist's top albums' names.

  // @Input() name: string;
  private selectedArtist: Artist;

  constructor(private artistService: ArtistService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params.hasOwnProperty('name')) {
          this.loadData(params['name'])
        }

      }
    );



  }

  loadData(name: string) {
    this.artistService.getArtistInfoByName(name).subscribe(
      artist => {
        console.log(artist)
        this.selectedArtist = new Artist(artist.artist.name, artist.artist.url, artist.artist.bio.summary,artist.artist.image[3]["#text"])
        this.artistService.getArtistTopTracksByName(name).subscribe(
          toptracks => {
            for (let track of toptracks.toptracks.track) {
              this.selectedArtist.topTracks.push(track.name)
            }
          }
        );
        this.artistService.getArtistTopAlbumsByName(name).subscribe(
          topalbums => {
            for (let album of topalbums.topalbums.album) {
              this.selectedArtist.topAlbums.push(album.name)
            }
          }
        );
      }
    );



  }

}
