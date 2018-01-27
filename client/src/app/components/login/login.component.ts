import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  passwd: string;
  returnUrl: string;
  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.paramMap.get('returnUrl');
  }

  onSubmit(): void {
    this.userService.login(this.name, this.passwd).subscribe(data => {
        if (data.length == 1) {
          this.userService.setUser(data[0]);
          console.log(this.userService.getCurUser());
          this.router.navigateByUrl( '/');
        }
    })
  }

}
