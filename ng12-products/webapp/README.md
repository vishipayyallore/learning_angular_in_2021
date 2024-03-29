# Ng12Products


> 1. install -g firebase-tools
> 1. firebase login
> 1. ng add @angular/fire
> 1. firebase init `specify dist/ng12products as public folder`
> 1. ng build --configuration=production
> 1. firebase deploy --only hosting:the-shop-5975a (Firebase Project Name)

```
ng new ng12-products --prefix sv

npm i bootstrap font-awesome guid-typescript
```

```
ng g module components/shared --module=app --dry-run

ng g c components/shared/top-navbar --dry-run
ng g c components/shared/footer --dry-run
ng g c components/shared/notifications-button --dry-run
```


```
ng g module components/home --module=app --dry-run
ng g module components/home/home-routing --flat --module=home --dry-run

ng g c components/home/aboutus
ng g c components/home/contactus
ng g c components/home/dashboard
ng g c components/home/page-notfound
```

```
ng g module components/products --module=app --dry-run
ng g module components/products/products-routing --flat --module=products --dry-run

ng g c components/products/list-products
ng g c components/products/add-product --dry-run
ng g c components/products/edit-product --dry-run
ng g c components/products/delete-product --dry-run
```

```
ng g module core/components/core-components --module=app --flat --dry-run   

ng g c core/components/alerts/error-alert --dry-run

ng g c core/components/loader --dry-run
```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
