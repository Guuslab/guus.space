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
            for (var i = 1; i < data.length; i++) {
                var color = data[i].trim();
                var rect = createRect((i - 1) % width, Math.floor((i - 1) / width), 1, 1, color);
                svg.appendChild(rect);
            }
            artxElement.innerHTML = '';
            artxElement.appendChild(svg);
        });
    };
})(window);