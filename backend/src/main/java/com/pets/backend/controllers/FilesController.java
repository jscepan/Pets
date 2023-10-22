package com.pets.backend.controllers;

import com.pets.backend.models.BaseModel;
import com.pets.backend.models.FileInfo;
import com.pets.backend.models.Image;
import com.pets.backend.models.Image.ImageServer;
import com.pets.backend.repository.ImageRepository;
import com.pets.backend.services.FilesStorageService;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4444/")
@RestController
@RequestMapping("/api")
public class FilesController {

    @Autowired
    FilesStorageService storageService;
    @Autowired
    ImageRepository imageRepository;

    @PostMapping("/images/upload")
    public ResponseEntity<Image> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            String name = storageService.save(file);
            Image image = new Image();
            image.setName(name);
            image.setImageServer(ImageServer.main_file_system);
            image.setIndexOfImage(0);
            Image i = imageRepository.save(image);

            return ResponseEntity.status(HttpStatus.OK).body(i);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/images/indexes")
    public ResponseEntity<HttpStatus> updateImageIndexes(@RequestParam("indexes") Map<String, Integer> indexes) {
        for (Map.Entry<String, Integer> entry : indexes.entrySet()) {
            Optional<Image> imageData = imageRepository.findById(BaseModel.getIdFromOid(entry.getKey()));
            Image newImage = imageData.get();
            newImage.setIndexOfImage(entry.getValue());
            imageRepository.save(newImage);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT, HttpStatus.OK);
    }

    @PutMapping("/images/{oid}")
    public ResponseEntity<Image> updateImage(@PathVariable("oid") String oid, @RequestBody Image image) {
        Optional<Image> imageData = imageRepository.findById(BaseModel.getIdFromOid(oid));

        if (imageData.isPresent()) {
            return new ResponseEntity<>(imageRepository.save(imageData.get()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    @GetMapping("/files")
//    public ResponseEntity<List<FileInfo>> getListFiles() {
//        List<FileInfo> fileInfos = storageService.loadAll().map(path -> {
//            String filename = path.getFileName().toString();
//            String url = MvcUriComponentsBuilder
//                    .fromMethodName(FilesController.class, "getFile", path.getFileName().toString()).build().toString();
//
//            return new FileInfo(filename, url);
//        }).collect(Collectors.toList());
//
//        return ResponseEntity.status(HttpStatus.OK).body(fileInfos);
//    }
    @GetMapping("/images/{oid}")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable String oid) {
        Resource file = storageService.load(oid);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    @DeleteMapping("/images/{oid}")
    public ResponseEntity<HttpStatus> deleteCountry(@PathVariable("oid") String oid) {
        Optional<Image> imageData = imageRepository.findById(BaseModel.getIdFromOid(oid));
        try {
            storageService.delete(imageData.get().getName());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
