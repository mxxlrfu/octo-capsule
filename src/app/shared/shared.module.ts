import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [CommonModule],
	exports: [
		MatListModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatIconModule,
		MatDividerModule,
		MatButtonModule,
		MatRippleModule,
		MatCheckboxModule,
		LoaderComponent,
	],
	declarations: [LoaderComponent],
})
export class SharedModule {}
