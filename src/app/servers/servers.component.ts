import { Component, OnInit } from '@angular/core';

// Need Template or TemplateUrl in @Component
@Component({
  selector: 'app-servers',
  //template: ` <app-server></app-server>
  //  <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  username = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  secretTextVisible = true;
  clickTimestamps = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
    this.username = '';
  }

  onRevealSecretText() {
    this.secretTextVisible = !this.secretTextVisible;
    this.clickTimestamps.push(this.clickTimestamps.length + 1);
  }
}
