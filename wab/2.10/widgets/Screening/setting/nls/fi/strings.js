///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2018 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "feetUnit": "Jalkaa/neliöjalkaa",
    "milesUnit": "Mailia/aaria",
    "metersUnit": "Metriä/neliömetriä",
    "kilometersUnit": "Kilometriä/neliökilometriä",
    "hectaresUnit": "Kilometriä/hehtaaria"
  },
  "analysisTab": {
    "analysisTabLabel": "Analyysi",
    "selectAnalysisLayerLabel": "Valitse analyysikarttatasot",
    "addLayerLabel": "Lisää karttatasoja",
    "noValidLayersForAnalysis": "Valitusta Web-kartasta ei löytynyt kelvollisia karttatasoja.",
    "noValidFieldsForAnalysis": "Valitusta Web-kartasta ei löytynyt kelvollisia kenttiä. Poista valittu karttataso.",
    "addLayersHintText": "Vihje: valitse analysoitavat ja raportissa näytettävät karttatasot",
    "addLayerNameTitle": "Karttatason nimi",
    "addFieldsLabel": "Lisää kenttä",
    "addFieldsPopupTitle": "Valitse kentät",
    "addFieldsNameTitle": "Kenttien nimet",
    "aoiToolsLegendLabel": "AOI-työkalut",
    "aoiToolsDescriptionLabel": "Ota käyttöön työkalut, joiden avulla voit luoda kiinnostusalueita ja määrittää niiden tunnustekstit",
    "placenameLabel": "Paikannimi",
    "drawToolsLabel": "Piirtotyökalut",
    "uploadShapeFileLabel": "Lataa Shapefile-tiedosto",
    "coordinatesLabel": "Koordinaatit",
    "coordinatesDrpDwnHintText": "Vihje: valitse yksikkö, jos haluat nähdä syötetyt läpikäynnit",
    "coordinatesBearingDrpDwnHintText": "Vihje: valitse suuntima, jos haluat nähdä syötetyt läpikäynnit",
    "allowShapefilesUploadLabel": "Salli Shapefile-tiedostojen lataus analyysia varten",
    "allowShapefilesUploadLabelHintText": "Vihje: Näytä Lataa Shapefile-tiedosto analyysia varten -vaihtoehto raporttivälilehdellä",
    "allowVisibleLayerAnalysisLabel": "Älä analysoi tai raportoi niiden karttatasojen tuloksia, jotka eivät ole näkyvissä",
    "allowVisibleLayerAnalysisHintText": "Vihje: karttatasoja, jotka on poistettu käytöstä tai jotka eivät näy mittakaavan näkyvyysasetusten takia, ei analysoida eikä niitä sisällytetä tulostettuihin tai ladattaviin tuloksiin.",
    "areaUnitsLabel": "Näytä analyysin tulokset kohteessa",
    "maxFeatureForAnalysisLabel": "Analysoitavien kohteiden enimmäismäärä",
    "maxFeatureForAnalysisHintText": "Vihje: määritä analysoitavien kohteiden enimmäismäärä",
    "searchToleranceLabelText": "Hakutoleranssi",
    "searchToleranceHint": "Vihje: hakutoleranssia käytetään vain, kun analysoidaan piste- ja viivasyötteitä",
    "placenameButtonText": "Paikannimi",
    "drawToolsButtonText": "Piirrä",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Koordinaatit",
    "invalidLayerErrorMsg": "Määritä kentät kohteelle",
    "drawToolSelectableLayersLabel": "Valitse piirtotyökalun valittavissa olevat karttatasot",
    "drawToolSelectableLayersHint": "Vihje: valitse karttatasot, jotka ovat valittavissa piirtotyökalun karttatasoluettelossa"
  },
  "downloadTab": {
    "downloadLegend": "Latausasetukset",
    "reportLegend": "Raporttiasetukset",
    "downloadTabLabel": "Lataa",
    "syncEnableOptionLabel": "Kohdekarttatasot",
    "syncEnableOptionHint": "Vihje: käytetään niiden kohteiden kohdetietojen lataamiseen, jotka leikkaavat annetun muotoisen kiinnostusalueen.",
    "syncEnableOptionNote": "Huomautus: File Geodatabase- ja Shapefile-vaihtoehdot edellyttävät synkronointia käyttäviä kohdepalveluja. Shapefile-muotoa tuetaan vain ArcGIS Onlinen isännöidyissä kohdekarttatasoissa.",
    "extractDataTaskOptionLabel": "Poimi aineistotehtävä -geoprosessointipalvelu",
    "extractDataTaskOptionHint": "Vihje: käytä julkaistua Poimi aineistotehtävä -geoprosessointipalvelua niiden kohteiden lataamiseen, jotka leikkaavat File Geodatabase- tai Shapefile-muotoisen kiinnostusalueen.",
    "cannotDownloadOptionLabel": "Poista lataus käytöstä",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Karttatason nimi",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "File Geodatabase",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Salli lataus"
    },
    "setButtonLabel": "Aseta",
    "GPTaskLabel": "Määritä geoprosessointipalvelun URL-osoite",
    "printGPServiceLabel": "Tulostuspalvelun URL-osoite",
    "setGPTaskTitle": "Määritä pakollinen geoprosessointipalvelun URL-osoite",
    "logoLabel": "Logo",
    "logoChooserHint": "Vihje: muuta kuvaa napsauttamalla kuvan kuvaketta",
    "footnoteLabel": "Alaviite",
    "columnTitleColorPickerLabel": "Sarakeotsikoiden väri",
    "reportTitleLabel": "Raportin otsikko",
    "errorMessages": {
      "invalidGPTaskURL": "Virheellinen geoprosessointipalvelu. Valitse geoprosessointipalvelu, joka sisältää Poimi aineistotehtävä -toiminnon.",
      "noExtractDataTaskURL": "Valitse mikä tahansa geoprosessointipalvelu, joka sisältää Poimi aineistotehtävä -toiminnon.",
      "duplicateCustomOption": "Kohteen ${duplicateValueSizeName} kaksoismerkintä on olemassa.",
      "invalidLayoutWidth": "Kohteelle ${customLayoutOptionValue} on annettu virheellinen leveys.",
      "invalidLayoutHeight": "Kohteelle ${customLayoutOptionValue} on annettu virheellinen korkeus.",
      "invalidLayoutPageUnits": "Kohteelle ${customLayoutOptionValue} on valittu virheellinen sivuyksikkö.",
      "failtofetchbuddyTaskDimension": "Virhe noudettaessa aputehtävän ulottuvuustietoja. Yritä uudelleen.",
      "failtofetchbuddyTaskName": "Virhe noudettaessa aputehtävän nimeä. Yritä uudelleen.",
      "failtofetchChoiceList": "Virhe noudettaessa valintaluetteloa tulostuspalvelusta. Yritä uudelleen.",
      "invalidWidth": "Virheellinen leveys.",
      "invalidHeight": "Virheellinen korkeus."
    },
    "addCustomLayoutTitle": "Lisää mukautettu asettelu",
    "customLayoutOptionHint": "Vihje: lisää tulostusasetuksiin mukautettu asetteluvaihtoehto tulostuspalvelusta.",
    "reportDefaultOptionLabel": "Oletusasettelu",
    "pageSizeUnits": {
      "millimeters": "Millimetriä",
      "points": "Pisteet"
    }
  },
  "generalTab": {
    "generalTabLabel": "Yleinen",
    "tabLabelsLegend": "Paneelin tunnustekstit",
    "tabLabelsHint": "Vihje: määritä tunnustekstit",
    "AOITabLabel": "Kiinnostusalue-paneeli",
    "ReportTabLabel": "Raportti-paneeli",
    "bufferSettingsLegend": "Puskurin asetukset",
    "defaultBufferDistanceLabel": "Puskurin oletusetäisyys",
    "defaultBufferUnitsLabel": "Puskuriyksiköt",
    "generalBufferSymbologyHint": "Vihje: määritä symbolit, joita käytetään puskurien näyttämiseen määritettyjen kiinnostusalueiden ympärillä",
    "aoiGraphicsSymbologyLegend": "AOI-grafiikkasymbolit",
    "aoiGraphicsSymbologyHint": "Vihje: määritä symbolit, joita käytetään, kun määritetään piste-, viiva- ja aluemuotoisia kiinnostusalueita",
    "pointSymbologyLabel": "Piste",
    "previewLabel": "Esikatselu",
    "lineSymbologyLabel": "Viiva",
    "polygonSymbologyLabel": "Alue",
    "aoiBufferSymbologyLabel": "Puskurin symbolit",
    "pointSymbolChooserPopupTitle": "Osoitteen tai sijainnin symboli",
    "polygonSymbolChooserPopupTitle": "Korosta alue valitsemalla symboli",
    "lineSymbolChooserPopupTitle": "Korosta viiva valitsemalla symboli",
    "aoiSymbolChooserPopupTitle": "Määritä puskurin symboli",
    "aoiTabText": "AOI",
    "reportTabText": "Raportti",
    "invalidSymbolValue": "Virheellinen symbolisarvo."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Hakulähteen asetukset",
    "searchSourceSettingTitle": "Hakulähteen asetukset",
    "searchSourceSettingTitleHintText": "Lisää ja määritä geokoodauspalveluja tai kohdekarttatasoja haun lähteiksi. Nämä määritetyt lähteet määrittävät, mitä hakuruudussa voi hakea",
    "addSearchSourceLabel": "Lisää haun lähde",
    "featureLayerLabel": "Kohdekarttataso",
    "geocoderLabel": "Geokooderi",
    "generalSettingLabel": "Yleinen asetus",
    "allPlaceholderLabel": "Paikkamerkkiteksti haulle kaikkialta:",
    "allPlaceholderHintText": "Vinkki: Anna teksti, joka näytetään paikkamerkkinä kaikista karttatasoista ja geokooderista haettaessa",
    "generalSettingCheckboxLabel": "Näytä löydetyn kohteen tai sijainnin ponnahdusikkuna",
    "countryCode": "Maa- tai aluekoodit",
    "countryCodeEg": "esim. ",
    "countryCodeHint": "Jos jätät tämän arvon tyhjäksi, ohjelma etsii kaikista maista ja kaikilta alueilta",
    "questionMark": "tulisi käyttää?",
    "searchInCurrentMapExtent": "Etsi vain nykyisestä karttalaajuudesta",
    "zoomScale": "Tarkennustaso",
    "locatorUrl": "Geokooderin URL-osoite",
    "locatorName": "Geokooderin nimi",
    "locatorExample": "Esimerkki",
    "locatorWarning": "Tätä geokoodauspalvelun versiota ei tueta. Pienoisohjelma tukee geokoodauspalvelua 10.0 ja sitä uudempia versioita.",
    "locatorTips": "Ehdotukset eivät ole käytettävissä, koska geokoodauspalvelu ei tue ehdotustoimintoa.",
    "layerSource": "Karttatason lähde",
    "setLayerSource": "Määritä karttatason lähde",
    "setGeocoderURL": "Määritä geokooderin URL-osoite",
    "searchLayerTips": "Ehdotukset eivät ole käytettävissä, koska kohdepalvelu ei tue sivutustoimintoa.",
    "placeholder": "Muuttujan teksti",
    "searchFields": "Hakukentät",
    "displayField": "Näyttökenttä",
    "exactMatch": "Tarkka vastine",
    "maxSuggestions": "Ehdotusten enimmäismäärä",
    "maxResults": "Tulosten enimmäismäärä",
    "enableLocalSearch": "Ota käyttöön paikallinen haku",
    "minScale": "Vähimmäismittakaava",
    "minScaleHint": "Kun kartan mittakaava on suurempi kuin tämä mittakaava, käytetään paikallista hakua",
    "radius": "Säde",
    "radiusHint": "Määrittää nykyisen kartan keskikohdan ympärillä olevan alueen säteen. Säteen avulla arvioidaan geokoodausehdokkaiden sijoitusta, jotta sijaintia lähinnä olevat ehdokkaat palautetaan ensin",
    "setSearchFields": "Määritä hakukentät",
    "set": "Aseta",
    "invalidUrlTip": "Syötetty URL-osoite ${URL} on virheellinen, tai se ei ole käytettävissä.",
    "invalidSearchSources": "Virheelliset hakulähteen asetukset"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Täytä pakolliset kentät",
    "bufferDistanceFieldsErrorMsg": "Anna kelvolliset arvot",
    "invalidSearchToleranceErrorMsg": "Anna kelvollinen arvo kuhunkin toleranssiin",
    "atLeastOneCheckboxCheckedErrorMsg": "Virheellinen kokoonpano: vähintään yksi AOI-työkalu tarvitaan.",
    "noLayerAvailableErrorMsg": "Karttatasoja ei ole käytettävissä",
    "layerNotSupportedErrorMsg": "Ei tuettu ",
    "noFieldSelected": "Valitse analysoitavat kentät muokkaustoiminnon avulla.",
    "duplicateFieldsLabels": "Tunnustekstin kaksoiskappale ${labelText} on lisätty kohteelle: ${itemNames}",
    "noLayerSelected": "Valitse vähintään yksi karttataso analyysia varten",
    "errorInSelectingLayer": "Karttatason valintatoimintoa ei voi suorittaa loppuun. Yritä uudelleen.",
    "errorInMaxFeatureCount": "Anna kelvollinen kohteinen enimmäismäärä analyysia varten."
  }
});