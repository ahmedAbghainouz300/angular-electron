import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  prixAchat: number;
  categorie: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: Category[] = [
    { id: 1, name: 'Category A' },
    { id: 2, name: 'Category B' },
    // Add more categories as needed
  ];

  products: Product[] = [
    { id: 1, name: 'Product 1', prixAchat: 100, categorie: 'Category A' },
    { id: 2, name: 'Product 2', prixAchat: 150, categorie: 'Category B' },
    // Add more products as needed
  ];

  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    // Initialize component
  }
  addCategory(): void {
    // Logic to add a new category with auto-increment ID
    const newCategoryId = this.categories.length > 0 ? this.categories[this.categories.length - 1].id + 1 : 1;
    const newCategory: Category = { id: newCategoryId, name: 'New Category' };
    this.categories.push(newCategory);
    this.cdr.detectChanges();
  }

  editCategory(category: Category): void {
    // Open a dialog to edit category name
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      width: '250px',
      data: { name: category.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        category.name = result;
        this.cdr.detectChanges();
      }
    });
  }

  deleteCategory(category: Category): void {
    // Logic to delete a category
    const index = this.categories.indexOf(category);
    if (index !== -1) {
      this.categories.splice(index, 1);
      this.cdr.detectChanges();
    }
  }
}

@Component({
  standalone: true,
  selector: 'edit-category-dialog',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  template: `
    <h2 mat-dialog-title>Edit Category</h2>
    <mat-dialog-content>
      <mat-form-field>
        <input matInput [(ngModel)]="data.name" placeholder="Category Name">
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancelClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.name" cdkFocusInitial>Save</button>
    </mat-dialog-actions>
  `
})
export class EditCategoryDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
