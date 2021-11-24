var L06;
(function (L06) {
    /*strings Regionnamen*/
    var Africa = "Africa";
    var SA = "South America";
    var EU = "Europe";
    var NA = "North America";
    var Asia = "Asia";
    var AUS = "Australia";
    /*Data Africa*/
    var Africa08 = 1028;
    var Africa18 = 1235.5;
    /*Data South America*/
    var SA08 = 1132.6;
    var SA18 = 1261.5;
    /*Data Europe*/
    var EU08 = 4965.7;
    var EU18 = 4209.3;
    /*Data North America*/
    var NA08 = 6600.4;
    var NA18 = 6035.6;
    /*Data Asia*/
    var Asia08 = 12954.7;
    var Asia18 = 16274.1;
    /*Data Australia*/
    var AUS08 = 1993;
    var AUS18 = 2100.5;
    /*calc worldwide*/
    var ww18 = Africa18 + SA18 + EU18 + NA18 + Asia18 + AUS18;
    /*calc Africa*/
    var rel_Africa_ww = Africa18 / ww18 * 100;
    var Africa_percentage = (Africa18 - Africa08) / Africa08 * 100;
    var Africa_absolute = Africa18 - Africa08;
    /*calc South America*/
    var rel_SA_ww = SA18 / ww18 * 100;
    var SA_percentage = (SA18 - SA08) / SA08 * 100;
    var SA_absolute = SA18 - SA08;
    /*calc Europe*/
    var rel_EU_ww = EU18 / ww18 * 100;
    var EU_percentage = (EU18 - EU08) / EU08 * 100;
    var EU_absolute = EU18 - EU08;
    /*calc North America*/
    var rel_NA_ww = NA18 / ww18 * 100;
    var NA_percentage = (NA18 - NA08) / NA08 * 100;
    var NA_absolute = NA18 - NA08;
    /*calc Asia*/
    var rel_Asia_ww = Asia18 / ww18 * 100;
    var Asia_percentage = (Asia18 - Asia08) / Asia08 * 100;
    var Asia_absolute = Asia18 - Asia08;
    /*calc Australia*/
    var rel_AUS_ww = AUS18 / ww18 * 100;
    var AUS_percentage = (AUS18 - AUS08) / AUS08 * 100;
    var AUS_absolute = AUS18 - AUS08;
    /*Die jeweiligen Inhalte werden bei Klick auf die zugehörigen Images in die HTML eingefügt*/
    function InteractiveData(regionname, region18, rel_region_ww, region_percentage, region_absolute) {
        document.querySelector('.region').innerHTML = regionname;
        document.querySelector('#absolute_2018').innerHTML = region18;
        document.querySelector('#relative_ww').innerHTML = rel_region_ww.toFixed(2) + "%";
        document.querySelector('#relativerate').innerHTML = region_percentage.toFixed(2) + "%";
        document.querySelector('#absoluterate').innerHTML = region_absolute.toFixed(2);
        document.querySelector('.chart').setAttribute('style', 'height:' + rel_region_ww + 'px');
    }
    /*Die Images der Kontinenten horchen auf einen Klick, um die Inhalte darzustellen*/
    window.addEventListener('load', function () {
        document.querySelector('.africa').addEventListener('click', function () {
            InteractiveData(Africa, Africa18, rel_Africa_ww, Africa_percentage, Africa_absolute);
        });
        document.querySelector('.southamerica').addEventListener('click', function () {
            InteractiveData(SA, SA18, rel_SA_ww, SA_percentage, SA_absolute);
        });
        document.querySelector('.europe').addEventListener('click', function () {
            InteractiveData(EU, EU18, rel_EU_ww, EU_percentage, EU_absolute);
        });
        document.querySelector('.northamerica').addEventListener('click', function () {
            InteractiveData(NA, NA18, rel_NA_ww, NA_percentage, NA_absolute);
        });
        document.querySelector('.asia').addEventListener('click', function () {
            InteractiveData(Asia, Asia18, rel_Asia_ww, Asia_percentage, Asia_absolute);
        });
        document.querySelector('.australia').addEventListener('click', function () {
            InteractiveData(AUS, AUS18, rel_AUS_ww, AUS_percentage, AUS_absolute);
        });
    });
})(L06 || (L06 = {}));
//# sourceMappingURL=script.js.map