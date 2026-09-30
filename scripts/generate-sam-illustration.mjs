// Build a static vector illustration, not an experiment or measured loss surface.
// The earlier 2D SVG is retained as a visual fallback.
import {writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';

const project = (cx, x, y, z) => [cx + 70 * (x - y), 280 + 50 * (x + y) - 30 * z];
const point = p => p.map(v => v.toFixed(2)).join(',');
const line = points => points.map((p, i) => `${i ? 'L' : 'M'}${point(p)}`).join(' ');
const colors = (a, b, t) => '#' + a.map((v, i) => Math.round(v + (b[i] - v) * t).toString(16).padStart(2, '0')).join('');

function basin(cx, sharp) {
  const loss = (x, y) => sharp
    ? .16 + 1.28 * (1 - Math.exp(-(x*x + y*y) / .14))
    : .16 + .43 * (x*x + y*y);
  const sample = (x, y) => project(cx, x, y, loss(x, y));
  const floor = [[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,y]) => project(cx,x,y,0));
  let result = `<polygon points="${floor.map(point).join(' ')}" fill="#ffffff" fill-opacity=".55" stroke="#cbd6e6"/>`;
  for (const k of [-.5,0,.5]) {
    result += `<path d="${line([project(cx,-1,k,0),project(cx,1,k,0)])} ${line([project(cx,k,-1,0),project(cx,k,1,0)])}" fill="none" stroke="#dbe4ef" stroke-width="1"/>`;
  }
  const cells = [], n = 24;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const x = -1 + 2*i/n, y = -1 + 2*j/n, step = 2/n;
    const corners = [[x,y],[x+step,y],[x+step,y+step],[x,y+step]];
    const z = loss(x+step/2,y+step/2);
    const tint = Math.min(1,z/1.6);
    const fill = sharp ? colors([38,76,173],[173,198,250],tint) : colors([5,108,111],[143,219,210],tint);
    cells.push({depth:x+y,markup:`<polygon points="${corners.map(([a,b])=>point(sample(a,b))).join(' ')}" fill="${fill}" stroke="${sharp?'#c1d4fa':'#b2e5df'}" stroke-width=".55" stroke-opacity=".7" stroke-linejoin="round"/>`});
  }
  result += cells.sort((a,b)=>a.depth-b.depth).map(c=>c.markup).join('\n');
  // Same radius in parameter space on both conceptual surfaces.
  const neighborhood = Array.from({length:65},(_,i)=>sample(.28*Math.cos(i*Math.PI/32),.28*Math.sin(i*Math.PI/32)));
  const minimum = sample(0,0);
  result += `<path d="${line(neighborhood)} Z" fill="none" stroke="#f8c34c" stroke-width="3"/>`;
  result += `<circle cx="${minimum[0]}" cy="${minimum[1]}" r="5" fill="#fff" stroke="${sharp?'#254fae':'#07696c'}" stroke-width="2"/>`;
  return result;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-labelledby="title desc">
<title id="title">Conceptual 3D comparison of sharp and broad loss basins</title>
<desc id="desc">Two illustrative loss surfaces over two model parameters. Equal-sized parameter neighborhoods are outlined in gold. Loss rises more sharply around the narrow minimum than around the broad minimum. These are synthetic illustrations, not capstone results.</desc>
<defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#f0f5ff"/><stop offset="1" stop-color="#e8f6f5"/></linearGradient></defs>
<rect width="800" height="450" fill="url(#bg)"/>
<g font-family="Arial, Helvetica, sans-serif" fill="#273142">
<text x="40" y="45" font-size="26">Look around the minimum.</text>
<text x="40" y="76" font-size="18" fill="#596577">SAM seeks low loss across nearby parameter settings.</text>
<text x="200" y="118" text-anchor="middle" font-size="20" fill="#335cce">Sharp basin</text>
<text x="600" y="118" text-anchor="middle" font-size="20" fill="#087e82">Broad basin</text>
${basin(200,true)}
${basin(600,false)}
<path d="M40 274 V182 M36 188 L40 180 L44 188" stroke="#8da0b9" stroke-width="1.5" fill="none"/>
<text x="30" y="174" font-size="14" fill="#596577">Loss</text>
<text x="200" y="404" text-anchor="middle" font-size="17" fill="#596577">Loss rises quickly nearby</text>
<text x="600" y="404" text-anchor="middle" font-size="17" fill="#596577">Nearby loss stays lower</text>
<path d="M227 432 H255" stroke="#e5ae2c" stroke-width="3"/>
<text x="268" y="438" font-size="16" fill="#596577">Same-size parameter neighborhood</text>
</g></svg>`;
writeFileSync(fileURLToPath(new URL('../images/research/sam-landscape-3d.svg',import.meta.url)),svg+'\n');
console.log('Generated conceptual SAM 3D SVG.');
