import { Routes } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'resume',
    component: Resume,
  },
  {
    path: 'projects',
    component: Projects,
  },

  {
    path: 'contact',
    component: Contact,
  },

]
