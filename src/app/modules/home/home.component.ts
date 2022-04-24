import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { BackendService } from "@services/backend.service";
import * as ticketSelectors from "@store/ticket.selectors";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	tickets$ = this.store.select(ticketSelectors.selectTicketEntitiesArray);
	users = this.service.storedUsers;
	viewAll = true;

	constructor(private readonly store: Store, private readonly service: BackendService) {}

	toggleView() {
		this.viewAll = !this.viewAll;
	}
}
