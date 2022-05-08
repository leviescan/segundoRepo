import { DataServicesService } from './data-services.service';
import { Routes, RouterModule } from '@angular/router';
import { ServicioDatosService } from './servicio-datos.service';
import { PrimerServicioService } from './primer-servicio.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';

import { CaractersticasUsuarioComponent } from './caractersticas-usuario/caractersticas-usuario.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { HttpClientModule } from '@angular/common/http';

const AppRoutes:Routes=[
   { path:'',component:HomeComponent},
   { path:'proyectos', component:ProyectosComponent},
   { path:'quienesSomos', component:QuienesSomosComponent},
   { path:'contactos', component:ContactosComponent},
   { path:'actualizar/:id', component:ActualizarComponent},
   { path:'**', component:PaginaErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoComponent,
    CaractersticasUsuarioComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactosComponent,
    ActualizarComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    FormsModule,
    
    
    
    
  ],
  providers: [PrimerServicioService, ServicioDatosService, DataServicesService ], /*aqui se tiene que declarar el servicio*/
  bootstrap: [AppComponent]
})
export class AppModule { }
