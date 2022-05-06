import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Ticket } from "@interfaces/ticket.interface";
import { Store } from "@ngrx/store";
import { BackendService } from "@services/backend.service";

import * as ticketActions from "@store/ticket.actions";
import * as ticketSelectors from "@store/ticket.selectors";
import { filter, take, tap } from "rxjs/operators";

@Component({
	selector: "app-ticket",
	templateUrl: "./ticket.component.html",
	styleUrls: ["./ticket.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketComponent implements OnInit {
	ticket: Ticket;
	ticketForm: FormGroup;

	ticketUpdate = this.route.snapshot.paramMap.get("id");
	users = this.userService.storedUsers;

	isLoading = this.store.select(ticketSelectors.selectLoadingStatus);

	constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router,
		private readonly fb: FormBuilder,
		private readonly userService: BackendService,
		private readonly store: Store
	) {}

	ngOnInit(): void {
		this.ticketForm = this.fb.group({
			id: [null],
			description: [null, Validators.required],
			assigneeId: [null],
			completed: [false],
		});

		if (this.ticketUpdate) {
			this.store.dispatch(ticketActions.selectTicket({ ticketId: this.ticketUpdate }));
			this.hydrateTicketForm();
		}

	}

	submitTicketForm(): void {
		const ticketId = this.ticketUpdate;
		const ticket = this.ticketForm.getRawValue() as Ticket;
		const actionType = this.ticketUpdate
			? ticketActions.updateTicket({ ticketId, ticket })
			: ticketActions.createTicket({ ticket });

		this.store.dispatch(actionType);

		this.isLoading.pipe(
			filter(loadingStatus => !loadingStatus),
			tap(() => this.router.navigate(['/'])),
			take(1)
		).subscribe();
	}

	private hydrateTicketForm(): void {
		this.store
			.select(ticketSelectors.selectSelectedTicket)
			.pipe(
				filter((ticket) => !!ticket),
				tap(({ id, description, assigneeId, completed }) => {
					this.ticketForm.setValue({ id, description, assigneeId, completed });
				}),
				take(1)
			)
			.subscribe();
	}
}
