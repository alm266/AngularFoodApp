import { Component, OnInit } from '@angular/core';

// Need Template or TemplateUrl in @Component
@Component({
  selector: 'app-servers',
  template: ` <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
