
# 🚀 Node.js + Fastify + MySQL MVC Projesi

Bu proje, **Fastify** çerçevesini kullanarak **Node.js** üzerinde geliştirilmiş, veritabanı işlemleri için **MySQL** ve yazılım tasarımı için **MVC** (Model-View-Controller) mimarisini temel alan bir web uygulamasıdır.

## 📂 Proje Yapısı

```plaintext
├── controllers/
│   ├── userController.js
├── models/
│   ├── userModel.js
├── routes/
│   ├── userRoutes.js
├── views/
│   ├── index.ejs
├── config/
│   ├── db.js
├── app.js
└── package.json
```

- **controllers/**: İş mantığını içeren dosyalar.
- **models/**: Veritabanı modelleri ve sorgularını içeren dosyalar.
- **routes/**: Uygulamanın tüm rotaları.
- **views/**: Kullanıcıya gösterilecek şablon dosyaları.
- **config/**: Veritabanı bağlantı ayarları.

## 🔧 Kurulum

### 1. Gerekli Paketlerin Kurulumu
Projeyi çalıştırmadan önce bağımlılıkları yüklemek için aşağıdaki komutu kullanın:
```bash
npm install
```

### 2. Veritabanı Ayarları
`config/db.js` dosyasında MySQL veritabanı bilgilerinizi yapılandırın:
```javascript
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database'
});
```

### 3. Sunucuyu Başlatma
Projeyi çalıştırmak için:
```bash
node app.js
```

### 4. Örnek Kullanım Adresi
Proje varsayılan olarak şu adreste çalışır:
```
http://localhost:3000/
```

## 🎯 Özellikler

- **Hızlı ve Hafif:** Fastify ile optimize edilmiş performans.
- **Veri Yönetimi:** MySQL ile dinamik veri işleme ve yönetimi.
- **Mimari:** MVC yapısı ile modüler ve temiz kod organizasyonu.
- **Kolay Genişletilebilirlik:** Yeni özellikler kolayca eklenebilir.
- **Şablon Yönetimi:** EJS ile dinamik şablon oluşturma.

## 📄 Kullanım

- **GET /users**: Tüm kullanıcıları listelemek için.
- **POST /users**: Yeni kullanıcı eklemek için.
- **PUT /users/:id**: Belirli bir kullanıcıyı güncellemek için.
- **DELETE /users/:id**: Belirli bir kullanıcıyı silmek için.

## 🖥️ Teknolojiler

- **Node.js**: Sunucu tarafı JavaScript çalıştırma.
- **Fastify**: Hızlı ve verimli web çerçevesi.
- **MySQL**: İlişkisel veritabanı yönetim sistemi.
- **MVC Mimari**: Modüler yazılım tasarımı.
- **EJS**: Şablon motoru.

## 📄 Lisans
Bu proje MIT lisansı altında sunulmaktadır. Detaylı bilgi için `LICENSE` dosyasını inceleyin.

## 📫 İletişim

Herhangi bir sorunuz veya geri bildiriminiz varsa, benimle iletişime geçmekten çekinmeyin:

- **GitHub:** [ebuenesy2](https://github.com/ebuenesy2)  
- **Email:** ebuenesy2@gmail.com  
- **LinkedIn:** [Ebu Enes Yıldırım](https://www.linkedin.com/in/ebuenesyildirim/)
