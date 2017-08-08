package com.augustomesquita;

import com.google.gson.Gson;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 *
 * @author augusto
 */
public class FooJsonProvider implements Serializable {

    public static String getJSONList(Integer optionsData) {

        final Random random =  new Random();
        final int MIN = 10;
        final int MAX = 50;

        List<Foo> dataTests = new ArrayList<>();

        if (null != optionsData) {
            switch (optionsData) {
                case 0:
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "augusto"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "fran"));
                    break;
                case 1:
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "eliane"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "augusto"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "silvana"));
                    break;
                case 2:
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "márcia"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "joão"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "joaquim"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "carolina"));
                    break;
                default:
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "marcia"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "carolina"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "joyce"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "marcos"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "roberto"));
                    dataTests.add(new Foo(random.nextInt(MAX + 1 - MIN) + MIN, "augusto"));
                    break;
            }
        }

        return new Gson().toJson(dataTests);
    }

}
