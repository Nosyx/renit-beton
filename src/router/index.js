import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../components/Gallery.vue";
import Gallery2 from "../components/Gallery2.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import Dlazby from "../views/Dlazby.vue";
import Obklady from "../views/Obklady.vue";
import Obklad from "../views/Obklad.vue";
import DesignObklad from "../views/DesignObklad.vue";
import Test from "../views/Test.vue";
import ObkladTryx from "../views/ObkladTryx.vue";
import ObkladRezide from "../views/ObkladRezide.vue";
import ObkladKlasik from "../views/ObkladKlasik.vue";
import ObkladPlot from "../views/ObkladPlot.vue";
import ObkladKrb from "../views/ObkladKrb.vue";
import BetonoveStierky from "../views/BetonoveStierky.vue";
import MikrocementStierky from "../views/MikrocementStierky.vue";
import Kvetinace from "../views/Kvetinace.vue";
import KvetStena from "../views/KvetStena.vue";
import KvetSKladane from "../views/KvetSkladane.vue";
import KvetMonoliticke from "../views/KvetMonoliticke.vue";
import SPCP from "../views/SPCP.vue";
import SchodyL from "../views/SchodyL.vue";
import SchodyLProfil from "../views/SchodyLProfil.vue";
import SchodyStupne from "../views/SchodyStupne.vue";
import SchodyMikrocement from "../views/SchodyMikrocement.vue";
import Schody from "../views/Schody.vue";
import Ploty from "../views/Ploty.vue";
import BetStierPlot from "../views/BetStierPlot.vue";
import PlotCapice from "../views/PlotCapice.vue";
import Parapety from "../views/Parapety.vue";
import Panely from "../views/Panely.vue";
import LavickySedenie from "../views/LavickySedenie.vue";
import LaviceVsetky from "../views/LaviceVsetky.vue";
import LavickaVerus from "../views/LavickaVerus.vue";
import LavickaApolon from "../views/LavickaApolon.vue";
import LavickaAres from "../views/LavickaAres.vue";
import LavickaAurelius from "../views/LavickaAurelius.vue";
import LavickaGalba from "../views/LavickaGalba.vue";
import LavickaTrajan from "../views/LavickaTrajan.vue";
import LavickaFilius from "../views/LavickaFilius.vue";
import LavickaHades from "../views/LavickaHades.vue";
import LavickaPius from "../views/LavickaPius.vue";
import LavickaZeus from "../views/LavickaZeus.vue";
import SedenieGalo from "../views/SedenieGalo.vue";
import SedenieFlavius from "../views/SedenieFlavius.vue";
import Nabytok from "../views/Nabytok.vue";
import StolHera from "../views/StolHera.vue";
import StolLevitation from "../views/StolLevitation.vue";
import KuchynskeDosky from "../views/KuchynskeDosky.vue";
import Dekoracie from "../views/Dekoracie.vue";
import StojanVizitky from "../views/StojanVizitky.vue";
import TechnickeListy from "../views/TechnickeListy.vue";
import TycinkyAuris from "../views/TycinkyAuris.vue";
import LavickyBeton from "../views/LavickyBeton.vue";
import LavickyDrevo from "../views/LavickyDrevo.vue";
import LavickyKov from "../views/LavickyKov.vue";
import LavickyZostavy from "../views/LavickyZostavy.vue";
import Dlazba from "../views/Dlazba.vue";
import DesignDlazba from "../views/DesignDlazba.vue";
import ZakazkovaVyroba from "../views/ZakazkovaVyroba.vue";
import PodlozkaLapi from "../views/PodlozkaLapi.vue";
import PredlzovackaContraho from "../views/PredlzovackaContraho.vue";
import KvetinacikKristal from "../views/KvetinacikKristal.vue";
import StojanCutis from "../views/StojanCutis.vue";
import StojanToj from "../views/StojanToj.vue";
import MiskaOvalis from "../views/MiskaOvalis.vue";
import NadobaKoluty from "../views/NadobaKoluty.vue";
import Sapone from "../views/Sapone.vue";
import TanierFruto from "../views/TanierFruto.vue";
import Rubigo from "../views/Rubigo.vue";
import Vany from "../views/Vany.vue";
import Quatro from "../views/Quatro.vue";
import Valentin from "../views/Valentin.vue";
import Nick from "../views/Nick.vue";
import Kuba from "../views/Kuba.vue";
import Tawana from "../views/Tawana.vue";
import TicTacToe from "../views/TicTacToe.vue";
import Strom from "../views/Strom.vue";
import Sita from "../views/Sita.vue";
import Spice from "../views/Spice.vue";
import Lemo from "../views/Lemo.vue";
import Zun from "../views/Zun.vue";
import DecorHome from "../views/DecorHome.vue";
import Invent from "../views/Invent.vue";
import Setis from "../views/Setis.vue";
import Luna from "../views/Luna.vue";
import Sapo from "../views/Sapo.vue";
import Lusin from "../views/Lusin.vue";
import Upsi from "../views/Upsi.vue";
import Dene from "../views/Dene.vue";
import Tofe from "../views/Tofe.vue";
import Lunctus from "../views/Lunctus.vue";
import City from "../views/City.vue";
import Mun from "../views/Mun.vue";
import ObkladMozaika from "../views/ObkladMozaika.vue";
import MikroFasada from "../views/MikrocementFasada.vue";
import MikroPodlaha from "../views/MikrocementPodlaha.vue";
import MikroStena from "../views/MikrocementStena.vue";
import MikroNabytok from "../views/MikrocementNabytok.vue";
import DekoStierka from "../views/DekoracnaStierka.vue";
import GrafStierka from "../views/GrafickaStierka.vue";
import StierkaKrb from "../views/StierkaKrb.vue";
import BetonKozmetik from "../views/BetonKozmetik.vue";
import VyvyseneZahony from "../views/VyvyseneZahony.vue";
import DoskyMonolit from "../views/DoskyMonolit.vue";
import DoskyStierka from "../views/DoskyStierka.vue";
import NabytokMonolit from "../views/NabytokMonolit.vue";
import NabytokStierka from "../views/NabytokStierka.vue";
import SedackaComodus from "../views/SedackaComodus.vue";
import SedenieNero from "../views/SedenieNero.vue";
import SedenieTitus from "../views/SedenieTitus.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/gallery-2",
    name: "Gallery2",
    component: Gallery2,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/dlazby",
    name: "Dlazby",
    component: Dlazby,
    meta: {
      title: "Dlažby",
    },
  },
  {
    path: "/dekoracie",
    name: "Dekoracie",
    component: Dekoracie,
    meta: {
      title: "Dekorácie",
    },
  },
  {
    path: "/obklady",
    name: "Obklady",
    component: Obklady,
    meta: {
      title: "Obklady",
    },
  },
  {
    path: "/obklady/obklad",
    name: "Obklad",
    component: Obklad,
    meta: {
      title: "Obklad",
    },
  },
  {
    path: "/obklady/design-obklad",
    name: "DesignObklad",
    component: DesignObklad,
    meta: {
      title: "Design obklad",
    },
  },
  {
    path: "/obklady/obklad/mozaika",
    name: "ObkladMozaika",
    component: ObkladMozaika,
    meta: {
      title: "Obklad Mozaika",
    },
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },

  {
    path: "/obklady/design-obklad/obklad-tryx",
    name: "ObkladTryx",
    component: ObkladTryx,
    meta: {
      title: "Obklad Tryx",
    },
  },

  {
    path: "/obklady/design-obklad/obklad-rezide",
    name: "ObkladRezide",
    component: ObkladRezide,
    meta: {
      title: "Obklad Rezidé",
    },
  },

  {
    path: "/obklady/obklad/obklad-klasik",
    name: "ObkladKlasik",
    component: ObkladKlasik,
    meta: {
      title: "Obklad Klasik",
    },
  },

  {
    path: "/obklady/obklad/obklad-plot",
    name: "ObkladPlot",
    component: ObkladPlot,
    meta: {
      title: "Obklad Plotu",
    },
  },

  {
    path: "/obklady/obklad/obklad-krb",
    name: "ObkladKrb",
    component: ObkladKrb,
    meta: {
      title: "Obklad Krbu",
    },
  },

  {
    path: "/betonove-stierky",
    name: "BetonoveStierky",
    component: BetonoveStierky,
  },

  {
    path: "/betonove-stierky/dekoracna-stierka",
    name: "DekoStierka",
    component: DekoStierka,
  },

  {
    path: "/betonove-stierky/graficka-stierka",
    name: "GrafStierka",
    component: GrafStierka,
  },

  {
    path: "/betonove-stierky/stierka-krb",
    name: "StierkaKrb",
    component: StierkaKrb,
  },

  {
    path: "/betonove-stierky/beton-kozmetik",
    name: "BetonKozmetik",
    component: BetonKozmetik,
  },

  {
    path: "/mikrocementove-stierky",
    name: "MikrocementStierky",
    component: MikrocementStierky,
  },

  {
    path: "/mikrocementove-stierky/mikrocementova-fasada",
    name: "MikroFasada",
    component: MikroFasada,
  },

  {
    path: "/mikrocementove-stierky/mikrocementova-podlaha",
    name: "MikroPodlaha",
    component: MikroPodlaha,
  },

  {
    path: "/mikrocementove-stierky/mikrocementova-stena",
    name: "MikroStena",
    component: MikroStena,
  },

  {
    path: "/mikrocementove-stierky/mikrocementovy-nabytok",
    name: "MikroNabytok",
    component: MikroNabytok,
  },

  {
    path: "/kvetinace",
    name: "Kvetinace",
    component: Kvetinace,
    meta: {
      title: "Kvetináče",
    },
  },

  {
    path: "/kvetinace/kvetinacova-stena",
    name: "KvetStena",
    component: KvetStena,
    meta: {
      title: "Kvetináčová stena",
    },
  },

  {
    path: "/kvetinace/kvetinace-skladane",
    name: "KvetSKladane",
    component: KvetSKladane,
    meta: {
      title: "Kvetináče skladané",
    },
  },

  {
    path: "/kvetinace/kvetinace-monoliticke",
    name: "KvetMonoliticke",
    component: KvetMonoliticke,
    meta: {
      title: "Kvetináče monolitické",
    },
  },

  {
    path: "/kvetinace/vyvysene-zahony",
    name: "VyvyseneZahony",
    component: VyvyseneZahony,
    meta: {
      title: "Vyvýšené záhony",
    },
  },

  {
    path: "/schody-ploty-capice-parapety",
    name: "SPCP",
    component: SPCP,
    meta: {
      title: "Schody, Ploty, Čapice a Parapety",
    },
  },

  {
    path: "/schody-ploty-capice-parapety/schody-l",
    name: "SchodyL",
    component: SchodyL,
  },

  {
    path: "/schody-ploty-capice-parapety/schody/schody-l-profil",
    name: "SchodyLProfil",
    component: SchodyLProfil,
  },

  {
    path: "/schody-ploty-capice-parapety/schody/schody-stupne",
    name: "SchodyStupne",
    component: SchodyStupne,
  },

  {
    path: "/schody-ploty-capice-parapety/schody/schody-mikrocement",
    name: "SchodyMikrocement",
    component: SchodyMikrocement,
  },

  {
    path: "/schody-ploty-capice-parapety/schody",
    name: "Schody",
    component: Schody,
  },

  {
    path: "/schody-ploty-capice-parapety/ploty",
    name: "Ploty",
    component: Ploty,
  },

  {
    path: "/schody-ploty-capice-parapety/ploty/panely",
    name: "Panely",
    component: Panely,
  },

  {
    path: "/schody-ploty-capice-parapety/betonova-stierka-plotu",
    name: "BetStierPlot",
    component: BetStierPlot,
  },

  {
    path: "/schody-ploty-capice-parapety/plotove-capice",
    name: "PlotCapice",
    component: PlotCapice,
  },

  {
    path: "/schody-ploty-capice-parapety/parapety",
    name: "Parapety",
    component: Parapety,
    meta: {
      title: "Parapety",
    },
  },

  {
    path: "/lavicky-sedenie",
    name: "LavickySedenie",
    component: LavickySedenie,
    meta: {
      title: "Lavičky a sedenie",
    },
  },

  {
    path: "/lavicky-beton",
    name: "LavickyBeton",
    component: LavickyBeton,
    meta: {
      title: "Lavičky betón",
    },
  },

  {
    path: "/lavicky-drevo",
    name: "LavickyDrevo",
    component: LavickyDrevo,
    meta: {
      title: "Lavičky drevo",
    },
  },

  {
    path: "/lavicky-zostavy",
    name: "LavickyZostavy",
    component: LavickyZostavy,
    meta: {
      title: "Lavičky zostavy",
    },
  },

  {
    path: "/lavicky-kov",
    name: "LavickyKov",
    component: LavickyKov,
    meta: {
      title: "Lavičky kov",
    },
  },

  {
    path: "/lavice-vsetky",
    name: "LaviceVsetky",
    component: LaviceVsetky,
  },

  {
    path: "/lavicky-sedenie/lavicka-verus",
    name: "LavickaVerus",
    component: LavickaVerus,
  },

  {
    path: "/lavicky-sedenie/sedacka-comodus",
    name: "SedackaComodus",
    component: SedackaComodus,
  },

  {
    path: "/lavicky-sedenie/sedenie-nero",
    name: "SedenieNero",
    component: SedenieNero,
  },

  {
    path: "/lavicky-sedenie/sedenie-titus",
    name: "SedenieTitus",
    component: SedenieTitus,
  },

  {
    path: "/lavicky-sedenie/lavicka-apolon",
    name: "LavickaApolon",
    component: LavickaApolon,
  },

  {
    path: "/lavicky-sedenie/lavicka-ares",
    name: "LavickaAres",
    component: LavickaAres,
  },

  {
    path: "/lavicky-sedenie/lavicka-aurelius",
    name: "LavickaAurelius",
    component: LavickaAurelius,
  },

  {
    path: "/lavicky-sedenie/lavicka-galba",
    name: "LavickaGalba",
    component: LavickaGalba,
  },

  {
    path: "/lavicky-sedenie/lavicka-trajan",
    name: "LavickaTrajan",
    component: LavickaTrajan,
  },

  {
    path: "/lavicky-sedenie/lavicka-filius",
    name: "LavickaFilius",
    component: LavickaFilius,
  },

  {
    path: "/lavicky-sedenie/lavicka-hades",
    name: "LavickaHades",
    component: LavickaHades,
  },

  {
    path: "/lavicky-sedenie/lavicka-pius",
    name: "LavickaPius",
    component: LavickaPius,
  },

  {
    path: "/lavicky-sedenie/lavicka-zeus",
    name: "LavickaZeus",
    component: LavickaZeus,
  },

  {
    path: "/lavicky-sedenie/sedenie-galo",
    name: "SedenieGalo",
    component: SedenieGalo,
  },

  {
    path: "/lavicky-sedenie/sedenie-flavius",
    name: "SedenieFlavius",
    component: SedenieFlavius,
  },

  {
    path: "/nabytok",
    name: "Nabytok",
    component: Nabytok,
  },
  {
    path: "/nabytok/stol-hera",
    name: "StolHera",
    component: StolHera,
  },

  {
    path: "/nabytok/stol-levitation",
    name: "StolLevitation",
    component: StolLevitation,
  },

  {
    path: "/nabytok/kuchynske-dosky",
    name: "KuchynskeDosky",
    component: KuchynskeDosky,
  },

  {
    path: "/nabytok/kuchynske-dosky-monoliticke",
    name: "DoskyMonolit",
    component: DoskyMonolit,
  },

  {
    path: "/nabytok/kuchynske-dosky-stierka",
    name: "DoskyStierka",
    component: DoskyStierka,
  },

  {
    path: "/nabytok/nabytok-monoliticky",
    name: "NabytokMonolit",
    component: NabytokMonolit,
  },

  {
    path: "/nabytok/nabytok-stierka",
    name: "NabytokStierka",
    component: NabytokStierka,
  },

  {
    path: "/dekoracie/betonovy-stojan-na-vizitky-card",
    name: "StojanVizitky",
    component: StojanVizitky,
  },

  {
    path: "/technicke-listy",
    name: "TechnickeListy",
    component: TechnickeListy,
  },

  {
    path: "/dekoracie/betonovy-zasobnik-na-vatove-tycinky-auris",
    name: "TycinkyAuris",
    component: TycinkyAuris,
  },

  {
    path: "/dekoracie/betonova-podlozka-lapi",
    name: "PodlozkaLapi",
    component: PodlozkaLapi,
  },

  {
    path: "/dekoracie/betonovy-kvetinacik-kristal",
    name: "KvetinacikKristal",
    component: KvetinacikKristal,
  },

  {
    path: "/dekoracie/betonova-predlzovacka-contraho",
    name: "PredlzovackaContraho",
    component: PredlzovackaContraho,
  },

  {
    path: "/dekoracie/betonovy-stojan-dekorativnej-kozmetiky-cutis",
    name: "StojanCutis",
    component: StojanCutis,
  },

  {
    path: "/dekoracie/betonovy-stojan-na-vajicko-toj",
    name: "StojanToj",
    component: StojanToj,
  },

  {
    path: "/dekoracie/betonova-miska-ovalis",
    name: "MiskaOvalis",
    component: MiskaOvalis,
  },

  {
    path: "/dekoracie/betonova-nadoba-koluty",
    name: "NadobaKoluty",
    component: NadobaKoluty,
  },

  {
    path: "/dekoracie/betonovy-davkovac-mydla-sapone",
    name: "Sapone",
    component: Sapone,
  },

  {
    path: "/dekoracie/betonovy-tanier-fruto",
    name: "TanierFruto",
    component: TanierFruto,
  },

  {
    path: "/dekoracie/betonovy-svietnik-rubigo",
    name: "Rubigo",
    component: Rubigo,
  },

  {
    path: "/dekoracie/betonova-sviecka-vany",
    name: "Vany",
    component: Vany,
  },

  {
    path: "/dekoracie/betonova-vianocna-ozdoba-quatro",
    name: "Quatro",
    component: Quatro,
  },

  {
    path: "/dekoracie/betonovy-podnos-valentin",
    name: "Valentin",
    component: Valentin,
  },

  {
    path: "/dekoracie/betonovy-zajac-nick",
    name: "Nick",
    component: Nick,
  },

  {
    path: "/dekoracie/popolnik-na-cigary-kuba",
    name: "Kuba",
    component: Kuba,
  },

  {
    path: "/dekoracie/prirucny-stolik-tawana",
    name: "Tawana",
    component: Tawana,
  },

  {
    path: "/dekoracie/tic-tac-toe",
    name: "TicTacToe",
    component: TicTacToe,
  },

  {
    path: "/dekoracie/betonova-dekoracia-strom-2ks",
    name: "Strom",
    component: Strom,
  },

  {
    path: "/dekoracie/betonova-misa-sita",
    name: "Sita",
    component: Sita,
  },

  {
    path: "/dekoracie/betonova-miska-spice",
    name: "Spice",
    component: Spice,
  },

  {
    path: "/dekoracie/betonovy-citronovnik-lemo",
    name: "Lemo",
    component: Lemo,
  },

  {
    path: "/dekoracie/betonovy-drziak-servitky-zun",
    name: "Zun",
    component: Zun,
  },

  {
    path: "/dekoracie/betonova-dekoracia-home",
    name: "DecorHome",
    component: DecorHome,
  },

  {
    path: "/dekoracie/betonovy-svietnik-invent",
    name: "Invent",
    component: Invent,
  },

  {
    path: "/dekoracie/betonova-wc-kefa-setis",
    name: "Setis",
    component: Setis,
  },

  {
    path: "/dekoracie/betonova-lampa-luna",
    name: "Luna",
    component: Luna,
  },

  {
    path: "/dekoracie/betonova-mydelnicka-sapo",
    name: "Sapo",
    component: Sapo,
  },

  {
    path: "/dekoracie/betonova-misa-lusin",
    name: "Lusin",
    component: Lusin,
  },

  {
    path: "/dekoracie/betonovy-sanon-zakladac-upsi",
    name: "Upsi",
    component: Upsi,
  },

  {
    path: "/dekoracie/betonovy-stojan-dene",
    name: "Dene",
    component: Dene,
  },

  {
    path: "/dekoracie/betonovy-tanier-tofe",
    name: "Tofe",
    component: Tofe,
  },

  {
    path: "/dekoracie/betonova-misa-lunctus",
    name: "Lunctus",
    component: Lunctus,
  },

  {
    path: "/dekoracie/betonove-domceky-city-3ks",
    name: "City",
    component: City,
  },

  {
    path: "/dekoracie/betonovy-zasobnik-na-kozmeticke-obrusky-mun",
    name: "Mun",
    component: Mun,
  },

  {
    path: "/dlazby/dlazba",
    name: "Dlazba",
    component: Dlazba,
  },

  {
    path: "/dlazby/design-dlazba",
    name: "DesignDlazba",
    component: DesignDlazba,
  },

  {
    path: "/zakazkova-vyroba",
    name: "ZakazkovaVyroba",
    component: ZakazkovaVyroba,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      return { top: 0 };
    }
  },
});

let hasRefreshed = false;

router.beforeEach((to, from, next) => {
  const defaultTitle = "renit beton";
  document.title = to.meta.title ? `${defaultTitle} - ${to.meta.title}` : defaultTitle;

  // Refresh raz, ak nie sme na domovskej stránke
  if (!hasRefreshed && to.name !== from.name) {
    hasRefreshed = true;
    if (from.name) {
      window.location.reload();
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
