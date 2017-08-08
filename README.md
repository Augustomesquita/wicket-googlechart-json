# Wicket + Googlechart (Dinâmico) + Json
Este pequeno exemplo tem como propósito explorar a utilização do framework Wicket (7.7.0 u 7x) junto com a API GoogleCharts para criação e utilização de gráficos que se modificam ao longo do tempo dinâmicamente.


# Fluxo da aplicação

  - Os dados são montados no server-side e distribuídos no formato JSON pela classe 'FooJsonProvider' para que a API possa realizar o consumo dos mesmos.
  - A atualização e envio dos dados são realizados através de eventos AJAX oferecido pelo framework Wicket.
  - O evento AJAX está configurado para ocorrer por tempo. Atualmente o AJAX ocorre a cada 3 segundos.
  - Quando o AJAX ocorre é realizado a atualização dos dados através do método 'updateData()' como mostrado abaixo: 
```java
    @Override
    protected void onPostProcessTarget(AjaxRequestTarget target) {
        updateData();
    }
```
Após a chamada AJAX acontecer, caso seu resultado seja do tipo SUCESSO, o seguinte trecho do código é invocado: 
```java
    @Override
    protected void updateAjaxAttributes(AjaxRequestAttributes attributes) {
        super.updateAjaxAttributes(attributes);
        attributes.getAjaxCallListeners().add(new AjaxCallListener() {
            @Override
            public CharSequence getSuccessHandler(Component component) {
                return "setDataStringJson('" + fooJsonList + "');";
            }
        });
    }
```
Observe que o método javascript 'setDataStringJson' está sendo chamado, passando como parâmetro  'fooJsonList', ou seja, os dados JSON que foram atualizados anteriormente.

O método javascript invocado não faz nada mais do que atualizar o json que está sendo utilizado pelos gráficos, como mostrado abaixo:
```javascript
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
```

Vale observar que as variáeis 'dataStringJson' e 'timeToRefresh' são globais, ou seja, valem para todo o arquivo javascript. O código responsável por realizar a "rotina" de "leitura" desta variável está presente neste mesmo arquivo em todas as funções que "desenham" gráficos. 

Segue um exemplo de definição de rotina:
```javascript
setInterval(updateDrawAreaChart, timeToRefresh);

// Estamos utilizando aqui a variável global timeToRefresh para definir o tempo em milisegundos em que a função 'updateDrawAreaChart' será chamada.
```

Segue exemplo de atualização dos dados de um gráfico. Observe que o controle de adição ou remoção de novos registros já está sendo realizado.
```javascript
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
```

