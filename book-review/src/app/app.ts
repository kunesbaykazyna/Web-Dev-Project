import { Component, signal, inject } from '@angular/core'; // 1. Добавили inject
import { AIService } from './services/ai.service';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 2. Добавили FormsModule для работы чата
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, FormsModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private aiService = inject(AIService); // Теперь inject будет работать
  private router = inject(Router);

  protected readonly title = signal('book-review');
  isAuthPage = false;

  isChatOpen = false;
  userInput = '';
  messages: { text: string, isUser: boolean }[] = [];
  isLoading = false;

  constructor() {
    this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.isAuthPage =
              this.router.url === '/login' || this.router.url === '/register';
        });
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendToAI() {
    if (!this.userInput.trim() || this.isLoading) return;

    const userMsg = this.userInput;
    this.messages.push({ text: userMsg, isUser: true });
    this.userInput = '';
    this.isLoading = true;

    // 4. Указали тип (res: { reply: string }), чтобы не было ошибки "implicitly has any type"
    this.aiService.sendMessage(userMsg).subscribe({
      next: (res: { reply: string }) => {
        this.messages.push({ text: res.reply, isUser: false });
        this.isLoading = false;
      },
      error: (err) => {
  console.error('Complete error:', err); // This will show the reason in the F12 console
  this.messages.push({ text: 'Error: ' + err.message, isUser: false });
  this.isLoading = false;
}
    });
  }
}
