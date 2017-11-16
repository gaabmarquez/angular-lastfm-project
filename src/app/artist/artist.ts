
export class Artist {
    //     1) The artist's name
    // 2) An image from the artist.
    // 3) The artist's URL.
    // 4) List of the artist's top tracks' names.
    // 5) List of the artist's top albums' names.

    constructor(public name: string, public url: string, public content: string = "", public img: string = "", public topTracks: string[] = [], public topAlbums: string[] = []) { }
}
