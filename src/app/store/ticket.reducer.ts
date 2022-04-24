import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";

import { Ticket } from "@interfaces/index";
import * as TicketActions from "./ticket.actions";

export interface State extends EntityState<Ticket> {
	selectedId: string | null;
	error: string | null;
}

export const adapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>();

export const initialState: State = adapter.getInitialState({
	selectedId: null,
	error: null,
});

export const ticketReducer = createReducer(
	initialState,
	on(TicketActions.selectTicketListSuccess, (state, { tickets }) => {
		return adapter.addMany(tickets, state);
	}),
	on(TicketActions.updateTicketSuccess, (state, { ticket }) => {
		return adapter.upsertOne(ticket, state);
	}),
	on(TicketActions.createTicketSuccess, (state, { ticket }) => {
		return adapter.addOne(ticket, state);
	}),
	on(TicketActions.selectTicket, (state, { ticketId }) => {
		return { ...state, selectedId: ticketId };
	}),
	on(TicketActions.resetTicketError, (state) => {
		return { ...state, error: null };
	}),
	on(
		TicketActions.createTicketError,
		TicketActions.selectTicketError,
		TicketActions.selectTicketListError,
		TicketActions.updateTicketError,
		(state, { error }) => {
			return { ...state, error };
		}
	)
);

const { selectIds, selectEntities } = adapter.getSelectors();

export const selectTicketIds = selectIds;
export const selectTicketEntities = selectEntities;
