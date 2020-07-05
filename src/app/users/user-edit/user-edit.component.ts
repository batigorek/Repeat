import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { MuserService } from 'src/app/shared/services/muser.service';
import { Muser } from 'src/app/shared/models/muser.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: number;
  user: Muser;
  userForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
     private muserService: MuserService, 
     private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      if (!isNullOrUndefined(params.id)) {
        this.id = +params.id;
      } else {
        this.id = null;
      }
    }
    );
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
    });
    console.log(this.userForm.value);
    this.getData();
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let user = this.muserService.getOneById(this.id);
        this.user = await user;
      } catch (err) {
        console.error(err);
      }
      this.userForm.patchValue({
        name: this.user.name,
        surname: this.user.surname
      });
    }
  }

  async onDelete() {
    try {
      await this.muserService.deleteOneById(this.id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/users']);
  }

  async onSave() {
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.muserService.putOne(this.id, this.userForm.value);
        console.log(this.userForm.value)
      } catch (err) {
        console.error(err);
      }
    }
    else {
      try {
        let res = await this.muserService.postOne(this.userForm.value);
        this.router.navigate([this.router.url, res.id]);
        console.log(this.userForm.value)
        this.getData();
      } catch (err) {
        console.error(err);
      }
    }
  }
}


