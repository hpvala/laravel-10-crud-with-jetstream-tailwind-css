# Laravel 10 Livewire CRUD With Jetstream And Tailwind CSS

<p align="center"><a href="https://github.com/hiteshsamcom/google-map-marker" target="_blank"><img src="https://avatars.githubusercontent.com/u/92365321?v=4" width="150" alt="Hitesh Logo"></a></p>


Laravel 10 livewire crud with jetstream and tailwind CSS. Here, we will learn about how to create a crud application using jetstream and tailwind CSS. Laravel Jetstream is a beautifully designed application starter kit for Laravel and provides the perfect starting point for your next Laravel application.

Follow this below steps to setup application:

1. Install composer

```php
composer install
```

2. Copy `.env` file, for window user use `copy` indsted of `cp`

```php
cp .env.example .env
```

3. Set your database configuration as per your DB details and user

```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

4. Generate key

```php
php artisan key:generate
```

5. migrate table into the database using the following command.

```php
php artisan migrate
```

6. Install `npm` package

```php
npm install
```

7. Run your application

```php
php artisan serve
```

Application run in <a href="http://127.0.0.1:8000" target="_blank">`http://127.0.0.1:8000`</a>
