import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromTicketReducer from "./ticket.reducer";

export const selectTicketState = createFeatureSelector<fromTicketReducer.State>("ticket");

export const selectTicketIds = createSelector(selectTicketState, fromTicketReducer.selectTicketIds);

export const selectTicketEntities = createSelector(selectTicketState, fromTicketReducer.selectTicketEntities);

export const selectSelectedId = createSelector(selectTicketState, (state) => state.selectedId);

export const selectTicketEntitiesArray = createSelector(selectTicketEntities, (entities) => Object.values(entities));

export const selectTicketError = createSelector(selectTicketState, ({ error }) => error);

export const selectLoadingStatus = createSelector(selectTicketState, ({ loading }) => loading);

export const selectSelectedTicket = createSelector(
	selectSelectedId,
	selectTicketEntities,
	(id, entities) => entities[id]
);
