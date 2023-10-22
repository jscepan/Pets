package com.pets.backend.services;

import com.google.common.io.Files;
import com.pets.backend.util.Helper;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FilesStorageServiceImpl implements FilesStorageService {

    private final Path root = Paths.get("uploads");

    @Override
    public void init() {
        try {
            java.nio.file.Files.createDirectories(root);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }
    }

    @Override
    public String save(MultipartFile file) {
        String extension = Files.getFileExtension(file.getOriginalFilename());
        String url = (Helper.generateRandomString(50) + "." + extension);
        if (extension == null || extension.isEmpty()) {
            throw new RuntimeException("File extension error.");
        }
        try {
            if (!java.nio.file.Files.exists(this.root)) {
                java.nio.file.Files.createDirectories(this.root);
            }
            java.nio.file.Files.copy(file.getInputStream(), this.root.resolve(url));
        } catch (Exception e) {
            if (e instanceof FileAlreadyExistsException) {
                throw new RuntimeException("A file of that name already exists.");
            }

            throw new RuntimeException(e.getMessage());
        }
        return url;
    }

    @Override
    public Resource load(String filename) {
        try {
            Path file = root.resolve(filename);
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    @Override
    public void delete(String filename) {
        // TODO
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return java.nio.file.Files.walk(this.root, 1).filter(path -> !path.equals(this.root)).map(this.root::relativize);
        } catch (IOException e) {
            throw new RuntimeException("Could not load the files!");
        }
    }

    @Override
    public MultipartFile addWatermarkOnImage(MultipartFile file) {
        // TODO
        
        return file;
    }
}
