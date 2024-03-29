import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { AcervoListComponent } from './components/pages/biblioteca/acervo/acervo-list/acervo-list.component';
import { AcervoComponent } from './components/pages/biblioteca/acervo/acervo-detail/acervo.component';
import { ListCursoComponent } from './components/pages/curso/list-curso/list-curso.component';
import { DetalhesCursoComponent } from './components/pages/curso/detalhes-curso/detalhes-curso.component';
import { ListDisciplinaComponent } from './components/pages/disciplina/list-disciplina/list-disciplina.component';
import { DisciplinaDetailComponent } from './components/pages/disciplina/disciplina-detail/disciplina-detail.component';
import { ClasseListComponent } from './components/pages/classe/classe-list/classe-list.component';
import { ClasseDetailComponent } from './components/pages/classe/classe-detail/classe-detail.component';
import { PessoaDetailComponent } from './components/pages/pessoa/pessoa-detail/pessoa-detail.component';
import { MakeNotaComponent } from './components/pages/classe/make-nota/make-nota.component';
import { MakeNotaFinalComponent } from './components/pages/classe/make-nota-final/make-nota-final.component';
import { AtivExtraListComponent } from './components/pages/ativExtra/ativ-extra-list/ativ-extra-list.component';
import { AtivExtraDetailComponent } from './components/pages/ativExtra/ativ-extra-detail/ativ-extra-detail.component';
import { EmprestimoListComponent } from './components/pages/biblioteca/emprestimo/emprestimo-list/emprestimo-list.component';
import { EmprestimoDetailComponent } from './components/pages/biblioteca/emprestimo/emprestimo-detail/emprestimo-detail.component';
import { MakeEmprestimoComponent } from './components/pages/biblioteca/emprestimo/make-emprestimo/make-emprestimo.component';
import { ListMultasComponent } from './components/pages/secretaria/list-multas/list-multas.component';
import { MultaDetailComponent } from './components/pages/secretaria/multa-detail/multa-detail.component';
import { MakeAcervoComponent } from './components/pages/biblioteca/acervo/make-acervo/make-acervo.component';
import { AlunoEscolhaComponent } from './components/pages/area/aluno-escolha/aluno-escolha.component';
import { AutorDetailComponent } from './components/pages/biblioteca/autor/autor-detail/autor-detail.component';
import { AutorListComponent } from './components/pages/biblioteca/autor/autor-list/autor-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      { path: 'home', component: HomeComponent },

      {
        path: 'biblioteca/acervo/list',
        component: AcervoListComponent,
      },
      {
        path: 'biblioteca/autor/list',
        component: AutorListComponent,
      },
      {
        path: 'biblioteca/autor/:id',
        component: AutorDetailComponent,
      },
      {
        path: 'biblioteca/acervo/new',
        component: MakeAcervoComponent,
      },
      {
        path: 'biblioteca/acervo/:id',
        component: AcervoComponent,
      },

      {
        path: 'curso/list',
        component: ListCursoComponent,
      },
      {
        path: 'curso/:id',
        component: DetalhesCursoComponent,
      },

      {
        path: 'disciplina/list',
        component: ListDisciplinaComponent,
      },
      {
        path: 'disciplina/:id',
        component: DisciplinaDetailComponent,
      },
      {
        path: 'classe/list',
        component: ClasseListComponent,
      },
      {
        path: 'classe/nota',
        component: MakeNotaComponent,
      },
      {
        path: 'classe/notaFinal',
        component: MakeNotaFinalComponent,
      },
      {
        path: 'classe/:id',
        component: ClasseDetailComponent,
      },
      {
        path: 'pessoa/:id',
        component: PessoaDetailComponent,
      },
      {
        path: 'ativExtra/list',
        component: AtivExtraListComponent,
      },
      {
        path: 'ativExtra/:id',
        component: AtivExtraDetailComponent,
      },
      {
        path: 'biblioteca/emprestimo/list',
        component: EmprestimoListComponent,
      },
      {
        path: 'biblioteca/emprestimo/fazer/:id',
        component: MakeEmprestimoComponent,
      },
      {
        path: 'biblioteca/emprestimo/:id',
        component: EmprestimoDetailComponent,
      },
      {
        path: 'secretaria/multa/list',
        component: ListMultasComponent,
      },
      {
        path: 'secretaria/multa/:id',
        component: MultaDetailComponent,
      },
      {
        path: 'area/alunoEscolha',
        component: AlunoEscolhaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
