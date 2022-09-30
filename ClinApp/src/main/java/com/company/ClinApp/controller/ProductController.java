package com.company.ClinApp.controller;


import com.company.ClinApp.entity.Product;
import com.company.ClinApp.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/products")
public class ProductController {
    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/{productId}")
    public Product getProduct(@PathVariable int productId){
        Optional<Product> optional= productService.getProduct(productId);
        if (optional.isPresent())
            return optional.get();
        else return null;
    }

    @PostMapping
    public Product save(@RequestBody Product product){
        return productService.save(product);
    }


    @DeleteMapping("/{productId}")
    public String delete(@PathVariable int productId){
        return productService.delete(productId);
    }


    @PutMapping
    public Product update(@RequestBody Product product){
        return productService.update(product);
    }
}

