import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as ticketActions from "@store/ticket.actions";
import * as ticketSelectors from "@store/ticket.selectors";
import { BackendService } from "./services";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	storeError = this.store.select(ticketSelectors.selectTicketError);

	loading = this.store.select(ticketSelectors.selectLoadingStatus);

	constructor(private readonly store: Store) {}

	ngOnInit(): void {
		this.store.dispatch(ticketActions.selectTicketList());
	}

	resetTicketError() {
		this.store.dispatch(ticketActions.resetTicketError());
	}
}
