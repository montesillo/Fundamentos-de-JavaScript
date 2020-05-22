var signo = prompt('¿Cúal es tu signo?');

switch(signo){
    case 'aries':
        console.log('En el horóscopo del Tarot te salió la carta El Sol, eso significa que la suerte está de tu lado y debes empezar eso que tanto deseas, como un negocio o mudarte, que la carta te brillará más que nunca, sólo trata de protegerte con un listón rojo en el tobillo derecho amarrado con tres nudos y déjalo allí hasta que se caiga, eso te quitará las envidias. En el amor seguirás con tu pareja más enamorado que nunca hablando de compromiso');
        break;

    case 'tauro':
        console.log('Te domina la carta de El Emperador en el horóscopo del tarot, esto significa que tu fuerza interior está más elevada que nunca y cualquier toma de decisión que realices saldrá exitosa, y más en cuestiones legales o en cambios de trabajo para prosperar.');
        break;

    case 'geminis':
    case 'géminis':
        console.log('Te salió en el horóscopo del tarot La Estrella, y con tu signo significa que tendrás propuestas de cambios en tu negocio, que es tu momento de crecer en tu patrimonio y la carta te dará la fuerza para que todo te salga de lo mejor, sólo cuídate de las envidias y mal de ojo que te rodea últimamente.');
        break;

     case 'cancer':
     case 'cáncer':
        console.log('Te correspondió la carta de Los Enamorados en el horóscopo del tarot, lo que implica que es tu mejor época; te augura que tendrás días de pleno enamoramiento con tu pareja actual y deciden ya formar una familia. A los que están solteros les llegará un amor muy formal del signo de Aries o Libra que será muy compatible. ');
        break;

     case 'leo':
        console.log('En el horóscopo del tarot te salió la carta El Ermitaño, esto significa que son tiempos ideales para que realices cambios en tu forma de pensar y debes dejar atrás esos rencores para que puedas disfrutar de tu vida en este momento. ');
        break;

     case 'virgo':
        console.log('El Carro es la carta que te salió en el horóscopo del tarot, esto significa que podrás lograr lo que deseas, sólo trata de prender una veladora de color rojo el 24 de mayo para que te abra los caminos. ');
        break;

    case 'libra':
        console.log('Te salió la carta La Templanza en el horóscopo del tarot, eso significa que por fin tendrás ese equilibro que necesitabas en tu vida, que el ángel protector te quitará los problemas que tenías con tus ex parejas y familiares, y sanarás tu corazón.');
        break;

     case 'escorpion':
        console.log('En el horóscopo del tarot te salió la carta La Torre, esto significa que debes tener cuidado con las traiciones en cuestiones de trabajo y con supuestos amigos, así que trata de ser más precavido en todo lo que hagas o digas para garantizar tu bienestar. ');
        break;

     case 'sagitario':
        console.log('En el horóscopo del tarot te salió La Fuerza, y esta carta con tu signo implica que pasarás un fin de semana de muchas alegrías con tus seres queridos y festejarás el cumpleaños de tu pareja. ');
        break;

     case 'capricornio':
        console.log('Te salió la carta La Luna en el horóscopo del tarot, esto significa que este fin de semana tendrás muy buenas noticias alrededor de tu vida y te invitan a realizar un viaje los próximos meses, sólo trata de organizar bien tus tiempos.');
        break;

    case 'acuario':
        console.log('El Mago es la carta que te salió en el horóscopo del tarot, significa que ya no debes decirle que no a la suerte, es decir, que no te sabotees tú mismo con pensamientos negativos, pues estos tres días serán de abundancia y sorpresas agradables para ti.');
        break;

     case 'picis':
        console.log('La carta As de Oros es la que te salió e implica que este 22 de mayo la suerte vendrá a ti con mucha fuerza y debes vestirte de colores claros y ponerte mucho perfume para que las buenas energías del dinero se queden contigo y empieces un negocio o te cambies de trabajo de forma exitosa.');
        break;
    default:
        console.log('No encontramos su signo zodeacal');
        break;
}
