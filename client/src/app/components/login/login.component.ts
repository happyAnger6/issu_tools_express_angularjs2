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
  returnUrl: string;
  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.paramMap.get('returnUrl');
  }

  onSubmit(): void {
    if (this.userService.login(this.name)) {
        this.router.navigateByUrl(this.returnUrl ? this.returnUrl : '/');
    }
  }

}
