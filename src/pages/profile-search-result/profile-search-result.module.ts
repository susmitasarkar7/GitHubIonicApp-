import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultPage } from './profile-search-result';
import { ComponentModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProfileSearchResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultPage),
    ComponentModule
  ],
})
export class ProfileSearchResultPageModule {}
