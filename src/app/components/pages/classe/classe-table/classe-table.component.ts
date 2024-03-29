import { Component, ViewChild } from '@angular/core';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';

import { ClasseService } from 'src/app/services/classe/classe.service';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-classe-table',
  templateUrl: './classe-table.component.html',
  styleUrls: ['./classe-table.component.css'],
})
export class ClasseTableComponent {
  classes: MatTableDataSource<any>;

  displayedColumns: string[] = ['nome', 'ano'];
  displayedColumnsAluno: string[] = ['nome', 'p1', 'p2', 'sub', 'ano'];

  pageSize = 10;
  totalItems = 0;
  currentPage = 0;
  sortColumn: string = 'ano';
  sortOrder: string = 'desc';

  checked: boolean = true;

  ativo = 1;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private classeService: ClasseService,
    public authService: AuthService
  ) {
    this.getClasses();
  }

  getClasses() {
    this.classeService
      .getClasses(
        this.ativo,
        this.currentPage,
        this.pageSize,
        this.sortColumn,
        this.sortOrder
      )
      .subscribe((data: any) => {
        this.classes = new MatTableDataSource(data.data);
        this.totalItems = data.count;
      });
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getClasses();
  }

  enableAtivo() {
    this.ativo = this.ativo == 1 ? 0 : 1;
    this.getClasses();
  }

  sortData(sort: Sort) {
    this.sortColumn = sort.active;
    this.sortOrder = sort.direction == 'desc' ? 'desc' : 'asc';
    this.getClasses();
  }

  onSlideChange() {
    this.ativo = this.checked ? 1 : 0;
    this.getClasses();
  }

  getdisplayedColumns() {
    if (this.authService.checkRoles(['Aluno'])) {
      return this.displayedColumnsAluno;
    }
    return this.displayedColumns;
  }
}
