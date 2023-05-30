# Client

var query = from ga in _context.RFD_tblGateAccess
            join maxApplyDate in (
                from ga1 in _context.RFD_tblGateAccess
                group ga1 by new { ga1.PersonelID, ga1.ControllerID } into g
                select new { g.Key.PersonelID, g.Key.ControllerID, Expr1 = g.Max(x => x.ApplyDate) }
            ) on new { ga.PersonelID, ga.ControllerID, ga.ApplyDate } equals new { maxApplyDate.PersonelID, maxApplyDate.ControllerID, ApplyDate = maxApplyDate.Expr1 }
            select ga;

var result = dbContext.RFD_tblGateAccess
                .Join(
                    dbContext.RFD_tblGateAccess
                        .GroupBy(ga => new { ga.PersonelID, ga.ControllerID })
                        .Select(g => new
                        {
                            g.Key.PersonelID,
                            g.Key.ControllerID,
                            Expr1 = g.Max(x => x.ApplyDate)
                        }),
                    ga => new { ga.PersonelID, ga.ControllerID, ga.ApplyDate },
                    maxDate => new { maxDate.PersonelID, maxDate.ControllerID, ApplyDate = maxDate.Expr1 },
                    (ga, maxDate) => ga
                );

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
