var obj = { a: 200, b: 100 };
/*
[generated bytecode for function:  (0x003808211f25 <SharedFunctionInfo>)]
Bytecode length: 20
Parameter count 1
Register count 3
Frame size 24
OSR nesting level: 0
Bytecode Age: 0
         0000003808211FD2 @    0 : 12 00             LdaConstant [0]
         0000003808211FD4 @    2 : c5                Star1
         0000003808211FD5 @    3 : 27 fe f8          Mov <closure>, r2
         0000003808211FD8 @    6 : 62 43 01 f9 02    CallRuntime [DeclareGlobals], r1-r2
         0000003808211FDD @   11 : 7e 01 00 29       CreateObjectLiteral [1], [0], #41
         0000003808211FE1 @   15 : 15 02 01          StaGlobal [2], [1]
         0000003808211FE4 @   18 : 0d                LdaUndefined
         0000003808211FE5 @   19 : ab                Return
Constant pool (size = 3)
0000003808211F9D: [FixedArray] in OldSpace
 - map: 0x003808042205 <Map>
 - length: 3
           0: 0x003808211f6d <FixedArray[1]>
           1: 0x003808211f79 <ObjectBoilerplateDescription[5]>
           2: 0x003808211f09 <String[3]: #obj>
Handler Table (size = 0)
Source Position Table (size = 0)
*/