package com.augustomesquita;

import java.util.Random;
import org.apache.wicket.Component;
import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.AjaxSelfUpdatingTimerBehavior;
import org.apache.wicket.ajax.attributes.AjaxCallListener;
import org.apache.wicket.ajax.attributes.AjaxRequestAttributes;
import org.apache.wicket.markup.head.IHeaderResponse;
import org.apache.wicket.markup.head.OnDomReadyHeaderItem;
import org.apache.wicket.markup.html.WebMarkupContainer;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.util.time.Duration;

public class HomePage extends WebPage {

    private String fooJsonList;
    private WebMarkupContainer ajaxToUpdateJSON;

    private Random random;

    public HomePage() {
        initVariables();
        initComponents();
    }

    private void initComponents() {
        ajaxToUpdateJSON = new WebMarkupContainer("ajaxToUpdateJSON");
        ajaxToUpdateJSON.add(new AjaxSelfUpdatingTimerBehavior(Duration.seconds(3)) {
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

            @Override
            protected void onPostProcessTarget(AjaxRequestTarget target) {
                updateData();
            }
        });
        add(ajaxToUpdateJSON);
    }

    private void initVariables() {
        this.random = new Random();
        fooJsonList = FooJsonProvider.getJSONList(random.nextInt(3 + 1 - 0) + 0);
    }

    @Override
    public void renderHead(IHeaderResponse response) {
        response.render(OnDomReadyHeaderItem.forScript("setDataStringJson('" + fooJsonList + "')"));
    }

    private void updateData() {
        fooJsonList = FooJsonProvider.getJSONList(random.nextInt(3 + 1 - 0) + 0);
    }
}
