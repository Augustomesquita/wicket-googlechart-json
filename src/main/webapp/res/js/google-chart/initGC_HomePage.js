/* global google */

/**
 * JSON dos dados (normalmente será único para cada gráfico), 
 * porém neste exemplo o mesmo conjunto de dados JSON será utilizado em todos
 * os gráficos.
 */
var dataStringJson;
var timeToRefresh = 3000; // Define tempo para atualização dos gráficos. 

// Seters dos JSONs (único para cada json / gráfico).
function setDataStringJson(dataStringJson) {
    this.dataStringJson = dataStringJson;
}

// Realiza load das configuraçções básicas para uso do google chart.
google.charts.load('current', {packages: ['corechart']});

// Adiciona callback para gráficos (sempre único para cada gráfico).
google.charts.setOnLoadCallback(drawBarChart);
google.charts.setOnLoadCallback(drawAreaChart);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawLineChart);
google.charts.setOnLoadCallback(drawScatterChart);

// ------------------  Desenha gráfico de BARRA -------------------------------
function drawBarChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Nome');
    data.addColumn('number', 'Quantidade');

    var jsonData = JSON.parse(dataStringJson);
    for (var i = 0; i < jsonData.length; i++) {
        data.addRow([jsonData[i].nome, jsonData[i].quantidade]);
    }

    var options = {
        title: 'Wicket + Google Chart (Horizontal Bar)',
        chartArea: {width: '100%'},
        animation: {
            duration: 1000,
            easing: 'inAndOut',
            startup: true
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar_chart_div'));
    chart.draw(data, options);

    // Atualiza dados (JSON) de drawBasic (gráfico) e redesenha o mesmo gráfico.
    function updateDrawBarChart() {
        var newJsonData = JSON.parse(dataStringJson);

        // Remove linhas que estejam sobrando
        if (data.hc.length > newJsonData.length) {
            data.removeRows(0, data.hc.length - newJsonData.length);
        }

        // Adiciona novas linhas caso estejam faltando
        if (data.hc.length < newJsonData.length) {
            data.addRows(newJsonData.length - data.hc.length);
        }

        // Atualiza valores das linhas do gráfico.
        for (var i = 0; i < newJsonData.length; i++) {
            data.setValue(i, 0, newJsonData[i].nome);
            data.setValue(i, 1, newJsonData[i].quantidade);
        }

        // Desenha gráfico com dados atualizados.
        chart.draw(data, options);
    }

    setInterval(updateDrawBarChart, timeToRefresh); // Cria uma espécie de ajax 
    // interno que a cada 3 
    // segundos executa a função
    // passada.
}


// ------------------- Desenha gráfico de ÁREA --------------------------------
function drawAreaChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Nome');
    data.addColumn('number', 'Quantidade');

    var jsonData = JSON.parse(dataStringJson);
    for (var i = 0; i < jsonData.length; i++) {
        data.addRow([jsonData[i].nome, jsonData[i].quantidade]);
    }

    var options = {
        title: 'Wicket + Google Chart (Area)',
        chartArea: {width: '100%'},
        animation: {
            duration: 1000,
            easing: 'inAndOut',
            startup: true
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area_chart_div'));
    chart.draw(data, options);

    // Atualiza dados (JSON) de drawBasic (gráfico) e redesenha o mesmo gráfico.
    function updateDrawAreaChart() {
        var newJsonData = JSON.parse(dataStringJson);

        // Remove linhas que estejam sobrando
        if (data.hc.length > newJsonData.length) {
            data.removeRows(0, data.hc.length - newJsonData.length);
        }

        // Adiciona novas linhas caso estejam faltando
        if (data.hc.length < newJsonData.length) {
            data.addRows(newJsonData.length - data.hc.length);
        }

        // Atualiza valores das linhas do gráfico.
        for (var i = 0; i < newJsonData.length; i++) {
            data.setValue(i, 0, newJsonData[i].nome);
            data.setValue(i, 1, newJsonData[i].quantidade);
        }

        // Desenha gráfico com dados atualizados.
        chart.draw(data, options);
    }

    setInterval(updateDrawAreaChart, timeToRefresh); // Cria uma espécie de ajax 
    // interno que a cada 3 
    // segundos executa a função
    // passada.
}


// ------------------- Desenha gráfico de PIZZA --------------------------------
function drawPieChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Nome');
    data.addColumn('number', 'Quantidade');

    var jsonData = JSON.parse(dataStringJson);
    for (var i = 0; i < jsonData.length; i++) {
        data.addRow([jsonData[i].nome, jsonData[i].quantidade]);
    }

    var options = {
        title: 'Wicket + Google Chart (Pie)',
        chartArea: {width: '100%'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
    chart.draw(data, options);

    // Atualiza dados (JSON) de drawBasic (gráfico) e redesenha o mesmo gráfico.
    function updateDrawAreaChart() {
        var newJsonData = JSON.parse(dataStringJson);

        // Remove linhas que estejam sobrando
        if (data.hc.length > newJsonData.length) {
            data.removeRows(0, data.hc.length - newJsonData.length);
        }

        // Adiciona novas linhas caso estejam faltando
        if (data.hc.length < newJsonData.length) {
            data.addRows(newJsonData.length - data.hc.length);
        }

        // Atualiza valores das linhas do gráfico.
        for (var i = 0; i < newJsonData.length; i++) {
            data.setValue(i, 0, newJsonData[i].nome);
            data.setValue(i, 1, newJsonData[i].quantidade);
        }

        // Desenha gráfico com dados atualizados.
        chart.draw(data, options);
    }

    setInterval(updateDrawAreaChart, timeToRefresh); // Cria uma espécie de ajax 
    // interno que a cada 3 
    // segundos executa a função
    // passada.
}


// ------------------- Desenha gráfico de LINHA --------------------------------
function drawLineChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Nome');
    data.addColumn('number', 'Quantidade');

    var jsonData = JSON.parse(dataStringJson);
    for (var i = 0; i < jsonData.length; i++) {
        data.addRow([jsonData[i].nome, jsonData[i].quantidade]);
    }

    var options = {
        title: 'Wicket + Google Chart (Line)',
        chartArea: {width: '100%'},
        animation: {
            duration: 1000,
            easing: 'inAndOut',
            startup: true
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('line_chart_div'));
    chart.draw(data, options);

    // Atualiza dados (JSON) de drawBasic (gráfico) e redesenha o mesmo gráfico.
    function updateDrawAreaChart() {
        var newJsonData = JSON.parse(dataStringJson);

        // Remove linhas que estejam sobrando
        if (data.hc.length > newJsonData.length) {
            data.removeRows(0, data.hc.length - newJsonData.length);
        }

        // Adiciona novas linhas caso estejam faltando
        if (data.hc.length < newJsonData.length) {
            data.addRows(newJsonData.length - data.hc.length);
        }

        // Atualiza valores das linhas do gráfico.
        for (var i = 0; i < newJsonData.length; i++) {
            data.setValue(i, 0, newJsonData[i].nome);
            data.setValue(i, 1, newJsonData[i].quantidade);
        }

        // Desenha gráfico com dados atualizados.
        chart.draw(data, options);
    }

    setInterval(updateDrawAreaChart, timeToRefresh); // Cria uma espécie de ajax 
    // interno que a cada 3 
    // segundos executa a função
    // passada.
}


// ------------------- Desenha gráfico de SCATTER --------------------------------
function drawScatterChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Outra');
    data.addColumn('number', 'Quantidade');

    var jsonData = JSON.parse(dataStringJson);
    for (var i = 0; i < jsonData.length; i++) {
        data.addRow([jsonData[i].quantidade, jsonData[i].quantidade]);
    }

    var options = {
        title: 'Wicket + Google Chart (Scatter)',
        chartArea: {width: '100%'},
        animation: {
            duration: 1000,
            easing: 'inAndOut',
            startup: true
        }
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('scatter_chart_div'));
    chart.draw(data, options);

    // Atualiza dados (JSON) de drawBasic (gráfico) e redesenha o mesmo gráfico.
    function updateDrawAreaChart() {
        var newJsonData = JSON.parse(dataStringJson);

        // Remove linhas que estejam sobrando
        if (data.hc.length > newJsonData.length) {
            data.removeRows(0, data.hc.length - newJsonData.length);
        }

        // Adiciona novas linhas caso estejam faltando
        if (data.hc.length < newJsonData.length) {
            data.addRows(newJsonData.length - data.hc.length);
        }

        // Atualiza valores das linhas do gráfico.
        for (var i = 0; i < newJsonData.length; i++) {
            data.setValue(i, 0, newJsonData[i].quantidade);
            data.setValue(i, 1, newJsonData[i].quantidade);
        }

        // Desenha gráfico com dados atualizados.
        chart.draw(data, options);
    }

    setInterval(updateDrawAreaChart, timeToRefresh); // Cria uma espécie de ajax 
    // interno que a cada 3 
    // segundos executa a função
    // passada.
}