import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackGuard } from './presentation/shared/guards/back.guard';
import { PermissionLogeadoGuard } from './presentation/shared/guards/permission-logeado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [BackGuard],
    loadChildren: () =>
      import('./presentation/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'usuario',
    // canActivate: [PermissionLogeadoGuard],
    loadChildren: () =>
      import('./presentation/admin/usuario.module').then(
        (m) => m.UsuarioModule
      ),
  },
  {
    path: 'curso',
    // canActivate: [PermissionLogeadoGuard],
    loadChildren: () =>
      import('./presentation/course/curso.module').then((m) => m.CursoModule),
  },
  {
    path: 'membresia',
    //  canActivate: [PermissionLogeadoGuard],
    loadChildren: () =>
      import('./presentation/membresia/membresia.module').then(
        (m) => m.MembresiaModule
      ),
  },
  {
    path: 'membresia-usuario',
    //  canActivate: [PermissionLogeadoGuard],
    loadChildren: () =>
      import('./presentation/membresia copy/membresia-usuario.module').then(
        (m) => m.MembresiaUsuarioModule
      ),
  },
  {
    path: 'carrito',
    loadChildren: () =>
      import('./presentation/carrito/carrito.module').then(
        (m) => m.CarritoModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./presentation/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
