// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//                                                            ░░░░░░░░          ░░░░░░░    
//     ▓▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ░░░░░░░░       ░░░░░░      
//       ▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ░░░░░░░░    ░░░░░░░       
//        ▓▓▓▓▓▓▓           ▓▓▓▓       ▓▓▓▓▓ ▓▓▓▓   ▓▓▓▓    ▓▓▓    ░░░░░░░░░░░░░░░         
//       ▓▓▓ ▓▓▓▓▓          ▓▓▓▓       ▓▓▓▓  ▓▓▓    ▓▓▓▓    ▓▓▓     ░░░░░░░░░░░░           
//      ▓▓▓▓  ▓▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓    ▓▓▓▓    ▓▓▓       ░░░░░░░░░            
//     ▓▓▓▓▓▓▓▓▓▓▓▓▓        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓          ▓▓▓▓              ░░░░░░░░░            
//     ▓▓▓▓▓▓▓▓▓▓▓▓▓        ▓▓▓▓      ▓▓▓▓▓         ▓▓▓▓            ░░░░░░░░░░░░░          
//    ▓▓▓▓      ▓▓▓▓▓       ▓▓▓▓       ▓▓▓▓         ▓▓▓▓           ░░░░░░ ░░░░░░░░░        
//   ▓▓▓▓        ▓▓▓▓▓      ▓▓▓▓       ▓▓▓▓▓        ▓▓▓▓         ░░░░░░     ░░░░░░░░       
// ▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     ░░░░░░       ░░░░░░░░░     
//                                                            ░░░░░░░          ░░░░░░░░░   
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
//   Maak ARTX code op: https://artx.guuslab.com 
// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

(function (window) {
    function setAttributes(element, attributes) {
        for (var key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
    function createRect(x, y, width, height, fill) {
        var rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
        setAttributes(rect, {
            x: x,
            y: y,
            width: width,
            height: height,
            fill: fill
        });
        return rect;
    }
    window.onload = function () {
        var artxElements = document.querySelectorAll("artx, div.artx");
        artxElements.forEach(function (artxElement, index) {
            artxElement.style.display = 'block';
            artxElement.style.shapeRendering = "crispEdges";
            var data = artxElement.textContent.trim().split(',');
            var dimensions = data[0].split('x');
            var width = parseInt(dimensions[0]);
            var height = parseInt(dimensions[1]);
            var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
            setAttributes(svg, {
                viewBox: "0 0 " + width + " " + height,
                preserveAspectRatio: "none",
                'class': "artx-class-" + (index + 1)
            });
            svg.style.width = "100%";
            svg.style.height = "100%";
            var isRandom = data[1].trim().toLowerCase().startsWith('random');
            var colorCodes = isRandom ? data[1].trim().split(' ').slice(1) : [];
            var colorFrequencies = colorCodes.reduce(function (acc, colorCode) {
                var parts = colorCode.split(':');
                acc[parts[0]] = parts[1] ? parseFloat(parts[1]) : 0.5;
                return acc;
            }, {});
            var colors = isRandom ? Array.from({length: width * height}, () => {
                var totalFrequency = Object.values(colorFrequencies).reduce(function (a, b) { return a + b; }, 0);
                var random = Math.random() * totalFrequency;
                for (var color in colorFrequencies) {
                    if (random < colorFrequencies[color]) return color;
                    random -= colorFrequencies[color];
                }
            }) : data.slice(1).map(s => s.trim());
            for (var i = 0; i < colors.length; i++) {
                var rect = createRect(i % width, Math.floor(i / width), 1, 1, colors[i]);
                svg.appendChild(rect);
            }
            artxElement.innerHTML = '';
            artxElement.appendChild(svg);
        });
    };
})(window);