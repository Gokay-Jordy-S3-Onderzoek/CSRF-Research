package com.example.csrfbackend.controllers;

import com.example.csrfbackend.csrfLogic;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api/sauce")
public class SauceController {
    csrfLogic logic = new csrfLogic();
    @PostMapping
    public ResponseEntity<?> GetAllSauce(HttpServletRequest request, @RequestBody String csrfValue) throws JSONException {
        JSONObject jsonObject= new JSONObject(csrfValue);
        System.out.println(csrfValue);
        if(logic.CheckCSRF(request,jsonObject.get("usertoken").toString())){
            return ResponseEntity.ok("BBQ,Chilisauce");
        } else {
            return  ResponseEntity.badRequest().body("CSRF Failed");
        }

    }

}
