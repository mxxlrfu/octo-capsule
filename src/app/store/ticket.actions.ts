import { createAction, props } from '@ngrx/store';
import { Ticket } from '@interfaces/ticket.interface';

export const selectTicket = createAction('[Ticket Detail] Select Ticket', props<{ ticketId: string }>());
export const selectTicketSuccess = createAction('[Ticket Detail] Select Ticket Success', props<{ ticket: Ticket }>());
export const selectTicketError = createAction('[Ticket Detail] Select Ticket Error', props<{ error: string }>());
export const createTicket = createAction('[Ticket Create] Create Ticket', props<{ ticket: Ticket }>());
export const createTicketSuccess = createAction('[Ticket Create] Create Ticket Success', props<{ ticket: Ticket }>());
export const createTicketError = createAction('[Ticket Create] Create Ticket Error', props<{ error: string }>());
export const updateTicket = createAction('[Ticket Update] Update Ticket', props<{ ticketId: number | string, ticket: Ticket }>());
export const updateTicketSuccess = createAction('[Ticket Update] Update Ticket Success', props<{ ticket: Ticket }>());
export const updateTicketError = createAction('[Ticket Update] Update Ticket Error', props<{ error: string }>());
export const selectTicketList = createAction('[Ticket List] Select Ticket List');
export const selectTicketListSuccess = createAction('[Ticket List] Select Ticket List Success', props<{ tickets: Ticket[] }>());
export const selectTicketListError = createAction('[Ticket List] Select Ticket List Error', props<{ error: string }>());
export const resetTicketError = createAction('[Ticket Error] Reset Ticket Error');
