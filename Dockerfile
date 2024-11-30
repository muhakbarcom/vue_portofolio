# Gunakan image Node.js resmi untuk membangun proyek
FROM node:18 AS build

# Set work directory
WORKDIR /app

# Copy file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh proyek ke dalam container
COPY . .

# Build aplikasi Vue untuk produksi
RUN npm run build

# Gunakan Nginx untuk menjalankan aplikasi
FROM nginx:alpine

# Copy file build ke direktori default Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy konfigurasi default Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
