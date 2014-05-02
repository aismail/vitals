$.get('../2014_march_steps.csv', function(data) {
    var lines = data.split('\n');

    window.bodymedia = [];
    window.jawbone = [];
    window.fitbit = [];

    $.each(lines, function(lineNo, line) {
        var items = line.split(',');
        if(lineNo>0)
        {
            window.bodymedia.push(parseInt(items[2]));
            window.jawbone.push(parseInt(items[3]));
            window.fitbit.push(parseInt(items[4]));
        }
    });

    $(function () {
        $('#step-graphs').highcharts({
            chart: {
                zoomType: 'x',
                spacingRight: 20,
                type: 'column'
            },
            xAxis: {
                type: 'datetime',
                maxZoom: 14 * 24 * 3600000, // fourteen days
            },
            yAxis: {
                title: {
                    text: 'Steps Number'
                }
            },
            series: [{
                name: 'BodyMedia',
                pointInterval: 60 * 60 * 1000,
                pointStart: Date.UTC(2014, 02, 01),
                data: window.bodymedia.slice(0, 744)
            },
            {
                name: 'Jawbone',
                pointInterval: 60 * 60 * 1000,
                pointStart: Date.UTC(2014, 02, 01),
                data: window.jawbone.slice(0, 744)
            },
            {
                name: 'FitBit',
                pointInterval: 60 * 60 * 1000,
                pointStart: Date.UTC(2014, 02, 01),
                data: window.fitbit.slice(0, 744)
            }]
        });
    });

});