<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# CRUD Sederhana

This is a Laravel project. Follow the steps below to get started with the installation and setup of the Laravel application.

## Prerequisites

Before you start, ensure you have the following installed:

- PHP >= 8.3

  
## Steps to Install

1. **Clone the Repository**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Ahmadsani31/CRUD-Sederhana.git
   ```
   
   ```bash
   cd crud-sederhana
   ```

   ```bash
   composer update
   composer install
   ```
   
   ```bash
   cp .env.example .env
   ```

   ```bash
   php artisan key:generate
   ```


   change your_database_name, your_database_user, your_database_password with what you have.

   ```bash
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_user
   DB_PASSWORD=your_database_password
   ```

   ```bash
   php artisan migrate
   ```

   For inertia RactJS

   ```bash
   npm install
   ```

   ```bash
   npm run dev
   npm run build
   ```

