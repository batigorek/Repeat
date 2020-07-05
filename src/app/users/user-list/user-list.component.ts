import { Component, OnInit } from '@angular/core';
import { Muser } from 'src/app/shared/models/muser.model';
import { MuserService } from 'src/app/shared/services/muser.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Muser[];

  constructor(private muserService: MuserService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let users = this.muserService.getAll();
      this.users = isNullOrUndefined(await users) ? [] : await users;
    } catch(err) {
      console.error(err);
    }
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile']);
  }

  onChangeProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id]);
  }
}
