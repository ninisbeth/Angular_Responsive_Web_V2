import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AdditionalInformationComponent } from "./additional-information/additional-information.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";

@NgModule ({
    declarations: [
        AppComponent,
        AdditionalInformationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}