import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { UserAddComponent } from './Components/user-add/user-add.component';
import { UserEditComponent } from './Components/user-edit/user-edit.component';
import { TestAddComponent } from './Components/test-add/test-add.component';
import { AdminEditComponent } from './Components/admin-edit/admin-edit.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminComponent } from './Components/admin/admin.component';

import { TestDateComponent } from './Components/test-date/test-date.component';
import { TestResultComponent } from './Components/test-result/test-result.component';
import { TestListComponent } from './Components/test-list/test-list.component';
import { TechnicComponent } from './Components/technic/technic.component';
import { AuthGuardService } from './service/auth-guard.service';
import { TestUserDetailsComponent } from './Components/test-user-details/test-user-details.component';
import { AdminTestsComponent } from './Components/admin-tests/admin-tests.component';
import { AdminUsersComponent } from './Components/admin-users/admin-users.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { TestsStatisticsComponent } from './Components/tests-statistics/tests-statistics.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'User List' }
  },
  {
    path: 'user/show/:userId',
    component: UserDetailComponent,
    data: { title: 'User Details' } ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'signup',
    component: UserAddComponent,
    data: { title: 'Add User' }
  },
  {
    path: 'user/ordertest/:userId',
    component: TestAddComponent,
    data: { title: 'Create Test'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/updatepass/:userId',
    component: AdminEditComponent,
    data: { title: 'Edit Password'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/update/:userId',
    component: UserEditComponent,
    data: { title: 'Edit User By Admin'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/show',
    component: AdminComponent,
    data: { title: 'Show User By Admin'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/show/:userId',
    component: UserComponent,
    data: { title: 'Show User By Admin'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/delete/:userId',
    component: AdminUsersComponent,
    data: { title: 'Show User By Admin'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/update/:userId',
    component: UserEditComponent,
    data: { title: 'Edit User' } ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/tests',
    component: TechnicComponent,
    data: { title: 'Tests' } ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/tests/infected',
    component: TechnicComponent,
    data: { title: 'Tests' } ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/tests/all',
    component: TechnicComponent,
    data: { title: 'Tests' } ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/tests/dates',
    component: TechnicComponent,
    data: { title: 'Tests' } ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/tests/first',
    component: TechnicComponent,
    data: { title: 'Tests' } ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/tests/second',
    component: TechnicComponent,
    data: { title: 'Tests' } ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user/update/:userId',
    component: UserEditComponent,
    data: { title: 'Create Test'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'user/ordertest/:userId',
    component: TestAddComponent,
    data: { title: 'Create Test'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/scheduleTest/:userId',
    component: TestDateComponent,
    data: { title: 'Update Test Results' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/results/:userId',
    component: TestResultComponent,
    data: { title: 'Update Test Results' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/results/firstTest/:userId',
    component: TestResultComponent,
    data: { title: 'Update Test Results' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic/results/secondTest/:userId',
    component: TestResultComponent,
    data: { title: 'Update Test Results' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/tests',
    component: AdminTestsComponent,
    data: { title: 'List of Tests' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/statistics',
    component: TestsStatisticsComponent,
    data: { title: 'List of Tests' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/tests/day',
    component: TestsStatisticsComponent,
    data: { title: 'List of Tests' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/tests/infected',
    component: TestsStatisticsComponent,
    data: { title: 'List of Tests' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/tests/nonInfected',
    component: TestsStatisticsComponent,
    data: { title: 'List of Tests' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/tests/total',
    component: TestsStatisticsComponent,
    data: { title: 'List of Tests' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'technic',
    component: UserComponent,
    data: { title: 'Tecnico' }
  },
  {
    path: 'admin',
    component: UserComponent,
    data: { title: 'Administrador' }
  },
  {
    path: 'user/test/:userId',
    component: TestUserDetailsComponent,
    data: { title: 'Test Info' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/users',
    component: AdminUsersComponent,
    data: { title: 'Users' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/users/all',
    component: AdminUsersComponent,
    data: { title: 'Users List' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/users/admin',
    component: AdminUsersComponent,
    data: { title: 'Admin List' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/users/technic',
    component: AdminUsersComponent,
    data: { title: 'Technics List' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/users/utente',
    component: AdminUsersComponent,
    data: { title: 'Utentes List' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/signuptechnics',
    component: AdminComponent,
    data: { title: 'Sign Up Technics' }, 
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }, // default redirect to home
  {
    path: '**', redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
