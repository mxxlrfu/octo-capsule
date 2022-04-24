import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { ticketReducer, TicketEffects } from "@store/index";
import { SharedModule } from "@shared/index";
import { HomeModule } from "@home/home.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HomeModule,
		SharedModule,
		StoreModule.forRoot({ ticket: ticketReducer }),
		EffectsModule.forRoot([TicketEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 30,
			autoPause: true,
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
