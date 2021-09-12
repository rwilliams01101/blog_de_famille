import imageOne from '../assets/images/Fleuriaults_1.jpg'
import imageTwo from '../assets/images/Arrival_1.jpg'
import imageThree from '../assets/images/Arrival_2.jpg'
import imageFour from '../assets/images/Arrival_3.jpg'
import imageFive from '../assets/images/Arrival_4.jpg'
import imageSix from '../assets/images/Arrival_5.jpg'
import imageSeven from '../assets/images/Arrival_6.jpg'
import imageEight from '../assets/images/Arrival_7.jpg'
import imageNine from '../assets/images/Arrival_8.jpg'
// import imageTen from '../assets/images/Kvanndalfoss_1.jpg'
import imageEleven from '../assets/images/Amdal_1.jpg'
// import imageTwelve from '../assets/images/Kjerag_1.jpg'
import imageThirteen from '../assets/images/Preikestolen_1.jpg'
// import imageFourteen from '../assets/images/Sauda_1.jpg'
import imageFifteen from '../assets/images/Sauda_2.jpg'
import imageSixteen from '../assets/images/Sauda_3.jpg'
import imageSeventeen from '../assets/images/Sauda_4.jpg'
import imageEighteen from '../assets/images/Sauda_5.jpg'
import imageNineteen from '../assets/images/Sauda_6.jpg'
import imageTwenty from '../assets/images/Sauda_7.jpg'
import imageTwentyOne from '../assets/images/Sauda_8.jpg'
import imageTwentyTwo from '../assets/images/Sauda_9.jpg'
import imageTwentyThree from '../assets/images/Sauda_10.jpg'
import imageTwentyFour from '../assets/images/Sauda_11.jpg'
import imageTwentyFive from '../assets/images/Sauda_12.jpg'
import imageTwentySix from '../assets/images/Sauda_13.jpg'
import imageTwentySeven from '../assets/images/Sauda_14.jpg'
import imageTwentyEight from '../assets/images/Sauda_15.jpg'
import imageTwentyNine from '../assets/images/Amdal_2.JPEG'
import imageThirty from '../assets/images/Amdal_3.jpg'
import imageThirtyOne from '../assets/images/Amdal_4.JPEG'
import imageThirtyTwo from '../assets/images/Amdal_5.jpg'
import imageThirtyThree from '../assets/images/Amdal_6.jpg'
import imageThirtyFour from '../assets/images/Preikestolen_2.jpeg'
import imageThirtyFive from '../assets/images/Preikestolen_3.JPG'
import imageThirtySix from '../assets/images/Preikestolen_4.jpeg'
import imageThirtySeven from '../assets/images/Preikestolen_5.JPG'
import imageThirtyEight from '../assets/images/Preikestolen_6.jpeg'
import imageThirtyNine from '../assets/images/Preikestolen_7.JPG'
import imageForty from '../assets/images/Preikestolen_8.JPG'
import imageFortyOne from '../assets/images/Preikestolen_9.JPG'
import imageFortyTwo from '../assets/images/Preikestolen_10.JPG'
import imageFortyThree from '../assets/images/Preikestolen_12.JPG'
import imageFortyFour from '../assets/images/Preikestolen_13.JPG'
import imageFortyFive from '../assets/images/Hovlandsnuten.jpg'
import imageFortySix from '../assets/images/Hovlandsnuten.jpg'
import imageFortySeven from '../assets/images/Jonestølen_1.jpg'
import imageFortyEight from '../assets/images/Jonestølen_2.jpg'
import imageFortyNine from '../assets/images/Jonestølen_3.jpg'

// This is a placeholder until the database is built.
export const Preview_Values = [
    { src: `${imageOne}`, classes: "img img-lg-ctr", altText: "Quitter la France pour la Norvège", id: "1", blogEntry: "Après deux beaux mois passés en France, les cloches de Norvège ont sonné et il était temps de dire au revoir à Christian et Annick. Nous avons passé notre dernière nuit à Saintes à la brasserie locale et au restaurant Le Batia, avons parlé de voyager et de profiter de notre temps ensemble."},
    { src: `${imageTwentyEight}`, classes: "img img-lg-ctr", altText: "La ville de Sauda", id: "2", blogEntry: "Le nom Sauda vient du vieux norrois “Sauðar”, la forme plurielle de sauðr qui signifie “source” ou “issue d'eau”. Sauda appartient au district de Ryfylke et, à plus grande échelle, à la région de Rogaland (équivalent à un état aux États-Unis ou à une région en France). Sauda compte environ 4 500 habitants." },
    { src: `${imageEleven}`, classes: "img img-lg-ctr", altText: "Hytte solitaire près d'Amdal", id: "3", blogEntry: "Nous avons fait une randonnée avec nos voisins, Cédrik, Sophie et leur fille Anna. Nous sommes tombés sur ces superbes hyttas (cabines) à la fin de notre randonnée. Nous avons décidé à l'unanimité d'en acheter un dès que possible." },
    // { src: `${imageTwelve}`, classes: "img img-lg-ctr", altText: "Alan sur le chemin du retour de Kjerag", id: "4", blogEntry: "Nous avons eu un temps magnifique pendant toute la randonnée, jusqu'à notre arrivée à Kjeragbolten, puis tout s'est embué." },
    { src: `${imageThirteen}`, classes: "img img-lg-ctr", altText: "La vue près de Preikestolen", id: "5", blogEntry: "Après avoir terminé la randonnée principale, nous avons continué à grimper. Nous avons trouvé des vues impressionnantes et avions toute la place pour nous seuls." },
    // { src: `${imageFourteen}`, classes: "img img-lg-ctr", altText: "Faire du vélo à Sauda", id: "6", blogEntry: "Partout où vous allez, c'est en montée. Cependant, cela en vaut toujours la peine. C'était notre premier trajet à travers Sauda et à mi-chemin de notre trajet, nous nous sommes détendus au pied d'une cascade." },
    { src: `${imageFortyFive}`, classes: "img img-lg-ctr", publishDate: "16.08.2021", altText: "Marquage du sentier vers Hovlandsnuten", id: "7", blogEntry: "J'ai récemment commencé à travailler avec la Sauda Ferie og Fritid et c'est plutôt bien. Mon « travail » consiste à faire de la randonnée, à boire du café et à manger des myrtilles. De temps en temps, je peins des trucs.", writtenBy:"Alan" },
    { src: `${imageFortySeven}`, classes: "img img-lg-ctr", publishDate: "14.08.2021", altText: "Une belle trouvaille - Jonestølen", id: "8", blogEntry: "Je suis venu ici pour mon premier projet avec Ferie og Fritid et j'ai tout de suite su que je passerais beaucoup de temps ici. Une cascade tombe en cascade à travers les collines, gardant les bleuets heureux et se termine dans un lac vierge dans la vallée en contrebas.", writtenBy:"Alan" },
];

export const Blogpost_Values = [

  // Preview 1
  { src: `${imageTwo}`, classes: "img img-lg-ctr", altText: "En attendant de monter dans l'avion...", id: "1", blogEntry: "Jeudi 8 juillet, les parents de Camille nous ont déposés dans un hôtel près de l'aéroport de Bordeaux, où nous avons passé une (courte) nuit… Levé à 3h45 pour rejoindre l'aéroport dès son ouverture. Alors que nous avions tous nos papiers pour voyager, le changement constant des règles pour le passage des frontières nous rendait un peu anxieux... Et pour cause. Le premier employé de la compagnie aérienne à qui nous avons parlé n'était pas au courant des changements les plus récents et nous a demandé des documents et des tests covid pour embarquer… Nous n'avions ni l'un ni l'autre. Heureusement, nous avions imprimé les instructions officielles la veille et nous avons pu les suivre en quelques minutes. Après avoir embarqué dans l'avion, vers 6h00, tout s'est bien passé jusqu'à notre arrivée à Stavanger, y compris notre escale à Amsterdam. A Stavanger, nous avons rencontré des problèmes avec les agents de police, qui ne savaient pas que les citoyens américains mariés à un citoyen européen étaient autorisés en Norvège. Alan a dû montrer tous les papiers que nous avions apportés pour prouver qu'il déménageait à Sauda et pas un touriste en vacances… Le chef de la police était impliqué, et après 20 minutes (ce qui a semblé durer des heures pour nous…), nous avons finalement terminé. Ça y est, bienvenue en Norvège !!!", previewValue: "1"},
  { src: `${imageThree}`, classes: "img img-lg-ctr", altText: "Nous sommes en Norvège !", id: "2", blogEntry: "Contrairement à ce qu'on nous a dit, il ne pleuvait pas du tout, bien que le soleil ne soit pas venu nous saluer.", previewValue: "1"},
  { src: `${imageFour}`, classes: "img img-lg-ctr", altText: "Le port de Stavanger", id: "3", blogEntry: "Le moyen le plus pratique pour se rendre à Sauda quand on n'a pas de voiture est le ferry. Nous sommes arrivés à Stavanger à 11h, mais notre ferry pour Sauda était environ 5 heures plus tard… Avec nos sacs nous ne pouvions pas vraiment faire de tourisme, donc… Nous n'avions pas d'autre choix que d'attendre sur le côté du quai. Le trajet en ferry qui nous a emmenés à Sauda était merveilleux. Le trajet de 2h15 s'arrête à plusieurs endroits dans la baie de Stavanger avant d'entrer dans les fjords. A gauche, la mer du Nord avec ses multiples îles, à droite, les montagnes escarpées et les fjords. Voici quelques-unes des belles vues:", previewValue: "1"},
  { src: `${imageFive}`, classes: "img img-lg-ctr", id: "4", previewValue: "1"},
  { src: `${imageSix}`, classes: "img img-lg-ctr", id: "5", previewValue: "1"},
  { src: `${imageSeven}`, classes: "img img-lg-ctr", id: "6", previewValue: "1"},
  { src: `${imageEight}`, classes: "img img-lg-ctr", id: "7", previewValue: "1"},
  { src: `${imageNine}`, classes: "img img-lg-ctr", altText: "Notre nouvel appartement, sur Griegs Gate.", id: "8", blogEntry: "Après avoir déposé nos sacs, nous avons dû nous rendre rapidement au magasin avant qu'il ne ferme à 21h00. Nous avons acheté quelques trucs (images et étiquettes reconnaissables…), sommes rentrés manger et sommes allés dormir ! Alors qu'à cette période de l'année, le soleil ne se couche qu'à 23h00 et se lève à 5h00, la lumière ne nous a pas dérangés et nous nous sommes endormis comme des bébés.", previewValue: "1"},

  // Preview 2
  { src: `${imageFifteen}`, classes: "img img-lg-ctr", id: "9", blogEntry: "Il y a deux façons d'accéder à Sauda par la route : depuis le sud, en longeant le fjord sur une route très sinueuse et escarpée… Et depuis le nord, via une étroite route de montagne qui ferme en hiver. Il est également possible de se rendre à Sauda depuis Stavanger et d'autres communes par le ferry. L'emplacement de Sauda au fond du fjord rend son accès quelque peu difficile, surtout en hiver. Il a été question d'un tunnel à travers les montagnes, qui relierait Sauda à la commune d'Etne (Nord-Ouest). De nombreux habitants de Sauda attendent avec impatience ce tunnel car il raccourcirait considérablement le trajet vers des villes comme Haugesund et Bergen.", previewValue: "2"},
  { src: `${imageSixteen}`, classes: "img img-lg-ctr", id: "10", previewValue: "2"},
  { src: `${imageSeventeen}`, classes: "img img-lg-ctr", id: "11", previewValue: "2"},
  { src: `${imageEighteen}`, classes: "img img-lg-ctr", id: "12", previewValue: "2"},
  { src: `${imageNineteen}`, classes: "img img-lg-ctr", id: "13", previewValue: "2"},
  { src: `${imageTwenty}`, classes: "img img-lg-ctr", id: "14", previewValue: "2"},
  { src: `${imageTwentyOne}`, classes: "img img-lg-ctr", id: "15", previewValue: "2"},
  { src: `${imageTwentyTwo}`, classes: "img img-lg-ctr", id: "16", previewValue: "2"},
  { src: `${imageTwentyThree}`, classes: "img img-lg-ctr", id: "17", previewValue: "2"},
  { src: `${imageTwentyFour}`, classes: "img img-lg-ctr", id: "18", previewValue: "2"},
  { src: `${imageTwentyFive}`, classes: "img img-lg-ctr", id: "19", previewValue: "2"},
  { src: `${imageTwentySix}`, classes: "img img-lg-ctr", id: "20", previewValue: "2"},
  { src: `${imageTwentySeven}`, classes: "img img-lg-ctr", id: "21", previewValue: "2"},

    // Preview 3
    { src: `${imageThirty}`, classes: "img img-lg-ctr", altText: "Hytte (plur. Hytta) signifie cabine en norvégien.", id: "21", blogEntry: "Ici à Sauda, et apparemment dans la majeure partie de la Norvège, de nombreuses personnes possèdent une cabane, où elles se rendent le week-end ou pour leurs vacances. Les cabanes sont généralement situées en dehors des villes, dans des zones plus calmes et pittoresques. Certaines sont entièrement équipées et ressemblent beaucoup à une maison ordinaire, bien que la plupart soient rustiques, certaines sans électricité ni eau courante.", previewValue: "3"},
    { src: `${imageThirtyOne}`, classes: "img img-lg-ctr", id: "22", blogEntry: "Les vallées de Saudasjorden regorgent de ces petites cabanes en bois où les gens se rendent pour faire une pause dans leur quotidien, profiter du coin et du calme de la montagne. Il n'y a pas toujours de route qui y mène, vous devrez donc peut-être faire de la randonnée ou parfois du bateau pour vous rendre à votre hytte. Nous avons totalement la fièvre hytta et avons hâte de profiter de cette tradition nous-mêmes.", previewValue: "3"},
    { src: `${imageTwentyNine}`, classes: "img img-lg-ctr", id: "23", previewValue: "3"},
    { src: `${imageThirtyTwo}`, classes: "img img-lg-ctr", id: "24", previewValue: "3"},
    { src: `${imageThirtyThree}`, classes: "img img-lg-ctr", id: "25", previewValue: "3"},
  
    // Preview 5
    { src: `${imageThirtyFour}`, classes: "img img-lg-ctr", id: "26", blogEntry: "Preikestolen est l'une des randonnées les plus célèbres de Norvège. Preikestolen, qui signifie « la chaise du prédicateur », est une surface plane au sommet d'une immense falaise de granit formée par un glacier il y a environ 10 000 ans. C'était l'une des premières destinations que nous avons trouvées en recherchant des randonnées en Norvège. Donc, quand nous avons dû aller à Stavanger pour nos papiers de résidence, c'était une décision facile de rester un peu plus longtemps et de marcher jusqu'à Preikestolen. Sans voiture, nous avons dû réserver un aller-retour en bus de Stavanger au début du sentier. Bien qu'un peu cher, c'était vraiment pratique. Nous avons quitté notre Airbnb vers 9h30 du matin, nous avons trouvé cette merveilleuse boulangerie appelée Kanelsnurren (nous y sommes allés 3 fois maintenant…) et espérons dans le bus. Le trajet n'a duré que 45 minutes et nous avons pris la piste vers 11 heures.", previewValue: "5"},
    { src: `${imageFortyTwo}`, classes: "img img-lg-ctr", id: "27", blogEntry: "La montée était magnifique. Nous avions un peu de compagnie mais le covid a ses avantages et nous n'avons certainement pas connu les foules décrites en ligne. Après une bonne heure d'entraînement en montée à travers la forêt, les champs de roches et les marais, nous sommes soudainement arrivés dans une très grande vallée et avons réalisé pour la première fois à quel point le fjord était profond.", previewValue: "5"},
    { src: `${imageThirtyFive}`, classes: "img img-lg-ctr", id: "28", previewValue: "5"},
    { src: `${imageThirtySix}`, classes: "img img-lg-ctr", id: "29", previewValue: "5"},
    { src: `${imageThirtySeven}`, classes: "img img-lg-ctr", id: "30", previewValue: "5"},
    { src: `${imageThirtyEight}`, classes: "img img-lg-ctr", id: "31", previewValue: "5"},
    { src: `${imageThirtyNine}`, classes: "img img-lg-ctr", id: "32", previewValue: "5"},
    { src: `${imageForty}`, classes: "img img-lg-ctr", id: "33", previewValue: "5"},
    { src: `${imageFortyOne}`, classes: "img img-lg-ctr", id: "34", previewValue: "5"},
    { src: `${imageFortyTwo}`, classes: "img img-lg-ctr", id: "35", previewValue: "5"},
    { src: `${imageFortyThree}`, classes: "img img-lg-ctr", id: "36", previewValue: "5"},
    { src: `${imageFortyFour}`, classes: "img img-lg-ctr", id: "37", previewValue: "5"},

     // Preview 7
    { src: `${imageFortySix}`, classes: "img img-lg-ctr", id: "38", blogEntry: "Depuis notre arrivée en Norvège, nous avons exploré toutes les occasions que nous avons. Avec Allemannsretten nous permettant d'accéder à presque tout, j'ai pensé qu'il pourrait être utile de travailler sur les sentiers et de connaître la région. J'avais raison. Depuis le début des travaux sur les sentiers il y a quelques semaines, nous avons découvert des zones incroyables. Jusqu'à présent, le meilleur est Jonestølen, que je détaillerai dans un autre article. C'était le premier endroit où j'ai fait de la randonnée avec Leif (prononcez la vie) qui travaille sur les sentiers depuis environ 15 ans. Nous sortons généralement sur les sentiers chaque semaine pour construire des sentiers, peindre des balises ou installer des panneaux. J'ai toujours voulu travailler sur les systèmes de sentiers, et je ne peux pas penser à un meilleur endroit pour commencer que la Norvège.", previewValue: "7"},

    // Preview 8
    { src: `${imageFortySeven}`, classes: "img img-lg-ctr", id: "39", blogEntry: "Nous sommes venus ici samedi pour nous éloigner de l'agitation de Sauda (pause pour rire). La randonnée dure un peu moins de deux heures et serpente à travers les arbres, les fleurs et les myrtilles jusqu'à se terminer à l'hytta. Nous avons eu une pluie légère en montant, mais encore assez pour tremper mon pantalon. Heureusement, il y avait une couverture en laine à l'intérieur, j'ai donc pu faire des pantalons chauds très à la mode.", previewValue: "8"},
    { src: `${imageFortyEight}`, classes: "img img-lg-ctr", id: "40", blogEntry: "Peu de temps après son arrivée, Camille était à pied d'œuvre pour cueillir des myrtilles. Après quelques heures, il a commencé à pleuvoir ; Camille a continué la cueillette. Au moment où elle a finalement terminé, nous en avions tellement que nous avons dû congeler quelques sacs.", previewValue: "8"},
    { src: `${imageFortyNine}`, classes: "img img-lg-ctr", id: "41", blogEntry: "J'étais épuisé de la regarder travailler, alors j'ai décidé de faire un plongeon dans le lac de la vallée en contrebas de Jonestølen. Il faisait froid, mais savoir que le feu dans le poêle à bois était prêt à m'accueillir à nouveau dans l'hytta m'a facilité un peu la tâche.", previewValue: "8"},
]