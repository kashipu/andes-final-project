import { Country } from "../models/Country.model";
import { Culture } from "../models/Culture.model";
import { CULTUREDATA } from "./Culture.data";

export const COUNTRIESDATA: Country[] = [
    {
        id: "1",
        name: "Egipto",
        region: "Africa",
        subregion: "Africa del Norte",
        flag: "https://flagcdn.com/eg.svg",
        culture: CULTUREDATA[0],
    },
    {
        id: "2",
        name: "Nigeria",
        region: "Africa",
        subregion: "Africa Occidental",
        flag: "https://flagcdn.com/ne.svg",
        culture: CULTUREDATA[0],
    },
    {
        id: "3",
        name: "Marruecos",
        region: "Africa",
        subregion: "Africa del Norte",
        flag: "https://flagcdn.com/ma.svg",
        culture: CULTUREDATA[0],
    },
    {
        id: "4",
        name: "Argentina",
        region: "América",
        subregion: "América del Sur",
        flag: "https://flagcdn.com/ar.svg",
        culture: CULTUREDATA[1],
    },
    {
        id: "5",
        name: "Mexico",
        region: "América",
        subregion: "Centroamérica",
        flag: "https://flagcdn.com/mx.svg",
        culture: CULTUREDATA[1],
    },
    {
        id: "6",
        name: "Colombia",
        region: "América",
        subregion: "América del Sur",
        flag: "https://flagcdn.com/co.svg",
        culture: CULTUREDATA[1],
    },
    {
        id: "7",
        name: "China",
        region: "Asia",
        subregion: "Asia Oriental",
        flag: "https://flagcdn.com/cn.svg",
        culture: CULTUREDATA[3],
    },
    {
        id: "8",
        name: "India",
        region: "Asia",
        subregion: "Asia Meridional",
        flag: "https://flagcdn.com/in.svg",
        culture: CULTUREDATA[3],
    },
    {
        id: "9",
        name: "Japon",
        region: "Asia",
        subregion: "Asia Oriental",
        flag: "https://flagcdn.com/jp.svg",
        culture: CULTUREDATA[3],
    },
    {
        id: "10",
        name: "Francia",
        region: "Europa",
        subregion: "Europa Occidental",
        flag: "https://flagcdn.com/fi.svg",
        culture: CULTUREDATA[4],
    },
    {
        id: "11",
        name: "España",
        region: "Europa",
        subregion: "Europa Occidental",
        flag: "https://flagcdn.com/es.svg",
        culture: CULTUREDATA[4],
    },
    {
        id: "12",
        name: "Italia",
        region: "Europa",
        subregion: "Europa Meridional",
        flag: "https://flagcdn.com/it.svg",
        culture: CULTUREDATA[4],
    },
    {
        id: "12",
        name: "Italia",
        region: "Europa",
        subregion: "Europa Meridional",
        flag: "https://flagcdn.com/it.svg",
        culture: CULTUREDATA[4],
    },
    {
        id: "13",
        name: "Australia",
        region: "Oceanía",
        subregion: "Australia y Nueva Zelanda",
        flag: "https://flagcdn.com/au.svg",
        culture: CULTUREDATA[5],
    },
    {
        id: "14",
        name: "Nueva Zelanda",
        region: "Oceanía",
        subregion: "Australia y Nueva Zelanda",
        flag: "https://flagcdn.com/nz.svg",
        culture: CULTUREDATA[5],
    }

];

COUNTRIESDATA.forEach((country: Country) => {
    CULTUREDATA.forEach((culture: Culture) => {
        if (country.culture === culture) {
            culture.countries.push(country);
        }
    });
});