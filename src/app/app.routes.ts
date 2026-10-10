import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent:() =>{
        return import('./october-art/october-art.component').then((m) => m.OctoberArtComponent)
    },
}
];
