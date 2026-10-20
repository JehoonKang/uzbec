# 우즈베키스탄 9박 10일 여행기

원고와 사진을 한 페이지에서 읽는 GitHub Pages용 정적 웹앱입니다. 별도의 서버나 패키지 설치 없이 HTML, CSS, JavaScript로 동작합니다.

## 로컬에서 열기

`index.html`을 브라우저에서 엽니다. 원고를 수정한 경우에는 프로젝트 폴더에서 Node.js를 이용해 파생 데이터를 다시 생성한 다음 페이지를 새로고침합니다.

```sh
node build.mjs
```

`build.mjs`는 `doc/uzbekistan_book_manuscript_v2.0.md`를 읽어 `content.generated.js`를 생성합니다. 원고 파일은 변경하지 않습니다. 생성 파일도 저장소에 포함해야 GitHub Pages에서 브라우저가 바로 사용할 수 있습니다.

국가 경계 자료를 갱신하거나 지도 표시를 바꾼 뒤에는 `node build-map.mjs`를 실행해 `img/central-asia-route.svg`를 다시 생성합니다.

## GitHub Pages 배포

저장소의 `Settings → Pages`에서 배포 대상을 `Deploy from a branch`로 설정하고 사이트 파일이 있는 브랜치와 폴더(`/ (root)`)를 선택합니다. 이 프로젝트는 상대 경로를 사용하므로 저장소 하위 경로에 게시해도 리소스가 연결됩니다.

## 주요 파일

- `index.html`, `styles.css`, `app.js`: 페이지 구조, 디자인, 화면 동작 및 가이드별 직접 삽화
- `content.generated.js`: 원고에서 생성되는 표시 데이터
- `build.mjs`: 원고를 변경하지 않고 표시 데이터를 생성하는 스크립트
- `build-map.mjs`, `data/natural-earth-countries.geojson`: 실제 국가 경계 자료로 지도 SVG를 재생성하는 도구
- `doc/uzbekistan_book_manuscript_v2.0.md`: 수정하지 않는 원고 원본
- `baseimg/`: 원본 여행 사진
- `img/trip/`: 웹 게시에 사용하는 여행 사진 사본
- `img/destinations/`: 날짜별 장면을 보완하는 외부 참고 사진
- `img/central-asia-route.svg`: 실제 국가 경계와 좌표로 그린 여행 경로 지도
- `img/IMAGE_CREDITS.md`: 외부 사진 출처 및 라이선스

원고 전문은 페이지 하단의 “원고 원문 그대로 보기”에서 원본 마크다운으로도 확인할 수 있습니다. 일자별 사진 캡션과 출처는 원고 본문과 구분되어 표시됩니다.
