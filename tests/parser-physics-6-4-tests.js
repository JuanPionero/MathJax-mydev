import {ParserTest} from './parser-tests.js';
import 'mathjax3/input/tex/physics/PhysicsConfiguration.js';

class ParserPhysicsTest6_4 extends ParserTest {

  constructor() {
    super();
    this.packages = ['base', 'physics'];
  }
};

let parserTest = new ParserPhysicsTest6_4();


parserTest.runTest(
  'BraKet_MatrixEl_0', '\\matrixel{n}{A}{m}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"⟨","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"⟨"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"A"}]}],"isInferred":true}]},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"⟩","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"m"}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"⟩"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'BraKet_MatrixEl_1', '\\mel{n}{A}{m}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"⟨","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"⟨"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"A"}]}],"isInferred":true}]},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"⟩","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"m"}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"⟩"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'BraKet_MatrixEl_2', '\\mel{\\frac{a}{b}}{\\frac{a}{b}}{\\frac{a}{b}}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"⟨","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"⟨"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"⟩","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"⟩"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'BraKet_MatrixEl_3', '\\mel A B C',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"⟨","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"⟨"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"A"}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"B"}]}],"isInferred":true}]},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"⟩","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"C"}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"⟩"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'BraKet_MatrixEl_4', '\\mel*{n}{\\frac{a}{b}}{m}',
{"kind":"math","texClass":4,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"⟨"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]}],"isInferred":true}]},{"kind":"mo","texClass":0,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":0},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"mo","texClass":0,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":0},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"m"}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"⟩"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'BraKet_MatrixEl_5', '\\mel*{\\frac{a}{b}}{\\frac{a}{b}}{\\frac{a}{b}}',
{"kind":"math","texClass":4,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"⟨"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"mo","texClass":0,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":0},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"mo","texClass":0,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":0},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"⟩"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'BraKet_MatrixEl_6', '\\mel**{n}{\\frac{a}{b}}{m}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"⟨","close":"⟩","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"⟨"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]}],"isInferred":true}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"m"}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"⟩"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'BraKet_MatrixEl_7', '\\mel**{\\frac{a}{b}}{\\frac{a}{b}}{\\frac{a}{b}}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"⟨","close":"⟩","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"⟨"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]}],"isInferred":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"⟩"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.printTime();
