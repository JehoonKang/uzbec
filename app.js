(() => {
  const app = document.querySelector('#app');
  const navItems = document.querySelector('#day-nav-items');
  const source = window.TRAVEL_MANUSCRIPT;

  const photos = {
    1: [{ src: 'destinations/tashkent-airport-exterior.jpg', alt: '밤에 푸른 TOSHKENT XALQARO AEROPORTI 간판이 선명하게 보이는 타슈켄트 국제공항 외관', caption: '타슈켄트 국제공항 외관 · Toshkent Xalqaro Aeroporti', credit: 'BeshevI · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Tashkent_IntAirport_202.jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' }],
    2: [
      { src: 'trip/20261010_082220.jpg_compressed.JPEG', alt: '우즈베키스탄 항공기에서 내리는 승객들', caption: '우즈베키스탄 국내선 도착', own: true },
      { src: 'trip/20261010_103920.jpg_compressed.JPEG', alt: '이찬 칼라 안쪽의 테라사 레스토랑 외관', caption: '이찬 칼라 테라사 레스토랑', own: true },
      { src: 'trip/20261010_105543.jpg_compressed.JPEG', alt: '성벽과 칼타 미노르가 보이는 이찬 칼라 전경', caption: '이찬 칼라의 첫 풍경', own: true },
      { src: 'trip/20261010_120616.jpg_compressed.JPEG', alt: '이찬 칼라의 칼타 미노르 미나렛', caption: '푸른 타일로 장식된 칼타 미노르', own: true },
      { src: 'trip/20261010_162711.jpg_compressed.JPEG', alt: '이찬 칼라 광장과 벽돌 미나렛', caption: '이찬 칼라의 유적들', own: true },
      { src: 'trip/20261010_192007.jpg_compressed.JPEG', alt: '밤의 이찬 칼라 성벽과 골목', caption: '불이 켜지기 시작한 성내 풍경', own: true },
      { src: 'trip/20261010_210833.jpg_compressed.JPEG', alt: '밤 조명으로 빛나는 칼타 미노르', caption: '조명이 켜진 히바의 밤', own: true },
      { src: 'trip/20261010_112228.jpg', alt: '초록색 시비트 오시 위에 고기와 채소를 얹은 접시', caption: '테라사의 초록색 시비트 오시', own: true },
      { src: 'trip/20261010_090608.mp4', alt: '사막 도로를 달리며 차 안에서 들은 트로트 메들리', caption: '우즈베키스탄 사막길에서 울려 퍼진 트로트 메들리', own: true, video: true },
    ],
    3: [
      { src: 'trip/20261011_111432.jpg_compressed.JPEG', alt: '히바 난 쿠킹클래스에서 둥글게 만든 반죽', caption: '난 쿠킹클래스의 반죽', own: true },
      { src: 'trip/20261011_113107.jpg_compressed.JPEG', alt: '전통 화덕에서 빵을 굽는 모습', caption: '화덕에서 구워지는 난', own: true },
      { src: 'trip/20261011_125313.jpg', alt: '히바에서 기차를 기다리며 잠시 쉬는 동안 촬영한 식탁과 여행객', caption: '기차를 기다리며 잠시 쉰 시간', own: true },
      { src: 'trip/20261011_130603.jpg_compressed.JPEG', alt: '우즈베키스탄 맥주 사르바스트 병', caption: '현지 맥주 사르바스트', own: true },
      { src: 'trip/20261011_151410.jpg_compressed.JPEG', alt: '히바역 플랫폼에 정차한 장거리 열차', caption: '부하라행 열차를 기다리던 히바역', own: true },
      { src: 'trip/20261011_151857.jpg_compressed.JPEG', alt: '우즈베키스탄 침대열차 객실의 1층 침대', caption: '러시아식 침대열차 객실', own: true }
    ],
    4: [
      { src: 'trip/SNOW_20261012_080823_615.jpg_compressed.JPEG', alt: '부하라 숙소에서 차려낸 달걀과 빵, 과일, 견과류 아침 식탁', caption: '부하라 숙소의 아침 만찬', own: true },
      { src: 'trip/20261012_093417.jpg_compressed.JPEG', alt: '부하라 전통 요람 베시크와 화려한 직물', caption: '부하라 전통 요람 베시크', own: true },
      { src: 'trip/20261012_120733.jpg_compressed.JPEG', alt: '부하라의 역사 유적 건축물', caption: '부하라 구시가지 유적', own: true },
      { src: 'trip/20261012_183100.jpg_compressed.JPEG', alt: '저녁 조명을 받은 부하라 역사 건축물', caption: '해가 진 뒤의 부하라', own: true },
      { src: 'trip/20261012_211001.jpg_compressed.JPEG', alt: '밤하늘 아래 조명이 켜진 부하라 미나렛', caption: '부하라의 미나렛 야경', own: true },
      { src: 'trip/20261012_135823.jpg_compressed.JPEG', alt: '부하라 딜코 식당에서 맛본 고기와 채소를 얹은 라그만', caption: '딜코의 인생 라그만', own: true },
      { src: 'trip/20261012_112553.jpg_compressed.JPEG', alt: '부하라 공방에서 수작업으로 카펫을 짜는 여성 장인', caption: '부하라 여성 장인의 카펫 직조', own: true },
      { src: 'trip/20261012_104428.jpg', alt: '부하라 목욕탕 안내판에 전시된 전통 마사지 장면의 옛 사진', caption: '함맘에 전시된 옛 목욕과 마사지 사진', own: true },
      { src: 'trip/20261012_124621.jpg', alt: '붉은 꽃밭 앞에 우뚝 선 구운 벽돌의 이스마일 사마니 영묘', caption: '붉은 꽃밭과 이스마일 사마니 영묘', own: true },
      { src: 'trip/20261012_134650.jpg', alt: '부하라 딜코(Dilkusho) 식당의 외관과 간판', caption: '부하라 딜코 식당', own: true },
      { src: 'trip/B612_20261012_190108_379.jpg', alt: '라비하우스 호수 주변 조명과 분수, 야외 식당의 저녁 식탁', caption: '라비하우스 호숫가 야외 식당의 저녁', own: true },
      { src: 'trip/SNOW_20261012_122741_268.jpg', alt: '부하라의 전통 건축물 정면과 아치형 입구', caption: '부하라 구시가지의 아치형 건축물', own: true },
      { src: 'trip/SNOW_20261012_171140_776.jpg', alt: '아르크 성에서 바라본 노을빛 부하라 시내와 푸른 돔', caption: '아르크 성에서 바라본 석양 무렵의 부하라', own: true }
    ],
    5: [
      { src: 'trip/20261013_162217.jpg_compressed.JPEG', alt: '사마르칸트 레기스탄 광장의 세 마드라사', caption: '레기스탄 광장의 첫 풍경', own: true },
      { src: 'trip/20261013_164838.jpg_compressed.JPEG', alt: '레기스탄 광장 마드라사의 타일 장식 정면', caption: '마드라사 정면의 타일 문양', own: true },
      { src: 'trip/20261013_172229.jpg_compressed.JPEG', alt: '사마르칸트의 돔과 유적 건축물', caption: '사마르칸트의 역사 유적', own: true },
      { src: 'trip/20261013_211249.jpg_compressed.JPEG', alt: '밤 조명이 켜진 레기스탄 광장', caption: '빛으로 물든 레기스탄의 밤', own: true },
      { src: 'trip/20261013_103740.jpg_compressed.JPEG', alt: '사마르칸트 역에 도착한 열차와 승객', caption: '사마르칸트로 향한 기차 여정', own: true }
    ],
    6: [
      { src: 'trip/20261014_122229.jpg_compressed.JPEG', alt: '판 산맥 7개 호수로 이어지는 산악 도로', caption: '7개 호수로 가는 산길', own: true },
      { src: 'trip/B612_20261014_122026_997.jpg_compressed.JPEG', alt: '판 산맥 바위산 사이에 자리한 청록색 호수', caption: '산과 호수가 만나는 풍경', own: true },
      { src: 'trip/B612_20261014_133111_508.jpg_compressed.JPEG', alt: '판 산맥의 높은 바위산과 계곡', caption: '판 산맥의 깊은 계곡', own: true },
      { src: 'trip/B612_20261014_154045_564.jpg_compressed.JPEG', alt: '절벽 사이로 이어지는 맑고 푸른 산악 호수', caption: '펜지켄트 7개 호수의 물빛', own: true },
      { src: 'trip/SNOW_20261014_125456_791.jpg_compressed.JPEG', alt: '판 산맥 호숫가에서 바라본 설산과 맑은 하늘', caption: '호수 위로 펼쳐진 산악 풍경', own: true },
      { src: 'trip/20261014_080629.jpg_compressed.JPEG', alt: '우즈베키스탄과 타지키스탄 국경의 소박한 검문소와 출입국 게이트', caption: '우즈베키스탄·타지키스탄 국경 검문소', own: true },
      { src: 'trip/20261014_202726.jpg_compressed.JPEG', alt: 'Avandia food에서 주문한 샤실릭과 케밥, 구운 채소와 음료', caption: 'Avandia food의 샤실릭과 저녁 식탁', own: true },
      { src: 'trip/SNOW_20261014_121744_646.jpg', alt: '타지키스탄 7개 호수 중 한 곳의 청록빛 물과 산악 풍경', caption: '7개 호수의 맑은 물빛', own: true },
      { src: 'trip/SNOW_20261014_121917_960.jpg', alt: '산 사이로 펼쳐진 호수와 호숫가에 선 여행객', caption: '산과 호수가 만나는 7개 호수의 풍경', own: true }
    ],
    7: [
      { src: 'trip/20261015_134401.jpg_compressed.JPEG', alt: '사마르칸트에서 타슈켄트로 향하는 고속버스', caption: '타슈켄트행 버스 탑승', own: true },
      { src: 'trip/20261015_112355.jpg_compressed.JPEG', alt: '시아브 바자르에서 만난 우즈베키스탄 전통 그릇', caption: '시아브 바자르의 전통 공예품', own: true },
      { src: 'trip/20261015_204405.jpg_compressed.JPEG', alt: '밤이 된 타슈켄트의 운하 주변 거리', caption: '타슈켄트 서울문 인근의 밤', own: true },
      { src: 'trip/SNOW_20261015_112038_033.jpg_compressed.JPEG', alt: '사마르칸트 시아브 바자르의 입구 간판과 건물', caption: '시아브 바자르 입구', own: true }
    ],
    8: [
      { src: 'trip/20261016_093315.jpg_compressed.JPEG', alt: '아미르소이 산악 리조트 입구의 풍경', caption: '아미르소이 리조트 도착', own: true },
      { src: 'trip/20261016_095449.jpg_compressed.JPEG', alt: '침간산 케이블카 곤돌라 안에서 본 산악 경관', caption: '케이블카를 타고 오르는 침간산', own: true },
      { src: 'trip/20261016_100718.jpg_compressed.JPEG', alt: '산악 지형 위를 지나는 케이블카', caption: '산등성이를 따라가는 케이블카', own: true },
      { src: 'trip/20261016_104107.jpg_compressed.JPEG', alt: '침간산 고지대에서 바라본 산맥', caption: '침간산 정상에서 본 천산산맥', own: true },
      { src: 'trip/20261016_153030.jpg_compressed.JPEG', alt: '산기슭에서 내려다본 차르박 호수', caption: '차르박 호수 파노라마', own: true },
      { src: 'trip/20261016_153447.jpg_compressed.JPEG', alt: '산과 맞닿은 차르박 호수의 넓은 풍경', caption: '차르박 호수와 주변 산맥', own: true },
      { src: 'trip/20261016_141639.jpg_compressed.JPEG', alt: '침간산의 바위 경사면을 오르는 야외 체어리프트', caption: '침간산 체어리프트에 오르며', own: true },
      { src: 'trip/20261016_185929.jpg_compressed.JPEG', alt: 'Hammer Smith 레스토랑에서 주문한 큼직한 티본스테이크와 곁들임 음식', caption: 'Hammer Smith의 티본스테이크 만찬', own: true },
      { src: 'trip/SNOW_20261016_112136_457.jpg', alt: '침간산의 높은 산길에서 풍경을 바라보는 여행객', caption: '침간산 고지대의 산악 풍경', own: true },
      { src: 'trip/SNOW_20261016_112857_672.jpg', alt: '침간산 산등성이에 앉아 바라본 천산산맥', caption: '천산산맥 능선에서 잠시 쉬어 가며', own: true },
      { src: 'trip/SNOW_20261016_153909_493.jpg', alt: '차르박 호수와 산길을 배경으로 선 여행객', caption: '차르박 호숫가 산책길', own: true }
    ],
    9: [
      { src: 'destinations/tashkent-chorsu-bazaar.jpg', alt: '초르수 바자르의 큰 돔 아래 펼쳐진 실내 시장', caption: '타슈켄트 초르수 바자르 참고 사진', credit: 'Benjamin Goetzinger · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Chorsu_bazaar_in_Tashkent,_Uzbekistan.jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' },
      { src: 'trip/20261017_120323.jpg_compressed.JPEG', alt: '푸른 돔과 유르트를 닮은 둥근 지붕이 있는 아미르 테무르 박물관 외관', caption: '아미르 테무르 박물관의 푸른 돔', own: true },
      { src: 'trip/20261017_123826.jpg_compressed.JPEG', alt: '아미르 테무르 박물관에 전시된 아미르 테무르의 초상화', caption: '박물관에서 만난 아미르 테무르 초상화', own: true },
      { src: 'trip/SNOW_20261017_121759_936.jpg_compressed.JPEG', alt: '아미르 테무르 박물관 내부의 화려한 돔 천장과 샹들리에', caption: '박물관 돔 천장과 샹들리에', own: true }
    ]
  };

  if (!source) {
    app.innerHTML = '<section class="load-error"><h1>원고 데이터를 찾을 수 없습니다</h1><p>프로젝트 폴더에서 <code>node build.mjs</code>를 실행한 뒤 페이지를 새로고침해 주세요.</p></section>';
    return;
  }

  const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
  const inlineMarkdown = (text) => {
    let html = escapeHtml(text);
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    html = html.replace(/_([^_]+)_/g, '<em>$1</em>');
    return html;
  };

  const guideImages = [
    { match: /이찬 칼라/, photo: { src: 'destinations/guide-kalta-minor.jpg', alt: '히바 이찬 칼라의 칼타 미노르 미나렛', caption: '히바 칼타 미노르', credit: 'TwoWings · CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Kalta_Minor.jpg', license: 'https://creativecommons.org/licenses/by-sa/3.0/' } },
    { match: /중앙아시아의 주식.*난\(/, photo: { src: 'destinations/guide-uzbek-bread.jpg', alt: '우즈베키스탄 전통 빵 난', caption: '우즈베키스탄 전통 난', credit: 'Panpanchik · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Uzbek_traditional_breads.jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' } },
    { match: /전통 목욕 문화/, photo: { src: 'destinations/bukhara-hammam.jpg', alt: '부하라 쿤자크 함맘의 벽돌 돔과 외관', caption: '부하라 쿤자크 함맘', credit: 'Ymblanter · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Bukhara_Kunjak_Hammam.jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' } },
    { match: /칼란 미나렛/, photo: { src: 'destinations/bukhara-po-i-kalyan.jpg', alt: '부하라 포이칼란 모스크와 칼란 미나렛', caption: '포이칼란과 칼란 미나렛', credit: 'Hylgeriak (Ekrem Canli) · CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Po-i-Kalyan_mosque_with_Kalyan_minaret.jpg', license: 'https://creativecommons.org/licenses/by-sa/3.0/' } },
    { match: /국민 면요리.*라그만/, photo: { src: 'destinations/uzbek-lagman.jpg', alt: '우즈베키스탄식 라그만 국수 요리', caption: '우즈베키스탄 라그만', credit: 'Армен Авакян · CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Лагман.jpg', license: 'https://creativecommons.org/licenses/by-sa/3.0/' } },
    { match: /부하라 아르크/, photo: { src: 'destinations/guide-ark-bukhara.jpg', alt: '부하라 아르크 요새의 흙벽과 성문', caption: '부하라 아르크 요새', credit: 'Stomac · CC BY-SA 2.0 France', href: 'https://commons.wikimedia.org/wiki/File:Ark_fortress_in_Bukhara.jpg', license: 'https://creativecommons.org/licenses/by-sa/2.0/fr/' } },
    { match: /LPG 개조 차량/, photo: { src: 'destinations/guide-damas.jpg', alt: '우즈베키스탄의 쉐보레 다마스 승합차', caption: '우즈베키스탄의 다마스', credit: 'Ilya Plekhanov · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Chevrolet_Damas_vans_in_Bukhara.jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' } },
    { match: /고속철도.*아프롭시아/, photo: { src: 'destinations/guide-afrosiyob-train.jpg', alt: '사마르칸트 역에 정차한 아프롭시아 고속열차', caption: '아프롭시아 고속열차', credit: 'Adam Jones · CC BY-SA 2.0', href: 'https://commons.wikimedia.org/wiki/File:Afrosiyob_Express_Train_in_Station_-_Samarkand_-_Uzbekistan_(7502824436)_(3).jpg', license: 'https://creativecommons.org/licenses/by-sa/2.0/' } },
    { match: /영묘군.*레지스탄 조명쇼/, photo: { src: 'destinations/shah-i-zinda.jpg', alt: '사마르칸트 샤히진다 영묘군의 푸른 타일 건축', caption: '샤히진다 영묘군', credit: 'Petar Milošević · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Shah-i-Zinda,_Samarkand_(Shohi-Zinda_majmuasi,_Шахи_Зинда).jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' } },
    { match: /시아브 바자르/, photo: { src: 'destinations/guide-siyob-bazaar.jpg', alt: '사마르칸트 시아브 바자르의 시장 풍경', caption: '시아브 바자르', credit: 'Rudolph A. Furtado · CC0 1.0', href: 'https://commons.wikimedia.org/wiki/File:Siyob_Bazaar_in_Samarkand.jpg', license: 'https://creativecommons.org/publicdomain/zero/1.0/' } },
    { match: /서울문/, photo: { src: 'destinations/tashkent-seoul-mun.jpg', alt: '타슈켄트 서울문 건축물', caption: '타슈켄트 서울문', credit: 'Шухрат Саъдиев · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Seoul_Mun,_г._Ташкент_(3).jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' } },
    { match: /아미르 테무르 박물관/, photo: { src: 'destinations/amir-timur-museum.jpg', alt: '아미르 테무르 박물관 내부의 역사 벽화 전시', caption: '아미르 테무르 박물관 전시', credit: 'შალვა მინდაძე 11 · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Amir_Timur_Museum.jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' } },
    { match: /초르수 바자르/, photo: { src: 'destinations/guide-chorsu-interior.jpg', alt: '타슈켄트 초르수 바자르의 돔 안쪽 시장', caption: '초르수 바자르 실내', credit: 'Benjamin Goetzinger · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Inside_Chorsu_bazaar_in_Tashkent,_Uzbekistan.jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' } },
    { match: /키질쿰 사막/, photo: { src: 'destinations/guide-kyzylkum.jpg', alt: '우즈베키스탄 키질쿰 사막의 모래 풍경', caption: '키질쿰 사막', credit: 'Bgag · CC0 1.0', href: 'https://commons.wikimedia.org/wiki/File:Kyzylkum_Desert_in_Uzbekistan.jpg', license: 'https://creativecommons.org/publicdomain/zero/1.0/' } },
    { match: /구르 아미르/, photo: { src: 'destinations/guide-gur-e-amir.jpg', alt: '사마르칸트 구르 아미르 영묘의 청록색 돔', caption: '구르 아미르 영묘', credit: 'შალვა მინდაძე 11 · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Gur-e_Amir.jpg', license: 'https://creativecommons.org/licenses/by-sa/4.0/' } }
  ];
  const guideHeadingBreaks = [
    /^(이찬 칼라 \(Ichan Kala\))\s+(.+)$/,
    /^(밤의 이찬 칼라 야경)\s+(.+)$/,
    /^(중앙아시아의 주식, '난\(Nan\)')\s+(.+)$/,
    /^(우즈베키스탄의 맥주와 술문화)\s+(.+)$/,
    /^(우즈베키스탄의 전통 목욕 문화 \(함맘\))\s+(.+)$/,
    /^(부하라 아르크 \(Ark of Bukhara\))\s+(.+)$/,
    /^(우즈베키스탄의 고속철도 '아프롭시아\(Afrosiyob\)'와)\s+(.+)$/,
    /^(사마르칸트와 티무르 제국의 영묘 '구르 아미르\(Gur-e-Amir\)')\s+(.+)$/,
    /^(사마르칸트 시아브 바자르 \(Siyob Bazaar\))\s+(.+)$/,
    /^(우즈베키스탄의 유료 화장실 문화)\s+(.+)$/,
    /^(초르수 바자르 \(Chorsu Bazaar\)의 매력과 쇼핑 팁)\s+(.+)$/,
    /^(우즈베키스탄의 시외 고속버스 이동)\s+(.+)$/ ,
    /^(타슈켄트 국제공항 면세 및 편의 시설)\s+(.+)$/
  ];
  const splitGuideHeading = (text) => {
    for (const pattern of guideHeadingBreaks) {
      const match = text.match(pattern);
      if (match) return { heading: match[1], lead: match[2] };
    }
    return { heading: text, lead: '' };
  };

  const guideFigure = (title) => {
    const item = guideImages.find(({ match }) => match.test(title));
    return item ? `<div class="guide-visual">${renderPhoto(item.photo)}</div>` : '';
  };

  const photoPlacementRules = {
    1: [/공항에 도착|공항 도착/],
    2: [/우르겐치행 국내선|기내에는/, /곧장 유명한|테라사 레스토랑/, /이찬 칼라 성곽|첫 산책/, /칼타 미노르의 푸른|푸른 미나렛/, /영어가이드의 빠른|본격적인 가이드 해설/, /아르시 테라사/, /식당을 나와 아내와 손을 잡고/, /그 소문으로만 듣던 초록색 '시비트 오시'/, /트로트 메들리를 짱짱하게 틀어주는/],
    3: [/쿠킹클래스 장소|반죽을/, /직접 만든 빵|갓 구워낸/, /비바람을 피해 아늑한 실내로 들어가/, /사르바스트.*시원한 한 잔/, /히바역 도착|히바역에/, /침대칸|열차 객실/],
    4: [/조식|아침 식사|아침 만찬/, /베시크\(Beshik\)/, /문화재 탐방이 시작|칼란 미나렛을 올려다보았다/, /아르크 성의 석양|붉게 노을빛으로 물들어가는/, /황금빛으로 빛나는 미나렛의 야경|밤이 깊어/, /시그니처 메뉴인 가장 유명한 라그만|라그만과 딜코에서 소문난 전통 만두/, /여성 장인들이 직접 손으로 카펫을 짜고/, /안내되어 있는 옛 사진들을 보니/, /붉은 꽃밭과 정갈한 구운 벽돌 건축물이/, /드디어 목적지인 '딜코'/, /잔잔한 호수 주변으로 밤의 조명이/, /본격적인 부하라 문화재 탐방이 시작/],
    5: [/레지스탄 광장.*이었다|레지스탄의 어원/, /타일 장식|마드라사 정면/, /$^/, /휘황찬란한 라이팅 쇼|마드라사 외벽을 도화지 삼아/, /열차 겉면에 큼직하게 박혀 있는|현대로템\(Hyundai Rotem\)/],
    6: [/$^/, /첫 번째 호수에 도착했을 때/, /거친 비포장도로로 순식간에|거친 돌산을 이리저리/, /각각의 호수를 지날 때마다/, /하얀 설산과 형형색색/, /얼마 후 도착한 국경 지대는/, /Avandia food\(아반디아 푸드\).*찾아냈다/, /가이드가 정성껏 나누어준 도시락/, /가이드가 정성껏 나누어준 도시락/],
    7: [/드디어 버스에 올랐다|버스 계단을 올라타는 순간/, /각 섹션별로 견과류/, /물길 위에서 화려한 분수쇼|주변을 둘러보니,.*서울문/, /$^/],
    8: [/도착한 곳은 바로 아미르소이 리조트/, /창밖으로 펼쳐지는 주변 광경/, /$^/, /$^/, /실제로 마주한 차르박 호수의 풍경/, /호숫가 주변에 멈춰 서서/, /다가오는 의자에 타이밍을 딱 맞춰 겨우겨우 탑승에 성공했다/, /티본스테이크를 주문했다/, /저 멀리 아득한 곳까지 산등성이를 따라/, /저 멀리 아득한 곳까지 산등성이를 따라/, /호숫가 주변에 멈춰 서서/],
    9: [/초르수 바자르|타슈켄트의 심장부/, /아미르 테무르 박물관.*안으로 들어섰다/, /$^/, /$^/]
  };
  const photoPlacementBeforeRules = {
    3: [null, /본격적인 빵 만들기가 시작/],
    4: [null, /베시크\(Beshik\)/, null, null, null, /자리에 앉아 망설임 없이/, null, /안내되어 있는 옛 사진들을 보니/, /특히 붉은 꽃밭과 정갈한 구운 벽돌 건축물이/, null, null, null, /성에 오르는 길 이곳저곳을/],
    6: [/자, 이제 범핑 범핑\(Bumping Bumping\)/]
  };

  function renderMarkdown(markdown, dayNumber = null) {
    const lines = markdown.replace(/\r\n/g, '\n').split('\n');
    const out = [];
    let paragraph = [];
    let listType = '';
    let guideOpen = false;
    const placedPhotos = new Set();
    const renderContextPhoto = (index) => {
      const day4Flow = dayNumber === 4 ? ({ 7: 'photo-card--flow-right', 8: 'photo-card--flow-right', 12: 'photo-card--ark-sunset-left' }[index] || '') : '';
      const flowClass = day4Flow || (dayNumber === 6 && index === 1 ? 'photo-card--day6-a' : dayNumber === 6 && index === 3 ? 'photo-card--day6-b' : dayNumber === 6 && index === 6 ? 'photo-card--flow-left' : '');
      return renderPhoto(photos[dayNumber][index], true, flowClass);
    };
    const insertContextPhotos = (text) => {
      if (!dayNumber || guideOpen) return;
      const rules = photoPlacementRules[dayNumber] || [];
      rules.forEach((rule, index) => {
        if (!placedPhotos.has(index) && rule.test(text) && photos[dayNumber]?.[index]) {
          if (dayNumber === 9 && index === 1 && photos[dayNumber]?.[2] && photos[dayNumber]?.[3]) {
            out.push(`<div class="photo-triptych photo-triptych--museum">${renderPhoto(photos[dayNumber][1])}${renderPhoto(photos[dayNumber][2])}${renderPhoto(photos[dayNumber][3])}</div>`);
            placedPhotos.add(2);
            placedPhotos.add(3);
          } else if (dayNumber === 7 && index === 1 && photos[dayNumber]?.[3]) {
            out.push(`<div class="photo-pair">${renderPhoto(photos[dayNumber][1])}${renderPhoto(photos[dayNumber][3])}</div>`);
            placedPhotos.add(3);
          } else if (dayNumber === 4 && index === 9 && photos[dayNumber]?.[5]) {
            out.push(`<div class="photo-pair photo-pair--portraits">${renderPhoto(photos[dayNumber][5])}${renderPhoto(photos[dayNumber][9])}</div>`);
            placedPhotos.add(5);
          } else if (dayNumber === 4 && index === 2 && photos[dayNumber]?.[11]) {
            out.push(`<div class="photo-pair">${renderPhoto(photos[dayNumber][2])}${renderPhoto(photos[dayNumber][11])}</div>`);
            placedPhotos.add(11);
          } else if (dayNumber === 6 && index === 1 && photos[dayNumber]?.[3] && photos[dayNumber]?.[4] && photos[dayNumber]?.[7] && photos[dayNumber]?.[8]) {
            const lakePhotos = [1, 3, 4, 7, 8];
            out.push(`<div class="photo-gallery photo-gallery--lake">${lakePhotos.map((photoIndex) => renderPhoto(photos[dayNumber][photoIndex])).join('')}</div>`);
            lakePhotos.slice(1).forEach((photoIndex) => placedPhotos.add(photoIndex));
          } else if (dayNumber === 8 && index === 8 && photos[dayNumber]?.[9]) {
            out.push(`<div class="photo-pair photo-pair--portraits">${renderPhoto(photos[dayNumber][8])}${renderPhoto(photos[dayNumber][9])}</div>`);
            placedPhotos.add(9);
          } else if (dayNumber === 8 && index === 5 && photos[dayNumber]?.[10]) {
            out.push(`<div class="photo-pair">${renderPhoto(photos[dayNumber][5])}${renderPhoto(photos[dayNumber][10])}</div>`);
            placedPhotos.add(10);
          } else if (dayNumber === 8 && index === 1 && photos[dayNumber]?.[2] && photos[dayNumber]?.[3]) {
            out.push(`<div class="photo-triptych">${renderPhoto(photos[dayNumber][1])}${renderPhoto(photos[dayNumber][2])}${renderPhoto(photos[dayNumber][3])}</div>`);
            placedPhotos.add(2);
            placedPhotos.add(3);
          } else {
            out.push(renderContextPhoto(index));
          }
          placedPhotos.add(index);
        }
      });
    };
    const flushParagraph = () => {
      if (paragraph.length) {
        const text = paragraph.join(' ');
        const beforeRules = photoPlacementBeforeRules[dayNumber] || [];
        beforeRules.forEach((rule, index) => {
          if (rule && !placedPhotos.has(index) && rule.test(text) && photos[dayNumber]?.[index]) {
            out.push(renderContextPhoto(index));
            placedPhotos.add(index);
          }
        });
        out.push(`<p>${paragraph.map(inlineMarkdown).join('<br>')}</p>`);
        insertContextPhotos(text);
        paragraph = [];
      }
    };
    const closeList = () => {
      if (listType) { out.push(`</${listType}>`); listType = ''; }
    };
    const closeGuide = () => {
      flushParagraph(); closeList();
      if (guideOpen) { out.push('</div></aside>'); guideOpen = false; }
    };
    const openList = (type) => {
      if (listType !== type) { closeList(); out.push(`<${type}>`); listType = type; }
    };

    for (const originalLine of lines) {
      const line = originalLine.trim();
      if (!line) { flushParagraph(); closeList(); continue; }
      if (/^_{4,}$|^\*{3,}$|^-{3,}$/.test(line)) {
        if (guideOpen) closeGuide(); else { flushParagraph(); closeList(); }
        out.push('<hr class="section-rule">');
        continue;
      }
      const guideMatch = line.match(/^💡\s*\[가이드의 지식 더하기\]\s*(.*)$/);
      if (guideMatch) {
        closeGuide(); flushParagraph(); closeList();
        const guideTitle = `가이드의 지식 더하기 ${guideMatch[1]}`.trim();
        const { heading, lead } = splitGuideHeading(guideMatch[1]);
        out.push(`<aside class="guide-card"><div class="guide-copy"><h3>${inlineMarkdown(`💡 [가이드의 지식 더하기] ${heading}`)}</h3>`);
        out.push(guideFigure(guideTitle));
        if (lead) out.push(`<ol class="guide-facts"><li>${inlineMarkdown(lead)}</li></ol>`);
        guideOpen = true;
        continue;
      }
      const atxHeading = line.match(/^(#{1,4})\s+(.*)$/);
      if (atxHeading) {
        flushParagraph(); closeList();
        const level = Math.min(4, atxHeading[1].length + 1);
        out.push(`<h${level}>${inlineMarkdown(atxHeading[2])}</h${level}>`);
        continue;
      }
      if (/^\[[1-9]일차\]/.test(line)) {
        flushParagraph(); closeList();
        out.push(`<h2 class="day-title">${inlineMarkdown(line)}</h2>`);
        continue;
      }
      if (/^(📌|📅|📖)/.test(line)) {
        flushParagraph(); closeList();
        out.push(`<h2>${inlineMarkdown(line)}</h2>`);
        continue;
      }
      if (/^⏱️/.test(line)) {
        flushParagraph(); closeList();
        out.push(`<h3>${inlineMarkdown(line)}</h3>`);
        continue;
      }
      if (!guideOpen && /^\d+\.\s+/.test(line)) {
        flushParagraph(); closeList();
        out.push(`<h3 class="episode-title">${inlineMarkdown(line)}</h3>`);
        continue;
      }
      const quote = line.match(/^>\s?(.*)$/);
      if (quote) { flushParagraph(); closeList(); out.push(`<blockquote>${inlineMarkdown(quote[1])}</blockquote>`); continue; }
      const unordered = originalLine.match(/^\s*[*+-]\s+(.*)$/);
      const ordered = line.match(/^\d+[.)]\s+(.*)$/);
      if (unordered || ordered) {
        flushParagraph();
        openList(guideOpen || ordered ? 'ol' : 'ul');
        out.push(`<li>${inlineMarkdown((unordered || ordered)[1])}</li>`);
        continue;
      }
      paragraph.push(line);
    }
    closeGuide(); flushParagraph(); closeList();
    return out.join('\n');
  }

  function renderTimeline(markdown, mapMarkup) {
    const lines = markdown.replace(/\r\n/g, '\n').split('\n');
    const titleIndex = lines.findIndex((line) => /^📅/.test(line.trim()));
    const scheduleIndex = lines.findIndex((line) => /^⏱️/.test(line.trim()));
    if (titleIndex < 0 || scheduleIndex < 0) return `<div class="timeline-copy">${renderMarkdown(markdown)}</div>${mapMarkup}`;

    const title = lines[titleIndex].trim().replace(/^📅\s*/, '');
    const facts = lines.slice(titleIndex + 1, scheduleIndex).join('\n').trim();
    const records = [];
    let current = null;
    for (const line of lines.slice(scheduleIndex + 1)) {
      if (/^_{4,}$|^\*{3,}$|^-{3,}$/.test(line.trim())) continue;
      const dayHeader = line.trim().match(/^\*\s*(\d+)일차\s*\(([^)]+)\):\s*(.*)$/);
      if (dayHeader) {
        if (current) records.push(current);
        current = { number: dayHeader[1], date: dayHeader[2], lead: dayHeader[3], body: [] };
      } else if (current) current.body.push(line);
    }
    if (current) records.push(current);

    const dayCards = records.map((record) => {
      const body = [record.lead ? `* ${record.lead}` : '', ...record.body].filter(Boolean).join('\n');
      return `<details class="timeline-day" id="timeline-day-${record.number}"><summary class="timeline-day-summary"><span class="timeline-day-number">${record.number}일차</span><span class="timeline-day-date">(${escapeHtml(record.date)}):</span><span class="timeline-day-chevron" aria-hidden="true">⌄</span></summary><div class="timeline-day-content">${renderMarkdown(body)}</div></details>`;
    }).join('');

    return `<div class="journey-facts">${renderMarkdown(facts)}</div>${mapMarkup}<h3 class="timeline-schedule-heading">${escapeHtml(lines[scheduleIndex].trim())}</h3><div class="timeline-days">${dayCards}</div>`;
  }

  const fileName = (name) => encodeURIComponent(name).replaceAll("'", '%27');
  const photoPath = (photo) => `./img/${photo.src.split('/').map(fileName).join('/')}`;
  const renderPhoto = (photo, lazy = true, flowClass = '') => {
    const sourceCredit = photo.own ? '<span class="photo-origin">여행 중 촬영</span>' : `<a class="photo-credit" href="${photo.href}" target="_blank" rel="noreferrer">${escapeHtml(photo.credit)} · 출처</a>`;
    const license = photo.own ? '' : ` <a class="license-link" href="${photo.license}" target="_blank" rel="noreferrer">라이선스</a>`;
    const media = photo.video
      ? `<video controls playsinline preload="metadata" aria-label="${escapeHtml(photo.alt)}"><source src="${photoPath(photo)}" type="video/mp4">이 브라우저는 이 동영상을 재생할 수 없습니다.</video>`
      : `<img src="${photoPath(photo)}" alt="${escapeHtml(photo.alt)}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'}>`;
    return `<figure class="photo-card${photo.video ? ' photo-card--video' : ''}${flowClass ? ` ${flowClass}` : ''}">${media}<figcaption><span>${escapeHtml(photo.caption)}</span>${sourceCredit}${license}</figcaption></figure>`;
  };

  const prologueStart = source.indexOf('📌');
  const summaryStart = source.indexOf('📅');
  const bodyStart = source.indexOf('📖 본문');
  const epilogueStart = source.indexOf('🎬 에필로그');
  if (prologueStart < 0 || summaryStart < 0 || bodyStart < 0 || epilogueStart < 0) {
    app.innerHTML = '<section class="load-error"><h1>원고 구성을 확인해 주세요</h1><p>기대하는 프롤로그, 요약, 본문 구분 기호를 찾지 못했습니다.</p></section>';
    return;
  }
  const prologueSource = source.slice(prologueStart, summaryStart).trim();
  const timelineSource = source.slice(summaryStart, bodyStart).trim();
  const bodySource = source.slice(bodyStart, epilogueStart).trim();
  const epilogueSource = source.slice(epilogueStart).trim();
  const dayMatches = [...bodySource.matchAll(/^\[(\d+)일차\].*$/gm)];
  const days = dayMatches.map((match, index) => ({
    number: Number(match[1]),
    title: match[0],
    source: bodySource.slice(match.index, dayMatches[index + 1]?.index ?? bodySource.length).trim()
  }));

  const mapSvg = `<div class="route-map-wrap"><div class="route-map-viewport" tabindex="0" aria-label="지도를 좌우로 움직여 자세히 보기"><img class="route-map-image" src="./img/central-asia-route.svg" alt="Natural Earth 국가 경계와 실제 좌표를 사용해 그린 중앙아시아 여행 지도. 우르겐치와 히바에서 부하라, 사마르칸트, 펜지켄트와 7개 호수로 이어지고 타슈켄트, 침간산, 차르박 호수까지 표시했습니다."></div><div class="map-legend"><span><i class="legend-land"></i> 도시 간 이동</span><span><i class="legend-air"></i> 항공 이동</span><small>지도 표식을 누르면 해당 날짜의 여행기로 이동합니다. · 도시 위치 및 국경선: Natural Earth · <a href="https://www.naturalearthdata.com/">공개 지도 데이터</a>. 경로는 여행 순서를 연결한 개요입니다.</small></div><div class="map-place-links"><a href="#day-1">타슈켄트</a><a href="#day-2">우르겐치 · 히바</a><a href="#day-4">부하라</a><a href="#day-5">사마르칸트</a><a href="#day-6">펜지켄트 · 7개 호수</a><a href="#day-8">침간산 · 차르박</a></div></div>`;

  const dayNav = days.map((day) => {
    const date = day.title.match(/(\d{1,2})월\s*(\d{1,2})일/);
    const dateLabel = date ? `${date[1].padStart(2, '0')}.${date[2].padStart(2, '0')}` : '';
    return `<a href="#day-${day.number}" data-day-link="${day.number}"><span>${day.number}일차</span><small>${dateLabel}</small></a>`;
  }).join('');
  navItems.innerHTML = dayNav;

  const dayContents = days.map((day) => {
    const date = day.title.match(/(\d{1,2}월\s*\d{1,2}일)/)?.[1] || `${day.number}일차`;
    return `<article class="day-section" id="day-${day.number}" data-day="${day.number}"><div class="day-kicker"><span>DAY ${String(day.number).padStart(2, '0')}</span><span>${escapeHtml(date)}</span></div><div class="manuscript-flow">${renderMarkdown(day.source, day.number)}</div><a class="next-day" href="#day-${day.number + 1}">${day.number < days.length ? `다음 여정으로 <span aria-hidden="true">↓</span>` : '여행의 시작으로 <span aria-hidden="true">↑</span>'}</a></article>`;
  }).join('');

  app.innerHTML = `<section class="hero" id="top"><div class="hero-copy"><div class="hero-country"><span class="flag-uz" aria-hidden="true"><i></i><i></i><i></i></span><div><strong>OʻZBEKISTON</strong><small>우즈베키스탄, 실크로드의 시간</small></div></div><p class="eyebrow">A JOURNEY ALONG THE SILK ROAD</p><p class="hero-title">9박 10일, 아내와 함께하는 실크로드 기행</p><div class="hero-meta"><span>2026. 10. 09 — 10. 18</span><span>아내와 함께 · 9박 10일</span></div><a class="primary-button" href="#prologue">여행기 읽기 <span aria-hidden="true">↓</span></a><div class="hero-foot"><span>기록 · 강제훈</span><span>01 — 09 OCTOBER STORIES</span></div></div><figure class="hero-photo"><img src="./img/destinations/samarkand-registan.jpg" alt="사마르칸트 레지스탄 광장과 세 마드라사" fetchpriority="high"><figcaption>사마르칸트 레지스탄 광장 · Gustavo Jeronimo / MrPanyGoff · CC BY 2.0 · <a href="https://commons.wikimedia.org/wiki/File:RegistanSquare_Samarkand.jpg" target="_blank" rel="noreferrer">출처</a></figcaption></figure><div class="hero-pattern" aria-hidden="true"></div></section><nav class="route-ribbon" aria-label="여행 경로"><a href="#timeline">타슈켄트</a><span>→</span><a href="#day-2">히바</a><span>→</span><a href="#day-4">부하라</a><span>→</span><a href="#day-5">사마르칸트</a><span>→</span><a href="#day-6">펜지켄트</a><span>→</span><a href="#day-8">침간산</a></nav><section class="book-section prologue-section" id="prologue"><div class="section-label"><span>PROLOGUE</span><span>01</span></div><div class="section-content">${renderMarkdown(prologueSource)}</div></section><section class="book-section timeline-section" id="timeline"><div class="section-label"><span>THE JOURNEY AT A GLANCE</span><span>02</span></div><div class="section-content"><div class="section-heading"><div class="section-title-group"><p class="eyebrow">A ROUTE THROUGH TIME</p><h2>📅 ${escapeHtml(timelineSource.match(/^📅\s*(.+)$/m)?.[1] || '전체 여정 요약 & 타임라인')}</h2></div><span class="heading-note">길 위의 시간을 따라</span></div><div class="timeline-content">${renderTimeline(timelineSource, mapSvg)}</div><div class="day-index" id="journey"><div class="day-index-heading"><p class="eyebrow">THE DAILY JOURNAL</p><h2>일자별 여행</h2><p>하루의 기록을 선택해 여정을 따라가세요.</p></div><div class="day-card-grid">${days.map((day) => { const cover = photos[day.number]?.[0]; return `<a class="day-card" href="#day-${day.number}">${cover ? `<img src="${photoPath(cover)}" alt="" aria-hidden="true" loading="lazy">` : ''}<span class="day-card-number">${String(day.number).padStart(2, '0')}</span><span class="day-card-title">${escapeHtml(day.title.replace(/^\[\d+일차\]\s*/, ''))}</span><span class="day-card-arrow" aria-hidden="true">↗</span></a>`; }).join('')}</div></div></div></section><section class="journal-section"><div class="journal-heading"><div class="section-label"><span>THE JOURNAL</span><span>03</span></div><p class="eyebrow">DAY BY DAY</p><h2>일자별 상세 유랑기</h2></div>${dayContents}</section><section class="book-section epilogue-section" id="epilogue"><div class="section-label"><span>EPILOGUE</span><span>04</span></div><div class="section-content">${renderMarkdown(epilogueSource)}</div></section><section class="closing-note"><span class="closing-star" aria-hidden="true">✳</span><p>길 위에서 만난 풍경과 마음을<br>원고의 마지막 문장까지 따라갑니다.</p><a href="#top">처음으로 돌아가기 ↑</a></section>`;

  document.querySelector('.site-footer').innerHTML = `<a class="footer-mark" href="#top" aria-label="페이지 맨 위로">✳</a><a href="./img/IMAGE_CREDITS.md">사진 출처 및 라이선스</a><a href="#top">처음으로 돌아가기 ↑</a>`;

  document.querySelectorAll('.manuscript-flow > .photo-card img').forEach((img) => {
    const setPortraitLayout = () => img.closest('.photo-card').classList.toggle('photo-card--portrait', img.naturalHeight > img.naturalWidth);
    if (img.complete) setPortraitLayout();
    else img.addEventListener('load', setPortraitLayout, { once: true });
  });

  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu?.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => { mobileMenu.open = false; }));

  const daySections = [...document.querySelectorAll('.day-section')];
  const navLinks = [...document.querySelectorAll('[data-day-link]')];
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const current = entry.target.dataset.day;
      navLinks.forEach((link) => {
        if (link.dataset.dayLink === current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-25% 0px -65% 0px' });
  daySections.forEach((section) => observer.observe(section));

  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress.style.transform = `scaleX(${ratio})`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();
