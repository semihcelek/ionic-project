import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private data = [
    {
      category: 'Ekonomik',
      expanded: true,
      content:[ 
        { id:0, inside:'Tüketici hakem heyetleri, yılın ilk 4 ayında 180 bin 466 başvuru alırken, 165 bin 84 başvuruyu karara bağladı. Elektronik ortamda gerçekleştirilen başvuru oranı yeni tip koronavirüs (Kovid-19) salgını nedeniyle nisanda yüzde 80 civarında gerçekleşti.'},
        { id:1, inside:'Gelir Vergisi Genel Tebliği bugün Resmi Gazete de yayımlanarak yürürlüğe girdi. Aralık ayında geçen maddelere dair kafa karışıklığını gidermek için bazı maddelere açıklık getirildi'},
        { id:2, inside:'Çin in Hubey eyaletine bağlı Vuhan kentinde ortaya çıkan yeni tip koronavirüsün (Kovid-19) dünya genelinde bulaştığı kişi sayısı 5 milyon 688 bin 840’a çıktı'},
        { id:3, inside:'ABD nin Çin ulusal güvenlik yasasının Hong Kong vatandaşlarını temel hak ve özgürlüklerine tehdit oluşturduğunu belirterek Çinli yetkililere yaptırım uygulanması konusunda çalıştığı belirtildi'},
        { id:4, inside:'Fitch Ratings, koronavirüs algınının ekonomik etkilerinin derinleşmeye devam ettiğini belirterek, küresel ekonominin bu yıl yüzde 4,6 daralacağını öngörüsünde bulundu'}
    ]

    },
    {
      category: 'Sosyal',
      expanded: true,
      content:[ 
        { id:0, inside:'Ekonomi cooohhh eyi'},
        { id:1, inside:'Ekonomi cooohhh eyi'},
        { id:2, inside:'Ekonomi cooohhh eyi'},
        { id:3, inside:'Ekonomi cooohhh eyi'},
        { id:4, inside:'Ekonomi cooohhh eyi'}
    ]

    },
    {

    }
  ];
  private feed =[];

  constructor() { }

  getData(){
    return this.data;
  }
  getFeed(){
    return this.feed;
  }
  addFeed(content){
    this.feed.push(content);
  }
}
