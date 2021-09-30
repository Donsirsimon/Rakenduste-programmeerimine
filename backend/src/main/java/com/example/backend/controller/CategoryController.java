package com.example.backend.controller;


import com.example.backend.model.Category;
import com.example.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategories() { return categoryService.getCategories();}

    @PostMapping("categories")
    public String postCategories(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "Kategooria edukalt lisatud: " +category.getName();
    }

    // tehke serverile restart
    // localhost:8080/items


    //veel tuleb:
    //delete päringu
    // edit päringu
    // wiew one item päring

    // andmebaas kahe nädala pärast

    // kodus teha samad asjad  kategooria osas
}


