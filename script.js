/* wrapped so its globals never clash with the Lenis CDN script */
(function(){
const LS={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const PAY={wa:'970590000000',paypalMe:'',cardLink:'',bank:''}; // fill paypalMe / cardLink / bank to enable them
/* الصور: محلية من مجلد images/ . لو الصورة مش موجودة بنرجع للنسخة الأونلاين تلقائياً (انظر معالج الأخطاء تحت) */
const LOCAL_DIR='images/';
const isPath=id=>/[\/:.]/.test(id);
const IMG = id => isPath(id)?id:`${LOCAL_DIR}${id}.jpg`;

const T = {
 ar:{
  promo:'شحن مجاني للطلبات فوق <b>300 ₪</b> · خصم 10% على أول طلب',
  nav_cats:'الأقسام',nav_shop:'المنتجات',nav_brands:'البراندات',nav_offer:'العروض',nav_contact:'تواصل معنا',nav_about:'من نحن',lk_t:'اللوك بوك',lk_p:'إطلالات كاملة جاهزة. اضغط على أي قطعة لتضيفها للسلة.',lk_pieces:'قطع الإطلالة',lk_all:'أضف الإطلالة كاملة',about_t:'قصة ميرا',about_p1:'بدأت ميرا سنة 2018 بمحل صغير في نابلس، وفكرتنا بسيطة: ملابس بجودة محترمة وسعر منطقي. اليوم بنوصّل لكل المدن، وبنختار كل قطعة بإيدينا قبل ما توصلك.',about_p2:'كل براند بنتعامل معه بنفحص عيّناته أولاً، وإذا القطعة ما عجبتك بتقدر تبدّلها خلال 14 يوم.',st_cust:'عميل سعيد',st_prod:'منتج',st_brand:'براند',st_year:'سنوات خبرة',faq_t:'أسئلة شائعة',faq_p:'ما لقيت جوابك؟ راسلنا وبنرد عليك بأسرع وقت.',faq_cta:'راسلنا على واتساب',
  h1a:'أناقة تبدأ',h1b:'من التفاصيل،',h1c:'وتكتمل بخطوتك.',
  hero_p:'ملابس وأحذية رجالية ونسائية من أفضل البراندات العالمية، مختارة بعناية لتناسب أسلوبك.',
  cta1:'تسوّق الآن',cta2:'تصفّح الأقسام',tag:'على تشكيلة الشتاء',
  cats_t:'تسوّق حسب القسم',cats_p:'أربعة أقسام، وكل واحد فيه أكتر من طلّة.',
  c_women:'نسائي',c_women_s:'فساتين، معاطف، وإطلالات يومية',c_men:'رجالي',c_men_s:'قمصان، جاكيتات، وبدلات',c_shoes:'أحذية',c_shoes_s:'رياضي وكلاسيك',c_brands:'براندات',c_brands_s:'ماركات أصلية',
  shop_t:'وصل حديثاً',f_all:'الكل',f_men:'رجالي',f_women:'نسائي',f_shoes:'أحذية',
  add:'أضف إلى السلة',added:'تمت الإضافة إلى السلة',view:'عرض',s_ph:'ابحث عن منتج أو براند…',s_hint:'ابدأ بالكتابة للبحث في المنتجات.',s_none:'ما لقينا نتائج. جرّب كلمة ثانية.',qv_desc:'قصّة مريحة وخامة عالية الجودة، تناسب الاستخدام اليومي والمناسبات.',qv_color:'اللون',qv_size:'المقاس',wa_tip:'راسلنا على واتساب',best_t:'الأكثر مبيعاً',best_p:'القطع اللي الكل بسأل عنها هالأسبوع. اسحب للتصفح.',ig_t:'شاهد الإطلالات',ig_p:'إطلالات من عملائنا على انستغرام @mira.store',ig_follow:'تابعنا',ig_shop:'تسوّق الإطلالة',ig_tag:'القطعة في الإطلالة',rv_t:'آراء عملائنا',rv_sum:'من 1,240 تقييم',rv_ver:'مشتري موثّق',wa_msg:'مرحباً ميرا، بدي أستفسر عن منتج.',
  offer_t:'تخفيضات الموسم',offer_p:'خصومات تصل إلى 40% على مختارات من الملابس والأحذية. العرض لفترة محدودة.',
  d:'يوم',h:'ساعة',m:'دقيقة',s:'ثانية',
  f1:'توصيل سريع',f1p:'لكل المدن خلال 2–4 أيام عمل.',f2:'إرجاع سهل',f2p:'استبدل أو أرجع خلال 14 يوم.',f3:'دفع آمن',f3p:'بطاقة أو الدفع عند الاستلام.',f4:'دعم مباشر',f4p:'فريقنا جاهز للرد على أسئلتك.',
  news_t:'خصم 10% على أول طلب',news_p:'اشترك بالنشرة واحصل على العروض أولاً بأول.',email:'بريدك الإلكتروني',join:'اشترك',subbed:'شكراً! تم الاشتراك.',
  ann1:'شحن مجاني للطلبات فوق ₪300',ann2:'استبدال سهل خلال 14 يوم',ann3:'خصم 10% على أول طلب — اشترك بالنشرة',t1:'براندات أصلية 100%',t1s:'من موردين معتمدين',t2:'توصيل سريع',t2s:'لكل المدن خلال 2–4 أيام',t3:'استبدال خلال 14 يوم',t3s:'بدون تعقيد',t4:'دفع آمن',t4s:'بطاقة أو عند الاستلام',cod:'الدفع عند الاستلام',f_acc:'إكسسوارات',brands_t:'براندات مميزة',brands_p:'ساعات ونظارات وحقائب ومجوهرات من أفضل الماركات.',shop_b:'تسوّق البراند',co_t:'إتمام الطلب',co_name:'الاسم الكامل',co_phone:'رقم الهاتف',co_city:'المدينة',co_addr:'العنوان بالتفصيل',co_note:'ملاحظات (اختياري)',co_pay:'طريقة الدفع',p_cod:'الدفع عند الاستلام',p_wa:'اطلب عبر واتساب وادفع لاحقاً',p_card:'بطاقة بنكية (رابط دفع آمن)',p_bank:'تحويل بنكي',co_place:'تأكيد الطلب',co_done:'تم تجهيز طلبك',co_send:'أرسل الطلب للمتجر عبر واتساب',co_payn:'ادفع الآن',co_hint:'اضغط على الزر لإرسال تفاصيل طلبك للمتجر وتأكيده.',co_id:'رقم الطلب',co_total:'المجموع',nav_new:'وصل حديثاً',nav_sale:'عروض -40%',f_sale:'عروض -40%',sg_t:'دليل المقاسات',fc_t:'الخامة والعناية',tag_studio:'صورة استوديو',tag_model:'على العارض',bud_t:'تسوّق حسب ميزانيتك',bud_p:'اختر الفئة السعرية المناسبة وشوف أفضل القطع.',bud_s:'تسوّق الآن',bud_1:'أقل من ₪200',bud_2:'₪200 – ₪400',bud_3:'أكثر من ₪400',rcv_t:'شاهدتها مؤخراً',ship_more:'أضف ₪{n} للحصول على شحن مجاني',ship_ok:'طلبك مؤهل للشحن المجاني',h2_badge:'مجموعة 2026 · وصلت الآن',co_sub:'المجموع الفرعي',co_ship:'التوصيل',co_free:'مجاني',er_req:'هذا الحقل مطلوب',er_phone:'أدخل رقم هاتف صحيح (9 إلى 15 رقماً)',co_close:'إغلاق',tag_angle:'زاوية أخرى',h360:'اسحب للتدوير',pc:'منتجات',foot_p:'متجر أزياء يجمع الأناقة والجودة بأسعار مناسبة.',dresses:'فساتين',jackets:'جاكيتات',city:'نابلس، فلسطين',nav_visit:'زورونا',vs_t:'زورونا في الفرع',vs_p:'تعال جرّب القطع بنفسك، وفريقنا بيساعدك تختار المقاس والإطلالة المناسبة.',vs_hours:'ساعات الدوام',vs_addr:'العنوان',vs_phone:'الهاتف',vs_dir:'الاتجاهات',vs_call:'اتصل بنا',vs_open:'مفتوح الآن',vs_closed:'مغلق الآن',vs_closes:'يغلق',vs_opens:'يفتح',vs_today:'اليوم',vs_tomorrow:'غداً',vs_shut:'مغلق',rights:'جميع الحقوق محفوظة.',
  cart:'سلة المشتريات',total:'المجموع',checkout:'إتمام الشراء',empty:'سلتك فارغة. ابدأ بإضافة منتج.',checked:'تم استلام طلبك، سنتواصل معك قريباً.',
  chat_name:'مساعد ميرا',chat_status:'متصل الآن',chat_ph:'اكتب رسالتك…',
  hi:'أهلاً فيك في ميرا! كيف بقدر أساعدك؟',
  q:['الشحن','الإرجاع','الدفع','المقاسات'],
  bot:{ship:'نوصّل لكل المدن خلال 2–4 أيام عمل، والشحن مجاني للطلبات فوق 300 ₪.',ret:'تقدر تستبدل أو ترجع المنتج خلال 14 يوم بشرط يكون بحالته الأصلية.',pay:'نقبل البطاقات البنكية والدفع عند الاستلام.',size:'كل منتج له جدول مقاسات. إذا بتحب ابعتلنا طولك ووزنك ونقترح عليك المقاس.',hello:'أهلاً وسهلاً! اسألني عن الشحن، الإرجاع، الدفع أو المقاسات.',def:'شكراً لرسالتك. اسألني عن الشحن أو الإرجاع أو الدفع أو المقاسات، أو راسلنا على hello@mira-store.com.'},
  kw:{ship:['شحن','توصيل','delivery'],ret:['ارجاع','إرجاع','استبدال','رجع'],pay:['دفع','بطاقة','سعر','كاش'],size:['مقاس','قياس','size'],hello:['هلا','مرحبا','اهلا','أهلا','سلام']}
 },
 en:{
  promo:'Free shipping over <b>₪300</b> · 10% off your first order',
  nav_cats:'Categories',nav_shop:'Shop',nav_brands:'Brands',nav_offer:'Offers',nav_contact:'Contact',nav_about:'About',lk_t:'The Lookbook',lk_p:'Complete looks, ready to wear. Tap any piece to add it to your cart.',lk_pieces:'Pieces in this look',lk_all:'Add the full look',about_t:'The MIRA story',about_p1:'MIRA started in 2018 as a small shop in Nablus with a simple idea: respectable quality at a fair price. Today we deliver to every city, and we pick each piece by hand before it reaches you.',about_p2:'We check samples from every brand first, and if something is not right for you, you can exchange it within 14 days.',st_cust:'Happy customers',st_prod:'Products',st_brand:'Brands',st_year:'Years of experience',faq_t:'Frequently asked questions',faq_p:'Did not find your answer? Message us and we will reply as soon as we can.',faq_cta:'Message us on WhatsApp',
  h1a:'Elegance starts',h1b:'in the details,',h1c:'and ends at your feet.',
  hero_p:'Men’s and women’s clothing and shoes from leading global brands, curated to match your style.',
  cta1:'Shop now',cta2:'Browse categories',tag:'on winter collection',
  cats_t:'Shop by category',cats_p:'Four departments, a look for every day.',
  c_women:'Women',c_women_s:'Dresses, coats and everyday looks',c_men:'Men',c_men_s:'Shirts, jackets and suits',c_shoes:'Shoes',c_shoes_s:'Sport and classic',c_brands:'Brands',c_brands_s:'Authentic labels',
  shop_t:'New arrivals',f_all:'All',f_men:'Men',f_women:'Women',f_shoes:'Shoes',
  add:'Add to cart',added:'Added to cart',view:'View',s_ph:'Search products or brands…',s_hint:'Start typing to search products.',s_none:'No results. Try another word.',qv_desc:'Comfortable fit and premium fabric, made for everyday wear and special occasions.',qv_color:'Color',qv_size:'Size',wa_tip:'Chat on WhatsApp',best_t:'Best sellers',best_p:'The pieces everyone is asking for this week. Drag to browse.',ig_t:'Shop the looks',ig_p:'Customer looks on Instagram @mira.store',ig_follow:'Follow us',ig_shop:'Shop this look',ig_tag:'Featured in this look',rv_t:'What customers say',rv_sum:'from 1,240 reviews',rv_ver:'Verified buyer',wa_msg:'Hello MIRA, I would like to ask about a product.',
  offer_t:'Season sale',offer_p:'Up to 40% off selected clothing and shoes. For a limited time.',
  d:'Days',h:'Hours',m:'Min',s:'Sec',
  f1:'Fast delivery',f1p:'To every city in 2–4 business days.',f2:'Easy returns',f2p:'Exchange or return within 14 days.',f3:'Secure payment',f3p:'Card or cash on delivery.',f4:'Live support',f4p:'Our team is ready to answer you.',
  news_t:'10% off your first order',news_p:'Join our newsletter and get offers first.',email:'Your email',join:'Join',subbed:'Thanks! You’re subscribed.',
  ann1:'Free shipping on orders over ₪300',ann2:'Easy exchange within 14 days',ann3:'10% off your first order — join the newsletter',t1:'100% authentic brands',t1s:'From authorized suppliers',t2:'Fast delivery',t2s:'To every city in 2–4 days',t3:'14-day exchange',t3s:'No hassle',t4:'Secure payment',t4s:'Card or cash on delivery',cod:'CASH ON DELIVERY',f_acc:'Accessories',brands_t:'Featured brands',brands_p:'Watches, eyewear, bags and jewelry from top labels.',shop_b:'Shop brand',co_t:'Checkout',co_name:'Full name',co_phone:'Phone number',co_city:'City',co_addr:'Full address',co_note:'Notes (optional)',co_pay:'Payment method',p_cod:'Cash on delivery',p_wa:'Order via WhatsApp, pay later',p_card:'Bank card (secure payment link)',p_bank:'Bank transfer',co_place:'Place order',co_done:'Your order is ready',co_send:'Send order to the store on WhatsApp',co_payn:'Pay now',co_hint:'Tap the button to send your order details to the store and confirm it.',co_id:'Order ID',co_total:'Total',nav_new:'New arrivals',nav_sale:'Sale -40%',f_sale:'Sale -40%',sg_t:'Size guide',fc_t:'Fabric & care',tag_studio:'Studio shot',tag_model:'On model',bud_t:'Shop by budget',bud_p:'Pick a price range and see the best pieces.',bud_s:'Shop now',bud_1:'Under ₪200',bud_2:'₪200 – ₪400',bud_3:'Over ₪400',rcv_t:'Recently viewed',ship_more:'Add ₪{n} more for free shipping',ship_ok:'Your order qualifies for free shipping',h2_badge:'The 2026 collection · just landed',co_sub:'Subtotal',co_ship:'Delivery',co_free:'Free',er_req:'This field is required',er_phone:'Enter a valid phone number (9–15 digits)',co_close:'Close',tag_angle:'Another angle',h360:'Drag to rotate',pc:'products',foot_p:'A fashion store that blends style and quality at fair prices.',dresses:'Dresses',jackets:'Jackets',city:'Nablus, Palestine',nav_visit:'Visit us',vs_t:'Visit our store',vs_p:'Come try the pieces in person. Our team will help you find the right size and look.',vs_hours:'Opening hours',vs_addr:'Address',vs_phone:'Phone',vs_dir:'Get directions',vs_call:'Call us',vs_open:'Open now',vs_closed:'Closed now',vs_closes:'closes',vs_opens:'opens',vs_today:'today',vs_tomorrow:'tomorrow',vs_shut:'Closed',rights:'All rights reserved.',
  cart:'Your cart',total:'Total',checkout:'Checkout',empty:'Your cart is empty. Add a product to start.',checked:'Order received. We will contact you soon.',
  chat_name:'MIRA Assistant',chat_status:'Online now',chat_ph:'Type your message…',
  hi:'Welcome to MIRA! How can I help you?',
  q:['Shipping','Returns','Payment','Sizes'],
  bot:{ship:'We deliver to every city in 2–4 business days. Shipping is free over ₪300.',ret:'You can exchange or return items within 14 days if they are in original condition.',pay:'We accept bank cards and cash on delivery.',size:'Each product has a size guide. Send us your height and weight and we will suggest a size.',hello:'Hello! Ask me about shipping, returns, payment or sizes.',def:'Thanks for your message. Ask about shipping, returns, payment or sizes, or email hello@mira-store.com.'},
  kw:{ship:['ship','deliver'],ret:['return','exchange','refund'],pay:['pay','card','price','cash'],size:['size','fit'],hello:['hi','hello','hey']}
 }
};

const COL={
 black:{ar:'أسود',en:'Black',h:'#1a1a1a'},navy:{ar:'كحلي',en:'Navy',h:'#1f2f4d'},sand:{ar:'رملي',en:'Sand',h:'#c9b79c'},white:{ar:'أبيض',en:'White',h:'#f2f2f0'},
 olive:{ar:'زيتي',en:'Olive',h:'#5b6b3c'},red:{ar:'أحمر',en:'Red',h:'#a63a3a'},rose:{ar:'وردي',en:'Rose',h:'#d9a4a4'},grey:{ar:'رمادي',en:'Grey',h:'#8a9296'},gold:{ar:'ذهبي',en:'Gold',h:'#c8a24a'},silver:{ar:'فضي',en:'Silver',h:'#c0c4c8'},brown:{ar:'بني',en:'Brown',h:'#6b4a2f'}
};
const SZ={os:['OS'],ring:['6','7','8','9'],top:['S','M','L','XL'],m:['40','41','42','43','44'],w:['36','37','38','39','40']};
/* BRAND_MEDIA: ضع هنا صور كل براند الحقيقية (روابط أو مسارات محلية). مثال:
   'Northline':{imgs:['img/northline/1.jpg','img/northline/2.jpg'],
     products:{1:{img:'img/northline/jacket.jpg',img2:'img/northline/jacket-2.jpg',
                  f360:{n:24,tpl:'img/northline/jacket/{n}.jpg'}}}}   // {n} = 01..24 */
const BRAND_MEDIA={};
const PRODUCTS=[
 {id:1,cat:'men',brand:'Northline',ar:'جاكيت شتوي',en:'Winter jacket',price:289,old:380,img:'1591047139829-d91aecb6caea',img2:'1551028719-00167b16eac5',colors:['black','navy','olive'],sizes:SZ.top},
 {id:2,cat:'men',brand:'Atelier 9',ar:'قميص كلاسيك',en:'Classic shirt',price:129,img:'1596755094514-f87e34085b2c',img2:'1602810318383-e386cc2a3ccf',colors:['white','navy','sand'],sizes:SZ.top},
 {id:3,cat:'women',brand:'Luna',ar:'فستان سهرة',en:'Evening dress',price:249,old:320,img:'1539008835657-9e8e9680c956',img2:'1515886657613-9f3515b0c78f',colors:['black','red','rose'],sizes:SZ.top},
 {id:4,cat:'women',brand:'Maison V',ar:'معطف أنيق',en:'Tailored coat',price:339,img:'1483985988355-763728e1935b',img2:'1539109136881-3be0616acf4b',colors:['sand','grey','black'],sizes:SZ.top},
 {id:5,cat:'shoes',brand:'Stride',ar:'حذاء رياضي',en:'Running sneaker',price:219,old:260,img:'1549298916-b41d501d3772',img2:'1542291026-7eec264c27ff',colors:['red','black','white'],sizes:SZ.m},
 {id:6,cat:'shoes',brand:'Stride',ar:'سنيكرز أبيض',en:'White sneaker',price:199,img:'1595950653106-6c9ebd614d3a',img2:'1600185365926-3a2ce3cdb9eb',colors:['white','grey','sand'],sizes:SZ.m},
 {id:7,cat:'shoes',brand:'Luna',ar:'حذاء كعب',en:'Heeled shoes',price:179,img:'1543163521-1bf539c55dd2',img2:'1535043934128-cf0b28d52f95',colors:['black','rose','red'],sizes:SZ.w},
 {id:8,cat:'shoes',brand:'Northline',ar:'حذاء كاجوال',en:'Casual sneaker',price:239,img:'1491553895911-0055eca6402d',img2:'1608231387042-66d1773070a5',colors:['grey','navy','black'],sizes:SZ.m},
 {id:9,cat:'acc',brand:'Chrono & Co',ar:'ساعة رجالية ستانلس',en:'Steel chronograph watch',price:890,old:1050,img:'1523275335684-37898b6baf30',img2:'1524592094714-0f0654e20314',colors:['silver','black','gold'],sizes:SZ.os},
 {id:10,cat:'acc',brand:'Chrono & Co',ar:'ساعة جلد كلاسيك',en:'Classic leather watch',price:540,img:'1524592094714-0f0654e20314',img2:'1547996160-81dfa63595aa',colors:['brown','black'],sizes:SZ.os},
 {id:11,cat:'acc',brand:'Vista Optics',ar:'نظارة شمسية أفياتور',en:'Aviator sunglasses',price:329,img:'1572635196237-14b3f281503f',img2:'1511499767150-a48a237f0083',colors:['gold','black'],sizes:SZ.os},
 {id:12,cat:'acc',brand:'Vista Optics',ar:'نظارة شمسية نسائية',en:'Cat-eye sunglasses',price:299,old:380,img:'1511499767150-a48a237f0083',img2:'1572635196237-14b3f281503f',colors:['black','rose'],sizes:SZ.os},
 {id:13,cat:'acc',brand:'Voyage Leather',ar:'حقيبة جلد رجالية',en:'Leather messenger bag',price:459,old:560,img:'1548036328-c9fa89d128fa',img2:'1553062407-98eeb64c6a62',colors:['brown','black'],sizes:SZ.os},
 {id:14,cat:'acc',brand:'Voyage Leather',ar:'حقيبة ظهر عملية',en:'City backpack',price:349,img:'1553062407-98eeb64c6a62',img2:'1548036328-c9fa89d128fa',colors:['black','navy','olive'],sizes:SZ.os},
 {id:15,cat:'acc',brand:'Maison V',ar:'حقيبة يد نسائية',en:'Women’s handbag',price:389,img:'1584917865442-de89df76afd3',img2:'1548036328-c9fa89d128fa',colors:['sand','black','red'],sizes:SZ.os},
 {id:16,cat:'acc',brand:'Aurelia Jewels',ar:'خاتم سوليتير',en:'Solitaire ring',price:650,img:'1605100804763-247f67b3557e',img2:'1515562141207-7a88fb7ce338',colors:['gold','silver'],sizes:SZ.ring},
 {id:17,cat:'acc',brand:'Aurelia Jewels',ar:'عقد ذهبي',en:'Gold necklace',price:480,old:590,img:'1599643478518-a784e5dc4c8f',img2:'1515562141207-7a88fb7ce338',colors:['gold','silver'],sizes:SZ.os},
 {id:18,cat:'acc',brand:'Pearl & Gold',ar:'أقراط لؤلؤ',en:'Pearl earrings',price:260,img:'1535632066927-ab7c9ab60908',img2:'1599643478518-a784e5dc4c8f',colors:['white','gold'],sizes:SZ.os},
 {id:19,cat:'acc',brand:'Pearl & Gold',ar:'سوار ذهبي',en:'Gold bracelet',price:340,img:'1611591437281-460bfbe1220a',img2:'1535632066927-ab7c9ab60908',colors:['gold','silver'],sizes:SZ.os}
];
PRODUCTS.forEach(p=>{const m=(BRAND_MEDIA[p.brand]||{}).products;if(m&&m[p.id])Object.assign(p,m[p.id])});
const BRANDS=['NORTHLINE','LUNA','ATELIER 9','STRIDE','MAISON V','OAK & CO','VELA','KORA','CHRONO & CO','VISTA OPTICS','VOYAGE LEATHER','AURELIA JEWELS','PEARL & GOLD','FJORD','ZENITH','SOLACE','RIVET','PALOMA','CASCADE','ORION'];

let lang=LS.get('lang')||'ar', filter='all', cart=[], favs=new Set();
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const t=k=>T[lang][k];

/* image fallback: محلي ← أونلاين ← إخفاء/مكان فاضي */
const PH='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"></svg>');
document.addEventListener('error',e=>{
  const el=e.target;
  if(!el||el.tagName!=='IMG')return;
  const m=!el.dataset.fb&&/(?:^|\/)images\/(avatars\/)?(\d{10,13}-[0-9a-f]{12})\.jpg$/.exec(el.getAttribute('src')||'');
  if(m){el.dataset.fb='1';el.src='https://images.unsplash.com/photo-'+m[2]+(m[1]?'?auto=format&fit=crop&w=120&h=120&q=80':'?auto=format&fit=crop&w=1200&q=80');return}
  if(el.classList.contains('alt')){el.remove();return}
  if(el.dataset.ph)return;
  el.dataset.ph='1';el.src=PH;el.closest('.imgbox')?.classList.add('noimg');
},true);

/* visit us: map + hours (edit STORE below; set hasBranch:false to hide the section) */
const STORE={
  hasBranch:true,
  tz:'Asia/Hebron',
  phone:'+970 59 000 0000', tel:'+970590000000',
  addr:{ar:'وسط البلد، نابلس، فلسطين',en:'Downtown, Nablus, Palestine'},
  mapQuery:'Downtown Nablus, Palestine',          // address or "lat,lng" for an exact pin
  // index 0 = Sunday ... 6 = Saturday; [open, close] in minutes from midnight; null = closed
  hours:[[600,1260],[600,1260],[600,1260],[600,1260],[600,1260],[840,1260],[600,1260]]
};
const DAYN={ar:['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],en:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']};
const fmtT=m=>{const h=Math.floor(m/60),mi=m%60,pm=h>=12;return (h%12||12)+':'+String(mi).padStart(2,'0')+' '+(lang==='ar'?(pm?'م':'ص'):(pm?'PM':'AM'))};
function storeNow(){
  try{
    const p=new Intl.DateTimeFormat('en-US',{timeZone:STORE.tz,weekday:'short',hour:'numeric',minute:'numeric',hourCycle:'h23'}).formatToParts(new Date());
    const g=k=>p.find(x=>x.type===k).value;
    return{d:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday')),m:+g('hour')*60+ +g('minute')};
  }catch(e){const n=new Date();return{d:n.getDay(),m:n.getHours()*60+n.getMinutes()}}
}
function renderVisit(){
  const sec=$('#visit'),nv=$('#navVisit');
  if(!STORE.hasBranch){sec.hidden=true;nv.hidden=true;return}
  const {d,m}=storeNow(),h=STORE.hours[d];
  let open=false,msg='';
  if(h&&m>=h[0]&&m<h[1]){open=true;msg=t('vs_open')+' · '+t('vs_closes')+' '+fmtT(h[1])}
  else{
    for(let i=0;i<=7;i++){
      const dd=(d+i)%7,hh=STORE.hours[dd];
      if(!hh||(i===0&&m>=hh[0]))continue;
      const when=i===0?t('vs_today'):i===1?t('vs_tomorrow'):DAYN[lang][dd];
      msg=t('vs_closed')+' · '+t('vs_opens')+' '+when+' '+fmtT(hh[0]);break;
    }
    if(!msg)msg=t('vs_closed');
  }
  const b=$('#openNow');b.textContent=msg;b.classList.toggle('closed',!open);
  const order=lang==='ar'?[6,0,1,2,3,4,5]:[1,2,3,4,5,6,0];
  $('#hours').innerHTML=order.map(i=>{const x=STORE.hours[i];return `<li class="${i===d?'today':''} ${x?'':'off'}"><span>${DAYN[lang][i]}</span><span>${x?fmtT(x[0])+' – '+fmtT(x[1]):t('vs_shut')}</span></li>`}).join('');
  $('#vAddr').textContent=STORE.addr[lang];
  $('#vPhone').textContent=STORE.phone;
  $('#vCall').href='tel:'+STORE.tel;
  $('#vDir').href='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(STORE.mapQuery);
  const f=$('#vMap');if(!f.getAttribute('src'))f.src='https://www.google.com/maps?q='+encodeURIComponent(STORE.mapQuery)+'&z=16&output=embed';
}
setInterval(()=>{if(STORE.hasBranch)renderVisit()},60000);

function applyLang(){
  document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  $$('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
  $$('[data-i18n-html]').forEach(e=>e.innerHTML=t(e.dataset.i18nHtml));
  $$('[data-i18n-ph]').forEach(e=>e.placeholder=t(e.dataset.i18nPh));
  $('#lang').textContent=lang==='ar'?'EN':'عربي';
  document.title=lang==='ar'?'ميرا | متجر أزياء':'MIRA | Fashion Store';
  renderFilters();renderGrid();renderCart();renderQuicks();renderCount();renderSearch();renderBest();renderReviews();renderVisit();if($('#qv').classList.contains('open'))renderQV();const wa=$('#wa');wa.dataset.tip=t('wa_tip');wa.href='https://wa.me/970590000000?text='+encodeURIComponent(t('wa_msg'));const cl=$('#crl');if(cl)cl.textContent=t('view');renderLookbook();renderFaq();$('#faqWa').href=wa.href;
  if(!$('#msgs').children.length)botSay(t('hi'),true);
}
$('#lang').onclick=()=>{lang=lang==='ar'?'en':'ar';LS.set('lang',lang);applyLang();$('#msgs').innerHTML='';botSay(t('hi'),true)};

/* marquee */
const SHAPES=['<circle cx="21" cy="21" r="18"/>','<rect x="4" y="4" width="34" height="34" rx="3"/>','<path d="M21 3l18 18-18 18L3 21z"/>','<path d="M21 3l17 10v16L21 39 4 29V13z"/>','<path d="M21 4l18 32H3z"/>','<rect x="4" y="4" width="34" height="34" rx="17"/>'];
const logo=(b,i)=>`<svg viewBox="0 0 42 42" aria-hidden="true">${SHAPES[i%SHAPES.length]}<text x="21" y="26.5" text-anchor="middle">${b[0]}</text></svg>`;
$('#track').innerHTML=[...BRANDS,...BRANDS].map((b,i)=>`<span title="${b}">${logo(b,i%BRANDS.length)}${b}</span>`).join('');

/* filters + grid */
const SEL={};PRODUCTS.forEach(p=>SEL[p.id]={c:0,s:0});
function renderFilters(){
  $('#filters').innerHTML=['all','men','women','shoes','acc','sale'].map(f=>`<button class="chip ${f===filter?'active':''}" data-f="${f}">${t('f_'+f)}</button>`).join('');
  $$('#filters .chip').forEach(b=>b.onclick=()=>{filter=b.dataset.f;renderFilters();renderGrid()});
}
const heart='<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>';
const eye='<svg viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
function swatches(p,cls){return `<div class="sw ${cls||''}">${p.colors.map((c,i)=>`<button data-sc="${p.id}" data-i="${i}" title="${COL[c][lang]}" aria-label="${COL[c][lang]}" class="${SEL[p.id].c===i?'on':''}" style="background:${COL[c].h}"></button>`).join('')}</div>`}
function sizes(p,cls){return `<div class="sz ${cls||''}">${p.sizes.map((z,i)=>`<button data-ss="${p.id}" data-i="${i}" class="${SEL[p.id].s===i?'on':''}">${z}</button>`).join('')}</div>`}
function renderGrid(){
  const list=PRODUCTS.filter(p=>matchF(p));
  $('#grid').innerHTML=list.map((p,i)=>`
    <article class="card" data-id="${p.id}" style="animation-delay:${i*60}ms">
      <div class="imgbox">
        <img loading="lazy" src="${IMG(p.img)}" alt="${p[lang]}">
        <img class="alt" loading="lazy" src="${IMG(p.img2)}" alt="">
        ${p.old?`<span class="sale">-${Math.round((1-p.price/p.old)*100)}%</span>`:''}
        <button class="fav ${favs.has(p.id)?'on':''}" data-id="${p.id}" aria-label="Favorite">${heart}</button>
        <button class="qvbtn" data-qv="${p.id}" aria-label="Quick view">${eye}</button>
        <button class="quick" data-add="${p.id}">${t('add')}</button>
      </div>
      <div class="info"><small>${p.brand}</small><h4>${p[lang]}</h4>
      <div class="price">₪${p.price}${p.old?`<s>₪${p.old}</s>`:''}</div>
      <div class="copts">${swatches(p,'s')}${sizes(p,'s')}</div></div>
    </article>`).join('');
}
function sync(id){
  const s=SEL[id],p=PRODUCTS.find(x=>x.id===id);
  $$(`[data-sc="${id}"]`).forEach(b=>b.classList.toggle('on',+b.dataset.i===s.c));
  $$(`[data-ss="${id}"]`).forEach(b=>b.classList.toggle('on',+b.dataset.i===s.s));
  const c=$('#qvc');if(c&&qvId===id)c.textContent=COL[p.colors[s.c]][lang];
}

$$('[data-f]').forEach(a=>a.addEventListener('click',()=>{if(a.dataset.f){filter=a.dataset.f;renderFilters();renderGrid()}}));

/* cart */
function flyToCart(id){try{
  const src=document.querySelector('.card[data-id="'+id+'"] img')||$('#qvm');const cb=$('#cartBtn');if(!src||!cb||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  const a=src.getBoundingClientRect(),b=cb.getBoundingClientRect();
  const f=document.createElement('img');f.src=src.currentSrc||src.src;f.className='fly';
  f.style.cssText=`left:${a.left+a.width/2-36}px;top:${a.top+a.height/2-36}px`;document.body.appendChild(f);
  const dx=b.left+b.width/2-(a.left+a.width/2),dy=b.top+b.height/2-(a.top+a.height/2);
  f.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${dx*.55}px,${dy*.55-90}px) scale(.8)`,opacity:1,offset:.5},{transform:`translate(${dx}px,${dy}px) scale(.12)`,opacity:.3}],{duration:850,easing:'cubic-bezier(.5,0,.2,1)'}).onfinish=()=>{f.remove();cb.classList.remove('bump');void cb.offsetWidth;cb.classList.add('bump')};
}catch(e){}}
function addToCart(id,qty){
  qty=qty||1;
  const s=SEL[id],p=PRODUCTS.find(x=>x.id===id),color=p.colors[s.c],size=p.sizes[s.s];
  const it=cart.find(c=>c.id===id&&c.color===color&&c.size===size);
  it?it.qty+=qty:cart.push({id,color,size,qty});
  renderCart();flyToCart(id);const b=$('#badge');b.classList.add('pop');setTimeout(()=>b.classList.remove('pop'),300);toast(t('added'));
}
function renderCart(){
  const n=cart.reduce((a,c)=>a+c.qty,0);$('#badge').textContent=n;
  $('#items').innerHTML=cart.length?cart.map((c,i)=>{const p=PRODUCTS.find(x=>x.id===c.id);
    return `<div class="item"><div class="imgbox"><img src="${IMG(p.img)}" alt=""></div><div class="t"><b>${p[lang]}</b><br><small>${p.brand} · ${COL[c.color][lang]} · ${c.size} · ×${c.qty}</small><div class="price">₪${p.price*c.qty}</div></div><button class="x" data-rm="${i}" aria-label="Remove">✕</button></div>`}).join(''):`<p class="empty">${t('empty')}</p>`;
  $('#total').textContent='₪'+cart.reduce((a,c)=>a+PRODUCTS.find(x=>x.id===c.id).price*c.qty,0);
  $$('[data-rm]').forEach(b=>b.onclick=()=>{cart.splice(+b.dataset.rm,1);renderCart()});
}
const openCart=o=>{$('#drawer').classList.toggle('open',o);$('#ov').classList.toggle('open',o)};
function closeAll(){['#drawer','#nav','#sr'].forEach(x=>$(x).classList.remove('open'));$('#ov').classList.remove('open')}
$('#cartBtn').onclick=()=>openCart(true);
$('#closeCart').onclick=$('#ov').onclick=closeAll;

$('#burger').onclick=()=>{$('#nav').classList.add('open');$('#ov').classList.add('open')};
$$('#nav a').forEach(a=>a.onclick=closeAll);

function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('show');clearTimeout(toast.i);toast.i=setTimeout(()=>e.classList.remove('show'),2200)}
$('#nf').onsubmit=e=>{e.preventDefault();e.target.reset();toast(t('subbed'))};

/* countdown */
const end=Date.now()+1000*60*60*24*5;
function renderCount(){
  const d=Math.max(0,end-Date.now()),v=[d/864e5,d/36e5%24,d/6e4%60,d/1e3%60].map(x=>String(Math.floor(x)).padStart(2,'0'));
  const c=$('#count');if(!c.children.length||c.dataset.l!==lang){c.innerHTML=['d','h','m','s'].map((k,i)=>`<div><b>${v[i]}</b><small>${t(k)}</small></div>`).join('');c.dataset.l=lang;c._v=v.slice()}
  else v.forEach((x,i)=>{if(c._v[i]!==x){const b=c.children[i].firstChild;b.textContent=x;b.classList.remove('flip');void b.offsetWidth;b.classList.add('flip');c._v[i]=x}});
}
setInterval(renderCount,1000);

/* header + reveal */
/* parallax + progress + back to top */
$$('.hero-art .main,.cat .imgbox,.banner .imgbox,.about-main').forEach(e=>e.classList.add('px'));
const PX=$$('.px'),reduceMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;
function parallax(){
  if(reduceMotion)return;
  const vh=innerHeight;
  PX.forEach(el=>{
    if(el.closest('.hs-on'))return;
    const r=el.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;
    const img=el.querySelector('img');if(!img)return;
    const pr=(r.top+r.height/2-vh/2)/vh;
    img.style.transform=`translate3d(0,${(-pr*r.height*.12).toFixed(1)}px,0)`;
  });
}
const toTop=$('#toTop'),sp=$('#sp');let tick=false;
function onScroll(){
  const y=scrollY,max=document.documentElement.scrollHeight-innerHeight,p=max>0?Math.min(1,y/max):0;
  $('#hdr').classList.toggle('scrolled',y>10);
  sp.style.transform=`scaleX(${p})`;
  toTop.style.setProperty('--p',(p*100).toFixed(1));
  toTop.classList.toggle('show',y>700);
  parallax();tick=false;
}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});
addEventListener('resize',onScroll);
toTop.onclick=()=>window.goTo?goTo(0):scrollTo({top:0,behavior:'smooth'});

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach((e,i)=>{e.style.transitionDelay=(i%4)*80+'ms';io.observe(e)});

/* chat */
const chat=$('#chat');
$('#fab').onclick=()=>{chat.classList.toggle('open');if(chat.classList.contains('open'))$('#ci').focus()};
$('#closeChat').onclick=()=>chat.classList.remove('open');
function addMsg(txt,who){const d=document.createElement('div');d.className='m '+who;d.textContent=txt;$('#msgs').appendChild(d);$('#msgs').scrollTop=1e5;return d}
function botSay(txt,instant){
  if(instant)return addMsg(txt,'bot');
  const ty=document.createElement('div');ty.className='m bot typing';ty.innerHTML='<i></i><i></i><i></i>';$('#msgs').appendChild(ty);$('#msgs').scrollTop=1e5;
  setTimeout(()=>{ty.remove();addMsg(txt,'bot')},900);
}
function reply(text){
  const s=text.toLowerCase(),kw=t('kw');
  for(const k in kw)if(kw[k].some(w=>s.includes(w)))return botSay(t('bot')[k]);
  botSay(t('bot').def);
}
function renderQuicks(){
  const keys=['ship','ret','pay','size'];
  $('#quicks').innerHTML=t('q').map((q,i)=>`<button data-k="${keys[i]}">${q}</button>`).join('');
  $$('#quicks button').forEach(b=>b.onclick=()=>{addMsg(b.textContent,'me');botSay(t('bot')[b.dataset.k])});
}
$('#cf').onsubmit=e=>{e.preventDefault();const v=$('#ci').value.trim();if(!v)return;addMsg(v,'me');$('#ci').value='';reply(v)};

/* ---- best sellers ---- */
const BEST=[5,3,1,6,4,2,8,7];
function renderBest(){
  $('#bsTrack').innerHTML=BEST.map((id,i)=>{const p=PRODUCTS.find(x=>x.id===id);return `
    <article class="card" data-id="${p.id}">
      <div class="imgbox">
        <img loading="lazy" draggable="false" src="${IMG(p.img)}" alt="${p[lang]}">
        <img class="alt" draggable="false" src="${IMG(p.img2)}" alt="">
        <span class="rank">${i+1}</span>
        <button class="quick" data-add="${p.id}">${t('add')}</button>
      </div>
      <div class="info"><small>${p.brand}</small><h4>${p[lang]}</h4><div class="price">₪${p.price}${p.old?`<s>₪${p.old}</s>`:''}</div></div>
    </article>`}).join('');
  if(window.bsUpdate)window.bsUpdate();
}
(function(){
  const tr=$('#bsTrack'),fill=$('#bsFill');let down=false,sx=0,sl=0,moved=0;
  function upd(){
    const sw=tr.scrollWidth,cw=tr.clientWidth,max=sw-cw,w=sw>0?Math.min(100,cw/sw*100):100,pos=max>0?Math.min(1,Math.abs(tr.scrollLeft)/max):0;
    fill.style.width=w+'%';fill.style.marginInlineStart=(pos*(100-w))+'%';
  }
  window.bsUpdate=upd;
  tr.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0)return;down=true;moved=0;sx=e.clientX;sl=tr.scrollLeft;tr.classList.add('dragging')});
  addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;moved=Math.max(moved,Math.abs(dx));tr.scrollLeft=sl-dx});
  addEventListener('pointerup',()=>{if(!down)return;down=false;tr.classList.remove('dragging');setTimeout(()=>{moved=0},80)});
  tr.addEventListener('click',e=>{if(moved>6){e.stopPropagation();e.preventDefault()}},true);
  tr.addEventListener('dragstart',e=>e.preventDefault());
  tr.addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);
  $$('[data-bs]').forEach(b=>b.onclick=()=>{
    const rtl=document.documentElement.dir==='rtl';
    tr.scrollBy({left:+b.dataset.bs*(rtl?-1:1)*tr.clientWidth*.8,behavior:'smooth'});
  });
})();

/* ---- instagram looks ---- */
const LOOKS=[
 {img:'1469334031218-e382a71b716b',p:3,likes:1240,com:48,ar:'إطلالة مسائية: فستان أنيق مع كعب عالي.',en:'Evening look: an elegant dress with heels.'},
 {img:'1529139574466-a303027c1d8b',p:4,likes:980,com:31,ar:'معطف رملي لأيام الشتاء الباردة.',en:'A sand coat for cold winter days.'},
 {img:'1509631179647-0177331693ae',p:7,likes:2150,com:76,ar:'أناقة بسيطة تناسب كل المناسبات.',en:'Simple elegance for every occasion.'},
 {img:'1496747611176-843222e1e57c',p:3,likes:1730,com:52,ar:'ألوان دافئة وقصّة مريحة.',en:'Warm tones and a relaxed cut.'},
 {img:'1488161628813-04466f872be2',p:1,likes:860,com:24,ar:'جاكيت شتوي بستايل يومي.',en:'A winter jacket, everyday style.'},
 {img:'1516826957135-700dedea698c',p:5,likes:1510,com:63,ar:'سنيكرز مريح لإطلالة رياضية.',en:'Comfortable sneakers for a sporty look.'}
];
const fmtK=n=>n>=1000?(n/1000).toFixed(1)+'K':n;
const igIcon='<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>';
const cmtIcon='<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg>';
$('#ig').innerHTML=LOOKS.map((l,i)=>`<button class="ig-item rv" data-look="${i}" aria-label="Instagram"><div class="imgbox"><img loading="lazy" src="${IMG(l.img)}" alt=""></div><span class="ig-ico">${igIcon}</span><span class="ig-stats"><span>${heart}${fmtK(l.likes)}</span><span>${cmtIcon}${l.com}</span></span></button>`).join('');
$$('#ig .rv').forEach((e,i)=>{e.style.transitionDelay=(i%6)*70+'ms';io.observe(e)});
function openLook(i){
  const l=LOOKS[i],p=PRODUCTS.find(x=>x.id===l.p);
  $('#lbbox').innerHTML=`
    <button class="qv-x ibtn" data-qvx aria-label="Close">✕</button>
    <div class="qv-img"><div class="imgbox"><img src="${IMG(l.img)}" alt=""></div></div>
    <div class="qv-body">
      <div class="ig-user"><div class="av" style="width:44px;height:44px;border-radius:50%;background:var(--brass);color:#fff;display:grid;place-items:center;font-family:var(--display);font-weight:700">M</div><div><b>@mira.store</b><small style="display:block">Instagram</small></div></div>
      <p>${l[lang]}</p>
      <div class="ig-meta"><span>${heart}${l.likes.toLocaleString()}</span><span>${cmtIcon}${l.com}</span></div>
      <div class="opt-t">${t('ig_tag')}</div>
      <button class="sr-item" data-qv="${p.id}"><div class="imgbox"><img src="${IMG(p.img)}" alt=""></div><div><small>${p.brand}</small><div><b>${p[lang]}</b></div><div class="price">₪${p.price}</div></div></button>
      <button class="btn primary" data-qv="${p.id}" style="width:100%;justify-content:center">${t('ig_shop')}</button>
    </div>`;
  $('#lb').classList.add('open');document.body.style.overflow='hidden';
}

/* ---- reviews slider ---- */
const REVIEWS=[
 {av:'1494790108377-be9c29b29330',r:5,p:3,city:{ar:'نابلس',en:'Nablus'},name:{ar:'سارة م.',en:'Sara M.'},ar:'الفستان وصلني خلال يومين وكان أحلى من الصور. القماش ممتاز والمقاس مضبوط.',en:'The dress arrived in two days and looked even better than the photos. Great fabric and a perfect fit.'},
 {av:'1507003211169-0a1dd7228f2d',r:5,p:1,city:{ar:'رام الله',en:'Ramallah'},name:{ar:'أحمد ك.',en:'Ahmad K.'},ar:'اشتريت الجاكيت الشتوي وطلع دافي كثير ومش تقيل. والشحن كان سريع.',en:'I bought the winter jacket and it is very warm without being heavy. Shipping was fast too.'},
 {av:'1438761681033-6461ffad8d80',r:4,p:7,city:{ar:'عمّان',en:'Amman'},name:{ar:'ليلى ح.',en:'Layla H.'},ar:'حذاء مريح وشكله أنيق. تمنيت ألوان أكثر، بس الجودة بتستاهل.',en:'Comfortable and elegant shoes. I wished for more colors, but the quality is worth it.'},
 {av:'1500648767791-00dcc994a43e',r:5,p:2,city:{ar:'القدس',en:'Jerusalem'},name:{ar:'محمد ع.',en:'Mohammad A.'},ar:'بدّلت المقاس بسهولة وبدون أي مشكلة. وفريق الدعم رد عليّ بسرعة عالواتساب.',en:'Exchanging the size was easy and hassle-free. The support team replied quickly on WhatsApp.'},
 {av:'1544005313-94ddf0286df2',r:5,p:4,city:{ar:'بيت لحم',en:'Bethlehem'},name:{ar:'رنا ص.',en:'Rana S.'},ar:'المعطف أنيق وخامته فخمة، وجاني عليه كم تعليق حلو.',en:'The coat is elegant with a rich fabric, and I got several compliments on it.'},
 {av:'1472099645785-5658abf4ff4e',r:5,p:6,city:{ar:'الخليل',en:'Hebron'},name:{ar:'يوسف ن.',en:'Yousef N.'},ar:'سنيكرز مريح للمشي اليومي، والسعر مناسب مقارنة بالجودة.',en:'Comfortable sneakers for daily walking, and the price is fair for the quality.'}
];
const starSvg=on=>`<svg viewBox="0 0 24 24" class="${on?'on':''}"><path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/></svg>`;
const starsHTML=n=>[1,2,3,4,5].map(i=>starSvg(i<=n)).join('');
$('#sumStars').innerHTML=starsHTML(5);
let rvI=0,rvHover=false;
const rvPV=()=>innerWidth>=980?3:innerWidth>=640?2:1;
function renderReviews(){
  $('#rvT').innerHTML=REVIEWS.map(r=>{const p=PRODUCTS.find(x=>x.id===r.p);return `
    <div class="rev-slide"><article class="rev-card">
      <div class="stars">${starsHTML(r.r)}</div>
      <p>${r[lang]}</p>
      <div class="rev-foot">
        <img class="rev-av" loading="lazy" src="${LOCAL_DIR}avatars/${r.av}.jpg" alt="${r.name[lang]}">
        <div><b>${r.name[lang]}</b><small>${r.city[lang]} · ${t('rv_ver')}</small></div>
        <button class="rev-prod" data-qv="${p.id}" aria-label="${p[lang]}"><div class="imgbox"><img src="${IMG(p.img)}" alt=""></div></button>
      </div>
    </article></div>`}).join('');
  rvLayout();
}
function rvLayout(){
  const n=REVIEWS.length,v=rvPV(),max=n-v,rtl=document.documentElement.dir==='rtl';
  rvI=Math.min(rvI,max);
  const T=$('#rvT');T.style.setProperty('--pv',v);
  T.style.transform=`translateX(${(rtl?1:-1)*rvI*100/v}%)`;
  $('#rvD').innerHTML=Array.from({length:max+1},(_,i)=>`<button data-rvd="${i}" class="${i===rvI?'on':''}" aria-label="${i+1}"></button>`).join('');
}
function rvGo(i){const max=REVIEWS.length-rvPV();rvI=i>max?0:i<0?max:i;rvLayout()}
$('#rvPrev').onclick=()=>rvGo(rvI-1);
$('#rvNext').onclick=()=>rvGo(rvI+1);
$('#rvD').addEventListener('click',e=>{const b=e.target.closest('[data-rvd]');if(b)rvGo(+b.dataset.rvd)});
addEventListener('resize',rvLayout);
(function(){
  const sl=$('#rvS');let x0=null;
  sl.addEventListener('pointerdown',e=>{x0=e.clientX});
  addEventListener('pointerup',e=>{
    if(x0===null)return;const dx=e.clientX-x0;x0=null;
    if(Math.abs(dx)>50){const rtl=document.documentElement.dir==='rtl';rvGo(rvI+((dx<0)!==rtl?1:-1))}
  });
  sl.addEventListener('mouseenter',()=>rvHover=true);sl.addEventListener('mouseleave',()=>rvHover=false);
  if(!matchMedia('(prefers-reduced-motion:reduce)').matches)setInterval(()=>{if(!rvHover&&!document.hidden)rvGo(rvI+1)},5000);
})();

/* ---- lookbook ---- */
const IMGW=(id,w)=>IMG(id);
const LKS=[
 {name:{ar:'المدينة',en:'City'},img:'1617137968427-85924c800a22',items:[{p:1,x:50,y:36},{p:2,x:50,y:50},{p:8,x:48,y:90}]},
 {name:{ar:'السهرة',en:'Evening'},img:'1485968579580-b6d095142e6e',items:[{p:4,x:32,y:34},{p:3,x:50,y:56},{p:7,x:52,y:92}]},
 {name:{ar:'الرياضة',en:'Active'},img:'1483721310020-03333e577078',items:[{p:1,x:50,y:36},{p:5,x:42,y:90},{p:6,x:60,y:92}]}
];
let lkI=0;
const plusIc='<svg class="pl" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg><svg class="ck" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function renderLookbook(){
  const L=LKS[lkI],items=L.items.map(it=>({it,p:PRODUCTS.find(x=>x.id===it.p)}));
  $('#lkTabs').innerHTML=LKS.map((l,i)=>`<button class="chip ${i===lkI?'active':''}" data-lkt="${i}">${l.name[lang]}</button>`).join('');
  $('#lk').innerHTML=`
    <div class="lk-img">
      <div class="imgbox lk-main"><img src="${IMGW(L.img,1100)}" alt="${L.name[lang]}"></div>
      <div class="lk-pins">${items.map(({it,p},i)=>`<button class="pin" data-lbadd="${p.id}" data-hl="${i}" style="left:${it.x}%;top:${it.y}%;--i:${i}" aria-label="${p[lang]}">${plusIc}<span class="pin-tip">${p[lang]} · ₪${p.price}</span></button>`).join('')}</div>
    </div>
    <div class="lk-list">
      <h3 class="display">${t('lk_pieces')}</h3>
      ${items.map(({p},i)=>`<button class="lk-row" data-lbadd="${p.id}" data-hl="${i}"><div class="imgbox"><img loading="lazy" src="${IMG(p.img)}" alt=""></div><div><small>${p.brand}</small><b>${p[lang]}</b><div class="price">₪${p.price}${p.old?`<s>₪${p.old}</s>`:''}</div></div><span class="plus">${plusIc}</span></button>`).join('')}
      <button class="btn primary lk-all" data-lkall>${t('lk_all')}</button>
    </div>`;
}
(function(){
  const box=$('#lk');
  box.addEventListener('mouseover',e=>{
    const el=e.target.closest('[data-hl]');
    $$('#lk .hl').forEach(x=>x.classList.remove('hl'));
    if(el)$$(`#lk [data-hl="${el.dataset.hl}"]`).forEach(x=>x.classList.add('hl'));
  });
  box.addEventListener('mouseleave',()=>$$('#lk .hl').forEach(x=>x.classList.remove('hl')));
})();

/* ---- about counters ---- */
(function(){
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const run=el=>{
    const to=+el.dataset.count;
    if(reduce){el.textContent=to.toLocaleString('en-US');return}
    const t0=performance.now(),dur=1800;
    (function step(now){
      const k=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-k,4);
      el.textContent=Math.round(to*e).toLocaleString('en-US');
      if(k<1)requestAnimationFrame(step);
    })(t0);
  };
  const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);o.unobserve(e.target)}}),{threshold:.6});
  $$('[data-count]').forEach(e=>o.observe(e));
})();

/* ---- faq ---- */
const FAQ=[
 {q:{ar:'كم يستغرق التوصيل؟',en:'How long does delivery take?'},a:{ar:'نوصّل لكل المدن خلال 2–4 أيام عمل، والشحن مجاني للطلبات فوق 300 ₪.',en:'We deliver to every city in 2–4 business days, and shipping is free over ₪300.'}},
 {q:{ar:'كيف أعرف مقاسي؟',en:'How do I find my size?'},a:{ar:'كل منتج فيه اختيار للمقاس. وإذا مش متأكد ابعتلنا طولك ووزنك على واتساب ونقترح عليك المقاس الأنسب.',en:'Every product has a size selector. If you are unsure, send us your height and weight on WhatsApp and we will suggest the best size.'}},
 {q:{ar:'هل أقدر أرجع أو أبدّل المنتج؟',en:'Can I return or exchange an item?'},a:{ar:'أكيد، خلال 14 يوم من الاستلام بشرط يكون بحالته الأصلية وعليه الملصق.',en:'Yes, within 14 days of delivery as long as it is in its original condition with the tag attached.'}},
 {q:{ar:'شو طرق الدفع المتاحة؟',en:'Which payment methods do you accept?'},a:{ar:'بطاقات بنكية أو الدفع عند الاستلام.',en:'Bank cards or cash on delivery.'}},
 {q:{ar:'هل البراندات أصلية؟',en:'Are the brands authentic?'},a:{ar:'نعم، كل القطع من موردين معتمدين، وبنفحص العيّنات قبل ما نعرضها.',en:'Yes, every piece comes from authorized suppliers and we check samples before listing them.'}},
 {q:{ar:'كيف أتابع طلبي؟',en:'How can I track my order?'},a:{ar:'بنبعتلك رسالة بحالة الطلب، وفريق الدعم جاهز للرد على واتساب.',en:'We send you a message with your order status, and our support team is ready to answer on WhatsApp.'}}
];
let faqOpen=0;
function renderFaq(){
  $('#faqList').innerHTML=FAQ.map((f,i)=>`
    <div class="faq-item ${i===faqOpen?'open':''}" data-i="${i}">
      <button class="faq-q" data-fq aria-expanded="${i===faqOpen}"><span>${f.q[lang]}</span><span class="pm"></span></button>
      <div class="faq-a" role="region"><div><p>${f.a[lang]}</p></div></div>
    </div>`).join('');
}

/* theme */
function setTheme(m){document.documentElement.dataset.theme=m;LS.set('theme',m)}
setTheme(LS.get('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
$('#theme').onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');

/* search */
function openSearch(){closeAll();$('#sr').classList.add('open');$('#ov').classList.add('open');setTimeout(()=>$('#si').focus(),350)}
$('#searchBtn').onclick=openSearch;$('#sx').onclick=closeAll;
function renderSearch(){
  const q=$('#si').value.trim().toLowerCase(),box=$('#sres');
  if(!q){box.innerHTML=`<p class="sr-hint">${t('s_hint')}</p>`;return}
  const list=PRODUCTS.filter(p=>[p.ar,p.en,p.brand,T.ar['f_'+p.cat],T.en['f_'+p.cat]].join(' ').toLowerCase().includes(q));
  box.innerHTML=list.length?list.map((p,i)=>`<button class="sr-item" data-sr="${p.id}" style="animation-delay:${i*40}ms"><div class="imgbox"><img src="${IMG(p.img)}" alt=""></div><div><small>${p.brand} · ${t('f_'+p.cat)}</small><div><b>${p[lang]}</b></div><div class="price">₪${p.price}</div></div></button>`).join(''):`<p class="sr-hint">${t('s_none')}</p>`;
}
$('#si').oninput=renderSearch;

/* quick view */
let qvId=null,qvImg=0,qvQty=1;
function openQV(id){$('#lb').classList.remove('open');qvId=id;qvImg=0;qvQty=1;renderQV();$('#qv').classList.add('open');document.body.style.overflow='hidden'}
function closeQV(){$('#qv').classList.remove('open');$('#lb').classList.remove('open');document.body.style.overflow=''}
function renderQV(){
  const p=PRODUCTS.find(x=>x.id===qvId),s=SEL[p.id],imgs=pimgs(p);
  $('#qvbox').innerHTML=`
    <button class="qv-x ibtn" data-qvx aria-label="Close">✕</button>
    <div class="qv-img"><span class="qv-tag">${qvTag(p)}</span><button class="b360" data-360 type="button" aria-label="360">360°</button><div class="imgbox"><img id="qvm" src="${IMG(imgs[qvImg])}" alt="${p[lang]}"></div>
      <div class="qv-thumbs">${imgs.map((m,i)=>`<button data-qvi="${i}" class="${i===qvImg?'on':''}"><img src="${IMG(m)}" alt=""></button>`).join('')}</div></div>
    <div class="qv-body">
      <small style="color:var(--muted)">${p.brand} · ${t('f_'+p.cat)}</small>
      <h3 class="display" style="font-size:2rem;margin:.2rem 0">${p[lang]}</h3>
      <div class="price" style="font-size:1.3rem">₪${p.price}${p.old?`<s>₪${p.old}</s>`:''}</div>
      <p style="color:var(--muted);margin-top:.8rem;font-size:.92rem">${t('qv_desc')}</p>
      <div class="opt-t">${t('qv_color')}: <b id="qvc">${COL[p.colors[s.c]][lang]}</b></div>${swatches(p)}
      <div class="opt-t">${t('qv_size')}</div>${sizes(p)}
      ${pdp(p)}<div class="qv-act"><div class="qty"><button data-q="-1" aria-label="-">−</button><b id="qvq">${qvQty}</b><button data-q="1" aria-label="+">+</button></div><button class="btn add-big" data-qadd><svg viewBox="0 0 24 24"><path d="M6 7h12l-1 13H7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>${t('add')}</button></div>
    </div>`;
}

/* global clicks */
document.addEventListener('click',e=>{
  const g=x=>e.target.closest(x);let b;
  if(b=g('[data-sc]')){SEL[+b.dataset.sc].c=+b.dataset.i;sync(+b.dataset.sc);return}
  if(b=g('[data-ss]')){SEL[+b.dataset.ss].s=+b.dataset.i;sync(+b.dataset.ss);return}
  if(b=g('.fav')){const id=+b.dataset.id;favs.has(id)?favs.delete(id):favs.add(id);b.classList.toggle('on');return}
  if(b=g('[data-add]')){addToCart(+b.dataset.add);return}
  if(b=g('[data-qv]')){openQV(+b.dataset.qv);return}
  if(b=g('[data-sr]')){closeAll();openQV(+b.dataset.sr);return}
  if(b=g('[data-qvi]')){qvImg=+b.dataset.qvi;const p=PRODUCTS.find(x=>x.id===qvId);$('#qvm').src=IMG(pimgs(p)[qvImg]);$('#qvbox .qv-tag').textContent=qvTag(p);$$('[data-qvi]').forEach(x=>x.classList.toggle('on',+x.dataset.qvi===qvImg));return}
  if(b=g('[data-q]')){qvQty=Math.max(1,qvQty+ +b.dataset.q);$('#qvq').textContent=qvQty;return}
  if(g('[data-qadd]')){addToCart(qvId,qvQty);closeQV();return}
  if(b=g('[data-lbadd]')){addToCart(+b.dataset.lbadd);const h=b.dataset.hl;$$(`[data-hl="${h}"]`).forEach(x=>{x.classList.add('added');setTimeout(()=>x.classList.remove('added'),1100)});return}
  if(g('[data-lkall]')){LKS[lkI].items.forEach(it=>addToCart(it.p));return}
  if(b=g('[data-lkt]')){lkI=+b.dataset.lkt;renderLookbook();return}
  if(b=g('[data-fq]')){const it=b.closest('.faq-item'),was=it.classList.contains('open');$$('.faq-item').forEach(x=>{x.classList.remove('open');x.querySelector('.faq-q').setAttribute('aria-expanded','false')});faqOpen=-1;if(!was){it.classList.add('open');b.setAttribute('aria-expanded','true');faqOpen=+it.dataset.i}return}
  if(b=g('[data-look]')){openLook(+b.dataset.look);return}
  if(g('[data-qvx]')||g('.qv-bg')){closeQV();return}
  if(b=g('.card .imgbox')){openQV(+b.closest('.card').dataset.id)}
});
addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeQV();closeAll();$('#chat').classList.remove('open')}
  if(e.key==='/'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();openSearch()}
});


/* preloader */
(function(){
  const pre=$('#pre');let done=false;
  const fin=()=>{if(done)return;done=true;pre.classList.add('done');document.body.classList.remove('loading');setTimeout(()=>pre.remove(),1300)};
  const minT=new Promise(r=>setTimeout(r,600));
  const ld=document.readyState==='complete'?Promise.resolve():new Promise(r=>addEventListener('load',r,{once:true}));
  Promise.race([Promise.all([minT,ld]),new Promise(r=>setTimeout(r,2500))]).then(fin);
})();

applyLang();
onScroll();

/* extras */
(function(){
  const at=$('#annT');let k=0;
  const show=()=>{at.textContent=t('ann'+(k%3+1))};show();
  setInterval(()=>{at.classList.add('swap');setTimeout(()=>{k++;show();at.classList.remove('swap')},500)},3800);
  $('#lang').addEventListener('click',()=>setTimeout(show,0));
})();

/* brand cards + checkout */
const BG={
 'Northline':{ar:'جاكيتات وأحذية كاجوال',en:'Jackets & casual shoes',imgs:['1591047139829-d91aecb6caea','1551028719-00167b16eac5','1491553895911-0055eca6402d']},
 'Luna':{ar:'فساتين سهرة وأحذية كعب',en:'Evening dresses & heels',imgs:['1539008835657-9e8e9680c956','1515886657613-9f3515b0c78f','1543163521-1bf539c55dd2']},
 'Atelier 9':{ar:'قمصان كلاسيك',en:'Classic shirts',imgs:['1596755094514-f87e34085b2c','1602810318383-e386cc2a3ccf','1507679799987-c73779587ccf']},
 'Stride':{ar:'أحذية رياضية وسنيكرز',en:'Sport shoes & sneakers',imgs:['1549298916-b41d501d3772','1542291026-7eec264c27ff','1595950653106-6c9ebd614d3a']},
 'Maison V':{ar:'معاطف وحقائب نسائية',en:'Coats & handbags',imgs:['1483985988355-763728e1935b','1539109136881-3be0616acf4b','1584917865442-de89df76afd3']},
 'Chrono & Co':{ar:'ساعات رجالية',en:'Men’s watches',imgs:['1523275335684-37898b6baf30','1524592094714-0f0654e20314','1547996160-81dfa63595aa']},
 'Vista Optics':{ar:'نظارات شمسية',en:'Sunglasses',imgs:['1572635196237-14b3f281503f','1511499767150-a48a237f0083','1473496169904-658ba7c44d8a']},
 'Voyage Leather':{ar:'حقائب جلد',en:'Leather bags',imgs:['1548036328-c9fa89d128fa','1553062407-98eeb64c6a62','1485968579580-b6d095142e6e']},
 'Aurelia Jewels':{ar:'خواتم وعقود',en:'Rings & necklaces',imgs:['1605100804763-247f67b3557e','1515562141207-7a88fb7ce338','1599643478518-a784e5dc4c8f']},
 'Pearl & Gold':{ar:'أقراط وأساور',en:'Earrings & bracelets',imgs:['1535632066927-ab7c9ab60908','1611591437281-460bfbe1220a']}};
Object.keys(BRAND_MEDIA).forEach(b=>{if(BG[b]&&BRAND_MEDIA[b].imgs)BG[b].imgs=BRAND_MEDIA[b].imgs});
function pimgs(p){const ex=(BG[p.brand]?BG[p.brand].imgs:[]).filter(x=>x!==p.img&&x!==p.img2);return [p.img,p.img2,...ex].slice(0,4)}
function renderBrandCards(){
  $('#bgrid').innerHTML=Object.entries(BG).map(([b,d])=>`<button class="bcard rv in" data-bc="${b}">${d.imgs.map((im,i)=>`<img loading="lazy" src="${IMGW(im,700)}" alt="${b}" class="${i?'':'on'}">`).join('')}<div><h3>${b}</h3><small>${d[lang]}</small><span>${t('shop_b')}</span><u class="dots">${d.imgs.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</u></div></button>`).join('');
  $$('.bcard').forEach(c=>{let tm,k=0;const im=[...c.querySelectorAll('img')],dt=[...c.querySelectorAll('.dots i')];
    const set=n=>{k=n;im.forEach((x,j)=>x.classList.toggle('on',j===n));dt.forEach((x,j)=>x.classList.toggle('on',j===n))};
    c.onmouseenter=()=>{tm=setInterval(()=>set((k+1)%im.length),900)};c.onmouseleave=()=>{clearInterval(tm);set(0)};
    c.onclick=()=>openBM(c.dataset.bc,k)});
}
renderBrandCards();
/* brand modal */
let bmB='',bmI=0;
function openBM(b,i){bmB=b;bmI=i||0;drawBM();$('#bm').classList.add('open');document.body.style.overflow='hidden'}
function closeGM(m){$(m).classList.remove('open');if(m==='#v3')cancelAnimationFrame(V.raf);if(!document.querySelector('.qv.open,.co.open,.gm.open'))document.body.style.overflow=''}
function drawBM(){const d=BG[bmB],n=PRODUCTS.filter(p=>p.brand===bmB).length;
  $('#bmbox').innerHTML=`<button class="ibtn gm-x" data-x type="button" aria-label="Close">✕</button><div class="bm-img"><img src="${IMGW(d.imgs[bmI],1000)}" alt="${bmB}"><button class="bm-a p" data-bd="-1" type="button">‹</button><button class="bm-a n" data-bd="1" type="button">›</button><span class="bm-c">${bmI+1}/${d.imgs.length}</span></div>
  <div class="bm-info"><small>MIRA</small><h3 class="display">${bmB}</h3><p style="color:var(--muted)">${d[lang]} · ${n} ${t('pc')}</p><div class="bm-th">${d.imgs.map((im,i)=>`<button type="button" data-th="${i}" class="${i===bmI?'on':''}"><img src="${IMGW(im,200)}" alt=""></button>`).join('')}</div><button class="btn add-big" data-shop type="button">${t('shop_b')}</button></div>`}
$('#bm').addEventListener('click',e=>{const d=BG[bmB];
  if(e.target.id==='bm'||e.target.closest('[data-x]'))return closeGM('#bm');
  const st=e.target.closest('[data-bd]');if(st){bmI=(bmI+ +st.dataset.bd+d.imgs.length)%d.imgs.length;drawBM()}
  const th=e.target.closest('[data-th]');if(th){bmI=+th.dataset.th;drawBM()}
  if(e.target.closest('[data-shop]')){filter='brand:'+bmB;renderFilters();renderGrid();closeGM('#bm');(window.goTo?goTo('#shop'):$('#shop').scrollIntoView({behavior:'smooth'}))}});
let sx=null;$('#bm').addEventListener('pointerdown',e=>{sx=e.clientX});$('#bm').addEventListener('pointerup',e=>{if(sx!==null&&e.target.closest('.bm-img')&&Math.abs(e.clientX-sx)>50&&!e.target.closest('button')){const d=BG[bmB];bmI=(bmI+(e.clientX<sx?1:-1)+d.imgs.length)%d.imgs.length;drawBM()}sx=null});
/* 360 viewer: real frames via p.f360={tpl:'img/p3/{n}.jpg',n:36}; otherwise angle photos + turntable effect */
let V={p:null,fr:[],pos:0,auto:true,z:1,raf:0,real:false,last:0};
function open360(id){const p=PRODUCTS.find(x=>x.id===id);V.p=p;V.real=!!p.f360;V.fr=V.real?Array.from({length:p.f360.n},(_,i)=>p.f360.tpl.replace('{n}',String(i+1).padStart(2,'0'))):pimgs(p);V.pos=0;V.auto=true;V.z=1;
  const N=V.fr.length;
  $('#v3box').innerHTML=`<button class="ibtn gm-x" data-x type="button" aria-label="Close">✕</button><div class="v3-top"><b class="display" style="font-size:1.5rem">${p[lang]}</b><small>${p.brand}</small></div>
  <div class="v3-stage" id="v3s"><div class="v3-disc" id="v3d"></div><div class="v3-load" id="v3l"><i></i></div><div class="v3-imgs" id="v3i">${V.fr.map(f=>`<img src="${IMGW(f,1200)}" draggable="false" alt="">`).join('')}</div></div>
  <div class="v3-ctl"><button class="ibtn" data-a type="button" id="v3a">❚❚</button><input type="range" id="v3r" min="0" max="${N*100-1}" value="0" aria-label="360"><button class="ibtn" data-z="-1" type="button">−</button><button class="ibtn" data-z="1" type="button">+</button><span class="v3-h">↔ ${t('h360')}</span></div>`;
  $('#v3').classList.add('open');document.body.style.overflow='hidden';V.vel=0;V.drag=false;
  {const ims=[...document.querySelectorAll('#v3i img')];let left=ims.length;const ok=()=>{if(--left<=0&&$('#v3l'))$('#v3l').remove()};ims.forEach(i=>i.complete?ok():(i.onload=i.onerror=ok));setTimeout(()=>{if($('#v3l'))$('#v3l').remove()},6000)}
  const S=$('#v3s');let dr=false,lx=0;
  S.onpointerdown=e=>{dr=true;V.drag=true;V.vel=0;lx=e.clientX;V.auto=false;$('#v3a').textContent='▶';S.classList.add('drag');S.setPointerCapture(e.pointerId)};
  S.onpointermove=e=>{if(!dr)return;const dx=e.clientX-lx;lx=e.clientX;const d=-dx*N/(S.clientWidth*1.1);V.pos=((V.pos+d)%N+N)%N;V.vel=d/16};
  S.onpointerup=S.onpointercancel=()=>{dr=false;V.drag=false;S.classList.remove('drag')};
  S.ondblclick=()=>{V.z=V.z>1?1:2};
  S.onwheel=e=>{e.preventDefault();V.z=Math.min(3,Math.max(1,V.z+(e.deltaY<0?.2:-.2)))};
  $('#v3r').oninput=e=>{V.pos=e.target.value/100;V.auto=false;$('#v3a').textContent='▶'};
  cancelAnimationFrame(V.raf);V.last=performance.now();V.raf=requestAnimationFrame(loop360);
}
function loop360(now){const N=V.fr.length,dt=Math.min(50,now-V.last);V.last=now;
  if(V.auto)V.pos=(V.pos+dt/6000*N)%N;else if(!V.drag&&Math.abs(V.vel)>.0004){V.pos=((V.pos+V.vel*dt)%N+N)%N;V.vel*=Math.pow(.94,dt/16)}
  const im=[...document.querySelectorAll('#v3i img')],idx=Math.floor(V.pos)%N,f=V.pos-Math.floor(V.pos);
  if(V.real)im.forEach((x,k)=>x.style.opacity=k===idx?1:0);
  else im.forEach((x,k)=>{x.style.opacity=k===idx?1:k===(idx+1)%N?f*f*(3-2*f):0;x.style.zIndex=k===(idx+1)%N?2:1});
  const box=$('#v3i');if(!box)return;
  const deg=V.real?0:Math.sin(V.pos/N*Math.PI*2)*8;
  box.style.transform=`rotateY(${deg}deg)`;box.style.scale=V.z;
  $('#v3d').style.setProperty('--rot',(V.pos/N*360)+'deg');$('#v3r').value=Math.round(V.pos*100);
  if($('#v3').classList.contains('open'))V.raf=requestAnimationFrame(loop360);
}
$('#v3').addEventListener('click',e=>{if(e.target.id==='v3'||e.target.closest('[data-x]'))return closeGM('#v3');
  if(e.target.closest('[data-a]')){V.auto=!V.auto;$('#v3a').textContent=V.auto?'❚❚':'▶'}
  const z=e.target.closest('[data-z]');if(z)V.z=Math.min(3,Math.max(1,V.z+ +z.dataset.z*.4))});
$('#qvbox').addEventListener('click',e=>{if(e.target.closest('[data-360]')||e.target.id==='qvm')open360(qvId)});
addEventListener('keydown',e=>{if($('#v3').classList.contains('open')&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){V.auto=false;$('#v3a').textContent='▶';V.vel=(e.key==='ArrowRight'?1:-1)*.012}
  if(e.key==='Escape'){if($('#v3').classList.contains('open'))closeGM('#v3');else if($('#bm').classList.contains('open'))closeGM('#bm')}
  if($('#bm').classList.contains('open')&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){const d=BG[bmB],st=(e.key==='ArrowRight')===(lang!=='ar')?1:-1;bmI=(bmI+st+d.imgs.length)%d.imgs.length;drawBM()}});
/* ripple + tilt */
document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect(),sp=document.createElement('span');sp.className='rip';sp.style.left=e.clientX-r.left+'px';sp.style.top=e.clientY-r.top+'px';b.appendChild(sp);setTimeout(()=>sp.remove(),700)});
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{const c=e.target.closest&&e.target.closest('.bcard,.tcard,.bud,.rev-card');if(!c)return;const r=c.getBoundingClientRect();c.classList.add('tilting');c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*10+'deg');c.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*8+'deg')});
  document.addEventListener('mouseout',e=>{const c=e.target.closest&&e.target.closest('.bcard,.tcard,.bud,.rev-card');if(c&&!c.contains(e.relatedTarget)){c.style.removeProperty('--rx');c.style.removeProperty('--ry')}});
}
const _al=applyLang;applyLang=function(){_al();renderBrandCards()};

const CO=$('#co'),cartTotal=()=>cart.reduce((a,c)=>a+PRODUCTS.find(x=>x.id===c.id).price*c.qty,0);
const SHIP_FEE=20,FREE_SHIP=300,shipOf=v=>v>=FREE_SHIP?0:SHIP_FEE;
function closeCO(){CO.classList.remove('open');document.body.style.overflow=''}
function openCO(){
  if(!cart.length){toast(t('empty'));return}
  closeAll();
  const sub=cartTotal(),sh=shipOf(sub);
  const m=[['cod',t('p_cod')],['wa',t('p_wa')]];
  if(PAY.paypalMe)m.push(['paypal','PayPal']);if(PAY.cardLink)m.push(['card',t('p_card')]);if(PAY.bank)m.push(['bank',t('p_bank')]);
  const lines=cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return `<div class="cl"><img src="${IMG(p.img)}" alt=""><span><b>${p[lang]}</b><br><small style="color:var(--muted)">${p.brand} · ${COL[c.color][lang]} · ${c.size} · ×${c.qty}</small></span><b>₪${p.price*c.qty}</b></div>`}).join('');
  const fld=(k,lbl,attrs,tag)=>`<label class="f" data-k="${k}">${lbl}${tag==='ta'?`<textarea name="${k}" rows="2" ${attrs}></textarea>`:`<input name="${k}" ${attrs}>`}<em class="er" hidden></em></label>`;
  $('#cobox').innerHTML=`<button class="ibtn co-x" id="coX" type="button" aria-label="${t('co_close')}">✕</button><h3 class="display">${t('co_t')}</h3>
  <div class="co-lines">${lines}</div>
  <form id="coF" novalidate>${fld('n',t('co_name'),'autocomplete="name"')}
  <div class="co-row">${fld('p',t('co_phone'),'type="tel" inputmode="tel" autocomplete="tel"')}${fld('c',t('co_city'),'autocomplete="address-level2"')}</div>
  ${fld('a',t('co_addr'),'autocomplete="street-address"')}${fld('o',t('co_note'),'','ta')}
  <b>${t('co_pay')}</b><div style="margin-top:.5rem">${m.map(([v,l],i)=>`<label class="pmeth"><input type="radio" name="m" value="${v}" ${i?'':'checked'}>${l}</label>`).join('')}</div>
  <div class="co-sum" style="margin-top:1rem"><span>${t('co_sub')}</span><span>₪${sub}</span></div>
  <div class="co-sum"><span>${t('co_ship')}</span><span>${sh?'₪'+sh:t('co_free')}</span></div>
  <div class="co-sum t"><span>${t('co_total')}</span><span>₪${sub+sh}</span></div>
  <button class="btn primary" id="coGo">${t('co_place')}</button></form>`;
  CO.classList.add('open');document.body.style.overflow='hidden';
  $('#coX').onclick=closeCO;
  const F=$('#coF');
  F.querySelectorAll('input,textarea').forEach(el=>el.addEventListener('input',()=>bad(el.closest('.f'),'')));
  F.onsubmit=e=>{e.preventDefault();
    const v=k=>F.elements[k].value.trim(),ph=v('p').replace(/[\s()-]/g,'');
    const chk=[['n',v('n').length>=3,'er_req'],['p',/^\+?\d{9,15}$/.test(ph),v('p')?'er_phone':'er_req'],['c',v('c').length>=2,'er_req'],['a',v('a').length>=5,'er_req']];
    let first=null;chk.forEach(([k,ok,msg])=>{bad(F.querySelector(`[data-k=${k}]`),ok?'':t(msg));if(!ok&&!first)first=k});
    if(first){F.elements[first].focus();return}
    $('#coGo').disabled=true;placeOrder(new FormData(F),ph);
  };
  setTimeout(()=>{const n=$('#coF')&&$('#coF').elements.n;n&&n.focus()},60);
}
function bad(lab,msg){lab.classList.toggle('bad',!!msg);const e=lab.querySelector('.er');e.textContent=msg;e.hidden=!msg}
function placeOrder(f,phone){
  const id='MR-'+Date.now().toString(36).toUpperCase(),sub=cartTotal(),sh=shipOf(sub),tot=sub+sh,meth=f.get('m');
  const lines=cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return `• ${p.ar} / ${p.en} (${p.brand}) | ${COL[c.color].en} | ${c.size} | x${c.qty} = ₪${p.price*c.qty}`}).join('\n');
  const mt={cod:t('p_cod'),wa:t('p_wa'),paypal:'PayPal',card:t('p_card'),bank:t('p_bank')}[meth];
  const msg=`MIRA — ${id}\n${lines}\n\n${t('co_sub')}: ₪${sub}\n${t('co_ship')}: ${sh?'₪'+sh:t('co_free')}\n${t('co_total')}: ₪${tot}\n${t('co_pay')}: ${mt}\n\n${f.get('n').trim()}\n${phone}\n${f.get('c').trim()} - ${f.get('a').trim()}\n${(f.get('o')||'').trim()}`;
  const wl='https://wa.me/'+PAY.wa+'?text='+encodeURIComponent(msg);
  const payUrl=meth==='paypal'?`https://paypal.me/${PAY.paypalMe}/${tot}ILS`:meth==='card'?PAY.cardLink:'';
  $('#cobox').innerHTML=`<button class="ibtn co-x" id="coX" type="button" aria-label="${t('co_close')}">✕</button><h3 class="display">${t('co_done')}</h3>
  <p style="color:var(--muted)">${t('co_id')}: <b>${id}</b> · ${t('co_total')}: <b>₪${tot}</b></p>
  ${meth==='bank'?`<p class="co-sum" style="display:block">${t('p_bank')}: ${PAY.bank.replace(/[<>&]/g,'')}</p>`:''}
  <p style="margin:1rem 0">${t('co_hint')}</p>
  ${payUrl?`<a class="btn primary" data-done href="${payUrl}" target="_blank" rel="noopener">${t('co_payn')} · ₪${tot}</a>`:''}
  <a class="btn ${payUrl?'ghost':'primary'}" data-done href="${wl}" target="_blank" rel="noopener">${t('co_send')}</a>
  <button class="btn ghost" id="coC" type="button">${t('co_close')}</button>`;
  $('#coX').onclick=$('#coC').onclick=closeCO;
  $$('#cobox [data-done]').forEach(a=>a.addEventListener('click',()=>{if(cart.length){cart=[];renderCart()}}));
}
$('#checkout').onclick=openCO;
CO.addEventListener('click',e=>{if(e.target===CO)closeCO()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&CO.classList.contains('open'))closeCO()});

/* product page data */
const HDR={ar:{s:'المقاس',ch:'الصدر',bu:'الصدر',wa:'الخصر',hi:'الورك',ft:'طول القدم',d:'القطر الداخلي',c:'المحيط'},en:{s:'Size',ch:'Chest',bu:'Bust',wa:'Waist',hi:'Hips',ft:'Foot length',d:'Inner Ø',c:'Circ.'}};
const GUIDE={
 men:{h:['s','ch','wa'],note:'EU / US / UK',r:[['S · 46/36/36','92 cm · 36.2"','78 cm · 30.7"'],['M · 48-50/38/38','98 cm · 38.6"','84 cm · 33.1"'],['L · 52/40/40','104 cm · 40.9"','90 cm · 35.4"'],['XL · 54/42/42','110 cm · 43.3"','96 cm · 37.8"']]},
 women:{h:['s','bu','wa','hi'],note:'EU / US / UK',r:[['S · 36/4/8','84 cm · 33.1"','66 cm · 26"','90 cm · 35.4"'],['M · 38/6/10','90 cm · 35.4"','72 cm · 28.3"','96 cm · 37.8"'],['L · 40/8/12','96 cm · 37.8"','78 cm · 30.7"','102 cm · 40.2"'],['XL · 42/10/14','102 cm · 40.2"','84 cm · 33.1"','108 cm · 42.5"']]},
 shoeM:{h:['s','ft'],note:'EU / US / UK',r:[['40 · 7 · 6','25.0 cm · 9.8"'],['41 · 8 · 7','25.7 cm · 10.1"'],['42 · 9 · 8','26.3 cm · 10.4"'],['43 · 10 · 9','27.0 cm · 10.6"'],['44 · 11 · 10','27.7 cm · 10.9"']]},
 shoeW:{h:['s','ft'],note:'EU / US / UK',r:[['36 · 6 · 3.5','22.8 cm · 9.0"'],['37 · 7 · 4','23.5 cm · 9.3"'],['38 · 8 · 5','24.1 cm · 9.5"'],['39 · 9 · 6','24.8 cm · 9.8"'],['40 · 10 · 7','25.4 cm · 10.0"']]},
 ring:{h:['s','d','c'],note:'US / EU',r:[['6 · 52','16.5 mm · 0.65"','51.9 mm · 2.04"'],['7 · 54','17.3 mm · 0.68"','54.4 mm · 2.14"'],['8 · 57','18.2 mm · 0.72"','57.0 mm · 2.24"'],['9 · 59','19.0 mm · 0.75"','59.5 mm · 2.34"']]}};
const DIM={9:['القطر 42 مم (1.65 إنش) · السماكة 11 مم · عرض السوار 20 مم','Case 42 mm (1.65") · thickness 11 mm · strap 20 mm'],10:['القطر 40 مم (1.57 إنش) · السماكة 9 مم · عرض السوار 20 مم','Case 40 mm (1.57") · thickness 9 mm · strap 20 mm'],11:['عرض العدسة 58 مم · الجسر 14 مم · الذراع 140 مم','Lens 58 mm · bridge 14 mm · temple 140 mm'],12:['عرض العدسة 54 مم · الجسر 17 مم · الذراع 140 مم','Lens 54 mm · bridge 17 mm · temple 140 mm'],13:['38×28×10 سم (15×11×4 إنش)','38×28×10 cm (15×11×4")'],14:['44×30×14 سم (17.3×11.8×5.5 إنش)','44×30×14 cm (17.3×11.8×5.5")'],15:['30×24×12 سم (11.8×9.4×4.7 إنش)','30×24×12 cm (11.8×9.4×4.7")'],17:['الطول 45 سم (17.7 إنش) + تمديد 5 سم','Length 45 cm (17.7") + 5 cm extender'],18:['الطول 2.2 سم (0.87 إنش) · لؤلؤة 8 مم','Drop 2.2 cm (0.87") · pearl 8 mm'],19:['الطول 17 سم (6.7 إنش) + تمديد 4 سم','Length 17 cm (6.7") + 4 cm extender']};
const CARE={
 wash:[['غسيل آلة 30° على دورة لطيفة','Machine wash 30°C, gentle cycle'],['لا تستخدم المبيّض','Do not bleach'],['لا تجفف في المجفف','Do not tumble dry'],['كوي على حرارة منخفضة','Iron on low heat']],
 cotton:[['غسيل آلة 40°','Machine wash 40°C'],['لا تستخدم المبيّض','Do not bleach'],['كوي على حرارة متوسطة','Iron on medium heat'],['جفف في الظل','Dry in the shade']],
 dry:[['تنظيف جاف فقط','Dry clean only'],['علّقه على علّاقة عريضة','Store on a wide hanger'],['تجنب الرطوبة','Avoid humidity']],
 shoe:[['امسحه بقطعة قماش رطبة','Wipe with a damp cloth'],['لا تغسله بالغسالة','Do not machine wash'],['جفف بعيداً عن الحرارة','Air dry away from heat'],['احفظه بعيداً عن الشمس','Keep out of direct sun']],
 watch:[['امسحها بقماش ناعم','Wipe with a soft cloth'],['تجنب المغناطيس والحرارة','Avoid magnets and heat'],['مقاومة للماء 5 ATM، لا تغص بها','Water resistant 5 ATM, not for diving']],
 optic:[['نظّفها بقماش الميكروفايبر','Clean with the microfiber cloth'],['احفظها في العلبة','Store in the case'],['لا تضعها على العدسات','Never rest lens-down']],
 leather:[['امسحها بقطعة رطبة','Wipe with a damp cloth'],['استخدم مرطّب جلد كل فترة','Condition the leather regularly'],['تجنب المطر الغزير','Avoid heavy rain']],
 jewel:[['تجنب العطور والماء','Keep away from perfume and water'],['البسها بعد وضع المكياج','Put on after makeup'],['احفظها في كيس منفصل','Store in a separate pouch']]};
const MAT={1:['قشرة وبطانة 100% بوليستر، حشوة عازلة','Shell and lining 100% polyester, insulated fill','wash'],2:['100% قطن بوبلين','100% cotton poplin','cotton'],3:['95% بوليستر ساتان، 5% إيلاستان','95% polyester satin, 5% elastane','wash'],4:['70% صوف، 30% بولي أميد','70% wool, 30% polyamide','dry'],5:['علوي شبك قابل للتهوية، نعل مطاطي','Breathable mesh upper, rubber sole','shoe'],6:['علوي جلد صناعي، نعل مطاطي','Synthetic leather upper, rubber sole','shoe'],7:['جلد طبيعي وبطانة ناعمة','Genuine leather with soft lining','shoe'],8:['علوي جلد مقلوب، نعل مطاطي','Suede upper, rubber sole','shoe'],9:['ستانلس ستيل 316L، زجاج معدني','316L stainless steel, mineral glass','watch'],10:['سوار جلد طبيعي، علبة ستانلس','Genuine leather strap, steel case','watch'],11:['إطار معدن، عدسات UV400','Metal frame, UV400 lenses','optic'],12:['إطار أسيتات، عدسات UV400','Acetate frame, UV400 lenses','optic'],13:['جلد بقر طبيعي، بطانة قطنية','Full-grain leather, cotton lining','leather'],14:['بوليستر مقاوم للماء، سحابات معدنية','Water-resistant polyester, metal zips','leather'],15:['جلد صناعي فاخر، بطانة ناعمة','Premium vegan leather, soft lining','leather'],16:['فضة 925 مطلية بالذهب عيار 18، زركون','925 silver, 18K gold plated, cubic zirconia','jewel'],17:['فضة 925 مطلية بالذهب عيار 18','925 silver, 18K gold plated','jewel'],18:['لؤلؤ مياه عذبة، دبوس فضة 925','Freshwater pearl, 925 silver post','jewel'],19:['ستانلس ستيل مطلي بالذهب','Gold-plated stainless steel','jewel']};
const tbl=g=>`<div class="tb"><table><tr>${g.h.map(k=>`<th>${HDR[lang][k]}</th>`).join('')}</tr>${g.r.map(r=>`<tr>${r.map(c=>`<td><bdi dir="ltr">${c}</bdi></td>`).join('')}</tr>`).join('')}</table></div><p>${g.note}</p>`;
function pdp(p){
  const L=lang==='ar'?0:1;let sg;
  const id=p.id;
  if(p.cat==='men'||p.cat==='women')sg=tbl(GUIDE[p.cat]);
  else if(p.cat==='shoes')sg=tbl(p.sizes===SZ.w?GUIDE.shoeW:GUIDE.shoeM);
  else if(p.sizes===SZ.ring)sg=tbl(GUIDE.ring)+(DIM[id]?`<p>${DIM[id][L]}</p>`:'');
  else sg=`<p><b>${L?'One size':'مقاس واحد'}</b> — ${DIM[id]?DIM[id][L]:''}</p>`;
  const m=MAT[id];
  const fc=m?`<p><b>${L?'Material':'الخامة'}:</b> ${m[L]}</p><ul>${CARE[m[2]].map(c=>`<li>${c[L]}</li>`).join('')}</ul>`:'';
  return `<div class="pdp"><details open><summary>${t('sg_t')}</summary>${sg}</details><details><summary>${t('fc_t')}</summary>${fc}</details></div>`;
}
const MODEL={men:['187 cm · 6′1″','M'],women:['176 cm · 5′9″','S']};
function qvTag(p){
  if(qvImg===0)return t('tag_studio');if(qvImg>1)return t('tag_angle');
  const m=MODEL[p.cat];return t('tag_model')+(m?(lang==='ar'?` — العارض ${m[0]} يرتدي ${m[1]}`:` — model ${m[0]} wearing ${m[1]}`):'');
}

/* polish js */
function matchF(p){if(filter==='all'||p.cat===filter||'brand:'+p.brand===filter)return true;if(filter==='sale')return !!p.old;if(filter.startsWith('p:')){const[a,b]=filter.slice(2).split('-').map(Number);return p.price>=a&&p.price<b}return false}
(function(){
  /* staggered reveal */
  const seen=new Set();
  $$('.rv').forEach(el=>{const par=el.parentElement;if(seen.has(par))return;seen.add(par);
    [...par.children].filter(c=>c.classList.contains('rv')).forEach((c,i)=>{if(i){c.style.transitionDelay=Math.min(i,6)*90+'ms';c.addEventListener('transitionend',()=>{c.style.transitionDelay=''},{once:true})}})});
  /* magnetic buttons */
  if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
    document.addEventListener('mousemove',e=>{const b=e.target.closest&&e.target.closest('.btn.primary,.btn.ghost');
      if(!b)return;const r=b.getBoundingClientRect();b.style.setProperty('--tx',((e.clientX-r.left-r.width/2)*.12).toFixed(1)+'px');b.style.setProperty('--ty',((e.clientY-r.top-r.height/2)*.18).toFixed(1)+'px')});
    document.addEventListener('mouseout',e=>{const b=e.target.closest&&e.target.closest('.btn');if(b){b.style.removeProperty('--tx');b.style.removeProperty('--ty')}});
  }
  /* free shipping bar */
  const FREE=300;
  function updateShip(){const tot=cartTotal(),el=$('#ship');if(!cart.length){el.style.display='none';return}el.style.display='';
    el.innerHTML=(tot>=FREE?t('ship_ok'):t('ship_more').replace('{n}',FREE-tot))+'<i></i>';el.firstElementChild&&el.querySelector('i').style.setProperty('--w',Math.min(100,tot/FREE*100)+'%')}
  const _rc=renderCart;renderCart=function(){_rc();updateShip()};updateShip();
  /* recently viewed */
  let RV=[];
  function renderRV(){const sec=$('#rcvsec');sec.hidden=!RV.length;
    $('#rcvList').innerHTML=RV.map(id=>{const p=PRODUCTS.find(x=>x.id===id);return `<button data-rv="${id}"><div class="imgbox"><img src="${IMG(p.img)}" alt=""></div><div><b>${p[lang]}</b><small>${p.brand}</small><div class="price">₪${p.price}</div></div></button>`}).join('');
    $$('[data-rv]').forEach(b=>b.onclick=()=>openQV(+b.dataset.rv))}
  const _oq=openQV;openQV=function(id){_oq(id);RV=[id,...RV.filter(x=>x!==id)].slice(0,4);renderRV()};
  const _al2=applyLang;applyLang=function(){_al2();renderRV();updateShip()};
})();

/* hero2 */
(function(){
  const L=[{k:'f_women',img:'1445205170230-053b83016050',ids:[3,4]},{k:'f_men',img:'1507679799987-c73779587ccf',ids:[1,2]},{k:'f_acc',img:'1515562141207-7a88fb7ce338',ids:[16,9]}];
  const hero=$('#hero2'),stage=$('#h2Stage');let cur=0,timer;
  $('#h2Arch').innerHTML=L.map((l,i)=>`<img src="${IMGW(l.img,1000)}" alt="" class="${i?'':'on'}" ${i?'loading="lazy"':'fetchpriority="high"'}>`).join('');
  function draw(){
    $('#h2Tabs').innerHTML=L.map((l,i)=>`<button type="button" class="${i===cur?'on':''}" data-h="${i}"><small>0${i+1}</small>${t(l.k)}<i></i></button>`).join('');
    $('#h2Cards').innerHTML=L[cur].ids.slice(0,1).map((id,j)=>{const p=PRODUCTS.find(x=>x.id===id);return `<button type="button" class="h2c c${j}" data-hp="${id}"><div class="imgbox"><img src="${IMG(p.img)}" alt=""></div><div><small>${p.brand}</small><b>${p[lang]}</b><span>₪${p.price}</span></div><i>+</i></button>`}).join('');
    $$('#h2Tabs [data-h]').forEach(b=>b.onclick=()=>go(+b.dataset.h));
    $$('#h2Cards [data-hp]').forEach(b=>b.onclick=()=>openQV(+b.dataset.hp));
  }
  function go(i){cur=i;$$('#h2Arch img').forEach((im,k)=>{const was=im.classList.contains('on');im.classList.remove('prev');if(k===i)im.classList.add('on');else{im.classList.remove('on');if(was)im.classList.add('prev')}});draw();clearTimeout(timer);timer=setTimeout(()=>go((cur+1)%L.length),3800)}
  stage.addEventListener('mouseenter',()=>{clearTimeout(timer);stage.classList.add('paused');$$('#h2Tabs .on i').forEach(i=>i.style.animationPlayState='paused')});
  stage.addEventListener('mouseleave',()=>{stage.classList.remove('paused');go(cur)});
  /* layered parallax: smoothed mouse (--mx/--my) + scroll depth (--sy) */
  let tx=0,ty=0,cx=0,cy=0,run=false;
  function loop(){cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;hero.style.setProperty('--mx',cx.toFixed(3));hero.style.setProperty('--my',cy.toFixed(3));
    if(Math.abs(tx-cx)>.002||Math.abs(ty-cy)>.002)requestAnimationFrame(loop);else run=false}
  const kick=()=>{if(!run){run=true;requestAnimationFrame(loop)}};
  if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
    hero.addEventListener('mousemove',e=>{const r=hero.getBoundingClientRect();tx=(e.clientX-r.left)/r.width*2-1;ty=(e.clientY-r.top)/r.height*2-1;kick()});
    hero.addEventListener('mouseleave',()=>{tx=0;ty=0;kick()});
  }
  if(!matchMedia('(prefers-reduced-motion:reduce)').matches){let st=false;
    addEventListener('scroll',()=>{if(st)return;st=true;requestAnimationFrame(()=>{st=false;hero.style.setProperty('--sy',Math.min(scrollY,900))})},{passive:true})}
  /* headline: word-by-word blur reveal (words, not letters, so Arabic letters stay joined) */
  function splitH1(){let k=0;$$('.hero2 h1 em').forEach(em=>{if(em.querySelector('.w'))return;
    em.innerHTML=em.textContent.split(/\s+/).filter(Boolean).map(w=>`<span class="w" style="--i:${k++}">${w}</span>`).join(' ')})}
  const _sp=applyLang;applyLang=function(){_sp();splitH1()};splitH1();
  go(0);
  const _a=applyLang;applyLang=function(){_a();draw()};
})();

/* Motion layer — every piece degrades gracefully (no Lenis / reduced motion / short screens) */
(function(){
  const qs=(s,r=document)=>r.querySelector(s), qsa=(s,r=document)=>[...r.querySelectorAll(s)];
  const root=document.documentElement, body=document.body;
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const hdr=qs('#hdr');

  /* ---------- 1) Lenis smooth scroll ---------- */
  let lenis=null;
  if(!reduce && typeof Lenis!=='undefined'){
    lenis=new Lenis({duration:1.15,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true,wheelMultiplier:.95});
    window.__lenis=lenis;
    ['#drawer','#chat','#sr','#qvbox','#lbbox','#bmbox','#v3box','#cobox'].forEach(s=>{const e=qs(s);if(e)e.setAttribute('data-lenis-prevent','')});
    const sync=()=>{const locked=body.classList.contains('loading')||body.style.overflow==='hidden';locked?lenis.stop():lenis.start()};
    new MutationObserver(sync).observe(body,{attributes:true,attributeFilter:['class','style']});
    sync();
  }
  window.goTo=function(t){
    const el=typeof t==='string'?qs(t):t;
    if(lenis){
      if(el&&el.nodeType){const m=parseFloat(getComputedStyle(el).scrollMarginTop)||0;lenis.scrollTo(el,{offset:-m,duration:1.4})}
      else lenis.scrollTo(t||0,{duration:1.4});
    }else if(el&&el.nodeType){el.scrollIntoView({behavior:reduce?'auto':'smooth'})}
    else scrollTo({top:t||0,behavior:reduce?'auto':'smooth'});
  };
  if(lenis){
    document.addEventListener('click',e=>{
      const a=e.target.closest&&e.target.closest('a[href^="#"]');
      if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey)return;
      const h=a.getAttribute('href');if(h.length<2)return;
      const el=qs(h);if(!el)return;
      e.preventDefault();setTimeout(()=>goTo(el),40); // after the filter re-render
    },true);
  }

  /* ---------- 2) categories: sticky horizontal scroll ---------- */
  const sec=qs('#cats'),scroller=qs('.cats-scroller',sec),pin=qs('.cats-pin',sec),wrap=qs('.wrap',pin),track=qs('.cats',sec),fill=qs('.cats-prog i',sec);
  const cards=qsa('.cat',sec);cards.forEach(c=>c._im=c.querySelector('img'));
  const hs={on:false,dist:0,len:1,sign:-1,hh:73};
  function hsMeasure(){
    const want=!reduce&&innerHeight>=600;
    hs.hh=hdr?hdr.offsetHeight:73;root.style.setProperty('--hh',hs.hh+'px');
    sec.classList.toggle('hs-on',want);hs.on=want;
    if(!want){scroller.style.height='';track.style.transform='';cards.forEach(c=>{if(c._im)c._im.style.transform=''});return}
    void pin.offsetHeight;
    hs.dist=Math.max(0,track.offsetWidth-wrap.clientWidth);
    hs.len=Math.max(1,hs.dist*1.15);
    hs.sign=root.dir==='rtl'?1:-1;
    scroller.style.height=(pin.offsetHeight+hs.len)+'px';
  }
  function hsUpdate(){
    if(!hs.on)return;
    const r=scroller.getBoundingClientRect();
    if(r.bottom<-300||r.top>innerHeight+300)return;
    const p=Math.min(1,Math.max(0,(hs.hh-r.top)/hs.len));
    track.style.transform='translate3d('+(hs.sign*hs.dist*p).toFixed(1)+'px,0,0)';
    fill.style.transform='scaleX('+p.toFixed(4)+')';
    const vw=innerWidth;
    cards.forEach(c=>{const b=c.getBoundingClientRect();const off=Math.max(-.65,Math.min(.65,((b.left+b.width/2)-vw/2)/vw));
      if(c._im)c._im.style.transform='translate3d('+(-off*b.width*.16).toFixed(1)+'px,0,0)'});
  }

  /* ---------- 3) brands strip: speed + direction follow scroll ---------- */
  const mq=qs('#brands'),tr=qs('#track');
  const M={on:false,period:0,pos:0,dir:1,cur:1,vel:0,lastY:scrollY,vis:true,hover:false,base:80};
  function mqMeasure(){
    const n=tr.children.length/2;if(n<1)return;
    M.period=tr.children[n].offsetLeft-tr.children[0].offsetLeft;
    M.base=M.period/28; // same pace as the old 28s CSS loop
  }
  if(mq&&tr&&!reduce){
    M.on=true;mq.classList.add('mq-js');mqMeasure();
    new IntersectionObserver(es=>es.forEach(e=>M.vis=e.isIntersecting)).observe(mq);
    mq.addEventListener('mouseenter',()=>M.hover=true);mq.addEventListener('mouseleave',()=>M.hover=false);
  }
  function mqUpdate(dt){
    const y=scrollY,raw=(y-M.lastY)/Math.max(dt,.001);M.lastY=y;
    M.vel+=(raw-M.vel)*.25;
    if(!M.vis||!M.period)return;
    if(M.vel>30)M.dir=1;else if(M.vel<-30)M.dir=-1;         // scroll down = original way, up = reversed
    const boost=Math.min(Math.abs(M.vel)/260,7);               // faster scroll = faster strip
    const target=M.dir*(1+boost);
    M.cur+=(target-M.cur)*(1-Math.exp(-dt*8));
    M.pos+=M.base*M.cur*(M.hover?.15:1)*dt;
    const x=-(((M.pos%M.period)+M.period)%M.period);
    tr.style.transform='translate3d('+x.toFixed(2)+'px,0,0)';
  }

  /* ---------- 4) text reveal, line by line ---------- */
  const SEL='.sec-head h2,.sec-head p,#about h2,#about p,.banner .in h2,.banner .in p,#faq .faq-grid>.rv>h2,#faq .faq-grid>.rv>p,.news h2,.news p';
  const targets=reduce?[]:qsa(SEL).filter(e=>!e.children.length&&!e.hasAttribute('data-i18n-html'));
  const ioL=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('ls-in');ioL.unobserve(e.target)}}),{rootMargin:'0px 0px -12% 0px'});
  function split(el){
    const txt=(el.textContent||'').replace(/\s+/g,' ').trim();if(!txt)return;
    const words=txt.split(' '),frag=document.createDocumentFragment();
    el.textContent='';
    const spans=words.map((w,i)=>{const s=document.createElement('span');s.textContent=w;frag.append(s);if(i<words.length-1)frag.append(' ');return s});
    el.append(frag);
    const lines=[];let top=null,cur=null;
    spans.forEach(s=>{const y=s.offsetTop;if(top===null||Math.abs(y-top)>3){top=y;cur=[];lines.push(cur)}cur.push(s.textContent)});
    el.textContent='';
    lines.forEach((ws,i)=>{const ln=document.createElement('span');ln.className='ln';
      const inn=document.createElement('span');inn.className='ln-i';inn.style.setProperty('--i',i);inn.textContent=ws.join(' ');ln.append(inn);el.append(ln)});
    el._t=txt;el.classList.add('ls');
    const p=el.closest('.rv');if(p)p.classList.add('has-lines');
  }
  function splitAll(force){
    targets.forEach(el=>{
      const has=el.querySelector(':scope > .ln');
      if(has&&!force)return;
      if(has)el.textContent=el._t;            // re-flow after a resize
      split(el);
      if(!el.classList.contains('ls-in'))ioL.observe(el);
    });
  }

  /* ---------- shared frame loop ---------- */
  let last=performance.now();
  function frame(now){
    requestAnimationFrame(frame);
    const dt=Math.min(.05,(now-last)/1000);last=now;
    if(lenis)lenis.raf(now);
    hsUpdate();
    if(M.on)mqUpdate(dt);
  }

  /* ---------- wiring ---------- */
  let lw=innerWidth,rt;
  function relayout(){hsMeasure();if(M.on)mqMeasure();splitAll(true);hsUpdate()}
  addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{if(innerWidth!==lw||!hs.on){lw=innerWidth;relayout()}else{hsMeasure();hsUpdate()}},150)});
  new MutationObserver(()=>requestAnimationFrame(()=>{hsMeasure();splitAll(false);hsUpdate()})).observe(root,{attributes:true,attributeFilter:['lang','dir']});
  hsMeasure();splitAll(false);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(relayout);
  addEventListener('load',relayout);
  requestAnimationFrame(frame);
})();

/* ===== extras: spotlight, skeleton, circular theme reveal ===== */
(function(){
  if(matchMedia('(hover:hover) and (pointer:fine)').matches)document.addEventListener('mousemove',e=>{const c=e.target.closest&&e.target.closest('.card,.bcard,.tcard,.rev-card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--sx',e.clientX-r.left+'px');c.style.setProperty('--sy',e.clientY-r.top+'px')},{passive:true});
  const mark=i=>{const b=i.closest('.imgbox');if(b)b.classList.add('ld')};
  const scan=r=>r.querySelectorAll&&r.querySelectorAll('.imgbox img').forEach(i=>i.complete&&i.naturalWidth?mark(i):0);
  document.addEventListener('load',e=>{if(e.target.tagName==='IMG')mark(e.target)},true);
  document.addEventListener('error',e=>{if(e.target.tagName==='IMG')mark(e.target)},true);
  scan(document);new MutationObserver(m=>m.forEach(x=>x.addedNodes.forEach(n=>n.nodeType===1&&(n.matches&&n.matches('.imgbox img')?(n.complete&&mark(n)):scan(n))))).observe(document.body,{childList:true,subtree:true});
  const _st=setTheme;
  setTheme=function(m){
    if(!document.startViewTransition||matchMedia('(prefers-reduced-motion:reduce)').matches)return _st(m);
    const r=$('#theme').getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,R=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
    document.startViewTransition(()=>_st(m)).ready.then(()=>document.documentElement.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${R}px at ${x}px ${y}px)`]},{duration:750,easing:'cubic-bezier(.6,0,.2,1)',pseudoElement:'::view-transition-new(root)'}));
  };
})();

})();
