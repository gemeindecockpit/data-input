import React from 'react';

export default function ProxyJSON() {
    return {
        "user": [
            {
                "name": "Max Mustermann",
                "id": "37255"
            },
            {
                "name": "Alexander Schmidt",
                "id": "32463"
            },
            {
                "name": "Martin Mellinghoff",
                "id": "96718"
            },
            {
                "name": "Finja Robinson",
                "id": "79118"
            },
            {
                "name": "Mika Illing",
                "id": "74501"
            },
            {
                "name": "Ewald Willig",
                "id": "09938"
            },
            {
                "name": "Annika Rausch",
                "id": "21560"
            },
            {
                "name": "Hans-Peter Klesper",
                "id": "16614"
            },
            {
                "name": "Xenia Solka",
                "id": "27069"
            }
        ],
        "organisations": [
            {
                "name": "Feuerwehr",
                "id": "1",
                "kennzahlen": [
                    {
                        "name": "Atemschutzgeräte",
                        "id": "11",
                        "value-format": "num",
                        "value": "1231"
                    },
                    {
                        "name": "Einsatzkräfte (krank)",
                        "id": "12",
                        "value-format": "num",
                        "value": "51"
                    },
                    {
                        "name": "Maschinist- und Fahrer (krank)",
                        "id": "13",
                        "value-format": "num",
                        "value": "5"
                    },
                    {
                        "name": "Fahrzeuge einsatzbereit",
                        "id": "14",
                        "value-format": "num",
                        "value": "123"
                    }
                ]
            },
            {
                "name": "Krankenhaus",
                "id": "2",
                "kennzahlen": [
                    {
                        "name": "Ärzte (krank)",
                        "id": "21",
                        "value-format": "num",
                        "value": "131"
                    },
                    {
                        "name": "Pflegekräfte (krank)",
                        "id": "22",
                        "value-format": "num",
                        "value": "24"
                    },
                    {
                        "name": "Beatmungsgeräte",
                        "id": "23",
                        "value-format": "num",
                        "value": "1535"
                    },
                    {
                        "name": "Betten",
                        "id": "24",
                        "value-format": "num",
                        "value": "646"
                    }
                ]
            },
            {
                "name": "Wasserwerk",
                "id": "3",
                "kennzahlen": [
                    {
                        "name": "Teams (verfügbar)",
                        "id": "31",
                        "value-format": "num",
                        "value": "39"
                    },
                    {
                        "name": "Wasserqualität",
                        "id": "32",
                        "value-format": "string",
                        "value": "gut"
                    },
                    {
                        "name": "Verfügbarkeit Trinkwasser",
                        "id": "33",
                        "value-format": "num",
                        "value": "404120"
                    },
                    {
                        "name": "Abdeckung Versorgungsgebiet",
                        "id": "34",
                        "value-format": "perc",
                        "value": "97%"
                    }
                ]
            },
            {
                "name": "Verwaltung",
                "id": "4",
                "kennzahlen": [
                    {
                        "name": "MA Bürgerbüro (krank)",
                        "id": "41",
                        "value-format": "num",
                        "value": "12"
                    },
                    {
                        "name": "MA Jugendamt (krank)",
                        "id": "42",
                        "value-format": "num",
                        "value": "45"
                    },
                    {
                        "name": "MA Ordnungsamt (krank)",
                        "id": "43",
                        "value-format": "num",
                        "value": "124"
                    },
                    {
                        "name": "MA gesamt (krank)",
                        "id": "44",
                        "value-format": "num",
                        "value": "1123"
                    }
                ]
            },
            {
                "name": "Med. Versorgung",
                "id": "5",
                "kennzahlen": [
                    {
                        "name": "Einsatzkräft (krank)",
                        "id": "51",
                        "value-format": "num",
                        "value": "11"
                    },
                    {
                        "name": "Einsatzfahrzeuge (verfügbar)",
                        "id": "52",
                        "value-format": "num",
                        "value": "20"
                    }
                ]
            },
            {
                "name": "Pflegeheim",
                "id": "6",
                "kennzahlen": [
                    {
                        "name": "Pfleger (krank)",
                        "id": "61",
                        "value-format": "num",
                        "value": "19"
                    },
                    {
                        "name": "Auslastung",
                        "id": "62",
                        "value-format": "num",
                        "value": "290"
                    },
                    {
                        "name": "Lieferanten (verfügbar)",
                        "id": "63",
                        "value-format": "num",
                        "value": "25"
                    }
                ]
            },
            {
                "name": "Kita/Hort",
                "id": "7",
                "kennzahlen": [
                    {
                        "name": "Kindergärtner (krank)",
                        "id": "71",
                        "value-format": "num",
                        "value": "4"
                    },
                    {
                        "name": "Kinder (krank)",
                        "id": "72",
                        "value-format": "num",
                        "value": "25"
                    },
                    {
                        "name": "Verpflegung",
                        "id": "73",
                        "value-format": "String",
                        "value": "gut"
                    },
                    {
                        "name": "Anwesenheit",
                        "id": "74",
                        "value-format": "perc",
                        "value": "70%"
                    }
                ]
            },
            {
                "name": "Schule",
                "id": "8",
                "kennzahlen": [
                    {
                        "name": "Lehrer (krank)",
                        "id": "81",
                        "value-format": "num",
                        "value": "4"
                    },
                    {
                        "name": "Schüler (krank)",
                        "id": "82",
                        "value-format": "num",
                        "value": "25"
                    },
                    {
                        "name": "Anwesenheit",
                        "id": "84",
                        "value-format": "perc",
                        "value": "70%"
                    }
                ]
            }
        ]
    }
}