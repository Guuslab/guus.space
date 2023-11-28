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

(function(global) {
    var constants = {
        svgNamespace: 'http://www.w3.org/2000/svg',
        artxSelector: 'artx',
        blockDisplay: 'block',
        viewBoxAttribute: 'viewBox',
        preserveAspectRatioAttribute: 'preserveAspectRatio',
        noneValue: 'none',
        widthAttribute: 'width',
        heightAttribute: 'height',
        classAttribute: 'class',
        artxClassPrefix: 'artx-class-',
        rectElement: 'rect',
        xAttribute: 'x',
        yAttribute: 'y',
        fillAttribute: 'fill'
    };

    function createSvgElement(elementName) {
        return document.createElementNS(constants.svgNamespace, elementName);
    }

    function setSvgAttributes(svgElement, attributes) {
        for (var key in attributes) {
            svgElement.setAttribute(key, attributes[key]);
        }
    }

    function createRectElement(x, y, width, height, fill) {
        var rect = createSvgElement(constants.rectElement);
        setSvgAttributes(rect, {
            [constants.xAttribute]: x,
            [constants.yAttribute]: y,
            [constants.widthAttribute]: width,
            [constants.heightAttribute]: height,
            [constants.fillAttribute]: fill
        });
        return rect;
    }

    global.onload = function() {
        var artxElements = document.querySelectorAll(' ' + constants.artxSelector);
        artxElements.forEach(function(artx, index) {
            artx.style.display = constants.blockDisplay;
            artx.style.shapeRendering = 'crispEdges'; // Add this line
            var data = artx.textContent.trim().split(',');
            var dimensions = data[0].split('x');
            var width = parseInt(dimensions[0]);
            var height = parseInt(dimensions[1]);
            var svg = createSvgElement('svg');
            setSvgAttributes(svg, {
                [constants.viewBoxAttribute]: `0 0 ${width} ${height}`,
                [constants.preserveAspectRatioAttribute]: constants.noneValue,
                [constants.classAttribute]: constants.artxClassPrefix + (index + 1)
            });
            svg.style.width = '100%';
            svg.style.height = '100%';
            for (var i = 1; i < data.length; i++) {
                var color = data[i].trim();
                var rect = createRectElement((i-1)%width, Math.floor((i-1)/width), 1, 1, color);
                svg.appendChild(rect);
            }
            artx.innerHTML = '';
            artx.appendChild(svg);
        });
    };
})(window);