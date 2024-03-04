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
    const setAttributes = (element, attributes) => {
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    }
    const createRect = (x, y, width, height, fill) => {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
        setAttributes(rect, { x, y, width, height, fill });
        return rect;
    }
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        return '#' + Array.from({length: 6}).map(() => letters[Math.floor(Math.random() * 16)]).join('');
    }
    window.onload = () => {
        const artxElements = document.querySelectorAll("artx, div.artx");
        artxElements.forEach((artxElement, index) => {
            const data = artxElement.textContent.trim().split(',');
            const dimensions = data[0].split('x');
            const width = parseInt(dimensions[0]);
            const height = parseInt(dimensions[1]);
            const svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
            setAttributes(svg, {
                viewBox: `0 0 ${width} ${height}`,
                preserveAspectRatio: "none",
                'class': `artx-${index + 1}`
            });
            svg.style.width = "100%";
            svg.style.height = "100%";
            const isRandom = data[1].trim().toLowerCase().startsWith('random');
            const colorCodes = isRandom ? data[1].trim().split(' ').slice(1) : [];
            const isDoubleRandom = colorCodes[0] && colorCodes[0].toLowerCase() === 'random';
            const colorFrequencies = colorCodes.reduce((acc, colorCode) => {
                const parts = colorCode.split(':');
                acc[parts[0]] = parts[1] ? parseFloat(parts[1]) : 0.5;
                return acc;
            }, {});
            const colors = isRandom ? Array.from({length: width * height}, () => {
                if (isDoubleRandom) {
                    return getRandomColor();
                } else {
                    let totalFrequency = Object.values(colorFrequencies).reduce((a, b) => a + b, 0);
                    let random = Math.random() * totalFrequency;
                    for (let color in colorFrequencies) {
                        if (random < colorFrequencies[color]) return color;
                        random -= colorFrequencies[color];
                    }
                }
            }) : data.slice(1).map(s => s.trim());
            const rects = document.createDocumentFragment();
            colors.forEach((color, i) => {
                const rect = createRect(i % width, Math.floor(i / width), 1, 1, color);
                rects.appendChild(rect);
            });
            requestAnimationFrame(() => {
                svg.appendChild(rects);
                artxElement.textContent = '';
                artxElement.appendChild(svg);
                svg.style.shapeRendering = "crispEdges";
            });
        });
    };
})(window);