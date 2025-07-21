# Gunakan image PHP dengan Apache
FROM php:8.2-apache

# Salin semua file ke container
COPY . /var/www/html/

# Aktifkan mod_rewrite (opsional)
RUN a2enmod rewrite
