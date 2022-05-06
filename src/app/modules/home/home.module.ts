import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { SharedModule } from "@shared/index";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TicketEffects, ticketReducer } from "@store/index";
import { RouterModule } from "@angular/router";
import { AssigneeIdToNamePipe, FilterUnassignedTickets } from "./pipes";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [HomeComponent, AssigneeIdToNamePipe, FilterUnassignedTickets],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		ReactiveFormsModule,
		StoreModule.forFeature("ticket", ticketReducer),
		EffectsModule.forFeature([TicketEffects]),
	],
})
export class HomeModule {}
