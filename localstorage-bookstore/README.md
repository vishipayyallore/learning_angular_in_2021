# BooksStore

### Create a new project
```
ng new books-store
```

### Install the below mentioned NPM packages
```
npm i bootstrap
npm i font-awesome
```

### Import the inside the sytles.css

```
@import "~bootstrap/dist/css/bootstrap.css";
@import "~font-awesome/css/font-awesome.css";
```

### Create the Header and Footer components
```
ng g c components/shared/top-nav
ng g c components/shared/footer
```

### Create the Dashboard components
```
ng g c components/home/dashboard
```

### Create the Books components
```
ng g c components/books/books-list
ng g c components/books/add-book
ng g c components/books/edit-book
ng g c components/books/delete-book
```

### Create the Page-NotFound components
```
ng g c components/shared/page-notfound
```

### Create a Service to interact with Local Storage
```
ng g s components/services/localstorage
ng g s components/services/books
```

### Create a interface for Book
```
ng g interface components/interfaces/ibook
```

