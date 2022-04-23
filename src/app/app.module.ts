import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { DatePipe } from './date.pipe';
import { HightlightDirective } from './hightlight.directive';
import { FormSearchComponent } from './form-search/form-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    DatePipe,
    HightlightDirective,
    FormSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
