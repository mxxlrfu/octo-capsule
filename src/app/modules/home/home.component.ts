import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BackendService } from '@services/backend.service';
import * as ticketSelectors from '@store/ticket.selectors';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
	form!: FormGroup;
	tickets$ = this.store.select(ticketSelectors.selectTicketEntitiesArray);
	users = this.service.storedUsers;

	filteredTickets: string = '';
	viewAll = true;

	constructor(private readonly store: Store, private readonly service: BackendService, private fb: FormBuilder, private readonly cd: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			userInput: [''],
		});

		this.form.get('userInput').valueChanges.pipe(
			startWith(''),
			debounceTime(300),
			tap((value) => {
				this.filteredTickets = value;
				this.cd.markForCheck();
			})
		).subscribe();
	}

	toggleView() {
		this.viewAll = !this.viewAll;
	}
}
