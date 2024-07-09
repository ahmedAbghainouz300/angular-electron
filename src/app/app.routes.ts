import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { PurshasesComponent } from './purshases/purshases.component';
import { SalesComponent } from './sales/sales.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { FacturesComponent } from './factures/factures.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'purchases', component: PurshasesComponent },
    { path: 'sales', component: SalesComponent },
    { path: 'factures', component: FacturesComponent },
    { path: 'fournisseurs', component: FournisseursComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    

];
