import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { RouterModule, Routes } from '@angular/router';

import { FormBuilder, FormsModule, Validators, ReactiveFormsModule  } from '@angular/forms'; 
import { NgChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxPaginationModule} from 'ngx-pagination';
import { InterceptorService } from './services/interceptor.service';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
      MenuComponent,
      SettingsComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule,
	 BrowserAnimationsModule,
	 MatTreeModule,
	 HttpClientModule,
	 FormsModule,
	 ReactiveFormsModule,
	 RouterModule,
	 AppRoutingModule,
	 NgChartsModule,
	 NgxSpinnerModule,
	 NgxPaginationModule,
    MatButtonModule, 
    MatSnackBarModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatTabsModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatStepperModule,
    MatDividerModule,
    MatDialogModule,
    MatSelectModule
    
	],
   providers: [
      {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
   ], 
   // {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}

   
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
