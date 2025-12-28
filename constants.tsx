
import { DaySchedule, MenuItem } from './types';

export const PROGRAM: DaySchedule[] = [
  {
    date: '31 Dicembre',
    title: 'La Partenza & Il Gran Cenone',
    items: [
      { time: '08:00', activity: 'Ritrovo a Veternigo', location: 'Parchetto di Leo' },
      { time: '08:30', activity: 'Ritrovo a Padova', location: 'Stazione Trenitalia', note: 'Alternativa al ritrovo di Veternigo' },
      { time: '11:00', activity: 'Arrivo a Bergamo', description: 'Visita della città alta e pranzo libero tra le mura venete.' },
      { time: '17:00', activity: 'Arrivo a Hône', location: 'Auberge de la Gare', description: 'Sistemazione nelle camere e relax pre-serata.' },
      { time: '20:00', activity: 'Cenone di Capodanno', description: 'Inizio dei festeggiamenti per accogliere il nuovo anno!' },
    ],
  },
  {
    date: '1 Gennaio',
    title: 'Relax & Borghi Storici',
    items: [
      { activity: 'Sveglia comoda', description: 'Iniziamo l\'anno con calma e senza fretta.' },
      { activity: 'Stranger Things Marathon', description: 'Proiezione della puntata finale della serie per un inizio d\'anno sovrannaturale.' },
      { activity: 'Visita al Borgo di Bard', description: 'Passeggiata in uno dei borghi più belli d\'Italia ai piedi del maestoso forte.' },
      { activity: 'Visita guidata al Forte di Bard', note: 'Attività in fase di definizione.', description: 'Esplorazione delle prigioni e dei musei della fortezza.' },
    ],
  },
  {
    date: '2 Gennaio',
    title: 'Sport & Montagna',
    items: [
      { activity: 'Sciata al Monte Rosa', description: 'Giornata sulle piste del comprensorio Monterosa Ski. La stazione d\'accesso più vicina e comoda da Hône è Champoluc (Val d\'Ayas), raggiungibile risalendo da Verrès.' },
      { activity: 'Camminata panoramica', note: 'Alternativa allo sci (In fase di definizione).', description: 'Escursione tra i sentieri innevati della Valle d\'Aosta.' },
      { activity: 'Pranzo in Baita', description: 'Degustazione di piatti tipici ad alta quota o pranzo al sacco.' },
      { activity: 'Rientro e Cena', description: 'Serata conviviale in struttura.' },
    ],
  },
  {
    date: '3 Gennaio',
    title: 'A scelta: Piste o Città',
    items: [
      { activity: 'Opzione Sci', description: 'Seconda giornata di sport sulla neve. Possibilità di scoprire la stazione di Champorcher (estremamente vicina a Hône e molto suggestiva) o tornare nel comprensorio Monterosa Ski.' },
      { activity: 'Opzione Cultura', description: 'Visita alle perle della valle: Châtillon, Aosta o la mondana Courmayeur.' },
    ],
  },
  {
    date: '4 Gennaio',
    title: 'Il Rientro',
    items: [
      { activity: 'Sistemazione struttura', description: 'Check-out e ultimi preparativi.' },
      { activity: 'Partenza verso casa', description: 'Viaggio di ritorno carichi di ricordi.' },
    ],
  },
];

export const NYE_MENU: MenuItem[] = [
  { 
    category: 'Antipasti', 
    dish: 'Contrasti e Ombre di Montagna', 
    ingredients: 'Mosaico di affettati locali, vol-au-vent croccante con vellutata di fonduta, vegetali d\'autunno in infusione d\'olio, petali di radicchio in abbraccio di speck. (Alternativa vegetariana garantita)' 
  },
  { 
    category: 'Primi', 
    dish: 'Evoluzione di una Lamina Dorata', 
    ingredients: 'Stratificazioni artigianali di sfoglia all\'uovo, ragù bianco della tradizione e besciamella setosa. (Alternativa vegetariana garantita)' 
  },
  { 
    category: 'Secondi', 
    dish: 'Consistenze Terrose e Geometrie Rurali', 
    ingredients: 'Oro giallo di St. Marcel, essenze di bosco trifolate, polpettone nobile alle erbe fini.' 
  },
  { 
    category: 'Dolci', 
    dish: 'Quintessenza della Memoria', 
    ingredients: 'Selezione di dolcezze della tradizione, lievitati delle feste e brindisi d\'inizio.' 
  },
];
