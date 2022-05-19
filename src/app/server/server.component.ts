import { Component } from '@angular/core';

// Decorator to enhance class starting with '@'
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  // Temporary hardcoding
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
