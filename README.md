### TypeScript를 이용한 기본 CRUD 예제
* Express
* Node.js
* Typescript
* Mongo DB

<detail>
  <summary>설치방법</summary>
  
  * 전역 설치
  
    > npm install -g typescript
  
  * 설치확인
    > tsc --version
      tsc --help
  
 [security 오류 발생 시 참고](https://velog.io/@ysong0504/TypeScript-VSCode%EC%97%90%EC%84%9C-TS-Complier-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%98%A4%EB%A5%98-%EB%B0%9C%EC%83%9D-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)

   * config 파일 설치
  
    > tsc --init
  ```
  "target": "es6",
  "module": "commonjs",
  "outDir": "./dist",
  "rootDir": "./src", 
  "strict": true,
  "moduleResolution": "node",   
  "esModuleInterop": true,
  "skipLibCheck": true,
  "forceConsistentCasingInFileNames": true
  ```
  
  
</deatil>
