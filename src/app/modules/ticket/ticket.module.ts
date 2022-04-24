import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketComponent } from "./ticket.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@shared/shared.module";
import { TicketEffects, ticketReducer } from "@store/index";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
	declarations: [TicketComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
		StoreModule.forFeature('ticket', ticketReducer),
		EffectsModule.forFeature([TicketEffects]),
		RouterModule.forChild([
			{
				path: "",
				component: TicketComponent,
			},
			{
				path: ":id",
				component: TicketComponent
			}
		]),
	],
})
export class TicketModule {}
