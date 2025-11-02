# 자동 푸시 설정 완료 🚀

## 설정된 기능

### 1. 자동 푸시 (post-commit hook)
- 커밋할 때마다 자동으로 GitHub에 푸시됩니다
- `git commit` 명령어 실행 후 자동 실행

### 2. 자동 동기화 (pre-push hook)
- 푸시 전에 원격 저장소의 최신 변경사항을 확인
- 변경사항이 있으면 자동으로 pull 후 push

## 사용 방법

### 일반적인 워크플로우
```bash
# 파일 수정 후
git add .
git commit -m "변경사항 설명"
# 👆 커밋하면 자동으로 푸시됩니다!
```

### 수동 푸시가 필요한 경우
```bash
git push origin main
```

## 비활성화 방법

자동 푸시를 끄려면:
```bash
chmod -x .git/hooks/post-commit
```

다시 활성화하려면:
```bash
chmod +x .git/hooks/post-commit
```

## 주의사항

- 자동 푸시는 편리하지만, 커밋하기 전에 코드를 잘 확인하세요
- 여러 커밋을 한 번에 하고 싶다면 `--no-verify` 옵션 사용:
  ```bash
  git commit -m "메시지" --no-verify
  ```
  (하지만 이 경우 자동 푸시되지 않습니다)

