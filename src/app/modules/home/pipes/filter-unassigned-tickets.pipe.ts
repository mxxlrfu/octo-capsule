import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from '@interfaces/index';

@Pipe({
	name: 'filterUnassignedTickets',
	pure: false,
})
export class FilterUnassignedTickets implements PipeTransform {
	transform(tickets: Ticket[], formValue: string, viewAll?: boolean): Ticket[] {
		return viewAll
			? tickets.filter(({ description }) => description.includes(formValue))
			: tickets.filter(({ assigneeId, description }) => !assigneeId && description.includes(formValue));
	}
}
