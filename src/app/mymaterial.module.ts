import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar';  

@NgModule({
    exports:[
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,

        FlexLayoutModule

    ],
})

export class MyMaterialModule{}