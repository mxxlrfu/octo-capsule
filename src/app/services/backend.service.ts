import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Ticket, User } from '@interfaces/index';
/**
 * This service acts as a mock backend.
 *
 * You are free to modify it as you see.
 */

function randomDelay() {
	return 10000;
}

@Injectable({ providedIn: 'root' })
export class BackendService {
	storedTickets: Ticket[] = [
		{
			id: 0,
			description: 'Install a monitor arm',
			assigneeId: 111,
			completed: true,
		},
		{
			id: 1,
			description: 'Move the desk to the new location',
			assigneeId: 222,
			completed: false,
		},
		{
			id: 2,
			description: 'New task',
			assigneeId: null,
			completed: false,
		},
	];

	storedUsers: User[] = [
		{ id: 111, name: 'Victor' },
		{ id: 222, name: 'Jack' },
	];

	lastId = 2;

	private findTicketById = (id: number | string) => this.storedTickets.find((ticket) => ticket.id === +id);

	private findUserById = (id: number) => this.storedUsers.find((user) => user.id === +id);

	tickets() {
		return of(this.storedTickets).pipe(delay(randomDelay()));
	}

	ticket(id: number): Observable<Ticket> {
		return of(this.findTicketById(id)).pipe(delay(randomDelay()));
	}

	users() {
		return of(this.storedUsers).pipe(delay(randomDelay()));
	}

	user(id: number) {
		return of(this.findUserById(id)).pipe(delay(randomDelay()));
	}

	newTicket({ description, assigneeId, completed }) {
		const newTicket: Ticket = {
			id: ++this.lastId,
			description,
			assigneeId,
			completed,
		};

		this.storedTickets = this.storedTickets.concat(newTicket);

		return of(newTicket).pipe(delay(randomDelay()));
	}

	assign(ticketId: number, userId: number) {
		return this.update(ticketId, { assigneeId: userId });
	}

	complete(ticketId: number, completed: boolean) {
		return this.update(ticketId, { completed });
	}

	update(ticketId: number | string, updates: Partial<Omit<Ticket, 'id'>>) {
		const foundTicket = this.findTicketById(ticketId);

		if (!foundTicket) {
			return throwError(new Error('ticket not found'));
		}

		const updatedTicket = { ...foundTicket, ...updates };

		this.storedTickets = this.storedTickets.map((t) => (t.id === ticketId ? updatedTicket : t));

		return of(updatedTicket).pipe(delay(randomDelay()));
	}
}
