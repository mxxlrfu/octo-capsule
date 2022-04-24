import { AssigneeIdToNamePipe } from "./assignee-id-to-name.pipe";

describe("AssigneeIdToNamePipe", () => {
	it("create an instance", () => {
		const pipe = new AssigneeIdToNamePipe();
		expect(pipe).toBeTruthy();
	});
});
