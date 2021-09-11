package com.example.backend.controller;


import com.example.backend.model.Item;
import com.example.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems() { return itemService.getItems();}

    @PostMapping("items")
    public String postItems(@RequestBody Item item){
        itemService.saveItem(item);
        return "Ese edukalt lisatud: " +item.getName();
    }

    // tehke serverile restart
    // localhost:8080/items


    //veel tuleb:
    //delete päringu
    // edit päringu
    // wiew one item päringu

    // andmebaas kahe nädala pärast

    // kodus teha samad asjad  kategooria osas
}


