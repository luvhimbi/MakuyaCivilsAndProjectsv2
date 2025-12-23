import { Routes } from '@angular/router';
import {HomeComponent} from './home.component/home.component';
import {ServicesComponent} from './services.component/services.component';
import {TeamComponent} from './team.component/team.component';
import {AboutComponent} from './about.component/about.component';

import {GalleryComponent} from './gallery.component/gallery.component';
import {Contact} from './contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'about', component: AboutComponent },
  {path:'contact', component: Contact},
  {path:'gallery', component: GalleryComponent},
];
