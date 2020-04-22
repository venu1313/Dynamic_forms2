import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    loading = false;
    users: User[] = [];
id=''
    constructor(private userService: UserService,
        private service:ServiceService,
    private route: ActivatedRoute) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;

        });
   this.id = this.service.getProduct(this.route.snapshot.params["name"])

    }
}