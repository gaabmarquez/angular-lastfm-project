import { ListArtistComponent } from './list-artist/list-artist.component';
import { RouterModule } from '@angular/router';
import { DetailArtistComponent } from './detail-artist/detail-artist.component';
import { Routes } from '@angular/router'


const appRoutes: Routes = [
    { path: '', redirectTo: '/artist/list', pathMatch: 'full' },
    { path: 'artist/list', component: ListArtistComponent },
    { path: "artist/:name", component: DetailArtistComponent }
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes);