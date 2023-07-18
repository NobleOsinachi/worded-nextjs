// const ScoreCard = () => {
// return (
// <div>

// <h1>SVG Circle Progress</h1>
// <h2>Based off of CSS3 circle progress bars</h2>

// <div id="cont" data-pct="100">
// <svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
// <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
// <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
// </svg>
// </div>
// <label for="percent">Type a percent!</label>
// <input id="percent" name="percent">


// <style>


// #svg circle {
// stroke - dashoffset: 0;
// transition: stroke-dashoffset 1s linear;
// stroke: #666;
// stroke-width: 1em;
// }
// #svg #bar {
// stroke: #FF9F1E;
// }
// #cont {
// display: block;
// height: 200px;
// width: 200px;
// margin: 2em auto;
// box-shadow: 0 0 1em black;
// border-radius: 100%;
// position: relative;
// }
// #cont:after {
// position: absolute;
// display: block;
// height: 160px;
// width: 160px;
// left: 50%;
// top: 50%;
// box-shadow: inset 0 0 1em black;
// content: attr(data-pct)"%";
// margin-top: -80px;
// margin-left: -80px;
// border-radius: 100%;
// line-height: 160px;
// font-size: 2em;
// text-shadow: 0 0 0.5em black;
// }

// input {
// color: #000;
// }


// /* Make things perty */
// html {height: 100%;}
// body {font - family: 'Source Sans Pro', Helvetica, Arial, sans-serif;  background-color: #0d0d0d; color: #fff; height: 100%; padding-top: 2em; text-align: center;}
// h1, h2{margin: 0; text-transform: uppercase;text-shadow: 0 0 0.5em black;}
// h2 {font - weight: 300}
// input {border: 1px solid #666; background: #333; color: #fff; padding: 0.5em; box-shadow: none; outline: none !important; margin: 1em  auto; text-align: center;}

// </style>

// <script>
// $('#percent').on('change', function(){
// var val = parseInt($(this).val());
// var $circle = $('#svg #bar');

// if (isNaN(val)) {
// val = 100; 
// }
// else{
// var r = $circle.attr('r');
// var c = Math.PI*(r*2);

// if (val < 0) {val = 0;}
// if (val > 100) {val = 100;}

// var pct = ((100-val)/100)*c;

// $circle.css({strokeDashoffset: pct});

// $('#cont').attr('data-pct',val);
// }
// });

// </script>
// </div>

// );
// };

// export default ScoreCard;















