import { Pipe, PipeTransform } from "@angular/core";
import { User } from "@interfaces/index";

@Pipe({
	name: "assigneeIdToName",
})
export class AssigneeIdToNamePipe implements PipeTransform {
	transform(user: number, users: User[]): string {
		const identified = users.find(({ id }) => user === id);
		return identified ? identified.name : "Unassigned";
	}
}
