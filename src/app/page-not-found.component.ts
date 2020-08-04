import { Component } from '@angular/core';

@Component({
	selector: 'page-404',
	template: `
    <div class='center'>
      <h1>Sorry, this page does not exist !</h1>
      <a routerLink="/dashboard" class="waves-effect waves-teal btn-flat">
        return to dashboard
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
