import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutGuardGuard } from '../app/services/guard/aut-guard.guard'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loginAdmin',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginAdmin',
    loadChildren: () => import('./loginAdmin/loginAdmin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'registerForm',
    loadChildren: () => import('./registerForm/registerForm.module').then( m => m.RegisterFormPageModule)
  },
  {
    path: 'registerStepOne',
    loadChildren: () => import('./registerStepOne/registerStepOne.module').then( m => m.RegisterStepOnePageModule)
  },
  {
    path: 'registerStepTwo',
    loadChildren: () => import('./registerStepTwo/registerStepTwo.module').then( m => m.RegisterStepTwoPageModule)
  },
  {
    path: 'registerCompleted',
    loadChildren: () => import('./registerCompleted/registerCompleted.module').then( m => m.RegisterCompletedPageModule)
  },
  {
    path: 'mainQuestions',
    loadChildren: () => import('./mainQuestions/mainQuestions.module').then( m => m.MainQuestionsPageModule)
  },
  {
    path: 'root',
    loadChildren: () => import('./root/root.module').then( m => m.RootPageModule),
    canActivate: [AutGuardGuard],
  }, 
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal-page/principal-page.module').then( m => m.PrincipalPagePageModule)
  },
  {
    path: 'programformation',
    loadChildren: () => import('./programformation/programformation.module').then( m => m.ProgramformationPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'modal-profile',
    loadChildren: () => import('./modal-profile/modal-profile.module').then( m => m.ModalProfilePageModule)
  },
  {
    path: 'modal-user',
    loadChildren: () => import('./modal-user/modal-user.module').then( m => m.ModalUserPageModule)
  },
  { path: '***',
    loadChildren: () => import('./loginAdmin/loginAdmin.module').then( m => m.LoginAdminPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {  useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
