
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import ContentTranslate from './components/contentTranslate/ContentTranslate';

//French
import fransa from "./assets/fransa.jpg";
import eiffel from "./assets/eiffel.jpg";
import louvre from "./assets/louvre.jpg";
import katedral from "./assets/katedral.jpg";
import montSaint from "./assets/montSaint.jpg";
import cotedAzur from "./assets/cotedAzur.jpg";
import frenchFlag from "./assets/frenchFlag.jpg";
import bagetFrench from "./assets/bagetFrench.jpg";
import kruvasanFrench from "./assets/kruvasanFrench.jpg";
import macaronFrench from "./assets/kruvasanFrench.jpg";

//Zealand
import zelanda from "./assets/yeni-zelanda.jpg";
import zealandFlag from "./assets/zealandFlag.jpg";
import milford from "./assets/milfordZelanda.jpg";
import abel from "./assets/abelZelanda.jpg";
import tangariro from "./assets/tongariroZelanda.jpg";
import queen from "./assets/quennZelanda.jpg";
import waiheke from "./assets/waihekeZelanda.jpg";
import wine from "./assets/wineZelanda.jpg";
import pavlova from "./assets/pavlovaZelanda.jpg";
import kiwi from "./assets/kiwiZelanda.jpg";

//Spain
import ispanya from "./assets/ispanya.jpg";
import spainFlag from "./assets/spainFlag.jpg";
import barcelona from "./assets/barcelonaIspanya.jpg";
import madrid from "./assets/madridIspanya.jpg";
import sevilla from "./assets/sevillaIspanya.jpg";
import valencia from "./assets/valenciaIspanya.jpg";
import sebastian from "./assets/sebastianIspanya.jpg";
import paella from "./assets/paellaIspanya.jpg";
import sangria from "./assets/sangriaIspanya.jpg";
import churros from "./assets/churrosIspanya.jpg";
import gazpacho from "./assets/gazpachoIspanya.jpg";


//Japan
import japonya from "./assets/japonya.jpg";
import japanFlag from "./assets/japanFlag.jpg";
import tokyo from "./assets/tokyoJaponya.jpg";
import kyoto from "./assets/kyotoJaponya.jpg";
import hiroshima from "./assets/hiroshimaJaponya.jpg";
import mount from "./assets/mountJaponya.jpg";
import nara from "./assets/naraJaponya.jpg";
import sushi from "./assets/sushiJapan.jpg";
import ramen from "./assets/ramenJaponya.jpg";


const contentFrench = {
  "name": "Fransa",
  "image": fransa,
  "flag": frenchFlag,
  "entry": "Eyfel Kulesi, Paris'in sembolü olarak kabul edilen ve dünyanın en ünlü turistik yerlerinden biri olan demir bir yapıdır.",
  "p1": "Fransa, tarihi, kültürü ve sanatıyla dünya genelinde büyük bir üne sahip olan, Batı Avrupa'da yer alan bir ülkedir. Başkenti Paris, Seine Nehri üzerindeki muhteşem manzarası ve Eiffel Kulesi ile turistlerin ilgisini çeken en popüler şehirlerden biridir. Fransa, UNESCO Dünya Miras Listesi'nde yer alan birçok önemli tarihi, kültürel ve doğal bölgeye de ev sahipliği yapmaktadır. Bu yerler arasında Mont Saint-Michel, Versailles Sarayı ve Normandiya'daki tarihi sahiller sayılabilir.",
  "p2": "Fransa, dünyanın en ünlü mutfaklarından birine sahiptir ve şarapları, peynirleri, çikolataları ve pastaneleriyle ünlüdür. Fransız mutfağı, dünya genelinde büyük bir hayran kitlesine sahiptir ve yemek kültürü, geleneksel yemekler ve yerel malzemeler üzerine kuruludur. Ayrıca, Fransa'daki pazarlar, marketler ve restoranlar, yerel lezzetlerin keşfedilmesi için harika bir fırsat sunmaktadır.",
  "p3": "Fransa'nın ünlü Riviera'sı, Cote d'Azur, dünyanın en lüks tatil beldelerine ev sahipliği yapmaktadır ve turistler için birçok aktivite sunmaktadır. Güzel plajları, deniz sporları, lüks otelleri ve gece hayatı, Cote d'Azur'u turistlerin ilgisini çeken yerlerden biri haline getirmektedir. Ayrıca, Fransa'nın güneyindeki Provence bölgesi, güzel manzaraları, lavanta tarlaları, zeytinlikleri ve şarap bağları ile ünlüdür. Fransa'nın çeşitliliği ve güzellikleri, her yıl milyonlarca turisti kendine çekmektedir."
}
const stepsFrench = ['Eyfel Kulesi (Paris)', 'Louvre Müzesi (Paris)', 'Notre-Dame Katedrali (Paris)', 'Mont Saint-Michel (Normandiya)', 'Cote dAzur (Fransa Rivierası)'];
const stepsContentFrench = [ {
        "image": eiffel,
        "content": "Eyfel Kulesi, Paris'in sembolik yapılarından biridir ve dünyanın en ünlü yapılarından biridir. Tarihi, mimarisi ve görüntüsü ile sadece Paris'te değil, tüm dünyada tanınmaktadır. Eiffel Kulesi'ne giderek, hem Paris'in panoramik manzarasını hem de tarihi bir yapıyı keşfetme fırsatını yakalayabilirsiniz."
    }, {
        "image": louvre,
        "content": "Louvre Müzesi, dünyanın en büyük sanat müzelerinden biridir ve 35.000'in üzerinde sanat eserine ev sahipliği yapmaktadır. Mona Lisa, Venüs de Milo ve kanatlı zafer heykeli gibi dünyaca ünlü eserleri içermektedir. Müze, tarihi ve sanatsal açıdan önemli eserlerin yanı sıra Paris'in en güzel binalarından biri olan Louvre Sarayı'na da ev sahipliği yapmaktadır. Louvre Müzesi'ni ziyaret ederek, dünya tarihinin en önemli sanat eserlerini görme fırsatını yakalayabilirsiniz."
    }, {
        "image": katedral,
        "content": "Notre-Dame Katedrali, Paris'in sembolik yapılarından biridir ve Gotik mimarisinin en ünlü örneklerinden biridir. Tarihi açıdan önemli bir yapı olan katedral, Victor Hugo\'nun \"Notre-Dame'ın Kamburu\" romanında da yer almaktadır. Katedralin güzel vitray pencereleri, devasa kulesi ve muhteşem iç tasarımı, Paris\'teki diğer tarihi yapılarla birlikte görülmeye değer bir yerdir. Ayrıca, katedralin çatısında yer alan ve \"La Gargouille\" adı verilen efsanevi canavar heykelleri de ziyaretçiler tarafından ilgiyle karşılanmaktadır."
    }, {
        "image": montSaint,
        "content": "Mont Saint-Michel, tarihi ve doğal güzelliği ile ünlü bir adacık ve manastır kompleksidir. 8. yüzyılda kurulan manastır, Orta Çağ'da Fransa'nın en önemli dini ve kültürel merkezlerinden biri haline gelmiştir. Mont Saint-Michel, mimarisi, manzarası ve tarihi önemi ile ziyaretçiler için büyüleyici bir deneyim sunar. Ayrıca, adacığın çevresinde yer alan tuzlu çayırlıkları, deniz kabukları ve deniz ürünleri gibi doğal zenginlikleri de keşfetmek için fırsatlar sunar."
    }, {
        "image": cotedAzur,
        "content": "Cote d'Azur, Fransa'nın güney sahilinde yer alan bir bölgedir ve dünyaca ünlü tatil beldelerine ev sahipliği yapmaktadır. Güzel plajları, deniz sporları, lüks otelleri, yüksek kaliteli restoranları ve gece hayatı ile ünlüdür. Ayrıca, Cote d'Azur'un muhteşem manzarası, tarihi kasabaları, müzeleri ve sanat galerileri de turistler için keşfedilecek birçok şey sunmaktadır. Cannes Film Festivali gibi uluslararası etkinlikler de bölgenin turistik çekiciliğini arttırmaktadır. Cote d'Azur, Fransa'nın güneyinde unutulmaz bir tatil deneyimi sunan eşsiz bir bölgedir."
}]



const contentZealand = {
  "name": "Zelanda",
  "image": zelanda,
  "flag": zealandFlag,
  "entry": "Yeni Zelanda, doğal güzellikleri, açık hava aktiviteleri, kültürel zenginlikleri ve dostça insanları ile benzersiz bir deneyim sunan bir ada ülkesidir.",
  "p1": "Yeni Zelanda, güzellikleri ve doğal kaynaklarıyla ünlü olan Pasifik Okyanusu'nun güneybatısında yer alan bir ada ülkesidir. Yemyeşil dağları, geniş kumsalları, buzul suları ve sıcak su kaynakları gibi doğal güzelliklerin yanı sıra, modern şehirleri ve tarihi yerleri de vardır.",
  "p2": "Yeni Zelanda'nın en popüler turistik yerlerinden biri Lord of the Rings ve Hobbit filmlerinin çekildiği yerlerdir. Milford Sound, Abel Tasman Milli Parkı, Tongariro Milli Parkı ve Franz Josef Buzulu gibi doğal güzellikler, ülkenin turistik cazibe merkezlerinden bazılarıdır. Ayrıca, Yeni Zelanda'da birçok macera sporu ve aktivitesi de yapılabilir, bungee jumping, kano, yamaç paraşütü, rafting, sörf gibi aktiviteler bunlara örnek gösterilebilir.",
  "p3": "Yeni Zelanda'da yerel kültür de çok zengindir. Maori kültürü, gelenekleri, dansları ve sanatları ülkede hala canlılığını koruyor. Maori yerleşim yerleri, müzeleri ve etkinlikleri, turistlerin Yeni Zelanda kültürünü deneyimlemeleri için önemli yerlerdir. Ayrıca, Yeni Zelanda'da birçok lezzetli yiyecek ve içecek de bulunur, özellikle deniz ürünleri, özgün et yemekleri ve yerel şaraplar ülkenin damak tadı açısından öne çıkan özellikleridir."
}
const stepsZealand = ['Milford Sound', 'Abel Tasman Milli Parkı', 'Tongariro Milli Parkı', 'Queenstown', 'Waiheke Adası'];
const stepsContentZealand = [ {
        "image": milford,
        "content": "Milford Sound, dünyanın en güzel fiyordlarından biri olarak kabul edilir ve Yeni Zelanda'nın en turistik yerlerinden biridir. Eşsiz doğal güzelliği, tepelerin, ormanların ve sufallarının birleştiği manzarası ile ünlüdür. Turistler fiyordun içinde yapılan tekne turları ile bu muhteşem manzarayı keşfederken, aynı zamanda balina, penguen ve foklar gibi deniz canlılarına da rastlayabilirler. Bu nedenle, Yeni Zelanda'yı ziyaret edenlerin mutlaka görmesi gereken bir yer olarak önerilir."
    }, {
        "image": abel,
        "content": "Abel Tasman Milli Parkı, Yeni Zelanda'nın en güzel doğal alanlarından biridir ve turistler için kaçırılmaması gereken bir yerdir. Muhteşem manzarası, plajları ve yürüyüş rotaları ile ünlüdür. Turistler parkta yapılan tekne turları ile kıyı boyunca tur atarken, aynı zamanda yürüyüş rotalarında yürüyerek, parkın muhteşem doğal güzelliğinin tadını çıkarabilirler. Ayrıca, parkta yaşayan nadir türlerdeki hayvanlara da rastlanabilir. Bu nedenle, Yeni Zelanda'yı ziyaret edenlerin, Abel Tasman Milli Parkı'nı keşfetmek için zaman ayırması önerilir."
    }, {
        "image": tangariro,
        "content": "Tongariro Milli Parkı, Yeni Zelanda'nın en ünlü milli parklarından biridir ve turistler için kaçırılmaması gereken bir yerdir. Park, eşsiz volkanik dağları, gölleri, ormanları ve yürüyüş rotaları ile ünlüdür. Turistler parkta yapılan yürüyüş turları ile parkın muhteşem manzaralarının tadını çıkarabilirler. Ayrıca, parkta bulunan üç aktif volkanın görülmesi, doğa tutkunları için büyük bir ilgi çekicidir. Parkta bulunan Tongariro Kuzey Yürüyüş Rotası ve Tongariro Dağı Yürüyüş Rotası, en popüler yürüyüş rotaları arasında yer alır ve ziyaretçiler tarafından sıklıkla tercih edilir. Bu nedenle, Yeni Zelanda'yı ziyaret edenlerin, Tongariro Milli Parkı'nı keşfetmek için zaman ayırması önerilir."
    }, {
        "image": queen,
        "content": "Queenstown, Yeni Zelanda'nın en popüler turistik destinasyonlarından biridir ve her yıl binlerce turist tarafından ziyaret edilir. Bu harika şehir, ülkedeki doğal güzellikleri, heyecan verici aktiviteleri ve lezzetli yemekleri ile ünlüdür. Queenstown'a gidilmesinin en büyük nedenlerinden biri, çevresindeki göl ve dağ manzaralarıdır. Burada turistler, yamaç paraşütü, bungee jumping, jet ski, beyaz su raftingi ve diğer birçok ekstrem spor aktiviteleri yapabilirler. Ayrıca, şehirdeki restoranlar ve kafeler, lezzetli yemekleri ve yerel şarapları ile de tanınır. Queenstown ayrıca, Hobbit filmlerinin çekildiği yer olan ünlü Hobbiton film setine de yakın konumda yer almaktadır. Bu nedenlerden dolayı, Queenstown, Yeni Zelanda'yı ziyaret edenlerin mutlaka uğraması gereken yerlerden biridir."
    }, {
        "image": waiheke,
        "content": "Waiheke Adası, Yeni Zelanda'nın kuzeyinde, Auckland şehrine kısa bir mesafede yer alan bir adadır. Bu adaya gitmek, muhteşem plajları, doğal güzellikleri ve şarap bağları gibi birçok cazibe merkezini keşfetmek için mükemmel bir fırsattır. Waiheke Adası, dünyaca ünlü şarapları ile de tanınır ve birçok şarap imalathanesi ve bağ evi burada bulunur. Adada ayrıca birçok restoran ve kafe de vardır ve taze deniz ürünleri, organik ürünler ve yerel şaraplar gibi birçok lezzetli yiyecek sunarlar. Adada yürüyüş parkurları, bisiklet rotaları ve plajlar da mevcuttur. Waiheke Adası, Yeni Zelanda'daki en güzel yerlerden biridir ve huzurlu bir tatil için mükemmel bir kaçış noktasıdır."
}]



const contentSpain = {
  "name": "İspanya",
  "image": ispanya,
  "flag": spainFlag,
  "entry": "Yeni Zelanda, doğal güzellikleri, açık hava aktiviteleri, kültürel zenginlikleri ve dostça insanları ile benzersiz bir deneyim sunan bir ada ülkesidir.",
  "p1": "Yeni Zelanda, güzellikleri ve doğal kaynaklarıyla ünlü olan Pasifik Okyanusu'nun güneybatısında yer alan bir ada ülkesidir. Yemyeşil dağları, geniş kumsalları, buzul suları ve sıcak su kaynakları gibi doğal güzelliklerin yanı sıra, modern şehirleri ve tarihi yerleri de vardır.",
  "p2": "Yeni Zelanda'nın en popüler turistik yerlerinden biri Lord of the Rings ve Hobbit filmlerinin çekildiği yerlerdir. Milford Sound, Abel Tasman Milli Parkı, Tongariro Milli Parkı ve Franz Josef Buzulu gibi doğal güzellikler, ülkenin turistik cazibe merkezlerinden bazılarıdır. Ayrıca, Yeni Zelanda'da birçok macera sporu ve aktivitesi de yapılabilir, bungee jumping, kano, yamaç paraşütü, rafting, sörf gibi aktiviteler bunlara örnek gösterilebilir.",
  "p3": "Yeni Zelanda'da yerel kültür de çok zengindir. Maori kültürü, gelenekleri, dansları ve sanatları ülkede hala canlılığını koruyor. Maori yerleşim yerleri, müzeleri ve etkinlikleri, turistlerin Yeni Zelanda kültürünü deneyimlemeleri için önemli yerlerdir. Ayrıca, Yeni Zelanda'da birçok lezzetli yiyecek ve içecek de bulunur, özellikle deniz ürünleri, özgün et yemekleri ve yerel şaraplar ülkenin damak tadı açısından öne çıkan özellikleridir."
}
const stepsSpain = ['Barcelona', 'Madrid', 'Sevilla', 'Valencia', 'San Sebastian'];
const stepsContentSpain = [ {
        "image": barcelona,
        "content": "Barcelona, İspanya'nın en popüler şehirlerinden biridir ve her yıl binlerce turist tarafından ziyaret edilir. Şehrin kendine has mimarisi, plajları, müzeleri ve lezzetleri ile ünlüdür. Barcelona'da gidilmesi gereken yerler arasında Gaudi'nin yapıtları, La Rambla caddesi, Gotik Mahalle ve Barri Gotic gibi tarihi bölgeler bulunmaktadır. Şehir aynı zamanda lezzetli tapas yemekleri, Cava şarabı ve paella gibi İspanyol mutfağına özgü lezzetleriyle de tanınmaktadır."
    }, {
        "image": madrid,
        "content": "İspanya'nın başkenti Madrid, tarihi ve kültürel zenginlikleri, müzeleri, parkları, canlı gece hayatı ve lezzetli yemekleri ile ziyaretçilerine unutulmaz bir deneyim sunuyor. Prado Müzesi ve Reina Sofia Müzesi gibi dünyaca ünlü sanat müzeleri, Guernica gibi ikonik eserleri barındırıyor. Retiro Parkı, piknik yapmak ve tekne gezisi yapmak için mükemmel bir yerken, Puerta del Sol ve Gran Via gibi turistik yerler de görülmeye değer. Ayrıca Madrid, tarihi bir yer olan Plaza Mayor ve dünya çapında ünlü futbol kulübü Real Madrid'in stadı Santiago Bernabeu gibi turistik mekanlara ev sahipliği yapıyor. Yerel mutfağına gelince, mutlaka denemeniz gereken lezzetler arasında patatesli omlet (tortilla), tapas, churros ve ünlü İspanyol şarapları bulunuyor."
    }, {
        "image": sevilla,
        "content": "Sevilla, İspanya'nın güneyindeki Endülüs bölgesinde yer alan tarihi ve kültürel açıdan zengin bir şehirdir. Şehir, tarihi merkezi, gotik katedrali, Alcázar Sarayı, Plaza de España, Güzel Sanatlar Müzesi, Flamenko gösterileri ve tapas yemekleriyle ünlüdür. Sevilla'nın tarihi bölgesi, dar sokakları, renkli mozaikli çinileri, çiçeklerle dolu avluları, geleneksel dokuma ürünleri ve el yapımı hediyelik eşyalarıyla ziyaretçileri kendine hayran bırakmaktadır. Ayrıca, Sevilalıların yaşam tarzını keşfetmek için Triana Mahallesi'ni ziyaret etmek gerekmektedir. Sevilla, sıcakkanlı insanları, zengin tarihi ve kültürel mirası ve canlı atmosferiyle ziyaretçileri büyülemektedir."
    }, {
        "image": valencia,
        "content": "Valencia, İspanya'nın Akdeniz sahilinde yer alan bir şehirdir ve ziyaretçilerine tarih, kültür ve eğlence dolu bir tatil sunmaktadır. Valencia, modern mimarisi, güzel plajları, lezzetli yemekleri ve zengin tarihi mirasıyla ünlüdür. Bu şehirde mutlaka görülmesi gereken yerler arasında Ciudad de las Artes y las Ciencias kompleksi, eski şehir merkezi, La Lonja de la Seda (ipek borsası) ve biyopark sayılabilir. Ayrıca, Valencia'nın ünlü festivallerinden biri olan Las Fallas Festivali, her yıl Mart ayında düzenlenir ve bir hafta boyunca devam eder. Bu festival, renkli ışık gösterileri, ateşli patlamalar, müzik ve dans gösterileriyle dolu bir kutlamadır. Valencia'yı ziyaret edenler, Paella gibi yerel yemekleri denemek için de harika bir fırsata sahip olacaklar."
    }, {
        "image": sebastian,
        "content": "San Sebastian, Bask Bölgesi'nin en önemli şehirlerinden biridir ve sahip olduğu plajlar, lezzetli yemekleri, tarihi yapıları ve eşsiz manzaraları ile turistler için cazip bir destinasyondur. San Sebastian'ın öne çıkan yerleri arasında La Concha Plajı, Monte Urgull, Parte Vieja bölgesi, San Telmo Müzesi ve Miramar Sarayı bulunmaktadır. Ayrıca, dünyaca ünlü San Sebastian Film Festivali de burada her yıl düzenlenmektedir. Şehir, aynı zamanda Pinxto adı verilen özel bir yemek kültürüne sahiptir ve bu lezzetli yemekleri tatmadan San Sebastian'dan ayrılmamalısınız."
}]
    


const contentJapan = {
  "name": "Japonya",
  "image": japonya,
  "flag": japanFlag,
  "entry": "Japonya, geleneksel kültürü, yüksek teknolojisi, benzersiz lezzetleri ve turistik yerleri ile dünya çapında bir turizm merkezi olarak bilinmektedir.",
  "p1": "Japonya, Doğu Asya'da yer alan ve Pasifik Okyanusu'na kıyısı olan bir ada ülkesidir. Japonya, gelişmiş teknolojisi, zengin kültürel mirası, benzersiz yemekleri ve turistik mekanları ile dünya çapında bir turizm merkezi olarak bilinmektedir. Modern teknolojinin yanı sıra, geleneksel Japon kültürü de hala güçlü bir şekilde varlığını sürdürmektedir.",
  "p2": "Japonya'nın başkenti Tokyo, modern yaşamın yoğunluğu, dünya çapında ünlü turistik yerleri ve yüksek teknolojisi ile bilinir. Tokyo Disneyland, Tokyo Kulesi ve Asakusa Tapınağı gibi turistik yerler ziyaretçiler tarafından en çok ilgi gören yerler arasındadır. Ayrıca, şehirdeki ramen, sushi ve wagyu gibi lezzetler, Japon mutfağından örnekler sunar. Kyoto, Japonya'nın en eski şehirlerinden biridir ve geleneksel Japon kültürü açısından önemli bir merkezdir. Kyoto'nun tapınakları, bahçeleri ve sarayları, Japon mimarisinin güzel örnekleri olarak kabul edilir. Ayrıca, şehir, Japonya'da en ünlü çaylarından biri olan matcha'yı üretmektedir.",
  "p3": "Hiroşima, Japon tarihinin karanlık bir dönemine sahip olsa da, günümüzde barışın sembolü haline gelmiştir. 1945 yılında, Amerika Birleşik Devletleri tarafından atılan bir atom bombası sonrasında yaşanan yıkım ve acı, Hiroşima'nın dünya çapında tanınmasına neden oldu. Bugün, şehirdeki Atomic Bomb Dome ve Peace Memorial Park, barışın önemini anlatan birer anıt olarak ziyaretçilerin ilgisini çekmektedir."
}
const stepsJapan = ['Tokyo', 'Kyoto', 'Hiroşima', 'Mount Fuji', 'Nara'];
const stepsContentJapan = [ {
        "image": tokyo,
        "content": "Tokyo, Japonya'nın başkenti ve en büyük şehridir. Şehir, modern ve geleneksel kültürün bir arada olduğu, zengin tarihi ve kültürel mirası, yüksek teknolojisi ve benzersiz lezzetleri ile dünya çapında bir turizm merkezi olarak bilinmektedir. Tokyo, yüksek teknolojisi ve modern mimarisi ile göz alıcı bir şehir manzarası sunar ve birçok ünlü turistik yere sahiptir. Ayrıca, geleneksel Japon kültürünü keşfetmek isteyenler için Asakusa'daki Sensoji Tapınağı ve Kabukiza Tiyatrosu gibi yerler ziyaret edilebilir. Tokyo ayrıca Tsukiji Balık Pazarı, ramen ve sushi gibi Japon mutfağının ünlü lezzetlerine ev sahipliği yapar. Tüm bu özellikleri ile Tokyo, dünya çapında bir turistik merkez ve Japonya'ya seyahat edenler için mutlaka ziyaret edilmesi gereken bir şehirdir."
    }, {
        "image": kyoto,
        "content": "Kyoto, Japonya'nın en önemli tarihi ve kültürel merkezlerinden biridir ve turistlerin sıklıkla ziyaret ettiği bir şehirdir. Şehirde birçok tarihi tapınak, bahçe ve saray bulunmaktadır. Bunların arasında Kinkaku-ji Tapınağı (Altın Tapınak) ve Ginkaku-ji Tapınağı (Gümüş Tapınak) en popüler olanlarıdır. Ayrıca, Kyoto'nun geleneksel geisha kültürü de ünlüdür ve Gion semtinde geisha evleri ve performansları görülebilir. Kyoto'da ayrıca Japon mutfağının lezzetlerinin tadına bakmak için çeşitli restoranlar bulunmaktadır."
    }, {
        "image": hiroshima,
        "content": "Hiroşima, Japonya'nın güneybatısında bulunan bir şehirdir ve dünya tarihinin en büyük nükleer saldırısına maruz kalmış bir şehirdir. Ancak bugün, bu acı olaydan sonra yeniden yapılanan Hiroşima, barış ve umut sembolü olarak bilinmektedir. Şehir, zengin kültürel mirası, barış parkları, müzeleri ve anıtları ile ziyaretçilere ilham verici bir deneyim sunar. Ayrıca, Japon mutfağındaki lezzetlerinin de tadına bakılabilir."
    }, {
        "image": mount,
        "content": "Japonya'nın simgelerinden biri olan Mount Fuji, yüksekliği ve benzersiz güzelliği nedeniyle dünya çapında tanınmaktadır. Bu görkemli dağa gidilmesinin en önemli nedeni, doğal güzelliği ve zirveye tırmanarak muhteşem manzaraları gözlemleme fırsatı sunmasıdır. Ayrıca, dağın etrafında yer alan Five Lakes bölgesi, dağın doğal güzelliğinin tadını çıkarmak için ideal bir yerdir. Mount Fuji ayrıca, Japon kültürü ve tarihinde de önemli bir yere sahiptir ve bu nedenle Japonya'yı ziyaret eden turistler için kesinlikle kaçırılmaması gereken bir yerdir."
    }, {
        "image": nara,
        "content": "Nara, Japonya'da yer alan tarihi ve kültürel açıdan önemli bir şehirdir. Şehir, Japon İmparatorluğu'nun ilk başkenti olması sebebiyle tarihi ve kültürel açıdan zengin bir mirasa sahiptir. Ayrıca, Nara'da yer alan Todai-ji Tapınağı, Japonya'nın en büyük bronz Buddha heykeli ile bilinir. Nara ayrıca, sevimli geyikleriyle ünlüdür ve ziyaretçiler tarafından beslenebilirler. Bunların yanı sıra, şehirde yer alan Yoshiki-en bahçesi, klasik Japon bahçe tasarımı örneklerinden biridir ve ziyaretçiler tarafından hayranlıkla gezilir. Tüm bu özellikleri ile Nara, Japonya seyahati sırasında mutlaka ziyaret edilmesi gereken bir yerdir."
}]


function App() {
  return (
    <div>
      <Header />
      <Content content={contentFrench} steps={stepsFrench} stepsContent={stepsContentFrench} />
      <ContentTranslate content={contentZealand} steps={stepsZealand} stepsContent={stepsContentZealand} />
      <Content content={contentSpain} steps={stepsSpain} stepsContent={stepsContentSpain} />
      <ContentTranslate content={contentJapan} steps={stepsJapan} stepsContent={stepsContentJapan} />
    </div>
  );
}

export default App;
