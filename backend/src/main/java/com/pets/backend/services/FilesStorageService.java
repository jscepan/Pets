package com.pets.backend.services;

import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;

import org.springframework.web.multipart.MultipartFile;

public interface FilesStorageService {

    public void init();

    public String save(MultipartFile file);

    public Resource load(String filename);

    public void delete(String filename);

    public Stream<Path> loadAll();

    public MultipartFile addWatermarkOnImage(MultipartFile file);
}
