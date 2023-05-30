# Client


      کوئری ارائه شده را می‌توانید با استفاده از LINQ و EF Core به صورت زیر پیاده‌سازی کنید:

```
var query = from ga in _context.RFD_tblGateAccess
            join maxApplyDate in (
                from ga1 in _context.RFD_tblGateAccess
                group ga1 by new { ga1.PersonelID, ga1.ControllerID } into g
                select new { g.Key.PersonelID, g.Key.ControllerID, Expr1 = g.Max(x => x.ApplyDate) }
            ) on new { ga.PersonelID, ga.ControllerID, ga.ApplyDate } equals new { maxApplyDate.PersonelID, maxApplyDate.ControllerID, ApplyDate = maxApplyDate.Expr1 }
            select ga;
```

در این کد، `RFD_tblGateAccess` نام جدول مورد نظر است که در `DbContext` با نام `_context` تعریف شده است. همچنین، برای انجام عملیات `JOIN`، از دو زیر‌کوئری استفاده شده است؛ یکی برای گروه‌بندی بر اساساس `PersonelID` و `ControllerID` و استخراج مقدار بیشترین `ApplyDate`، و دیگری برای انجام `JOIN` با جدول اصلی.

برای اجرای این کوئری، می‌توانید به صورت زیر عمل کنید:

```
var query = _context.RFD_tblGateAccess
    .Join(
        _context.RFD_tblGateAccess
            .GroupBy(x => new { x.PersonelID, x.ControllerID })
            .Select(g => new 
            { 
                g.Key.PersonelID, 
                g.Key.ControllerID, 
                Expr1 = g.Max(x => x.ApplyDate) 
            }),
        ga => new { ga.PersonelID, ga.ControllerID, ga.ApplyDate },
        maxApplyDate => new { maxApplyDate.PersonelID, maxApplyDate.ControllerID, ApplyDate = maxApplyDate.Expr1 },
        (ga, maxApplyDate) => ga
    )
    .ToList();
```

در این کد، تابع `Join` برای انجام عملیات `JOIN` بین جدول اصلی و زیرکوئری استفاده شده است. دراولین پارامتر این تابع، جدول اصلی است که بر روی آن `JOIN` انجام می‌شود. دومین پارامتر، زیرکوئری مربوط به محاسبه مقدار بیشترین `ApplyDate` برای هر گروه `PersonelID` و `ControllerID` است. در سومین پارامتر، شرایط مورد نیاز برای `JOIN` در دو جدول تعیین می‌شود. در نهایت، در بخش چهارم، نتیجه `JOIN` با جدول اصلی به صورت `RFD_tblGateAccess` بازگردانده می‌شود.

در این مثال، نتیجه کوئری به صورت یک لیست از `RFD_tblGateAccess` بازگردانده می‌شود. در صورت نیاز، می‌توانید از دیگر روش‌های بازگرداندن نتایجاد شیء جدید با است

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
