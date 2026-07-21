const songs = [
  {
    id: 1, tier: 'core', week: '1·10주차', category: '클래식 삽입곡',
    film: '양들의 침묵', title: 'Goldberg Variations, BWV 988: Aria', artist: 'J. S. Bach', videoId: 'i6WbTcGcDuc',
    listen: '차분하고 정교한 건반 선율과 규칙적인 구조가 들린다.',
    scene: '한니발 렉터의 잔혹하고 냉정한 세계와 함께 흐른다.',
    meaning: '바흐 음악의 질서와 아름다움이 렉터의 광기와 충돌한다. 아름다운 음악이 공포를 누그러뜨리기보다 그의 비인간성과 뒤틀린 심미안을 더 서늘하게 만든다.',
    keywords: ['대위법', '질서와 광기', '인지적 부조화'], concepts: ['대위법적 사용']
  },
  {
    id: 2, tier: 'core', week: '2주차', category: '모리코네',
    film: '석양의 무법자', title: 'The Ecstasy of Gold', artist: 'Ennio Morricone', videoId: 'cCEwUFtjAr4',
    listen: '고요한 시작 뒤 여성 소프라노와 오케스트라가 점점 거대하게 상승한다.',
    scene: '광활한 공동묘지에서 금을 찾기 위해 미친 듯이 달리는 장면.',
    meaning: '긴 침묵과 여백이 거대한 에너지로 바뀌며 탐욕과 황홀경을 거의 종교적인 체험처럼 만든다.',
    keywords: ['소프라노', '점진적 고조', '침묵의 미학'], concepts: ['감정의 조직화']
  },
  {
    id: 3, tier: 'core', week: '2·3주차', category: '모리코네',
    film: '미션', title: "Gabriel's Oboe", artist: 'Ennio Morricone', videoId: 'lArnKBTe82I',
    listen: '자연음 사이로 맑고 고요한 오보에 독주가 떠오른다.',
    scene: '가브리엘 신부가 무기 대신 오보에를 연주하며 원주민에게 다가간다.',
    meaning: '음악은 폭력이나 권력보다 강한 소통의 언어가 된다. 서양의 악기인 오보에가 화해와 종교적 숭고함의 상징으로 쓰인다.',
    keywords: ['오보에', '평화', '종교적 숭고함'], concepts: ['다이어제틱 사운드', '감정의 조직화']
  },
  {
    id: 4, tier: 'core', week: '3주차', category: '모리코네',
    film: '시네마 천국', title: 'Cinema Paradiso — Main Theme', artist: 'Ennio Morricone', videoId: 'TbDE2Rpi4ik',
    listen: '따뜻한 피아노와 현악기, 단순하고 반복되는 선율.',
    scene: '토토의 어린 시절과 성인 시절, 영화관과 알프레도의 기억을 잇는다.',
    meaning: '같은 테마가 악기와 속도를 달리하며 반복되어 흩어진 시간과 기억을 하나로 묶는다. 영화 자체가 한 편의 회상처럼 느껴지게 한다.',
    keywords: ['노스탤지어', '기억의 반복', '테마 변주'], concepts: ['라이트모티프', '서사적 통일성']
  },
  {
    id: 5, tier: 'core', week: '4주차', category: '존 윌리엄스',
    film: '죠스', title: 'Main Title and First Victim', artist: 'John Williams', videoId: 'B0In9gXH7Yg',
    listen: '낮은 두 음이 반복되며 점점 빠르고 강해진다.',
    scene: '상어가 화면에 보이지 않는 순간에도 접근을 예고한다.',
    meaning: '두 음은 배경음악이 아니라 상어라는 존재 자체를 대신한다. 보이지 않는 공포를 귀로 먼저 감지하게 하는 대표적인 라이트모티프다.',
    keywords: ['두 음', '반복과 가속', '보이지 않는 공포'], concepts: ['라이트모티프', '미니멀리즘']
  },
  {
    id: 6, tier: 'core', week: '4주차', category: '존 윌리엄스',
    film: '스타워즈', title: 'Main Title', artist: 'John Williams', videoId: 'iKZgzM8Ghns',
    listen: '금관악기의 화려한 팡파르와 대규모 오케스트라가 단숨에 펼쳐진다.',
    scene: '우주 대서사의 시작을 알리는 오프닝 타이틀.',
    meaning: '미래의 SF 세계에 후기 낭만주의 교향악을 붙여 단순한 우주 모험을 신화적이고 영웅적인 서사로 격상한다.',
    keywords: ['금관 팡파르', '교향악', '신화적 숭고미'], concepts: ['감정의 조직화', '서사적 통일성']
  },
  {
    id: 7, tier: 'core', week: '4주차', category: '존 윌리엄스',
    film: '스타워즈', title: 'The Imperial March', artist: 'John Williams', videoId: 'S0qG4sd22uM',
    listen: '무겁고 규칙적인 행진 리듬과 낮고 강한 금관악기.',
    scene: '다스 베이더와 제국의 권력이 등장하거나 예고될 때 반복된다.',
    meaning: '인물이 보이지 않아도 선율만으로 다스 베이더의 존재·권력·운명을 예감하게 한다. 테마가 인물의 정체성이 된 사례다.',
    keywords: ['행진곡', '다스 베이더', '권력과 운명'], concepts: ['라이트모티프']
  },
  {
    id: 8, tier: 'core', week: '5주차', category: '한스 짐머',
    film: '인셉션', title: 'Time', artist: 'Hans Zimmer', videoId: 'c56t7upa8Bk',
    listen: '단순한 코드가 반복되고 악기가 층층이 더해지며 거대한 파동으로 확장된다.',
    scene: '꿈의 여러 층과 현실의 시간이 겹치며 감정이 수렴하는 결말부.',
    meaning: '선명한 선율보다 반복·레이어링·점진적 빌드업으로 시간의 압박과 감정의 무게를 몸으로 느끼게 한다.',
    keywords: ['반복', '레이어링', '점진적 빌드업'], concepts: ['미니멀리즘', '감정의 조직화']
  },
  {
    id: 9, tier: 'core', week: '5주차', category: '한스 짐머',
    film: '인터스텔라', title: 'Cornfield Chase', artist: 'Hans Zimmer', videoId: '7GlsxNI4LVI',
    listen: '짧은 모티프가 반복되고 파이프오르간의 숨결 같은 음향이 점차 커진다.',
    scene: '광활한 옥수수밭과 우주로 향하는 인간의 열망을 잇는다.',
    meaning: '우주를 과학적 공간에 그치지 않고 인간이 범접하기 어려운 신성하고 숭고한 공간으로 만든다.',
    keywords: ['파이프오르간', '우주의 숭고미', '반복'], concepts: ['미니멀리즘', '감정의 조직화']
  },
  {
    id: 10, tier: 'core', week: '5·12주차', category: '디즈니',
    film: '라이온 킹', title: 'Circle of Life', artist: 'Elton John · Tim Rice / Hans Zimmer', videoId: 'XuQoLC3iDj4',
    listen: '아프리카 언어의 독창, 의례적인 합창, 전통 타악기와 오케스트라.',
    scene: '일출과 동물들의 이동, 심바의 탄생이 장대한 의식처럼 펼쳐진다.',
    meaning: '탄생·성장·죽음·계승이라는 영화 전체의 주제를 첫 곡에서 선언한다. 영상과 음악이 같은 방향으로 결합하는 합치적 사용의 대표 사례다.',
    keywords: ['아프리카 리듬', '생명의 순환', '서사적 선언'], concepts: ['합치적 사용', '다이어제틱 사운드']
  },
  {
    id: 11, tier: 'core', week: '7주차', category: '한국 영화음악',
    film: '별들의 고향', title: '나 그대에게 모두 드리리', artist: '이장희 · 강근식', videoId: 'OJzsrlFHIPQ',
    listen: '통기타 중심의 낭만적이면서 쓸쓸한 포크 선율.',
    scene: '1970년대 청춘의 사랑과 방황, 자유에 대한 갈망을 감싼다.',
    meaning: '가사가 인물의 감정과 시대의 청년문화를 직접 대변한다. 영화와 별개로 OST 자체가 독립된 대중음악으로 사랑받은 사례다.',
    keywords: ['1970년대 청년문화', '포크', '가사 중심 서사'], concepts: ['다이어제틱 사운드', '감정의 조직화']
  },
  {
    id: 12, tier: 'core', week: '7주차', category: '한국 영화음악',
    film: '올드보이', title: 'The Last Waltz', artist: '심현정 · 음악감독 조영욱', videoId: 'ekWhDE1QagQ',
    listen: '우아하고 고전적인 왈츠 선율.',
    scene: '폭력적이고 비극적인 장면 위에 기품 있는 왈츠가 흐른다.',
    meaning: '잔혹함과 우아함이 충돌하면서 단순한 공포보다 기묘한 품위와 서늘한 아이러니를 만든다. 조영욱은 음악감독, 곡 작곡자는 심현정이다.',
    keywords: ['왈츠', '폭력과 우아함', '아이러니'], concepts: ['대위법적 사용']
  },
  {
    id: 13, tier: 'core', week: '7주차', category: '한국 영화음악',
    film: '장화, 홍련', title: '돌이킬 수 없는 걸음', artist: '이병우', videoId: 'N39JgpC67i8',
    listen: '아름답고 슬픈 현악 중심의 선율이 천천히 밀려온다.',
    scene: '가족의 상처와 상실, 되돌릴 수 없는 비극이 드러나는 순간.',
    meaning: '공포를 직접 자극하지 않고 죄책감과 슬픔을 들려준다. 무서운 영상 위의 애잔한 음악이 공포보다 깊은 비애를 남긴다.',
    keywords: ['서늘한 슬픔', '공포와 비애', '가족의 상처'], concepts: ['대위법적 사용', '감정의 조직화']
  },
  {
    id: 14, tier: 'core', week: '7주차', category: '한국 영화음악',
    film: '기생충', title: '믿음의 벨트', artist: '정재일', videoId: 'jZIVYXicHHI',
    listen: '바로크 음악처럼 우아하고 정교하지만 밑바닥에는 불안이 흐른다.',
    scene: '가족이 치밀한 계획을 실행하는 과정이 한 편의 오페라처럼 편집된다.',
    meaning: '사기 행각과 계급적 위선을 아름답게 포장해 아이러니를 키운다. 상류층 공간의 우아함과 그 아래 숨은 불안을 동시에 드러낸다.',
    keywords: ['유사 바로크', '계급 격차', '우아함과 불안'], concepts: ['대위법적 사용', '감정의 조직화']
  },
  {
    id: 15, tier: 'core', week: '9주차', category: '클래식 삽입곡',
    film: '2001: 스페이스 오디세이', title: 'Also sprach Zarathustra — Introduction', artist: 'Richard Strauss', videoId: 'Szdziw4tI9o',
    listen: '낮은 음에서 시작해 금관과 타악기가 장엄하게 상승한다.',
    scene: '인류의 진화와 새로운 존재의 탄생이 제시되는 순간.',
    meaning: '음악과 영상의 상승 구조가 맞물리며 진화·초월·탄생을 신화적이고 숭고한 사건으로 만든다.',
    keywords: ['인류의 진화', '초월', '금관과 일출'], concepts: ['합치적 사용', '감정의 조직화']
  },
  {
    id: 16, tier: 'core', week: '9주차', category: '클래식 삽입곡',
    film: '친절한 금자씨', title: 'Nulla in mundo pax sincera, RV 630', artist: 'Antonio Vivaldi', videoId: 'YeO7S78WMkU',
    listen: '맑고 성스러운 소프라노와 투명한 바로크 음향.',
    scene: '복수와 피로 물든 장면 위로 평화로운 성악곡이 무심하게 흐른다.',
    meaning: '“이 세상에 참된 평화는 없다”는 의미처럼 성스러움과 복수의 잔혹함을 충돌시킨다. 비공감적 음악이 복수의 허무를 관조하게 한다.',
    keywords: ['비공감적 음악', '성스러움과 복수', '인지 부조화'], concepts: ['대위법적 사용']
  },
  {
    id: 17, tier: 'core', week: '10주차', category: '클래식 삽입곡',
    film: '지옥의 묵시록', title: 'Ride of the Valkyries', artist: 'Richard Wagner', videoId: 'xeRwBiu4wfQ',
    listen: '영웅적 금관과 강력한 행진 리듬이 압도적으로 몰아친다.',
    scene: '미군 헬기 부대가 베트남 마을을 폭격하는 장면.',
    meaning: '학살을 신화적 영웅담과 장엄한 축제처럼 포장하는 전쟁의 광기를 드러낸다. 프로펠러 소리와 음악의 리듬도 서로 동기화된다.',
    keywords: ['전쟁의 광기', '영웅주의와 학살', '프로펠러 동기화'], concepts: ['대위법적 사용', '합치적 사용']
  },
  {
    id: 18, tier: 'core', week: '10주차', category: '클래식 삽입곡',
    film: '쇼생크 탈출', title: "Sull'aria… Che soave zeffiretto", artist: 'W. A. Mozart', videoId: 'OmnbOJZXRa0',
    listen: '두 여성 성부가 부드럽고 천상적인 화음을 만든다.',
    scene: '앤디가 교도소 방송으로 모든 죄수에게 오페라를 들려준다.',
    meaning: '가사를 알아듣지 못해도 죄수들은 잠시 정신적인 자유와 인간의 존엄을 경험한다. 생산성 없는 예술이 억압적 체계를 넘어서는 순간이다.',
    keywords: ['언어를 초월한 자유', '희망', '인간 존엄'], concepts: ['다이어제틱 사운드', '감정의 조직화']
  },
  {
    id: 19, tier: 'core', week: '10주차', category: '클래식 삽입곡',
    film: '밀회', title: 'Piano Concerto No. 2 in C Minor', artist: 'Sergei Rachmaninoff', videoId: 'rEGOihjqO9w',
    listen: '격정적인 피아노와 오케스트라가 낭만적으로 크게 휘몰아친다.',
    scene: '사회적 규범 때문에 표현하지 못하는 두 사람의 사랑과 이별.',
    meaning: '겉으로 절제된 인물의 내면에서 폭발하는 욕망과 비극을 음악이 대신 말한다. 반복될수록 사랑의 기억과 운명성이 강해진다.',
    keywords: ['억압된 욕망', '내면의 외면화', '이루어질 수 없는 사랑'], concepts: ['감정의 조직화', '라이트모티프']
  },
  {
    id: 20, tier: 'core', week: '11주차', category: '사카모토 류이치',
    film: '전장의 크리스마스', title: 'Merry Christmas Mr. Lawrence', artist: 'Ryuichi Sakamoto', videoId: 'LGs_vGt0MY8',
    listen: '동양적인 5음계, 금속성 신시사이저 음색, 반복되는 오스티나토.',
    scene: '전쟁 포로수용소 안에서 동서양 인물들의 긴장과 이해가 교차한다.',
    meaning: '전쟁과 평화, 차가움과 따뜻함, 동양과 서양처럼 이질적인 것들이 충돌하면서도 공존한다. 참혹한 전쟁을 몽환적이고 서정적인 의식으로 바꾼다.',
    keywords: ['5음계', '동서양 융합', '전쟁과 낭만'], concepts: ['대위법적 사용', '미니멀리즘']
  },
  {
    id: 21, tier: 'core', week: '11주차', category: '사카모토 류이치',
    film: '마지막 황제', title: 'Rain', artist: 'Ryuichi Sakamoto', videoId: 'TO5h8nBjyRU',
    listen: '중국 전통 음계를 연상시키는 선율과 서구식 현악·신시사이저의 결합.',
    scene: '화려한 황제의 삶 이면에 있는 푸이의 고독과 운명을 비춘다.',
    meaning: '중국적 정체성과 서구에 대한 동경 사이의 갈등을 동서양의 혼합된 음향으로 표현한다.',
    keywords: ['동서양 융합', '문화적 하이브리드', '황제의 고독'], concepts: ['감정의 조직화']
  },
  {
    id: 22, tier: 'core', week: '12주차', category: '디즈니',
    film: '피노키오', title: 'When You Wish Upon a Star', artist: 'Leigh Harline · Ned Washington / Cliff Edwards', videoId: 'oTot6Kr2Q6s',
    listen: '느리고 부드러운 장조 선율이 별을 향하듯 점진적으로 상승한다.',
    scene: '별에 소원을 빌며 꿈과 희망을 노래한다.',
    meaning: '“꿈은 이루어진다”는 고전 디즈니의 철학을 대표한다. 선율·가사·영상이 모두 희망이라는 같은 정서로 합쳐진다.',
    keywords: ['꿈과 희망', '디즈니 황금기', '정서적 합치'], concepts: ['합치적 사용', '다이어제틱 사운드']
  },
  {
    id: 23, tier: 'core', week: '13주차', category: '히사이시 조',
    film: '센과 치히로의 행방불명', title: "One Summer's Day", artist: 'Joe Hisaishi', videoId: 'TK1Ij_-mank',
    listen: '맑고 고독한 피아노, 단순한 반복 패턴, 넓은 여백.',
    scene: '낯선 세계에 홀로 남은 치히로의 외로움과 성장을 따라간다.',
    meaning: '차가운 미니멀리즘에 따뜻한 서정성을 얹어 잃어버린 유년과 기억을 불러낸다. 감정을 강요하지 않아 관객이 자신의 그리움을 채워 넣게 한다.',
    keywords: ['미니멀리즘과 서정성', '상실과 성장', '여백의 미'], concepts: ['미니멀리즘', '감정의 조직화']
  },
  {
    id: 24, tier: 'core', week: '13주차', category: '히사이시 조',
    film: '하울의 움직이는 성', title: 'Merry-Go-Round of Life', artist: 'Joe Hisaishi', videoId: '2pQKqQ9sG50',
    listen: '3박자의 우아한 왈츠가 피아노에서 시작해 오케스트라로 확장된다.',
    scene: '소피와 하울의 만남, 사랑, 성장과 변화의 시간을 관통한다.',
    meaning: '돌아가는 회전목마처럼 시간·운명·삶의 순환을 표현한다. 쓸쓸함과 화려함이 공존해 삶의 덧없음과 아름다움을 함께 들려준다.',
    keywords: ['왈츠', '삶의 순환', '운명과 성장'], concepts: ['라이트모티프', '감정의 조직화']
  },
  {
    id: 25, tier: 'core', week: '14주차', category: '뮤지컬 영화',
    film: '사랑은 비를 타고', title: "Singin' in the Rain", artist: 'Gene Kelly', videoId: 'gAI6hhsDNxc',
    listen: '경쾌한 리듬, 탭댄스, 빗소리와 노래가 하나의 박자를 만든다.',
    scene: '사랑에 빠진 주인공이 비 오는 거리를 무대로 바꾸어 노래하고 춤춘다.',
    meaning: '불편한 현실의 비가 사랑의 감정에 의해 즐거운 놀이와 무대로 변화한다. 뮤지컬의 양식화된 현실을 대표한다.',
    keywords: ['탭댄스', '양식화된 현실', '현실의 무대화'], concepts: ['다이어제틱 사운드', '합치적 사용']
  },
  {
    id: 26, tier: 'plus', week: '3주차', category: '모리코네',
    film: '시네마 천국', title: 'Love Theme', artist: 'Ennio Morricone · Andrea Morricone', videoId: 'MMZvAbk1kXQ',
    listen: '피아노와 현악기가 따뜻하고 부드러운 사랑의 선율을 만든다.',
    scene: '토토와 엘레나의 사랑, 이별, 오랜 시간 뒤의 재회에서 반복된다.',
    meaning: '선율은 같지만 상황과 나이가 달라지면서 설렘이 상실과 회한으로 바뀐다. 동일한 음악이 시간의 무정함을 들려준다.',
    keywords: ['첫사랑', '시간의 무정함', '동일 선율의 변화'], concepts: ['라이트모티프']
  },
  {
    id: 27, tier: 'plus', week: '4주차', category: '존 윌리엄스',
    film: '해리 포터', title: "Hedwig's Theme", artist: 'John Williams', videoId: 'q0jrZSw_gmA',
    listen: '첼레스타의 맑고 반짝이는 음색과 신비롭게 오르내리는 선율.',
    scene: '해리의 편지, 호그와트와 마법 세계의 경이가 펼쳐질 때 반복된다.',
    meaning: '헤드위그 한 인물을 넘어 마법 세계 전체를 대표하는 음악 기호가 된다. 곡만 들어도 즉시 세계관이 떠오른다.',
    keywords: ['첼레스타', '마법 세계', '경이'], concepts: ['라이트모티프']
  },
  {
    id: 28, tier: 'plus', week: '5주차', category: '한스 짐머',
    film: '다크 나이트', title: 'Why So Serious?', artist: 'Hans Zimmer · James Newton Howard', videoId: 'KjShkVqz2a4',
    listen: '두 음을 중심으로 한 긴장, 왜곡된 첼로 글리산도와 날카로운 전자음.',
    scene: '조커의 등장과 예측할 수 없는 폭력이 다가올 때 불편함을 증폭한다.',
    meaning: '아름다운 선율 대신 음향 자체로 조커의 광기와 혼돈을 표현한다. 멜로디보다 질감이 인물을 정의하는 사운드 디자인이다.',
    keywords: ['두 음', '왜곡된 첼로', '불편함의 미학'], concepts: ['라이트모티프', '미니멀리즘']
  },
  {
    id: 29, tier: 'plus', week: '7주차', category: '한국 영화음악',
    film: '8월의 크리스마스', title: '8월의 크리스마스', artist: '한석규 · 조성우', videoId: 'nmhJUjRZGxI',
    listen: '담백한 피아노와 기타, 소박하고 절제된 목소리.',
    scene: '죽음을 앞둔 인물의 평범한 일상과 조용한 이별을 감싼다.',
    meaning: '슬픔을 과장하거나 관객에게 눈물을 강요하지 않는다. 크게 울부짖지 않기 때문에 이별의 여운이 더 오래 남는다.',
    keywords: ['절제의 미학', '한국형 멜로', '일상의 이별'], concepts: ['감정의 조직화']
  },
  {
    id: 30, tier: 'plus', week: '7주차', category: '한국 영화음악',
    film: '오징어 게임', title: 'Way Back Then', artist: '정재일', videoId: 'EJwz07titpU', start: 0,
    listen: '일부러 서툴게 부는 듯한 리코더와 어린이 놀이를 닮은 단순한 리듬.',
    scene: '천진한 놀이의 외형 속에서 잔혹한 생존 경쟁이 시작된다.',
    meaning: '익숙하고 유치한 동심의 소리와 죽음의 게임을 충돌시켜 불안을 키운다. 악기의 소박한 물성 자체가 공포의 단서가 된다.',
    keywords: ['리코더', '동심과 잔혹함', '악기의 물성'], concepts: ['대위법적 사용']
  },
  {
    id: 31, tier: 'plus', week: '12주차', category: '디즈니',
    film: '알라딘', title: 'A Whole New World', artist: 'Alan Menken · Tim Rice / Brad Kane · Lea Salonga', videoId: 'hZ1Rb9hC4JY',
    listen: '따뜻한 장조와 점점 상승하는 남녀 듀엣, 풍부한 화음.',
    scene: '알라딘과 재스민이 마법의 양탄자를 타고 새로운 세계를 바라본다.',
    meaning: '서로 다른 두 목소리가 하나의 화음으로 합쳐지며 사랑과 해방감을 만든다. 비행의 상승과 선율의 상승이 일치한다.',
    keywords: ['듀엣', '새로운 세계', '감정의 합일'], concepts: ['합치적 사용', '다이어제틱 사운드']
  },
  {
    id: 32, tier: 'plus', week: '12주차', category: '디즈니',
    film: '겨울왕국', title: 'Let It Go', artist: 'Kristen Anderson-Lopez · Robert Lopez / Idina Menzel', videoId: 'YVVTZgwYwVo',
    listen: '느린 시작에서 음역과 악기 규모가 계속 상승하고 후렴의 고음에서 폭발한다.',
    scene: '엘사가 억압과 두려움을 벗고 자신의 능력과 정체성을 선언한다.',
    meaning: '사랑을 기다리는 전통적 공주 노래가 아니라 자기 존재를 받아들이는 주체적 해방의 노래다.',
    keywords: ['자기 해방', '정체성 선언', '점진적 상승'], concepts: ['다이어제틱 사운드', 'I Want Song']
  },
  {
    id: 33, tier: 'plus', week: '14주차', category: '뮤지컬 영화',
    film: '오즈의 마법사', title: 'Over the Rainbow', artist: 'Harold Arlen · E. Y. Harburg / Judy Garland', videoId: 'DmaM1jFk8pM',
    listen: '잔잔하게 시작해 높은 음역으로 넓게 펼쳐지는 서정적인 선율.',
    scene: '도로시가 현실 너머 어딘가에 있을 더 나은 세계를 꿈꾼다.',
    meaning: '주인공의 결핍과 소망을 한 곡에 담아 이후 모험 전체를 출발시킨다. 뮤지컬의 대표적인 ‘I Want Song’이다.',
    keywords: ['꿈과 결핍', '현실과 환상', '내면의 독백'], concepts: ['I Want Song', '다이어제틱 사운드']
  },
  {
    id: 34, tier: 'plus', week: '14주차', category: '뮤지컬 영화',
    film: '오페라의 유령', title: 'The Phantom of the Opera', artist: 'Andrew Lloyd Webber', videoId: 'o1XY_ux5iUI',
    listen: '강렬한 파이프오르간, 반복되는 팬텀 테마, 록과 오페라의 결합.',
    scene: '팬텀이 크리스틴을 지하세계로 이끌며 유혹과 위험이 동시에 커진다.',
    meaning: '팬텀의 등장뿐 아니라 욕망·집착·공포를 상징한다. 같은 테마가 돌아올 때마다 이전 감정을 즉시 되살린다.',
    keywords: ['파이프오르간', '팬텀 테마', '욕망과 공포'], concepts: ['라이트모티프', '다이어제틱 사운드']
  },
  {
    id: 35, tier: 'plus', week: '14주차', category: '뮤지컬 영화',
    film: '라라랜드', title: 'Another Day of Sun', artist: 'Justin Hurwitz / La La Land Cast', videoId: 'xVVqlm8Fq3Y',
    listen: '빠른 리듬, 합창과 군무, 끊기지 않고 움직이는 듯한 카메라.',
    scene: '교통 체증으로 멈춘 고속도로가 수많은 꿈꾸는 사람의 무대로 변한다.',
    meaning: '로스앤젤레스의 희망과 경쟁, 낙관과 씁쓸함을 한 번에 선언한다. 현실과 환상이 교차하는 영화 전체의 축소판이다.',
    keywords: ['고속도로 오프닝', '앙상블', '현실과 환상'], concepts: ['합치적 사용', '다이어제틱 사운드']
  }
];

const state = {
  query: '',
  tier: 'all',
  category: 'all',
  concept: 'all',
  unfinishedOnly: false,
  completed: new Set(JSON.parse(localStorage.getItem('movieMusicCompleted') || '[]').map(Number)),
  activePlayerId: null,
  quizSong: null
};

const els = {
  grid: document.querySelector('#songGrid'),
  template: document.querySelector('#songCardTemplate'),
  search: document.querySelector('#searchInput'),
  tier: document.querySelector('#tierFilter'),
  category: document.querySelector('#categoryFilter'),
  conceptFilters: document.querySelector('#conceptFilters'),
  unfinished: document.querySelector('#unfinishedOnly'),
  resultCount: document.querySelector('#resultCount'),
  empty: document.querySelector('#emptyState'),
  progressNumber: document.querySelector('#progressNumber'),
  progressBar: document.querySelector('#progressBar'),
  themeBtn: document.querySelector('#themeBtn'),
  quizOpen: document.querySelector('#quizOpenBtn'),
  quizDialog: document.querySelector('#quizDialog'),
  quizPlayer: document.querySelector('#quizPlayer'),
  quizAnswer: document.querySelector('#quizAnswer'),
  reveal: document.querySelector('#revealBtn'),
  nextQuiz: document.querySelector('#nextQuizBtn'),
  playbackNotice: document.querySelector('#playbackNotice')
};

const unique = values => [...new Set(values)].sort((a, b) => a.localeCompare(b, 'ko'));
const normalize = value => String(value).toLocaleLowerCase('ko').replace(/\s+/g, ' ').trim();

const INLINE_PLAYER_AVAILABLE = ['http:', 'https:'].includes(window.location.protocol);

function youtubeWatchUrl(song) {
  const start = song.start ? `&t=${song.start}s` : '';
  return `https://www.youtube.com/watch?v=${song.videoId}${start}`;
}

function openYouTube(song) {
  const url = youtubeWatchUrl(song);
  const opened = window.open(url, '_blank');
  if (!opened) window.location.href = url;
}

function youtubeEmbedUrl(song, autoplay = false) {
  const params = new URLSearchParams({
    rel: '0',
    playsinline: '1',
    enablejsapi: '1',
    origin: window.location.origin
  });
  if (autoplay) params.set('autoplay', '1');
  if (song.start) params.set('start', String(song.start));
  return `https://www.youtube.com/embed/${song.videoId}?${params.toString()}`;
}

function makeIframe(song, autoplay = false, titlePrefix = '듣기') {
  if (!INLINE_PLAYER_AVAILABLE) return null;
  const iframe = document.createElement('iframe');
  iframe.src = youtubeEmbedUrl(song, autoplay);
  iframe.title = `${titlePrefix}: ${song.film} - ${song.title}`;
  iframe.loading = 'lazy';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  return iframe;
}

function buildFilters() {
  unique(songs.map(song => song.category)).forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    els.category.append(option);
  });

  const concepts = ['all', ...unique(songs.flatMap(song => song.concepts))];
  concepts.forEach(concept => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `filter-chip${concept === 'all' ? ' active' : ''}`;
    button.dataset.concept = concept;
    button.textContent = concept === 'all' ? '전체 개념' : concept;
    button.addEventListener('click', () => {
      state.concept = concept;
      document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.toggle('active', chip === button));
      renderSongs();
    });
    els.conceptFilters.append(button);
  });
}

function songMatches(song) {
  const haystack = normalize([
    song.film, song.title, song.artist, song.category,
    ...song.keywords, ...song.concepts, song.listen, song.scene, song.meaning
  ].join(' '));
  const queryOk = !state.query || haystack.includes(normalize(state.query));
  const tierOk = state.tier === 'all' || song.tier === state.tier;
  const categoryOk = state.category === 'all' || song.category === state.category;
  const conceptOk = state.concept === 'all' || song.concepts.includes(state.concept);
  const progressOk = !state.unfinishedOnly || !state.completed.has(song.id);
  return queryOk && tierOk && categoryOk && conceptOk && progressOk;
}

function renderSongs() {
  closeActivePlayer();
  els.grid.textContent = '';
  const filtered = songs.filter(songMatches);

  filtered.forEach(song => {
    const fragment = els.template.content.cloneNode(true);
    const card = fragment.querySelector('.song-card');
    card.dataset.songId = song.id;
    card.classList.toggle('completed', state.completed.has(song.id));

    const thumb = fragment.querySelector('.thumb');
    thumb.src = `https://i.ytimg.com/vi/${song.videoId}/hqdefault.jpg`;
    thumb.alt = `${song.film} ${song.title} 유튜브 미리보기`;
    thumb.addEventListener('error', () => { thumb.style.display = 'none'; });

    fragment.querySelector('.rank-badge').textContent = String(song.id).padStart(2, '0');
    fragment.querySelector('.tier-badge').textContent = song.tier === 'core' ? '초핵심' : '추가 핵심';
    fragment.querySelector('.week').textContent = song.week;
    fragment.querySelector('.category').textContent = song.category;
    fragment.querySelector('.film').textContent = `《${song.film}》`;
    fragment.querySelector('.track-title').textContent = song.title;
    fragment.querySelector('.artist').textContent = song.artist;
    fragment.querySelector('.listen').textContent = song.listen;
    fragment.querySelector('.scene').textContent = song.scene;
    fragment.querySelector('.meaning').textContent = song.meaning;

    const keywordWrap = fragment.querySelector('.keywords');
    song.keywords.forEach(keyword => {
      const chip = document.createElement('span');
      chip.className = 'keyword-chip';
      chip.textContent = keyword;
      keywordWrap.append(chip);
    });

    const playerBtn = fragment.querySelector('.player-btn');
    const overlayBtn = fragment.querySelector('.play-overlay');
    const slot = fragment.querySelector('.player-slot');
    const youtubeLink = fragment.querySelector('.youtube-link');
    youtubeLink.href = youtubeWatchUrl(song);
    youtubeLink.setAttribute('aria-label', `${song.title} 유튜브에서 열기`);

    if (INLINE_PLAYER_AVAILABLE) {
      const togglePlayer = () => {
        if (state.activePlayerId === song.id) {
          closeActivePlayer();
          return;
        }
        closeActivePlayer();
        const iframe = makeIframe(song, true);
        if (!iframe) return;
        slot.hidden = false;
        slot.append(iframe);
        playerBtn.textContent = '플레이어 닫기';
        state.activePlayerId = song.id;
        slot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      };
      playerBtn.addEventListener('click', togglePlayer);
      overlayBtn.addEventListener('click', togglePlayer);
    } else {
      playerBtn.textContent = '유튜브에서 재생';
      playerBtn.classList.add('external-mode');
      playerBtn.setAttribute('aria-label', `${song.title} 유튜브에서 재생`);
      overlayBtn.setAttribute('aria-label', `${song.title} 유튜브에서 재생`);
      playerBtn.addEventListener('click', () => openYouTube(song));
      overlayBtn.addEventListener('click', () => openYouTube(song));
    }

    const checkbox = fragment.querySelector('.complete-check');
    checkbox.checked = state.completed.has(song.id);
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) state.completed.add(song.id);
      else state.completed.delete(song.id);
      saveProgress();
      card.classList.toggle('completed', checkbox.checked);
      updateProgress();
      if (state.unfinishedOnly && checkbox.checked) renderSongs();
    });

    els.grid.append(fragment);
  });

  els.resultCount.textContent = `${filtered.length}곡 표시 중 · 전체 ${songs.length}곡`;
  els.empty.hidden = filtered.length !== 0;
}

function closeActivePlayer() {
  if (state.activePlayerId === null) return;
  const activeCard = document.querySelector(`[data-song-id="${state.activePlayerId}"]`);
  if (activeCard) {
    const slot = activeCard.querySelector('.player-slot');
    const button = activeCard.querySelector('.player-btn');
    slot.textContent = '';
    slot.hidden = true;
    button.textContent = '플레이어 열기';
  }
  state.activePlayerId = null;
}

function saveProgress() {
  localStorage.setItem('movieMusicCompleted', JSON.stringify([...state.completed]));
}

function updateProgress() {
  const percentage = Math.round((state.completed.size / songs.length) * 100);
  els.progressNumber.textContent = `${percentage}%`;
  els.progressBar.style.width = `${percentage}%`;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('movieMusicTheme', theme);
  els.themeBtn.textContent = theme === 'dark' ? '☀' : '☾';
  els.themeBtn.setAttribute('aria-label', theme === 'dark' ? '밝은 화면으로 바꾸기' : '어두운 화면으로 바꾸기');
}

function openQuiz() {
  closeActivePlayer();
  els.quizDialog.showModal();
  nextQuiz();
}

function nextQuiz() {
  const pool = songs.filter(songMatches);
  const source = pool.length ? pool : songs;
  let next = source[Math.floor(Math.random() * source.length)];
  if (source.length > 1 && state.quizSong && next.id === state.quizSong.id) {
    next = source[(source.indexOf(next) + 1) % source.length];
  }
  state.quizSong = next;
  els.quizPlayer.textContent = '';
  if (INLINE_PLAYER_AVAILABLE) {
    const iframe = makeIframe(next, false, '랜덤 퀴즈');
    if (iframe) els.quizPlayer.append(iframe);
  } else {
    const box = document.createElement('div');
    box.className = 'local-listen-box';
    const img = document.createElement('img');
    img.src = `https://i.ytimg.com/vi/${next.videoId}/hqdefault.jpg`;
    img.alt = '정답이 가려진 유튜브 듣기 문제 미리보기';
    const text = document.createElement('p');
    text.textContent = '유튜브 앱·브라우저에서 곡을 들은 뒤 이 화면으로 돌아와 정답을 확인하세요.';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-accent';
    button.textContent = '정답을 가리고 유튜브에서 듣기 ↗';
    button.addEventListener('click', () => openYouTube(next));
    box.append(img, text, button);
    els.quizPlayer.append(box);
  }
  els.quizAnswer.hidden = true;
  els.quizAnswer.textContent = '';
  els.reveal.disabled = false;
  els.reveal.textContent = '정답 보기';
}

function revealQuiz() {
  const song = state.quizSong;
  if (!song) return;
  els.quizAnswer.innerHTML = `
    <p class="film">《${song.film}》</p>
    <h3>${song.title}</h3>
    <p>${song.artist}</p>
    <p><strong>듣기 단서:</strong> ${song.listen}</p>
    <p><strong>시험 핵심:</strong> ${song.meaning}</p>
  `;
  els.quizAnswer.hidden = false;
  els.reveal.disabled = true;
  els.reveal.textContent = '정답 확인 완료';
}

function bindEvents() {
  els.search.addEventListener('input', event => { state.query = event.target.value; renderSongs(); });
  els.tier.addEventListener('change', event => { state.tier = event.target.value; renderSongs(); });
  els.category.addEventListener('change', event => { state.category = event.target.value; renderSongs(); });
  els.unfinished.addEventListener('change', event => { state.unfinishedOnly = event.target.checked; renderSongs(); });
  els.themeBtn.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
  els.quizOpen.addEventListener('click', openQuiz);
  els.reveal.addEventListener('click', revealQuiz);
  els.nextQuiz.addEventListener('click', nextQuiz);
  els.quizDialog.addEventListener('close', () => {
    els.quizPlayer.textContent = '';
    state.quizSong = null;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeActivePlayer();
  });
}

buildFilters();
bindEvents();
if (!INLINE_PLAYER_AVAILABLE && els.playbackNotice) els.playbackNotice.hidden = false;
applyTheme(localStorage.getItem('movieMusicTheme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
updateProgress();
renderSongs();
