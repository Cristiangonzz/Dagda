import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { GetMembresiaUsuarioComponent } from './get-membresia-usuario/get-membresia-usuario.component';
import { CreateMembresiaUsuarioComponent } from './crear-membresia-usuario/create-membresia-usuario.component';
import { RoutingMembresiaUsuarioModule } from './routing-membresia-usuario.module';
import { CreateReferenciarUsuarioComponent } from './referenciar-usuario/create-referenciar-usuario.component';

@NgModule({
  declarations: [
    CreateMembresiaUsuarioComponent,
    GetMembresiaUsuarioComponent,
    CreateReferenciarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingMembresiaUsuarioModule,
    InfrastructureModule,
    SharedModule,
  ],
  exports: [
    CreateMembresiaUsuarioComponent,
    GetMembresiaUsuarioComponent,
    CreateReferenciarUsuarioComponent,
  ],
})
export class MembresiaUsuarioModule {}
