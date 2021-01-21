import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: 'create-article',
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
