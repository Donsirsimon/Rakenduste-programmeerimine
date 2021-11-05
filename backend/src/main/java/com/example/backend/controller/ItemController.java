package com.example.backend.controller;


import com.example.backend.model.Item;
import com.example.backend.service.ItemService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems() { return itemService.getItems();}

    @PostMapping("items")
    public void postItems(@RequestBody Item item){
        itemService.saveItem(item);
        //return "Ese edukalt lisatud: " +item.getName();
    }
    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id){

        itemService.deleteItem(id);

        return itemService.getItems();
    }

    @ApiOperation("API otspunkt eseme muutmiseks, alati sata kaasa ID")
    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item) {
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getoneItem(id);
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


