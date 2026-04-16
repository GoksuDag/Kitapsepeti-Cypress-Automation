# Kitapsepeti.com E-Commerce QA Automation Project

Bu proje, Kitapsepeti platformunun kritik kullanıcı yolculuklarını güvence altına almak amacıyla Cypress ve JavaScript kullanılarak geliştirilmiş bir test otomasyon projesidir.

## Proje Vizyonu ve Strateji
E-ticaret ekosisteminde hız ve kesintisiz süreç yönetimi doğrudan dönüşüm oranlarını belirler. Bu projenin temel hedefleri:
* En kritik 6 kullanıcı senaryosunun uçtan uca otomatize edilmesi.
* Manuel test operasyon maliyetinde %80 oranında optimizasyon sağlanması.
* Her dağıtım (deploy) sonrası sistemin satışa hazır olduğunun saniyeler içinde doğrulanması.

## Teknik Mimari: Page Object Model (POM)
Proje, sürdürülebilirlik ve düşük bakım maliyeti için Page Object Model (POM) mimarisi üzerine inşa edilmiştir.
* Low Maintenance: Arayüz değişiklikleri tüm testleri değil, sadece ilgili sayfa nesnesini etkiler.
* Clean Code: Okunabilirliği yüksek ve kendi kendini dokümante eden bir kod yapısı sunar.
* Abstraction: Test mantığı ile UI elementleri birbirinden tamamen izole edilmiştir.

## Kritik Hata Yönetimi (Blocker Bug Detection)
Otomasyon süreci sırasında US05 senaryosunda Online Ödeme Modülü'nün (Iyzico) yanıt vermediği tespit edilmiştir.
* Aksiyon: Test süreci bu noktada durdurulmamış; akış dinamik olarak "Kapıda Ödeme" yöntemine yönlendirilerek adres, kargo ve fiyat modüllerinin doğrulanması sağlanmıştır.
* Sonuç: Kritik hata raporlanmış ve sistemin geri kalan modüllerinin kararlılığı kanıtlanmıştır.

## Kullanılan Teknolojiler
* Framework: Cypress
* Dil: JavaScript
* Tasarım Deseni: Page Object Model (POM)
* Raporlama: Cypress Dashboard / Screenshots & Videos

## Test Sonuçları ve Raporlar
Her bir User Story (US) için hazırlanan detaylı test raporlarına, teknik analizlere ve kabul kriterlerine (AC) aşağıdaki görsellere tıklayarak ulaşabilirsiniz.

### Kullanıcı Giriş Süreci (US01)
[![US01 Rapor Önizleme](./Otomasyon%20Test%20Raporu_%20US01%20Kullanıcı%20Girişi-1.png)](./Otomasyon%20Test%20Raporu_%20US01%20Kullanıcı%20Girişi.pdf)

### Ürün Arama ve Listeleme (US02)
[![US02 Rapor Önizleme](./Otomasyon%20Test%20Raporu_%20US02%20Ürün%20Arama%20ve%20Listeleme-1.png)](./Otomasyon%20Test%20Raporu_%20US02%20Ürün%20Arama%20ve%20Listeleme.pdf)

### Ürün Detay ve Sepet Süreci (US03)
[![US03 Rapor Önizleme](./Otomasyon%20Test%20Raporu_%20US03%20Ürün%20Detay%20Sayfası%20Görüntüleme%20ve%20Sepete%20Ekleme-1.png)](./Otomasyon%20Test%20Raporu_%20US03%20Ürün%20Detay%20Sayfası%20Görüntüleme%20ve%20Sepete%20Ekleme.pdf)

### Sepet Yönetimi ve Kontrolü (US04)
[![US04 Rapor Önizleme](./Otomasyon%20Test%20Raporu_%20US04%20Sepet%20Yönetimi%20ve%20Kontrolü-1.png)](./Otomasyon%20Test%20Raporu_%20US04%20Sepet%20Yönetimi%20ve%20Kontrolü.pdf)

### Ödeme ve Sipariş Onayı (US05)
[![US05 Rapor Önizleme](./Otomasyon%20Test%20Raporu_%20US05%20Ödeme%20ve%20Sipariş%20Onayı-1.png)](./Otomasyon%20Test%20Raporu_%20US05%20Ödeme%20ve%20Sipariş%20Onayı.pdf)

### Misafir Olarak Satın Alma Akışı (US06)
[![US06 Rapor Önizleme](./Otomasyon%20Test%20Raporu_%20US06%20Misafir%20Olarak%20Satın%20Alma%20Akışı-1.png)](./Otomasyon%20Test%20Raporu_%20US06%20Misafir%20Olarak%20Satın%20Alma%20Akışı.pdf)

**Hazırlayan:** Göksu Dağ  
[https://www.linkedin.com/in/goksuudag] | [goksudag@hotmail.com]