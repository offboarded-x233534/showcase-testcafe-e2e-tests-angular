import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="welcome">
      <h3>Dashboard</h3>
      <p>amount of notifications</p>
      <div id="amount-of-notifications">{{amountOfNotifications}}</div>
    </div>
  `,
  styles: [  ]
})
export class DashboardPageComponent implements OnInit {
  amountOfNotifications: number;

  ngOnInit() {
    const self = this;
    setTimeout(() => {
      self.amountOfNotifications = 200;
      }, 400);
  }
}
