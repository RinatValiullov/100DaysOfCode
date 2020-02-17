const text =
  'Lorem ipsum dolor sit amet, ne aliquando consequuntur eum, vim et enim justo. Ne porro oblique est, nam ad justo sententiae elaboraret, utamur labores nonumes ei his. Ex illud abhorreant mei, eam tota noluisse vivendum cu. No vim ipsum integre concludaturque, eam ut soluta viderer. Ut qui utroque fierent, recusabo corrumpit pri te, lorem soluta his ne. Dicit doctus incorrupte id cum, ad sint molestie mea.';

const segments = [];
let startCounter = -1; // need think to change the logic but not the startCounter = 0

for (let idx in text) {
  if (text.charCodeAt(idx) === 44) {
    // code '44' is for comma sign ','
    segments.push(text.substring(startCounter + 1, idx));
    startCounter = Number(idx) + 1;
    console.log(`startCounter - ${startCounter} and idx - ${idx}`);
  }
}
segments.push(text.substring(startCounter + 1));

console.log(segments);
