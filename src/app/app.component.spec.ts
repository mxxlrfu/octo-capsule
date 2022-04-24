import { TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { BackendService } from "@services/index";
import { provideMockStore } from "@ngrx/store/testing";
import { initialState } from "@store/ticket.reducer";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "./shared";

describe("AppComponent", () => {
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [RouterTestingModule, SharedModule],
			providers: [{ provide: BackendService, useValue: new BackendService() }, provideMockStore({ initialState })],
		}).compileComponents();
	}));

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it("should render title in a h1 tag", () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector("h1").textContent).toContain("TICKETS");
	});
});
