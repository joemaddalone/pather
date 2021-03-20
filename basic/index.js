import rect from './rect.js';
import roundedRect from './roundedRect.js';
import square from './square.js';
import roundedSquare from './roundedSquare.js';
import triangle from './triangle.js';
import circle from './circle.js';
35;
import ellipse from './ellipse.js';
import segment from './segment.js';
import sector from './sector.js';
import polygon from './polygon.js';
import regPolygon from './regPolygon.js';
import polyline from './polyline.js';
import star from './star.js';
import polygram from './polygram.js';
import radialLines from './radialLines.js';
import symX from './symX.js';
import symH from './symH.js';
import symI from './symI.js';
import cross from './cross.js';
import { svg, g } from '../helpers/svg.js';

const makeBasicShapes = (target) => {
  const shapes = [
    rect,
    roundedRect,
    square,
    roundedSquare,
    triangle,
    circle,
    ellipse,
    segment,
    sector,
    polygon,
    regPolygon,
    polygram,
    polyline,
    star,
    radialLines,
    cross,
    symX,
    symH,
    symI,
  ];

  shapes.forEach((shape) => {
    const span = document.createElement('span');
    const s = svg(shape.w, shape.h);
    shape.paths.forEach((p) => {
      s.appendChild(p.path);
    });
    const title = document.createElement('h3');
    title.className = 'ui-header';
    title.innerHTML = `<span class="func">${shape.method}</span>(<i class="args">${shape.args}</i>)`;
    // title.innerText = shape.sig;
    const description = document.createElement('p');
    description.innerText = shape.description;
    const source = document.createElement('a');
    source.href = `https://github.com/joemaddalone/path/blob/master/demo/src/basic/${shape.name}.js`;
    source.setAttribute('rel', 'noopener noreferrer');
    source.setAttribute('target', '_blank');
    source.innerText = 'source';
    span.appendChild(title);
    span.appendChild(description);
    span.appendChild(s);
    span.appendChild(source);
    target.appendChild(span);
  });
};

export default makeBasicShapes;
