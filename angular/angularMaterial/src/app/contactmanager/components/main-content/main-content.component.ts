import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user!: User | undefined;

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.user = this.service.userById(id);
    })
  }

}
