### TypeScript를 이용한 기본 CRUD 예제
* Express
* Node.js
* Typescript
* Mongo DB

<detail>

  <summary> 설치방법 </summary>
  
  * tsc 전역 설치
  
    > npm install -g typescript

    <br>
  
  * 설치확인  [(security 오류 발생 시 참고)](https://velog.io/@ysong0504/TypeScript-VSCode%EC%97%90%EC%84%9C-TS-Complier-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%98%A4%EB%A5%98-%EB%B0%9C%EC%83%9D-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)

    > tsc --version
      tsc --help

     <br>
   
  

   * tsc config 파일 설치
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

     <br>

  * Dev dependencies 설치
    > tsc 내부 프로젝트에 설치<br>
    npm i -D typescript 

    <br>

    >  nodemon 설치 <br>
    npm i -D ts-node nodemon @types/node @types/express

    <br>

    > 타입스크립트 내장 타입형으로...(모르겠다..) <br>
    npm i -D @types/node @types/express

  <br>

  * package.json - scripts 설정
    ```
    "scripts": {
      /* tsc 로 컴파일된 js 파일이 실행되는 명령어 */
      "start": "node dist/app.js",
      
      /* ts 파일을 실행하는 명령어 */
      "dev": "nodemon src/app.ts",

      /* ts 파일을 js 파일로 컴파일하는 명령어 */
      "build": "tsc -p ."
    },
    ```

  
  
</deatil>
