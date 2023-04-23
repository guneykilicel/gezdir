
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


//USA
import usa from "./assets/amerika.jpg";
import usaFlag from "./assets/usaFlag.jpg";
import newYork from "./assets/newYorkAmerika.jpg";
import losAngeles from "./assets/losAngelesAmerika.jpg";
import lasVegas from "./assets/lasVegasAmerika.jpg";
import miami from "./assets/miamiAmerika.jpg";
import sanFrancisco from "./assets/sanFranciscoAmerika.jpg";
import usa1 from "./assets/usa1.jpg";
import usa2 from "./assets/usa2.jpg";


// Thailand
import thailand from "./assets/tayland.jpg";
import thailandFlag from "./assets/thailandFlag.jpg";
import bangkok from "./assets/bangkokTayland.jpg";
import chiang from "./assets/chiangTayland.jpg";
import phuket from "./assets/phuketTayland.jpg";
import ayutthaya from "./assets/ayutTayland.jpg";
import sukhothai from "./assets/sukhothaiTayland.jpg";
import tomyumSoup from "./assets/tomYumSoupTayland.jpg";
import mangoStickyRice from "./assets/mangoRiceTayland.jpg";
import greenCurry from "./assets/greenTayland.jpg";


// Italy
import italy from "./assets/italya.jpg";
import italyFlag from "./assets/flagItaly.jpg";
import rome from "./assets/romaItaly.jpg";
import florence from "./assets/florenceItaly.jpg";
import venice from "./assets/veniceItaly.jpg";
import pisa from "./assets/pisaItaly.jpg";
import amalfi from "./assets/amalfiItaly.jpg";
import pizza from "./assets/pizzaItaly.jpg";
import pasta from "./assets/pastaItaly.jpg";
import winesItaly from "./assets/winesItaly.jpg";
import gelato from "./assets/galetoItaly.jpg";


const contentFrench = {
  "name": "Fransa",
  "image": fransa,
  "flag": frenchFlag,
  "entry": "Eyfel Kulesi, Paris'in sembolü olarak kabul edilen ve dünyanın en ünlü turistik yerlerinden biri olan demir bir yapıdır.",
  "p1": "Fransa, tarihi, kültürü ve sanatıyla dünya genelinde büyük bir üne sahip olan, Batı Avrupa'da yer alan bir ülkedir. Başkenti Paris, Seine Nehri üzerindeki muhteşem manzarası ve Eiffel Kulesi ile turistlerin ilgisini çeken en popüler şehirlerden biridir. Fransa, UNESCO Dünya Miras Listesi'nde yer alan birçok önemli tarihi, kültürel ve doğal bölgeye de ev sahipliği yapmaktadır. Bu yerler arasında Mont Saint-Michel, Versailles Sarayı ve Normandiya'daki tarihi sahiller sayılabilir.",
  "p2": "Fransa, dünyanın en ünlü mutfaklarından birine sahiptir ve şarapları, peynirleri, çikolataları ve pastaneleriyle ünlüdür. Fransız mutfağı, dünya genelinde büyük bir hayran kitlesine sahiptir ve yemek kültürü, geleneksel yemekler ve yerel malzemeler üzerine kuruludur. Ayrıca, Fransa'daki pazarlar, marketler ve restoranlar, yerel lezzetlerin keşfedilmesi için harika bir fırsat sunmaktadır.",
  "p3": "Fransa'nın ünlü Riviera'sı, Cote d'Azur, dünyanın en lüks tatil beldelerine ev sahipliği yapmaktadır ve turistler için birçok aktivite sunmaktadır. Güzel plajları, deniz sporları, lüks otelleri ve gece hayatı, Cote d'Azur'u turistlerin ilgisini çeken yerlerden biri haline getirmektedir. Ayrıca, Fransa'nın güneyindeki Provence bölgesi, güzel manzaraları, lavanta tarlaları, zeytinlikleri ve şarap bağları ile ünlüdür. Fransa'nın çeşitliliği ve güzellikleri, her yıl milyonlarca turisti kendine çekmektedir."
}
const imagesFrench = [eiffel, louvre, katedral, montSaint, frenchFlag, cotedAzur, bagetFrench, kruvasanFrench, fransa]
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
const imagesZealand = [ milford, abel, tangariro, queen, zealandFlag, waiheke, wine, pavlova, kiwi]
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
const imagesSpain = [ barcelona, madrid, sevilla, valencia, spainFlag, sebastian, paella, sangria, churros]
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
const imagesJapan = [japonya, tokyo, kyoto, hiroshima, japanFlag, mount, nara, sushi, ramen]
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


const contentUSA = {
    "name": "Amerika",
    "image": usa,
    "flag": usaFlag,
    "entry": "Amerika, çeşitlilikleriyle zenginleşmiş bir kültür mozaiği ve büyük doğal güzellikleriyle tanınan bir ülkedir.",
    "p1": "Amerika, dünyanın en büyük ve en etkili ülkelerinden biridir. 50 eyaletten oluşan Amerika Birleşik Devletleri (ABD), geniş coğrafyası, çeşitli kültürleri, zengin tarihi ve ekonomik gücü ile dünya genelinde dikkat çekmektedir. Amerika, dünyanın her yerinden insanlara ev sahipliği yapmaktadır ve bu nedenle çok kültürlü bir ülkedir. Bu kültürel zenginliğe, farklı yemekleri, festivalleri, müzeleri ve sanat etkinlikleri ile de yansıtılmaktadır.",
    "p2": "ABD'nin her bölgesi, kendine özgü bir kimlik taşıyan birçok şehir ve turistik mekana sahiptir. Batı kıyısındaki California, San Francisco, Los Angeles ve San Diego gibi şehirleriyle tanınırken, doğudaki New York, Washington DC ve Miami şehirleri de turistler için popüler seyahat noktaları arasındadır. ABD'nin ortasındaki eyaletlerde ise Chicago, Denver ve Dallas gibi şehirler ziyaret edilmeye değerdir. Amerika, ayrıca büyük milli parkları, plajları ve doğal güzellikleriyle de ünlüdür. ABD'nin ekonomik gücü, teknolojisi ve inovasyonu, dünya çapındaki etkisi nedeniyle de dikkat çekmektedir. Silicon Valley, teknolojik yeniliklerin ve girişimciliğin merkezi olarak kabul edilirken, Wall Street finans sektörü ve yatırım dünyasının kalbidir. Ayrıca, ABD dünya ekonomisinde en büyük tüketici pazarlarından biridir ve tüm dünyada bilinen markalara ev sahipliği yapar.",
    "p3": "Sonuç olarak, Amerika Birleşik Devletleri, kültürel zenginliği, turistik mekanları, doğal güzellikleri ve ekonomik gücü ile dünya genelinde dikkat çeken bir ülkedir. ABD, her yıl milyonlarca turist tarafından ziyaret edilmektedir ve birçok insan, Amerika'ya seyahat ederek deneyimleyebileceği farklı kültürleri, yemekleri, aktiviteleri ve iş fırsatlarını keşfetmektedir."
  }
  const imagesUSA = [usa, newYork, losAngeles, lasVegas, usaFlag, miami, sanFrancisco, usa1, usa2]
  const stepsUSA = ['New York City', 'Los Angeles', 'Las Vegas', 'Miami', 'San Francisco'];
  const stepsContentUSA = [ {
          "image": newYork,
          "content": "New York, Amerika'nın en büyük şehirlerinden biridir ve dünya çapında bir kültür, moda, sanat, yemek ve ticaret merkezidir. New York, ikonik simgeleri, ünlü müzeleri, tiyatroları, restoranları ve gece hayatı ile turistler için cazibe merkezi olmaya devam ediyor. Şehir, Empire State Binası, Özgürlük Heykeli, Times Meydanı, Central Park ve çok daha fazlası gibi birçok turistik yer ve aktivite sunmaktadır. Ayrıca, dünya mutfağından örnekler sunan çeşitli restoranlar ve kafeler ile New York, gastronomi dünyasında da önemli bir yere sahiptir."
      }, {
          "image": losAngeles,
          "content": "Los Angeles, ABD'nin Kaliforniya eyaletinin en büyük şehridir ve film, televizyon ve müzik endüstrilerinin merkezi olarak dünya çapında üne sahiptir. Ayrıca, şehirde birçok turistik yer, plaj ve müze bulunmaktadır. Hollywood, Beverly Hills ve Santa Monica Plajı gibi ünlü yerleri ziyaret etmek, müzeleri keşfetmek ve yüksek kaliteli restoran ve alışveriş yerlerinde alışveriş yapmak için Los Angeles'a gidilmelidir. Ayrıca, Los Angeles'a gittiğinizde, meşhur lezzetlerinden olan tacos, hamburger ve sushi gibi yemeklerin tadına bakmadan dönmeyin."
      }, {
          "image": lasVegas,
          "content": "Las Vegas, dünyanın en popüler eğlence ve kumar merkezlerinden biri olarak bilinmektedir. Şehir, lüks otelleri, dünya çapında ünlü kumarhaneleri, şovları, restoranları ve gece hayatı ile ünlüdür. Ayrıca, Las Vegas yakınlarındaki doğal güzellikler, özellikle Grand Canyon, ziyaretçiler için önemli bir turistik cazibe merkezidir. Bu nedenlerle, Las Vegas, dünyanın dört bir yanından milyonlarca turist çekmektedir."
      }, {
          "image": miami,
          "content": "Miami, güneş, kum ve eğlencenin adresidir. Şehir, eşsiz plajları, yüksek kaliteli restoranları, gece hayatı ve sanat sahnesi ile tanınır. Ayrıca, turistlerin ilgisini çeken Everglades Ulusal Parkı gibi doğal alanlar da bulunur. Miami'nin etnik çeşitliliği, dünya mutfağından örnekler sunan yerel restoranları keşfetmek için de bir fırsat sunar. Güneş, kum ve deniz sevenler, Miami'nin muhteşem plajlarından yararlanabilir veya su sporlarına katılabilir. Miami ayrıca, Art Basel gibi dünyanın önde gelen sanat fuarlarına ev sahipliği yapmasıyla da tanınır."
      }, {
          "image": sanFrancisco,
          "content": "San Francisco, dünya çapında ünlü Golden Gate Köprüsü ve tarihi tren rayları, dik yokuşları, renkli sokakları ve köklü müzik sahnesi ile ünlüdür. Şehir, kültür, tarih, doğa ve eğlence açısından zengin bir deneyim sunar. San Francisco aynı zamanda, teknoloji endüstrisinin merkezi olarak da bilinir ve Silikon Vadisi'ne yakınlığı nedeniyle girişimciler, teknoloji tutkunları ve start-up'lar için bir cazibe merkezidir. Ayrıca, şehrin lezzetli yemekleri, özellikle balık ve deniz mahsulleri yemekleri ile ünlüdür ve dünyaca ünlü restoranları, kafeleri ve şarapçılarıyla zengin bir yemek deneyimi sunar."
}]


const contentThailand = {
    "name": "Tayland",
    "image": thailand,
    "flag": thailandFlag,
    "entry": "Tayland, zengin tarih ve kültür mirası, tropikal iklimi, plajları, adaları, lezzetli yemekleri ve turistik cazibeleri ile Asya'nın en popüler ülkelerinden biridir.",
    "p1": "Tayland, Güneydoğu Asya'da bulunan tropikal bir ülkedir ve turistik cazibeleri, lezzetli yemekleri, tarihi ve kültürel mirası ile ünlüdür. Bangkok, ülkenin başkenti ve en büyük şehridir. Şehir, hareketli gece hayatı, tapınakları, alışveriş imkanları ve sokak yemekleri ile ünlüdür. Ayrıca, Ayutthaya, Sukhothai ve Chiang Mai gibi tarihi şehirleri de ziyaret ederek Tayland'ın zengin tarih ve kültürüne tanıklık edebilirsiniz.",
    "p2": "Tayland'ın plajları ve adaları da dünyaca ünlüdür. Phuket, Koh Samui, Krabi, Koh Phi Phi gibi birçok adada beyaz kumlu plajlar, turkuaz deniz ve su sporları aktiviteleri bulabilirsiniz. Tayland mutfağı da ünlüdür ve dünya çapında popüler olan yemekleri arasında pad thai, som tum, tom yum goong ve green curry gibi lezzetler bulunur.",
    "p3": "Tayland, turizm açısından Asya'nın en popüler ülkelerinden biridir ve ziyaretçilerine benzersiz bir deneyim sunar. Tayland kültürü, insanları, yemekleri ve doğal güzellikleri ile her yıl milyonlarca turist tarafından ziyaret edilmektedir. Tayland'ın güler yüzlü insanları, samimi misafirperverliği ve tropikal iklimi, Tayland'a seyahat etmek için harika bir neden olabilir."
  }
  const imagesThailand =  [ bangkok, chiang, phuket, ayutthaya, thailandFlag, sukhothai, tomyumSoup, mangoStickyRice, greenCurry]
  const stepsThailand = ['Bangkok', 'Chiang Mai', 'Phuket', 'Ayutthaya', 'Sukhothai'];
  const stepsContentThailand = [ {
          "image": bangkok,
          "content": "Bangkok, Tayland'ın başkenti ve Güneydoğu Asya'nın en popüler turistik yerlerinden biridir. Şehir, zengin tarihi mirası, lezzetli yemekleri, hareketli gece hayatı, alışveriş imkanları ve Tay masajı gibi birçok farklı aktivitesi ile ziyaretçilerine unutulmaz bir deneyim sunar. Kraliyet Sarayı, Wat Phra Kaew Tapınağı, Chatuchak Pazarı, Khao San Yolu ve Patpong Gece Pazarı gibi yerler Bangkok'a gitmek için 5 neden arasında sayılabilir. Bangkok, dünya çapında ünlü bir turistik destinasyondur ve gezginlerin mutlaka ziyaret etmeleri gereken yerlerden biridir."
      }, {
          "image": chiang,
          "content": "Chiang Mai, Tayland'ın kuzeyinde yer alan bir şehirdir ve zengin tarihi, doğal güzellikleri, kültürü ve yemekleri ile ünlüdür. Şehir, antik tapınakları, müzeleri, pazarları ve huzurlu manzaraları ile dikkat çeker. Chiang Mai'ye gitmek için en önemli nedenlerden biri, Tay kültürüne ve tarihine derinlemesine bir yolculuk yapabilmenizdir. Doğal yaşam alanları, trekking rotaları ve ülkenin kuzeyindeki etnik azınlıkların köylerine yapılan geziler gibi farklı aktiviteler sunar. Ayrıca, Chiang Mai mutfağı, dünya çapında ün kazanmıştır ve Khao Soi, Tom Yum Çorbası, Sticky Rice gibi yemekleri tatmanız gerekenler arasındadır. Chiang Mai, Tayland seyahatinizin en keyifli duraklarından biridir ve ziyaretçilerine unutulmaz bir deneyim sunar."
      }, {
          "image": phuket,
          "content": "Phuket, Tayland'ın güneybatısında yer alan bir adadır ve beyaz kumlu plajları, turkuaz denizi, hareketli gece hayatı ve lezzetli yemekleri ile ünlüdür. Adada birçok plaj, su sporları aktiviteleri ve dalış noktaları mevcuttur. Ayrıca, tarihi tapınakları, müzeleri ve pazarları gibi farklı turistik yerleri de vardır. Phuket, turistlerin hem rahatlamak hem de eğlenmek için ideal bir yerdir. Patong Plajı, Karon Plajı ve Kata Plajı gibi plajlar ziyaretçilerin uğrak noktasıdır. Phuket, Tayland'ın en popüler turistik yerlerinden biridir ve ziyaretçilerine eşsiz bir deneyim sunar."
      }, {
          "image": ayutthaya,
          "content": "Ayutthaya, Tayland'ın eski başkentidir ve tarihi kalıntıları, tapınakları, müzeleri ve yüzlerce yıllık kültürel mirası ile ünlüdür. UNESCO Dünya Mirası Listesi'nde yer alan bu antik şehir, Tayland tarihine ve kültürüne derinlemesine bir yolculuk yapabilmeniz için ideal bir yerdir. Burada, Wat Phra Si Sanphet, Wat Chaiwatthanaram, Wat Yai Chai Mongkhon gibi önemli tapınakları ve kraliyet saraylarını ziyaret edebilirsiniz. Ayrıca, Bang Pa-In Kraliyet Sarayı, Ayutthaya Tarih Müzesi ve Chan Kasem Milli Müzesi gibi tarihi yerleri de görülmeye değerdir. Ayutthaya, Tayland seyahatinizin önemli bir parçasıdır ve tarih ve kültür meraklıları için kaçırılmayacak bir fırsattır."
      }, {
          "image": sukhothai,
          "content": "Sukhothai, Tayland'ın kuzeyinde yer alan antik bir şehirdir ve tarihi kalıntıları, tapınakları ve kültürel mirası ile ünlüdür. UNESCO Dünya Mirası Listesi'nde yer alan bu antik şehir, Tayland'ın eski başkentlerinden biridir ve Tay kültürü ve tarihine derinlemesine bir yolculuk yapabilmeniz için ideal bir yerdir. Burada, Wat Mahathat, Wat Sra Sri, Wat Si Chum gibi önemli tapınakları ve Sukhothai Tarih Parkı'ndaki diğer antik yapıları ziyaret edebilirsiniz. Ayrıca, Ramkhamhaeng Ulusal Müzesi'ni ziyaret ederek Tayland tarihi hakkında daha fazla bilgi edinebilirsiniz. Sukhothai, Tayland seyahatinizin önemli bir parçasıdır ve tarih ve kültür meraklıları için kaçırılmayacak bir fırsattır."
}]


const contentItaly = {
    "name": "İtalya",
    "image": italy,
    "flag": italyFlag,
    "entry": "Tayland, zengin tarih ve kültür mirası, tropikal iklimi, plajları, adaları, lezzetli yemekleri ve turistik cazibeleri ile Asya'nın en popüler ülkelerinden biridir.",
    "p1": "İtalya, tarihi ve kültürel zenginlikleri, muhteşem doğal güzellikleri ve lezzetli yemekleri ile ünlü olan bir Akdeniz ülkesidir. Roma İmparatorluğu'nun başkenti olarak tarihte önemli bir yere sahip olan İtalya, günümüzde de binlerce yıllık tarihi mirasını korumaktadır. Roma Forumu, Kolizeum, Pantheon, Vatikan Müzeleri ve Sistina Şapeli gibi tarihi yapılar, İtalya'nın en çok ziyaret edilen turistik yerleridir.",
    "p2": "İtalya'nın doğal güzellikleri de dikkat çekicidir. Alpler'deki kayak merkezleri, Toskana'nın bağları ve tepeleri, Amalfi Sahili'nin manzarası ve Capri Adası'nın turkuaz suları, doğa severleri kendine çekmektedir. Ayrıca, İtalyan mutfağı dünya çapında ünlüdür ve İtalya'da pizza, makarna, risotto, tiramisu ve gelato gibi lezzetli yemekleri tatmak ziyaretçilerin kaçırmaması gereken deneyimler arasındadır.",
    "p3": "İtalya ayrıca moda, tasarım ve sanat alanında da ünlüdür. İtalyan moda evleri, Milan Moda Haftası gibi dünya çapındaki moda etkinlikleri, İtalya'nın moda endüstrisinin gücünü gösterir. Sanatçılar da İtalya'nın tarihi şehirlerinde, galerilerinde ve müzelerinde sanat eserlerinin zengin koleksiyonları ile buluşur. Leonardo da Vinci, Michelangelo, Botticelli, Raphael ve Caravaggio gibi ünlü sanatçılar İtalya'da yaşamış ve çalışmıştır. İtalya, tarihi, doğal güzellikleri, lezzetli yemekleri, moda, tasarım ve sanatı ile dünyanın en zengin kültürlerinden birine ev sahipliği yapmaktadır."
  }
  const imagesItaly = [ rome, florence, venice, pisa, italyFlag, pizza, pasta, winesItaly, gelato]
  const stepsItaly = ['Roma', 'Floransa', 'Venedik', 'Pisa', 'Amalfi Sahili'];
  const stepsContentItaly = [ {
          "image": rome,
          "content": "Roma, tarihi ve kültürel mirası, sanat eserleri, antik yapıları ve turistik cazibeleri ile İtalya'nın en popüler şehirlerinden biridir. Şehirde mutlaka görülmesi gereken yerler arasında Vatikan, Colosseum, Roma Forumu, Pantheon, Trevi Çeşmesi, İspanyol Merdivenleri, Piazza Navona gibi birçok tarihi ve turistik mekan bulunur. Ayrıca Roma'da yeme-içme kültürü oldukça zengindir ve İtalya'nın ünlü lezzetlerinden pizza ve makarnaların en orijinal hallerini tadabileceğiniz restoranları bulunur. Roma, tarih ve kültür meraklıları, sanatseverler, yeme-içme tutkunları ve herkesin hayatında en az bir kez ziyaret etmesi gereken bir şehirdir."
      }, {
          "image": florence,
          "content": "Floransa, İtalya'nın Toscana bölgesinde yer alan ve Rönesans dönemi sanatı, tarihi ve kültürü ile ünlü bir şehirdir. Şehirde mutlaka görülmesi gereken yerler arasında Uffizi Galerisi, Ponte Vecchio, Duomo Katedrali, Santa Croce Bazilikası, Piazzale Michelangelo gibi tarihi ve turistik mekanlar bulunur. Ayrıca Floransa, İtalya'nın gastronomi başkenti olarak da anılır ve zeytinyağı, şarap, peynir ve ünlü Fiorentina bifteği gibi birçok yerel lezzeti tadabileceğiniz restoranları bulunur. Sanat ve kültür meraklıları, yeme-içme tutkunları ve herkesin hayatında en az bir kez ziyaret etmesi gereken bir şehir olan Floransa, zengin tarihi ve kültürü ile unutulmaz bir seyahat deneyimi sunar."
      }, {
          "image": venice,
          "content": "Venedik, İtalya'nın kuzeydoğusunda, denizle çevrili bir şehir ve turistik bir mekandır. Şehir, benzersiz kanalları, gondolları, tarihi binaları ve dar sokakları ile ünlüdür. Venedik'te görülmeye değer yerler arasında San Marco Meydanı, Rialto Köprüsü, Canal Grande, Doge Sarayı, San Marco Bazilikası ve Murano Adası yer alır. Ayrıca Venedik, İtalya'nın ünlü yemekleri arasında yer alan risotto, fritto misto, cicchetti gibi lezzetleri de tadabileceğiniz restoranları ile bilinir. Venedik, tarihi ve romantik bir atmosfere sahip, benzersiz bir şehirdir ve herkesin hayatında en az bir kez ziyaret etmesi gereken bir yerdir."
      }, {
          "image": pisa,
          "content": "Pisa, İtalya'nın Toskana bölgesinde yer alan küçük bir şehirdir ve ünlü Pisa Kulesi ile tanınır. Şehir, aynı zamanda Piazza dei Miracoli (Harikalar Meydanı) olarak da adlandırılan bir bölgeye ev sahipliği yapar. Bu bölgede yer alan Pisa Kulesi, Duomo Katedrali, Battistero ve Camposanto gibi tarihi yapılar UNESCO Dünya Mirası Listesi'nde yer alır. Şehirde ayrıca Orto Botanico di Pisa (Pisa Botanik Bahçesi) gibi doğal güzellikler ve Arno Nehri boyunca yürüyüş yapabileceğiniz güzel manzaralar bulunur. Pisa ayrıca, İtalyan mutfağının birçok lezzetli yemeğini tatma imkanı sunan birçok restoran ve kafe de barındırır. Pisa, İtalya'nın tarihi ve kültürel zenginliklerini keşfetmek isteyen gezginler için mutlaka ziyaret edilmesi gereken bir şehirdir."
      }, {
          "image": amalfi,
          "content": "Amalfi Sahili, İtalya'nın güneybatısında yer alan Campania bölgesinde bulunan ve Akdeniz kıyısında yer alan bir bölgedir. Bölge, benzersiz doğal güzellikleri, tarihi mimarisi, kültürel zenginlikleri ve Akdeniz mutfağı ile ünlüdür. Bu bölgede görülebilecek yerler arasında Positano, Amalfi, Ravello gibi sahil kasabaları, Capri Adası, Pompeii Antik Kenti ve Vesuv Yanardağı bulunur. Ayrıca, bölgede limon bahçeleri ve zeytinlikler gibi doğal güzellikler de bulunur. Amalfi Sahili, tarihi ve kültürel mirası, doğal güzellikleri ve ünlü mutfağı ile kendine has bir atmosfere sahiptir ve İtalya'da ziyaret edilebilecek en güzel yerlerden biridir."
}]



function App() {
  return (
    <div>
      <Header />
      <Content images={imagesFrench} content={contentFrench} steps={stepsFrench} stepsContent={stepsContentFrench} />
      <ContentTranslate images={imagesZealand} content={contentZealand} steps={stepsZealand} stepsContent={stepsContentZealand} />
      <Content images={imagesSpain} content={contentSpain} steps={stepsSpain} stepsContent={stepsContentSpain} />
      <ContentTranslate images={imagesJapan} content={contentJapan} steps={stepsJapan} stepsContent={stepsContentJapan} />
      <Content images={imagesUSA} content={contentUSA} steps={stepsUSA} stepsContent={stepsContentUSA} />
      <ContentTranslate images={imagesThailand} content={contentThailand} steps={stepsThailand} stepsContent={stepsContentThailand} />
      <Content images={imagesItaly} content={contentItaly} steps={stepsItaly} stepsContent={stepsContentItaly} />
    </div>
  );
}

export default App;
