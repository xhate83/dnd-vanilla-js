import cambionImg from 'url:../images/cambion.png';
import goblinImg from 'url:../images/goblin.png';
import vampiroImg from 'url:../images/vampiro.png';

import vampiroSound from 'url:../sounds/vampiro.mp3';
import goblinSound from 'url:../sounds/goblin.mp3';
import cambionSound from 'url:../sounds/cambion.mp3';

export const cambion = {
    name: 'Cambion',
    img: cambionImg,
    sound: cambionSound,
    desc: `El cambion es la descendencia que surge del cruce entre un infernal (generalmente una súcubo o un incubo) y un humanoide (normalmente un humano). El cambion hereda los rasgos físicos de ambos progenitores, pero sus cuernos, sus alas correosas y su cola tendinosa son las marcas distintivas de su origen ultraterreno.`,
    lp: 40,
    dp: 15,
};

export const goblin = {
    name: 'Goblin',
    img: goblinImg,
    sound: goblinSound,
    desc: `Es un pequeño humanoide, egoísta y de negro corazón, que habita en cavernas, minas abandonadas, mazmorras saqueadas y otros lugares lúgubres. Dado que individualmente es débil, se reúnen en grandes grupos, de un tamaño que llega a ser apabullante. Ansía el poder y abusa constantemente de cualquier migaja de autoridad que consigan.`,
    lp: 10,
    dp: 7,
};

export const vampiro = {
    name: 'vampiro',
    img: vampiroImg,
    sound: vampiroSound,
    desc: `Despierta a una noche eterna y ansiando la vida que han perdido, el vampiro se sacia bebiendo la sangre de los vivos. Odia la luz solar, ya que esta les quema. No crea reflejos ni proyecta sombras, por lo que cualquier vampiro que quiera viajar entre mortales sin llamar la atención se mantiene en la oscuridad y lejos de superficies reflectantes.`,
    lp: 30,
    dp: 22,
};
