$.get('../2014_march_sleep.csv', function(data) {
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
        $('#bodymedia-graph').highcharts({
            chart: {
                zoomType: 'x',
                spacingRight: 20
            },
            title: {
                text: 'BodyMedia sleep intervals (March 2014)'
            },
            xAxis: {
                type: 'datetime',
                maxZoom: 14 * 24 * 3600000, // fourteen days
                title: {
                    text: null
                }
            },
            yAxis: {
                title: {
                    text: 'Slept during that minute (0/1)'
                }
            },
            tooltip: {
                shared: true
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    lineWidth: 1,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Slept (0/1)',
                pointInterval: 60 * 1000,
                pointStart: Date.UTC(2014, 02, 01),
                data: window.bodymedia.slice(0, 44580)
            }]
        });
    });

    $(function () {
        $('#jawbone-graph').highcharts({
            chart: {
                zoomType: 'x',
                spacingRight: 20
            },
            title: {
                text: 'Jawbone sleep intervals (March 2014)'
            },
            xAxis: {
                type: 'datetime',
                maxZoom: 14 * 24 * 3600000, // fourteen days
                title: {
                    text: null
                }
            },
            yAxis: {
                title: {
                    text: 'Slept during that minute (0/1)'
                }
            },
            tooltip: {
                shared: true
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    lineWidth: 1,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Slept (0/1)',
                pointInterval: 60 * 1000,
                pointStart: Date.UTC(2014, 02, 01),
                data: window.jawbone.slice(0, 44580)
            }]
        });
    });

    $(function () {
        $('#fitbit-graph').highcharts({
            chart: {
                zoomType: 'x',
                spacingRight: 20
            },
            title: {
                text: 'FitBit sleep intervals (March 2014)'
            },
            xAxis: {
                type: 'datetime',
                maxZoom: 14 * 24 * 3600000, // fourteen days
                title: {
                    text: null
                }
            },
            yAxis: {
                title: {
                    text: 'Slept during that minute (0/1)'
                }
            },
            tooltip: {
                shared: true
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    lineWidth: 1,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Slept (0/1)',
                pointInterval: 60 * 1000,
                pointStart: Date.UTC(2014, 02, 01),
                data: window.fitbit.slice(0, 44580)
            }]
        });
    });

});