import { Routes } from '@angular/router';
import { LoginComponent } from './compo/login/login.component';
import { RagisterComponent } from './compo/ragister/ragister.component';
import { LayoutComponent } from './compo/layout/layout.component';
import { HomeComponent } from './compo/home/home.component';
import { ReactiveformComponent } from './compo/reactiveform/reactiveform.component';
import { authgGuard } from './compo/service/authg.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'ragister',
        pathMatch:'full'
    },
    {
        path:'ragister',
        component:RagisterComponent,

    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path: 'login',
                component:LoginComponent
            },
            {
                path: 'home',
                component:HomeComponent,
                canActivate:[authgGuard]
            },
            {
                path: 'reactiveform',
                component:ReactiveformComponent,
                canActivate:[authgGuard]
            },

        ]
    },
   

];
