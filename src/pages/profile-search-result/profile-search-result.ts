import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
// import { GitHubServiceProvider } from "../../providers/git-hub-service/git-hub-service";
import { User } from "../../pages/models/user.interface";
import { Repository } from '../models/repository.interface';
/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  username : string;
  user : User;
  repositories: Repository[];

  // constructor(private github: GitHubServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
  // }

  getUserInformation():void {

    // this.github.getUserInformation(this.username).subscribe((data: User) =>this.user = data);
    // this.github.getRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);

    // this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    
    // this.github.mockGetRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);

    // this.github.mockGetUserInformation(this.username).subscribe(data => console.log(data));
  }

  ionViewWillLoad() {
    // this.username = this.navParams.get('username');
    if(this.username) {
      this.getUserInformation();
    }
  }

}
