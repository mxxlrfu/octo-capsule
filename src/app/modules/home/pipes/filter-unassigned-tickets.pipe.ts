import { Pipe, PipeTransform } from "@angular/core";
import { Ticket } from "@interfaces/index";

@Pipe({
	name: "filterUnassignedTickets",
	pure: false
})
export class FilterUnassignedTickets implements PipeTransform {
	transform(tickets: Ticket[], viewAll: boolean): Ticket[] {
		return viewAll ? tickets : tickets.filter(({ assigneeId }) => !assigneeId);
	}
}
