import { FilterUnassignedTickets } from "./filter-unassigned-tickets.pipe";

describe("FilterUnassignedTickets", () => {
	it("create an instance", () => {
		const pipe = new FilterUnassignedTickets();
		expect(pipe).toBeTruthy();
	});
});
