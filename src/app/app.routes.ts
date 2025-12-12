import { Routes } from '@angular/router';
import { ListComponent} from './list-component/list-component';
import {DetailsComponent} from './details-component/details-component';
import {AddPersonComponent} from './add-person-component/add-person-component';
import { NotFoundComponent} from './not-found-component/not-found-component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    title: 'List Component'
  },

  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Component'
  },

  {
    path: 'add',
    component: AddPersonComponent,
    title: 'Add Person Component'
  },

  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found Component'
  },
];
