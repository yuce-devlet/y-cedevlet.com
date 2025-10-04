document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const projeSlug = urlParams.get("proje");

  const projeler = {
    "Ankara1": {
      baslik: "Ankara 1",
      aciklama: "Ankara 1 projemiz, şehrin kalbinde modern yaşam alanları sunan, mimarisiyle dikkat çeken özel bir konut projesidir.",
      lokasyon: "Ankara - Çankaya",
      teslim: "2026",
      daire: "120",
      sosyal: "Havuz, Otopark, Fitness",
      img: "./assets/slide1.png",
      gallery: [
        "assets/slide2.png",
        "assets/slide1.png",
      ],
      features: [
        { icon: "fas fa-tree", title: "Doğa ile İç İçe", desc: "Yeşil alanlarla çevrili yaşam." },
        { icon: "fas fa-shield-alt", title: "7/24 Güvenlik", desc: "Güvenli ve huzurlu bir ortam." },
        { icon: "fas fa-swimmer", title: "Sosyal Tesisler", desc: "Havuz, fitness ve daha fazlası." }
      ],
      mapQuery: "Ankara Çankaya"
    },


    /* 
    "mega-bulvar": {
      baslik: "Mega Bulvar",
      aciklama: "Mega Bulvar projemiz, şehrin kalbinde modern yaşam alanları sunan, mimarisiyle dikkat çeken özel bir konut projesidir.",
      lokasyon: "Ankara - Çankaya",
      teslim: "2026",
      daire: "120",
      sosyal: "Havuz, Otopark, Fitness",
      img: "assets/proje1.png",
      gallery: [
        "assets/mega1-1.jpeg",
        "assets/mega1-2.jpeg",
        "assets/mega1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-tree", title: "Doğa ile İç İçe", desc: "Yeşil alanlarla çevrili yaşam." },
        { icon: "fas fa-shield-alt", title: "7/24 Güvenlik", desc: "Güvenli ve huzurlu bir ortam." },
        { icon: "fas fa-swimmer", title: "Sosyal Tesisler", desc: "Havuz, fitness ve daha fazlası." }
      ],
      mapQuery: "Ankara Çankaya"
    },

    "corner-1": {
      baslik: "Corner 1",
      aciklama: "Corner 1, merkezi konumuyla dikkat çeken butik bir yaşam alanı sunar. Ailelere ve genç profesyonellere uygun.",
      lokasyon: "Ankara - Yenimahalle",
      teslim: "2025",
      daire: "80",
      sosyal: "Otopark, Güvenlik",
      img: "assets/slide2.png",
      gallery: [
        "assets/corner1-1.jpeg",
        "assets/corner1-2.jpeg",
        "assets/corner1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-building", title: "Butik Yaşam", desc: "Sınırlı sayıda daire ile butik konfor." },
        { icon: "fas fa-shield-alt", title: "Güvenlik", desc: "7/24 kamera ve güvenlik hizmetleri." }
      ],
      mapQuery: "Ankara Yenimahalle"
    },

    "metro-suit": {
      baslik: "Metro Suit",
      aciklama: "Metro Suit, şehir yaşamının tüm avantajlarını sunan, ulaşım kolaylığı yüksek, modern dairelerden oluşan projedir.",
      lokasyon: "İstanbul - Kadıköy",
      teslim: "2025",
      daire: "200",
      sosyal: "Güvenlik, Otopark, Çocuk Oyun Alanı",
      img: "assets/slide3.png",
      gallery: [
        "assets/metro1-1.jpeg",
        "assets/metro1-2.jpeg",
        "assets/metro1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-bus", title: "Ulaşım Kolaylığı", desc: "Metro ve otobüs hatlarına yakın." },
        { icon: "fas fa-swimmer", title: "Havuz", desc: "Kapalı yüzme havuzu mevcut." },
        { icon: "fas fa-shield-alt", title: "Güvenlik", desc: "7/24 koruma ve kamera sistemi." }
      ],
      mapQuery: "İstanbul Kadıköy"
    },

    "sasmaz-1": {
      baslik: "Şaşmaz 1",
      aciklama: "Şaşmaz 1, sakin ve yeşil bir bölgede konumlanmış, aileler için ideal geniş daire seçenekleri sunan projedir.",
      lokasyon: "Ankara - Şaşmaz",
      teslim: "2024",
      daire: "90",
      sosyal: "Bahçe, Spor Alanları, Güvenlik",
      img: "assets/slide4.png",
      gallery: [
        "assets/sasmaz1-1.jpeg",
        "assets/sasmaz1-2.jpeg",
        "assets/sasmaz1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-leaf", title: "Yeşil Alanlar", desc: "Geniş bahçe ve yürüyüş yolları." },
        { icon: "fas fa-dumbbell", title: "Spor Alanları", desc: "Açık spor ve oyun alanları." },
        { icon: "fas fa-shield-alt", title: "Güvenlik", desc: "Site içi güvenlik hizmetleri." }
      ],
      mapQuery: "Ankara Şaşmaz"
    },

    "yildiz-konutlari": {
      baslik: "Yıldız Konutları",
      aciklama: "Yıldız Konutları, modern mimari ile tasarlanmış, yüksek kalite standartlarında, şehir merkezine yakın yaşam alanıdır.",
      lokasyon: "İzmir - Karşıyaka",
      teslim: "2026",
      daire: "130",
      sosyal: "Havuz, Fitness, Sauna",
      img: "assets/slide5.png",
      gallery: [
        "assets/yildiz1-1.jpeg",
        "assets/yildiz1-2.jpeg",
        "assets/yildiz1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-swimmer", title: "Havuz", desc: "Kapalı yüzme havuzu." },
        { icon: "fas fa-dumbbell", title: "Fitness", desc: "Tam donanımlı spor salonu." },
        { icon: "fas fa-hot-tub", title: "Sauna", desc: "Rahatlatıcı sauna alanı." }
      ],
      mapQuery: "İzmir Karşıyaka"
    },

    "life-city": {
      baslik: "Life City",
      aciklama: "Life City, doğa ile iç içe, sürdürülebilir ve yeşil alanları bol bir yaşam alanı sunar.",
      lokasyon: "Antalya - Muratpaşa",
      teslim: "2025",
      daire: "110",
      sosyal: "Park, Yürüyüş Alanları, Spor Kompleksi",
      img: "assets/slide6.png",
      gallery: [
        "assets/life1-1.jpeg",
        "assets/life1-2.jpeg",
        "assets/life1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-park", title: "Park", desc: "Geniş park ve rekreasyon alanları." },
        { icon: "fas fa-walking", title: "Yürüyüş Alanları", desc: "Doğa yürüyüşü için ideal." },
        { icon: "fas fa-dumbbell", title: "Spor Kompleksi", desc: "Spor tesisleri ve sahalar." }
      ],
      mapQuery: "Antalya Muratpaşa"
    },

    "prestij-plaza": {
      baslik: "Prestij Plaza",
      aciklama: "Prestij Plaza, iş ve yaşamı birleştiren, modern ofis ve rezidans çözümleri ile şehrin iş merkezindedir.",
      lokasyon: "İstanbul - Levent",
      teslim: "2027",
      daire: "150",
      sosyal: "Güvenlik, Otopark, Kafeterya",
      img: "assets/slide7.png",
      gallery: [
        "assets/prestij1-1.jpeg",
        "assets/prestij1-2.jpeg",
        "assets/prestij1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-building", title: "Modern Ofisler", desc: "Yüksek standartlı iş alanları." },
        { icon: "fas fa-shield-alt", title: "Güvenlik", desc: "7/24 güvenlik sistemleri." },
        { icon: "fas fa-coffee", title: "Kafeterya", desc: "Lezzetli yemek ve dinlenme alanı." }
      ],
      mapQuery: "İstanbul Levent"
    },

    "elite-towers": {
      baslik: "Elite Towers",
      aciklama: "Elite Towers, lüks ve prestiji bir araya getiren, panoramik şehir manzaralı yüksek katlı konut projesidir.",
      lokasyon: "İstanbul - Şişli",
      teslim: "2026",
      daire: "220",
      sosyal: "Havuz, Spor Salonu, 7/24 Güvenlik",
      img: "assets/slide8.png",
      gallery: [
        "assets/elite1-1.jpeg",
        "assets/elite1-2.jpeg",
        "assets/elite1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-swimmer", title: "Lüks Havuz", desc: "Panoramik manzaralı havuz." },
        { icon: "fas fa-dumbbell", title: "Spor Salonu", desc: "Tam donanımlı fitness merkezi." },
        { icon: "fas fa-shield-alt", title: "7/24 Güvenlik", desc: "Kesintisiz güvenlik hizmeti." }
      ],
      mapQuery: "İstanbul Şişli"
    },

    "gol-evleri": {
      baslik: "Göl Evleri",
      aciklama: "Göl Evleri, doğal göl manzarası eşliğinde huzurlu ve sakin bir yaşam sunan tamamlanmış prestijli projedir.",
      lokasyon: "Bolu - Gölköy",
      teslim: "2023",
      daire: "70",
      sosyal: "Göl Manzarası, Yürüyüş Parkuru, Bahçe",
      img: "assets/slide9.png",
      gallery: [
        "assets/gol1-1.jpeg",
        "assets/gol1-2.jpeg",
        "assets/gol1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-water", title: "Göl Manzarası", desc: "Doğal göl kenarında huzur." },
        { icon: "fas fa-walking", title: "Yürüyüş Parkuru", desc: "Göl etrafında yürüyüş yolları." },
        { icon: "fas fa-leaf", title: "Bahçe", desc: "Bakımlı yeşil alanlar." }
      ],
      mapQuery: "Bolu Gölköy"
    },

    "panorama-life": {
      baslik: "Panorama Life",
      aciklama: "Panorama Life, yüksek katlardan panoramik şehir manzarası sunan, modern ve güvenli bir konut kompleksidir.",
      lokasyon: "Ankara - Çankaya",
      teslim: "2022",
      daire: "180",
      sosyal: "Havuz, Fitness, Sauna",
      img: "assets/slide10.png",
      gallery: [
        "assets/panorama1-1.jpeg",
        "assets/panorama1-2.jpeg",
        "assets/panorama1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-swimmer", title: "Havuz", desc: "Kapalı yüzme havuzu." },
        { icon: "fas fa-dumbbell", title: "Fitness", desc: "Modern spor salonu." },
        { icon: "fas fa-hot-tub", title: "Sauna", desc: "Rahatlatıcı sauna alanı." }
      ],
      mapQuery: "Ankara Çankaya"
    },

    "yaka-modern": {
      baslik: "Yaka Modern",
      aciklama: "Yaka Modern projesi, doğayla iç içe bir yaşam deneyimi arayanlar için ideal, modern ve çevreci tasarımı ile öne çıkar.",
      lokasyon: "İstanbul - Ataşehir",
      teslim: "2024",
      daire: "150",
      sosyal: "Yüzme Havuzu, Fitness, Sauna",
      img: "assets/slide11.png",
      gallery: [
        "assets/yaka1-1.jpeg",
        "assets/yaka1-2.jpeg",
        "assets/yaka1-3.jpeg"
      ],
      features: [
        { icon: "fas fa-swimmer", title: "Havuz", desc: "Kapalı yüzme havuzu." },
        { icon: "fas fa-dumbbell", title: "Fitness", desc: "Modern spor salonu." },
        { icon: "fas fa-hot-tub", title: "Sauna", desc: "Rahatlatıcı sauna alanı." }
      ],
      mapQuery: "Ankara Çankaya"
    }
      */
  };

  const proje = projeler[projeSlug];

  if (!proje) {
    document.querySelector(".detay-baslik").textContent = "Proje Bulunamadı";
    document.querySelector(".detay-icerik").innerHTML = '<p style="text-align:center">Bu projeye ait detay bulunamadı.</p>';
    document.getElementById("detayBanner").style.backgroundImage = "url('assets/slide1.png')";
    return;
  }

  document.getElementById("detayBanner").style.backgroundImage = `url('${proje.img}')`;
  document.getElementById("projeBaslik").textContent = proje.baslik;
  document.getElementById("projeAciklama").textContent = proje.aciklama;
  document.getElementById("projeLokasyon").textContent = proje.lokasyon;
  document.getElementById("projeTeslim").textContent = proje.teslim;
  document.getElementById("projeDaire").textContent = proje.daire;
  document.getElementById("projeSosyal").textContent = proje.sosyal;
});
