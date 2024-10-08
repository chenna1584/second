import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';




@Component({
  selector: 'app-dashboard',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div>
      <h2>Dashboard</h2>
      <mat-list>
        <mat-list-item *ngFor="let post of posts">{{ post.title }}</mat-list-item>
      </mat-list>
    </div>
    <app-footer></app-footer>
  `
})
export class DashboardComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}
