📝 **Finans Takip Uygulaması**

Bu proje, gelir ve gider takibini basit bir şekilde yapmak amacıyla geliştirilmiş bir Vue.js uygulamasıdır. Amacı, temel Vue.js yeteneklerini sergilemektir. Kullanıcılar, gelir ve giderlerini kategori ve açıklama ile birlikte ekleyebilir, toplamlarını görüntüleyebilir.


🛠 **Projenin Amacı**

Bu proje, Vue.js bilgi ve yeteneklerinizi göstermek amacıyla geliştirilmiştir. Geliştiricinin temel Vue.js yapılarını (bileşenler, props, emit, computed) nasıl kullandığını açıklayan bir uygulamadır.

🛠 **Özellikler**

- Gelir ve gider ekleme
- Toplam gelir ve giderlerin hesaplanması
- Kategorilere göre gider ekleme (Yemek, Ulaşım, Eğlence, Diğer)
- Kullanıcı dostu ve sade bir arayüz
- **Google Icons** kullanımı

💻 **Kullanılan Teknolojiler**

| Teknoloji         | Açıklama                                |
|-------------------|-----------------------------------------|
| **Vue.js 3**      | Projenin frontend framework'ü           |
| **Vite.js**       | Hızlı geliştirme ve derleme aracı       |
| **Scoped CSS**    | Bileşen bazlı özel CSS yazımı           |
| **Google Icons**  | Proje içerisindeki ikonlar için         |


📁 **Proje Yapısı**

```plaintext
├── public/                # Statik dosyalar
├── src/
│   ├── assets/            # Görseller ve stil dosyaları
│   │   └── images/        # Kullanılan görseller ve ikonlar
│   ├── components/        # Tekrar kullanılabilir Vue bileşenleri
│   │   ├── ExpenseForm.vue # Gider ekleme formu
│   │   └── IncomeForm.vue  # Gelir ekleme formu
│   ├── views/             # Sayfa bileşenleri
│   │   ├── Dashboard.vue  # Ana sayfa
│   │   ├── Income.vue     # Gelirler sayfası
│   │   └── Expenses.vue   # Giderler sayfası
│   ├── router/            # Vue Router dosyası
│   │   └── index.js       # Tüm rotalar
│   ├── store/             # Vuex store (veri yönetimi için)
│   ├── App.vue            # Ana Vue bileşeni
│   └── main.js            # Uygulama giriş dosyası
├── vite.config.js         # Vite yapılandırma dosyası
├── package.json           # Bağımlılıklar ve proje ayarları
└── README.md              # Proje dökümantasyonu
```

🔧 **Kurulum Adımları**

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/kullanici_adi/finans-takip-uygulamasi.git
cd finans-takip-uygulamasi
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Projeyi Çalıştırın

```bash
npm run dev
```

4. Tarayıcıda Projeyi Görüntüleyin

Projeyi çalıştırdıktan sonra aşağıdaki bağlantıya giderek uygulamayı görüntüleyebilirsiniz:

```
http://localhost:3000
```

---

✨📌 **Önemli Not**

Bu proje, **Vue.js** bilgi ve becerilerini sergilemek için oluşturulmuştur. Grafikler ve diğer gelişmiş özellikler yerine basit bir yapı sunularak anlaşılabilirlik hedeflenmiştir.😊
