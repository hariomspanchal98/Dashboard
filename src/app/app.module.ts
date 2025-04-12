import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendorChartComponent } from './vendor-chart/vendor-chart.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    UpdateUserComponent,
    FooterComponent,
    DeleteUserComponent,
    NavbarComponent,
    VendorChartComponent,
    UserTableComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CanvasJSAngularChartsModule], providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
