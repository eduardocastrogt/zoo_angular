import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Response } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    UserService
  ]
  
})
export class RegisterComponent implements OnInit {

  public user: User;
  public status: string;

  constructor(
    private userService: UserService
  ) {
    this.user = new User('','','','','','');
  }

  ngOnInit() {

  }

  onSubmit(registerForm){
    this.userService.register(this.user)
      .subscribe(
        response => {
          if(response.user && response.user._id){
            this.status = 'success';
            this.user = new User('','','','','','');
            registerForm.reset();
          }else{
            this.status = 'error'
          }
        },
        error => {
          alert(error);
        }
      )
  }

}
