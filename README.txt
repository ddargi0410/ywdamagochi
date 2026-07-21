영화 속 명곡 이야기 · Listening Lab (오류 153 대응판)

1. 휴대폰에서 index.html을 다운로드해 직접 열면 주소가 content:// 또는 file://로 시작합니다.
   YouTube는 이 환경에서 HTTP Referer를 받을 수 없어 오류 153으로 카드 안 재생을 차단합니다.
   수정판은 이 경우 오류 화면을 만들지 않고, 재생 버튼을 YouTube 앱/브라우저 열기로 자동 전환합니다.

2. 카드 안에서 바로 재생하려면 이 폴더 전체를 GitHub Pages 같은 HTTPS 웹 주소에 게시하세요.
   HTTPS에서 열리면 인라인 플레이어가 자동으로 활성화됩니다.

3. 파일 구성
   - index.html
   - styles.css
   - script.js

4. GitHub Pages 게시 시 저장소 루트에 세 파일을 올리고 Pages를 main / (root)로 설정합니다.
