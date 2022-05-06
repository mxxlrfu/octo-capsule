import { Injectable } from '@angular/core';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as ticketActions from '@store/ticket.actions';
import { BackendService } from '@services/backend.service';
import { Ticket } from '@interfaces/index';
import { of } from 'rxjs';

@Injectable()
export class TicketEffects {
	loadTickets$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ticketActions.selectTicketList),
			switchMap(() =>
				this.service.tickets().pipe(map((tickets: Ticket[]) => ticketActions.selectTicketListSuccess({ tickets })))
			),
			catchError((error) => of(ticketActions.selectTicketError({ error })))
		)
	);

	createTicket$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ticketActions.createTicket),
			switchMap(({ ticket }) =>
				this.service.newTicket(ticket).pipe(map((ticket: Ticket) => ticketActions.createTicketSuccess({ ticket })))
			),
			catchError((error) => of(ticketActions.createTicketError({ error })))
		)
	);

	updateTicket$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ticketActions.updateTicket),
			switchMap(({ ticketId, ticket }) =>
				this.service
					.update(ticketId, ticket)
					.pipe(map((ticket: Ticket) => ticketActions.updateTicketSuccess({ ticket })))
			),
			catchError((error) => of(ticketActions.updateTicketError({ error })))
		)
	);

	constructor(private readonly actions$: Actions, private service: BackendService) {}
}
