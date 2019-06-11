import {ParserTest} from './parser-tests.js';
import 'mathjax3/input/tex/physics/PhysicsConfiguration.js';

class ParserPhysicsTest7_5 extends ParserTest {

  constructor() {
    super();
    this.packages = ['base', 'physics'];
  }
};

let parserTest = new ParserPhysicsTest7_5();


parserTest.runTest(
  'Matrices_Identity_0', '\\mqty{\\imat{3}}',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtable","texClass":0,"attributes":{"columnalign":"","columnspacing":"1em","rowspacing":"4pt"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"useHeight":1},"childNodes":[{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]}]}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Matrices_Identity_1', '\\vmqty{\\imat{5}}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mtable","texClass":0,"attributes":{"columnalign":"","columnspacing":"1em","rowspacing":"4pt"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"useHeight":1},"childNodes":[{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Matrices_Identity_2', '\\vmqty{\\imat{0}}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mtable","texClass":0,"attributes":{"columnalign":"","columnspacing":"1em","rowspacing":"4pt"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"useHeight":1},"childNodes":[{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Matrices_Identity_3', '\\vmqty{\\imat{1}}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mtable","texClass":0,"attributes":{"columnalign":"","columnspacing":"1em","rowspacing":"4pt"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"useHeight":1},"childNodes":[{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Matrices_Identity_4', '\\vmqty{\\imat{-1}}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mtable","texClass":0,"attributes":{"columnalign":"","columnspacing":"1em","rowspacing":"4pt"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"useHeight":1},"childNodes":[{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Matrices_Identity_5', '\\pmqty{\\imat{3}\\pmat{0}}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mtable","texClass":0,"attributes":{"columnalign":"","columnspacing":"1em","rowspacing":"4pt"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"useHeight":1},"childNodes":[{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.printTime();
