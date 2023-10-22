package com.pets.backend.util;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Random;
import org.slf4j.LoggerFactory;

public class Helper {

    public static String readFromFile(String filePath) {
        BufferedReader reader = null;
        String data = "";
        try {
            FileInputStream fileInputStream = new FileInputStream(filePath);
            reader = new BufferedReader(new InputStreamReader(fileInputStream, StandardCharsets.UTF_8));
            String thisLine = null;
            while ((thisLine = reader.readLine()) != null) {
                data += thisLine;
            }
            reader.close();
        } catch (FileNotFoundException ex) {
            LoggerFactory.getLogger(Helper.class).error("", ex);
        } catch (IOException ex) {
            LoggerFactory.getLogger(Helper.class).error("", ex);
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException ex) {
                LoggerFactory.getLogger(Helper.class).error("", ex);
            }
        }
        return data;
    }

    public static String generateRandomString(int n) {
        byte[] array = new byte[256];
        new Random().nextBytes(array);
        String randomString = new String(array, Charset.forName("UTF-8"));
        StringBuilder r = new StringBuilder();
        for (int k = 0; k < randomString.length(); k++) {
            char ch = randomString.charAt(k);
            if (((ch >= 'a' && ch <= 'z')
                    || (ch >= 'A' && ch <= 'Z')
                    || (ch >= '0' && ch <= '9'))
                    && (n > 0)) {
                r.append(ch);
                n--;
            }
        }
        return r.toString();
    }
}
