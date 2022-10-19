package com.example.csrfbackend;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.net.http.HttpRequest;
import java.util.Arrays;
import java.util.Optional;

public class csrfLogic {

    public boolean CheckCSRF(HttpServletRequest request, String requestValue){
            Optional<String> cookieValue = Arrays.stream(request.getCookies())
                    .filter(cookie->"USERTOKEN".equals(cookie.getName()))
                    .map(Cookie::getValue)
                    .findAny();
            System.out.println("COOKIES:");
            System.out.println(cookieValue);
            if(cookieValue.get() != null){
                if(cookieValue.get().equals(requestValue)){
                    System.out.println(cookieValue.get());
                    return true;
                }

            }
        return false;
    }

}
