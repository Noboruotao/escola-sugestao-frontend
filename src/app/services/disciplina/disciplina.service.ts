import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/disciplina`;

  constructor(private httpClient: HttpClient) {}

  getDisciplinas(
    search: string,
    page: number,
    pageSize: number,
    sortColumn: string,
    sortOrder: string
  ) {
    let params = new HttpParams()
      .set('search', search || '')
      .set('pageSize', pageSize.toString())
      .set('page', page.toString())
      .set('sortColumn', sortColumn.toString())
      .set('sortOrder', sortOrder.toString());

    return this.httpClient
      .get<any>(this.apiUrl + '/listDisciplina', { params: params })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getRelatedDisciplinas(
    search: string,
    page: number,
    pageSize: number,
    situacao: number,
    sortColumn: string,
    sortOrder: string
  ) {
    let params = new HttpParams()
      .set('search', search || '')
      .set('pageSize', pageSize.toString())
      .set('page', page.toString())
      .set('situacao', situacao.toString())
      .set('sortColumn', sortColumn.toString())
      .set('sortOrder', sortOrder.toString());

    return this.httpClient
      .get<any>(this.apiUrl + '/getUserDisciplina', { params: params })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getDisciplinaSituacoes() {
    return this.httpClient
      .get<any>(this.apiUrl + '/getSituacaoDisciplina')
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getDisciplina(id: number) {
    return this.httpClient
      .get<any>(this.apiUrl + '/getDisciplinaDetail/' + id)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getAlunoNotas(id: number) {
    return this.httpClient.get<any>(this.apiUrl + '/getNotas/' + id).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
