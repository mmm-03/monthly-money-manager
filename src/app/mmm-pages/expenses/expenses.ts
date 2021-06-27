import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'page-account',
  templateUrl: 'expenses.html',
  styleUrls: ['./expenses.scss'],
})
export class ExpensesPage {
  id = '';
  filter = 'all';

  // expenseId
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe(value => {
      setTimeout(() => {
        this.id = value?.id;
        if (['all', 'settled', 'notSettled'].includes(value.filter)) {
          this.filter = value.filter;
        } else {
          this.filter = 'all';
          this.closeMoreDetails();
        }
      });
    });
  }

  closeMoreDetails() {
    setTimeout(async () => {
      const queryParams: any = {};
      if (this.id) {
        queryParams.id = this.id;
      }
      if (this.filter) {
        queryParams.filter = this.filter;
      }
      await this.router.navigate(['/app/tabs/expenses'], {queryParams});
    }, 500);
  }
}
