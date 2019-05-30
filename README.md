TypeScript Jest Snapshot Demo
===========================

Jest的snapshot测试，在运行时，如果没有发现相应的snap文件（`test.ts.snap`），
则会创建并将测试的值写成相应的数据放进去，供下次使用；如果发现有，则取出比较。

这种做法感觉挺方便的，准备数据比较方便。

```
npm install
npm test
```
