import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vet-plus';

  isChatOpen = false;

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }
}
