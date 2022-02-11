var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Dusun1_KampungLaramutur_Orthomos_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Dusun1_KampungLaramutur_Orthomos",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Dusun1_KampungLaramutur_Orthomos_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13305821.083228, -1072378.074870, 13305978.763228, -1072237.134870]
                            })
                        });
var lyr_Dusun1_KampungMudi_Orthomos_1_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Dusun1_KampungMudi_Orthomos_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Dusun1_KampungMudi_Orthomos_1_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13306289.260026, -1072793.703754, 13306432.600026, -1072683.813754]
                            })
                        });
var lyr_Dusun1_KampungPangadu_Ortho_2_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Dusun1_KampungPangadu_Ortho_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Dusun1_KampungPangadu_Ortho_2_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13306315.535254, -1072724.424640, 13306415.885254, -1072628.874640]
                            })
                        });
var lyr_Dusun1_MapPlan_Orthomosaic_expor_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Dusun1_MapPlan_Orthomosaic_expor",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Dusun1_MapPlan_Orthomosaic_expor_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13306093.390141, -1072894.018554, 13306212.850141, -1072817.578554]
                            })
                        });
var lyr_Dusun1_PetaKampungWatumanguDusun_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Dusun1_PetaKampungWatumanguDusun",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Dusun1_PetaKampungWatumanguDusun_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13305622.824685, -1072499.898927, 13305756.594685, -1072390.008927]
                            })
                        });
var lyr_KampungPrainguBua_Orthomo_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "KampungPrainguBua_Orthomo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KampungPrainguBua_Orthomo_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13305797.196656, -1072922.691240, 13305887.976656, -1072812.801240]
                            })
                        });

var lyr_Dusun1_KampungLaihagagar2_Orthom_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Dusun1_KampungLaihagagar2_Orthom",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Dusun1_KampungLaihagagar2_Orthom_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13306227.154940, -1072576.347298, 13306344.214940, -1072464.057298]
                            })
                        });
var format_Dusun1_10 = new ol.format.GeoJSON();
var features_Dusun1_10 = format_Dusun1_10.readFeatures(json_Dusun1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dusun1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dusun1_10.addFeatures(features_Dusun1_10);
var lyr_Dusun1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dusun1_10, 
                style: style_Dusun1_10,
                interactive: true,
                title: '<img src="styles/legend/Dusun1_10.png" /> Dusun1'
            });
var group_AerialImagery = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_Dusun1_KampungLaramutur_Orthomos_1,lyr_Dusun1_KampungMudi_Orthomos_1_2,lyr_Dusun1_KampungPangadu_Ortho_2_3,lyr_Dusun1_MapPlan_Orthomosaic_expor_4,lyr_Dusun1_PetaKampungWatumanguDusun_6,lyr_KampungPrainguBua_Orthomo_7,lyr_Dusun1_KampungLaihagagar2_Orthom_9,],
                                title: "Aerial Imagery"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Dusun1_KampungLaramutur_Orthomos_1.setVisible(true);lyr_Dusun1_KampungMudi_Orthomos_1_2.setVisible(true);lyr_Dusun1_KampungPangadu_Ortho_2_3.setVisible(true);lyr_Dusun1_MapPlan_Orthomosaic_expor_4.setVisible(true);lyr_Dusun1_PetaKampungWatumanguDusun_6.setVisible(true);lyr_KampungPrainguBua_Orthomo_7.setVisible(true);lyr_Dusun1_KampungLaihagagar2_Orthom_9.setVisible(true);lyr_Dusun1_10.setVisible(true);
var layersList = [group_AerialImagery,lyr_Dusun1_10];
lyr_Dusun1_10.set('fieldAliases', {'Longitude_': 'Longitude_', 'Latitude__': 'Latitude__', 'Building_C': 'Building_C', 'ID_on_Base': 'ID_on_Base', 'Head_of_HH': 'Head_of_HH', 'M_F': 'M_F', 'Coordinate': 'Coordinate', 'Field8': 'Field8', 'Tiang_Terd': 'Tiang_Terd', 'Jarak_deng': 'Jarak_deng', 'Sinyal': 'Sinyal', 'Jenis_Ruma': 'Jenis_Ruma', 'Wealth_Gro': 'Wealth_Gro', 'F_Family': 'F_Family', 'F_Total_HH': 'F_Total_HH', 'F_Male_HH_': 'F_Male_HH_', 'F_Female_H': 'F_Female_H', 'F_Children': 'F_Children', 'F_Childr_1': 'F_Childr_1', 'F_Childr_2': 'F_Childr_2', 'F_Childr_3': 'F_Childr_3', 'F_Childr_4': 'F_Childr_4', 'F_Childr_5': 'F_Childr_5', 'F_Childr_6': 'F_Childr_6', 'F_Childr_7': 'F_Childr_7', 'F_Childr_8': 'F_Childr_8', 'F_Childr_9': 'F_Childr_9', 'F_Child_10': 'F_Child_10', 'F_Child_11': 'F_Child_11', 'F_Adult__3': 'F_Adult__3', 'F_Adult__4': 'F_Adult__4', 'F_Adult__5': 'F_Adult__5', 'F_Adult__6': 'F_Adult__6', 'F_Adult__7': 'F_Adult__7', 'F_Adult__8': 'F_Adult__8', 'F_Adult__9': 'F_Adult__9', 'F_Adult_10': 'F_Adult_10', 'F_Adult_11': 'F_Adult_11', 'F_Adult_12': 'F_Adult_12', 'F_Adult_13': 'F_Adult_13', 'F_Adult_14': 'F_Adult_14', 'F_Elderly_': 'F_Elderly_', 'F_Elderly1': 'F_Elderly1', 'F_Elderl_1': 'F_Elderl_1', 'F_Elderl_2': 'F_Elderl_2', 'F_Elderl_3': 'F_Elderl_3', 'F_Elderl_4': 'F_Elderl_4', 'F_Elderl_5': 'F_Elderl_5', 'F_Elderl_6': 'F_Elderl_6', 'Havefamily': 'Havefamily', 'Remarks': 'Remarks', 'Receiving_': 'Receiving_', 'Remarks_1': 'Remarks_1', 'Own_Busine': 'Own_Busine', 'Remarks_12': 'Remarks_12', 'a__Lightin': 'a__Lightin', 'Total_load': 'Total_load', 'b__HP': 'b__HP', 'Total_lo_1': 'Total_lo_1', 'c1__Speake': 'c1__Speake', 'Total_lo_2': 'Total_lo_2', 'c2__Speake': 'c2__Speake', 'Total_lo_3': 'Total_lo_3', 'd__TV_': 'd__TV_', 'Total_lo_4': 'Total_lo_4', 'e__Fan': 'e__Fan', 'Total_lo_5': 'Total_lo_5', 'f__Clothes': 'f__Clothes', 'Total_lo_6': 'Total_lo_6', 'g__Magic_C': 'g__Magic_C', 'Total_lo_7': 'Total_lo_7', 'h__Fridge': 'h__Fridge', 'Total_lo_8': 'Total_lo_8', 'Wood_Plane': 'Wood_Plane', 'Total_lo_9': 'Total_lo_9', 'Handheld_G': 'Handheld_G', 'Total_l_10': 'Total_l_10', 'Total_HH_l': 'Total_HH_l', });
lyr_Dusun1_10.set('fieldImages', {'Longitude_': '', 'Latitude__': '', 'Building_C': '', 'ID_on_Base': '', 'Head_of_HH': '', 'M_F': '', 'Coordinate': '', 'Field8': '', 'Tiang_Terd': '', 'Jarak_deng': '', 'Sinyal': '', 'Jenis_Ruma': '', 'Wealth_Gro': '', 'F_Family': '', 'F_Total_HH': '', 'F_Male_HH_': '', 'F_Female_H': '', 'F_Children': '', 'F_Childr_1': '', 'F_Childr_2': '', 'F_Childr_3': '', 'F_Childr_4': '', 'F_Childr_5': '', 'F_Childr_6': '', 'F_Childr_7': '', 'F_Childr_8': '', 'F_Childr_9': '', 'F_Child_10': '', 'F_Child_11': '', 'F_Adult__3': '', 'F_Adult__4': '', 'F_Adult__5': '', 'F_Adult__6': '', 'F_Adult__7': '', 'F_Adult__8': '', 'F_Adult__9': '', 'F_Adult_10': '', 'F_Adult_11': '', 'F_Adult_12': '', 'F_Adult_13': '', 'F_Adult_14': '', 'F_Elderly_': '', 'F_Elderly1': '', 'F_Elderl_1': '', 'F_Elderl_2': '', 'F_Elderl_3': '', 'F_Elderl_4': '', 'F_Elderl_5': '', 'F_Elderl_6': '', 'Havefamily': '', 'Remarks': '', 'Receiving_': '', 'Remarks_1': '', 'Own_Busine': '', 'Remarks_12': '', 'a__Lightin': '', 'Total_load': '', 'b__HP': '', 'Total_lo_1': '', 'c1__Speake': '', 'Total_lo_2': '', 'c2__Speake': '', 'Total_lo_3': '', 'd__TV_': '', 'Total_lo_4': '', 'e__Fan': '', 'Total_lo_5': '', 'f__Clothes': '', 'Total_lo_6': '', 'g__Magic_C': '', 'Total_lo_7': '', 'h__Fridge': '', 'Total_lo_8': '', 'Wood_Plane': '', 'Total_lo_9': '', 'Handheld_G': '', 'Total_l_10': '', 'Total_HH_l': '', });
lyr_Dusun1_10.set('fieldLabels', {'Longitude_': 'no label', 'Latitude__': 'no label', 'Building_C': 'header label', 'ID_on_Base': 'header label', 'Head_of_HH': 'header label', 'M_F': 'header label', 'Coordinate': 'no label', 'Field8': 'no label', 'Tiang_Terd': 'header label', 'Jarak_deng': 'header label', 'Sinyal': 'header label', 'Jenis_Ruma': 'header label', 'Wealth_Gro': 'header label', 'F_Family': 'inline label', 'F_Total_HH': 'inline label', 'F_Male_HH_': 'inline label', 'F_Female_H': 'inline label', 'F_Children': 'no label', 'F_Childr_1': 'no label', 'F_Childr_2': 'no label', 'F_Childr_3': 'no label', 'F_Childr_4': 'no label', 'F_Childr_5': 'no label', 'F_Childr_6': 'no label', 'F_Childr_7': 'no label', 'F_Childr_8': 'no label', 'F_Childr_9': 'no label', 'F_Child_10': 'no label', 'F_Child_11': 'no label', 'F_Adult__3': 'no label', 'F_Adult__4': 'no label', 'F_Adult__5': 'no label', 'F_Adult__6': 'no label', 'F_Adult__7': 'no label', 'F_Adult__8': 'no label', 'F_Adult__9': 'no label', 'F_Adult_10': 'no label', 'F_Adult_11': 'no label', 'F_Adult_12': 'no label', 'F_Adult_13': 'no label', 'F_Adult_14': 'no label', 'F_Elderly_': 'no label', 'F_Elderly1': 'no label', 'F_Elderl_1': 'no label', 'F_Elderl_2': 'no label', 'F_Elderl_3': 'no label', 'F_Elderl_4': 'no label', 'F_Elderl_5': 'no label', 'F_Elderl_6': 'no label', 'Havefamily': 'no label', 'Remarks': 'no label', 'Receiving_': 'no label', 'Remarks_1': 'no label', 'Own_Busine': 'no label', 'Remarks_12': 'no label', 'a__Lightin': 'no label', 'Total_load': 'no label', 'b__HP': 'no label', 'Total_lo_1': 'no label', 'c1__Speake': 'no label', 'Total_lo_2': 'no label', 'c2__Speake': 'no label', 'Total_lo_3': 'no label', 'd__TV_': 'no label', 'Total_lo_4': 'no label', 'e__Fan': 'no label', 'Total_lo_5': 'no label', 'f__Clothes': 'no label', 'Total_lo_6': 'no label', 'g__Magic_C': 'no label', 'Total_lo_7': 'no label', 'h__Fridge': 'no label', 'Total_lo_8': 'no label', 'Wood_Plane': 'no label', 'Total_lo_9': 'no label', 'Handheld_G': 'no label', 'Total_l_10': 'no label', 'Total_HH_l': 'no label', });
lyr_Dusun1_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
