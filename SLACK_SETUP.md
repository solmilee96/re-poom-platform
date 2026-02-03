# Slack 알림봇 설정 (아쉬워요 피드백)

## 왜 브라우저에서 바로 Slack에 보내면 안 될까요?

- 사이트가 **GitHub Pages**(`solmilee96.github.io`)에서 열리면, 브라우저가 **Slack 쪽 서버**로 요청을 보냅니다.
- Slack 웹훅 주소는 **CORS**를 허용하지 않아서, 브라우저가 이 요청을 막고 알림이 가지 않습니다.
- 그래서 **우리 서버(API)**가 대신 Slack에 전달하는 방식으로 바꿔 두었습니다.

## 현재 적용된 방식 (API 프록시)

1. **아쉬워요** 클릭 시 브라우저는 **Slack이 아니라** 우리 **Vercel API**(`/api/feedback`)로 보냅니다.
2. Vercel 서버리스 함수가 받아서 **Slack 웹훅**으로 다시 전달합니다.
3. 웹훅 URL은 **Vercel 환경 변수**에만 넣고, 코드/저장소에는 넣지 않습니다.

## 반드시 할 일: Vercel 환경 변수

Slack 알림이 가려면 **Vercel**에 웹훅 URL을 넣어야 합니다.

### 화면에서 하는 방법 (단계별)

1. **Environment Variables** 페이지까지 들어온 상태에서, 오른쪽 위 검은색 버튼 **「Add Environment Variable」** 을 클릭합니다.

2. **Key(이름)** 입력란에 **정확히** 입력합니다.  
   - `SLACK_WEBHOOK_URL`  
   - 대소문자와 밑줄까지 똑같이 써야 합니다.

3. **Value(값)** 입력란에 Slack에서 복사한 **Webhook URL 전체**를 붙여넣습니다.  
   - Slack 앱의 Incoming Webhooks 페이지에 표시되는 URL을 그대로 복사해 넣으세요.  
   - 앞뒤 공백 없이, 따옴표 없이 URL만 넣습니다.

4. **어디에 적용할지** 선택합니다.  
   - **Production**, **Preview**, **Development** 중에서  
   - 최소한 **Production**은 체크해 두는 것을 권장합니다. (실제 배포된 서비스에서 쓰려면 Production 필요)

5. **Save** 버튼을 눌러 저장합니다.

6. **Redeploy(다시 배포)**  
   - 상단 메뉴에서 **Deployments** 탭으로 이동  
   - 가장 위에 있는 배포(최신) 오른쪽 **⋯(점 세 개)** 클릭  
   - **Redeploy** 선택 후 **Redeploy** 버튼으로 확인  
   - 이렇게 해야 방금 넣은 환경 변수가 적용된 상태로 다시 배포됩니다.

배포가 끝난 뒤, GitHub Pages 사이트에서 **아쉬워요**를 보내면 #voc 등 지정한 채널로 알림이 옵니다.

## (참고) Slack 웹훅 URL 발급

### 1. Slack Incoming Webhook URL 발급 (상세 단계)

알림을 받을 Slack 워크스페이스에 로그인된 상태에서 진행하세요.

#### 1-1. Slack 앱 관리 페이지 접속

- 브라우저에서 **https://api.slack.com/apps** 로 이동합니다.
- **Slack에 로그인**이 되어 있지 않으면 먼저 로그인합니다.

#### 1-2. 새 앱 만들기

- **Create New App** 버튼을 클릭합니다.
- **From scratch** 를 선택합니다.
- **App Name** 에 원하는 이름을 입력합니다 (예: `아이 여행 피드백`).
- **Pick a workspace** 에서 알림을 받을 워크스페이스를 선택한 뒤 **Create App** 을 클릭합니다.

#### 1-3. Incoming Webhooks 켜기

- 왼쪽 메뉴에서 **Incoming Webhooks** 를 클릭합니다.
- 오른쪽에서 **Activate Incoming Webhooks** 스위치를 **On** 으로 켭니다.

#### 1-4. 워크스페이스에 웹훅 추가

- 같은 페이지 아래로 내려가 **Add New Webhook to Workspace** 버튼을 클릭합니다.
- **알림을 받을 채널**을 선택합니다 (예: `#일반`, `#피드백`, 또는 새로 만든 채널).
- **Allow** 를 클릭해 권한을 허용합니다.

#### 1-5. Webhook URL 복사

- 다시 **Incoming Webhooks** 페이지로 돌아오면, 방금 만든 Webhook이 목록에 보입니다.
- **Webhook URL** 이 보이는 부분에서 **Copy** 를 클릭하거나, URL 전체를 선택해 복사합니다.
- 이 URL은 **한 번만 표시될 수 있으므로** 반드시 안전한 곳에 붙여 넣어 두세요. 위 **Vercel 환경 변수**에 넣을 때 사용합니다.

> **이미 앱이 있는 경우**: [api.slack.com/apps](https://api.slack.com/apps) 에서 해당 앱 선택 → **Incoming Webhooks** → On 으로 설정 후 **Add New Webhook to Workspace** 로 위 1-4, 1-5 단계만 진행하면 됩니다.

## 확인

- 배포 후 결과 페이지에서 **아쉬워요** → 내용 입력 → **보내기** 를 누르면 Slack 채널에 다음 형식으로 도착해야 합니다.
  ```
  아이 여행 피드백 (아쉬워요)
  아이 이름: (입력한 이름)
  내용: (입력한 내용)
  ```

## 주의

- 웹훅 URL은 **저장소 코드에 넣지 마세요**. **Vercel 환경 변수** `SLACK_WEBHOOK_URL` 에만 넣으면 API에서만 사용되어 노출되지 않습니다.
- Vercel 프로젝트 URL이 `web-5rd50ag63-solmilee96s-projects.vercel.app` 이 아닌 경우, `docs/index.html` 의 `FEEDBACK_API_URL` 을 실제 Vercel 배포 URL로 바꾼 뒤 다시 배포해야 합니다.
