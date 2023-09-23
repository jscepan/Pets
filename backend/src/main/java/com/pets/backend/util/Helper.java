package com.pets.backend.util;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
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
}
