import { Routes, RouterModule } from '@angular/router'

import { ReceitasListaComponent } from './receitas-lista/receitas-lista.component'

const routes : Routes = [

   // Rota raiz /
   {
      path: '',
      component: ReceitasListaComponent
   },

   // Rota /receitas
   {
      path: 'receitas',
      component: ReceitasListaComponent
   }

]

export const RoutingModule = RouterModule.forRoot(routes)