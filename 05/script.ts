/*Data Africa*/
var Africa08 : number = 1028
var Africa18 : number = 1235.5 

/*Data South America*/
var SA08 : number = 1132.6
var SA18 : number = 1261.5

/*Data Europe*/
var EU08 : number = 4965.7
var EU18 : number = 4209.3

/*Data North America*/
var NA08 : number = 6600.4
var NA18 : number = 6035.6

/*Data Asia*/
var Asia08 : number = 12954.7
var Asia18 : number = 16274.1

/*Data Australia*/
var AUS08 : number = 1993
var AUS18 : number = 2100.5

/*calc worldwide*/
var ww18 : number = Africa18 + SA18 + EU18 + NA18 + Asia18 + AUS18

/*calc Africa*/
var rel_Africa_ww : number = Africa18/ ww18 *100
var Africa_percentage : number = (Africa18-Africa08)/ Africa08 *100
var Africa_absolute : number = Africa18-Africa08

/*calc South America*/
var rel_SA_ww : number = SA18/ ww18 *100
var SA_percentage : number = (SA18-SA08)/SA08 *100
var SA_absolute : number = SA18-SA08

/*calc Europe*/
var rel_EU_ww : number = EU18/ ww18 *100
var EU_percentage : number = (EU18-EU08)/EU08 *100
var EU_absolute : number = EU18-EU08

/*calc North America*/
var rel_NA_ww : number = NA18 / ww18 *100
var NA_percentage : number = (NA18-NA08)/ NA08 *100
var NA_absolute : number = NA18-NA08

/*calc Asia*/
var rel_Asia_ww : number = Asia18/ ww18 *100
var Asia_percentage : number = (Asia18-Asia08)/Asia08 *100
var Asia_absolute : number = Asia18-Asia08

/*calc Australia*/
var rel_AUS_ww : number = AUS18/ ww18 *100
var AUS_percentage : number = (AUS18-AUS08)/AUS08 *100
var AUS_absolute : number = AUS18-AUS08

/*Console*/
console.log ('Die Emission von Europa ist: ' + EU18 + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + rel_EU_ww + '%')
console.log ('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + EU_percentage + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + EU_absolute + 'kg CO2')

console.log ('Die Emission von Nordamerika ist: " + NA18 + "kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + rel_NA_ww + '%')
console.log ('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + NA_percentage + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + NA_absolute + 'kg CO2')

console.log ('Die Emission von Südamerika ist: ' + SA18 + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Südamerika damit ' + rel_SA_ww + '%')
console.log ('Für Südmamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + SA_percentage + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + SA_absolute + 'kg CO2')

console.log ('Die Emission von Afrika ist: ' + Africa18 + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + rel_Africa_ww + '%')
console.log ('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Africa_percentage + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Africa_absolute + 'kg CO2')

console.log ('Die Emission von Asien ist: ' + Asia18 + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + rel_Asia_ww + '%')
console.log ('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Asia_percentage + '%')
console.log ('2018 im Vergleich zu 2008 sind das ' + Asia_absolute + 'kg CO2')

console.log ('Die Emission von Australien ist: ' + AUS18 + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + rel_AUS_ww + '%')
console.log ('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + AUS_percentage + '%')
console.log ('2018 im Vergleich zu 2008 sind das ' + AUS_absolute + 'kg CO2')