@echo off
REM Generate self-signed SSL certificates for development
REM Requires OpenSSL installed or Docker

if not exist "nginx\ssl" mkdir nginx\ssl

echo Generating self-signed certificate...
openssl req -x509 -nodes -days 365 -newkey rsa:2048 ^
    -keyout nginx\ssl\privkey.pem ^
    -out nginx\ssl\fullchain.pem ^
    -subj "/C=VN/ST=CanTho/L=CanTho/O=CTU/CN=localhost"

echo Done! Certificate generated at nginx\ssl\
